import { Button, FormControl, FormLabel, Input } from "~/components";
import { configMeta, configStyle } from "~/configs";
import { subscribeToConvertKitBrowser } from "~/features";
import { useEffect, useForm, useNotification, useState } from "~/hooks";
import { sleep } from "~/utils";

/**
 * Footer Complex Form Subscribe
 *
 * For now use react-hook-form, not Remix Form
 * Because this will be used in all routes
 * Also need client-side toast notification
 * Still looking a better way
 */

export const FooterComplexFormSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const notify = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await sleep(1);

      console.log(data);

      const response = await subscribeToConvertKitBrowser({
        email: data.email,
        firstName: data.firstName,
      });

      if (!response) {
        throw new Error("Failed to subscribe");
      }

      console.log(response);

      notify({
        title: "Subscribed!",
        description: "Your email is now subscribed.",
        status: "success",
        position: configStyle.notification.position,
      });
    } catch (error) {
      console.error(error);
      notify({
        title: "Error",
        description: JSON.stringify(error),
        status: "error",
        position: configStyle.notification.position,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errors.email && errors.email.type === "required") {
      notify({
        title: "Error",
        description: "Email address is required.",
        status: "error",
        position: configStyle.notification.position,
      });
    }
  }, [errors]);

  return (
    <>
      <div className="col-span-2 space-y-2">
        <h2 className="text-2xl font-bold">Get some updates</h2>
        <p>{configMeta.description}</p>
      </div>

      <div className="col-span-2 sm:col-span-3 lg:flex lg:items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px]"
        >
          <div className="flex gap-2 sm:items-center">
            <FormControl invalid={Boolean(errors.email)}>
              <FormLabel htmlFor="firstName" className="sr-only">
                Your Name
              </FormLabel>
              <Input
                {...register("firstName", { required: true })}
                name="firstName"
                type="text"
                id="firstName"
                placeholder="Your name"
                size="lg"
              />
            </FormControl>

            <FormControl invalid={Boolean(errors.email)}>
              <FormLabel htmlFor="email" className="sr-only">
                Your Email
              </FormLabel>
              <Input
                {...register("email", { required: true })}
                name="email"
                type="email"
                id="email"
                placeholder="Your email address"
                size="lg"
              />
            </FormControl>

            <Button
              type="submit"
              size="lg"
              variant="solid"
              color="primary"
              loading={loading}
              loadingText="Subscribing"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

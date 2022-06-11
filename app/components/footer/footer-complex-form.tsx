import { Anchor, Button, FormControl, FormLabel, Input } from "~/components";
import { configMeta, configStyle } from "~/configs";
import { convertkitSubscribeClient } from "~/features";
import { useEffect, useForm, useNotification, useState } from "~/hooks";

/**
 * Footer Complex Form Subscribe
 *
 * This is using React Hook Form, not Remix Form, as an example
 * Because this will be used in all routes
 * Also need client-side toast notification
 * Still looking a better way if will be using Remix Form
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

      const { email, firstName } = data;
      const response = await convertkitSubscribeClient({ email, firstName });

      if (!response) {
        throw new Error("Failed to subscribe");
      }

      notify({
        title: "Subscribed!",
        description: `Thank you ${firstName}, ${email} is subscribed! Please check your inbox.`,
        status: "success",
        position: configStyle.notification.position,
      });
    } catch (error: any) {
      console.error(error);
      notify({
        title: "Error",
        description: JSON.stringify(error.message),
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
  }, [errors, notify]);

  return (
    <>
      <div className="col-span-2 space-y-2">
        <h2 className="m-0 text-2xl font-bold">Get some updates</h2>
        <p className="max-w-[53ch]">
          {configMeta.description} made by{" "}
          <Anchor className="whitespace-nowrap" href={configMeta.author.url}>
            {configMeta.author.name}
          </Anchor>
        </p>
      </div>

      <div className="col-span-2 sm:col-span-3 lg:flex lg:items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[300px] sm:max-w-[500px] lg:max-w-none"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <FormControl invalid={Boolean(errors.email)} className="flex-[2]">
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

            <FormControl invalid={Boolean(errors.email)} className="flex-[3]">
              <FormLabel htmlFor="email" className="sr-only">
                Your Email
              </FormLabel>
              <Input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="youremail@address.com"
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

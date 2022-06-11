import { Form } from "@remix-run/react";

import {
  Alert,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from "~/components";

/**
 * Subscribe Form
 * Using native browser form behavior with Remix Form component
 */

interface PrivateSaleFormProps {
  transition: any;
  actionData: any;
}

export const SubscribeForm = ({
  transition,
  actionData,
}: PrivateSaleFormProps) => {
  const isLoading = transition.state === "submitting";
  const buttonSubmitText = isLoading ? "Subscribing..." : "Subscribe";

  const defaultPlaceholderText = {
    firstName: "Miles Tails Prower",
    email: "tails@tailwind.run",
  };

  const defaultActionText = {
    success: "Thank you for subscribing. Please check your inbox.",
    error: "Sorry something went wrong. Please try again.",
  };

  return (
    <div className="flex w-full justify-center">
      <Form method="post" className="w-full space-y-5 xs:max-w-xs">
        <div className="space-y-5">
          <FormControl id="name">
            <FormLabel>
              Your name:{" "}
              {actionData?.errors?.firstName && (
                <span className="text-error-500">
                  {actionData.errors.firstName}
                </span>
              )}
            </FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder={defaultPlaceholderText.firstName}
              size="lg"
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>
              Email address:{" "}
              {actionData?.errors?.email && (
                <span className="text-error-500">
                  {actionData.errors.email}
                </span>
              )}
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder={defaultPlaceholderText.email}
              size="lg"
            />
            <FormHelperText>
              <span>We'll never share your email. Promise :)</span>
            </FormHelperText>
          </FormControl>
        </div>

        <div className="space-y-5">
          <Button
            className="w-full"
            type="submit"
            variant="solid"
            color="primary"
            size="lg"
            loading={isLoading}
            loadingText={buttonSubmitText}
          >
            {buttonSubmitText}
          </Button>

          {actionData?.error && (
            <Alert variant="subtle" color="error">
              {actionData.message ?? defaultActionText.error}
            </Alert>
          )}

          {actionData?.success && (
            <Alert variant="subtle" color="success">
              {actionData.message ?? defaultActionText.success}
            </Alert>
          )}
        </div>
      </Form>
    </div>
  );
};

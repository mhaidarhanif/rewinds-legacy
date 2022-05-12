import { Form } from '@remix-run/react';

import {
  Alert,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from '~/components';

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
  const isLoading = transition.state === 'submitting';
  const buttonSubmitText = isLoading ? 'Subscribing...' : 'Subscribe';

  const defaultPlaceholderText = {
    firstName: 'Miles Tails Prower',
    email: 'tails@tailwind.run',
  };

  const defaultActionText = {
    success: 'Thank you for subscribing. Please check your inbox.',
    error: 'Sorry something went wrong. Please try again.',
  };

  return (
    <div className="flex justify-start">
      <Form method="post" className="w-full max-w-xs space-y-4">
        <div className="space-y-4">
          <FormControl id="email">
            <FormLabel>Your name</FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder={defaultPlaceholderText.firstName}
              size="lg"
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
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

        <div className="space-y-4">
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

          {actionData?.subscription && (
            <Alert variant="subtle" color="success">
              {actionData.message ?? defaultActionText.success}
            </Alert>
          )}

          {actionData?.error && (
            <Alert variant="subtle" color="error">
              {actionData.message ?? defaultActionText.error}
            </Alert>
          )}
        </div>
      </Form>
    </div>
  );
};

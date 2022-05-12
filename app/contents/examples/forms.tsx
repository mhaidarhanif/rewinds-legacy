import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  RequiredIndicator,
  Button,
  Select,
  H2,
} from '~/components';
import { configStyle } from '~/configs';
import { useState, useForm, useNotification } from '~/hooks';
import { sleep } from '~/utils';

/**
 * Example Forms
 * Using React Hook Form with regular form element
 */

export const ExampleForms = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const notify = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    await sleep(3000);
    notify({
      title: 'Created your account',
      description: 'Your email is now registered.',
      status: 'success',
      position: configStyle.notification.position,
    });
    setLoading(false);
  };

  return (
    <div>
      <div className="w-full max-w-xs">
        <H2>Forms</H2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormControl invalid={Boolean(errors.email)}>
            <FormLabel>Email address</FormLabel>
            <Input
              {...register('email', { required: true })}
              placeholder="yourname@email.com"
              size="lg"
            />
            <FormHelperText>
              <span>We'll never share your email. Promise :)</span>
              {errors.email && errors.email.type === 'required' && (
                <FormErrorMessage>Email is required</FormErrorMessage>
              )}
            </FormHelperText>
          </FormControl>

          <FormControl invalid={Boolean(errors.username)}>
            <FormLabel>
              Username
              <RequiredIndicator />
            </FormLabel>
            <Input
              {...register('username', { required: true })}
              placeholder="Enter your username"
              size="lg"
            />
            {errors.username && errors.username.type === 'required' && (
              <FormErrorMessage>Username is required</FormErrorMessage>
            )}
          </FormControl>

          <FormControl invalid={Boolean(errors.password)}>
            <FormLabel>
              Password
              <RequiredIndicator />
            </FormLabel>
            <Input.Group size="lg">
              <Input
                {...register('password', { required: true })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <Input.RightElement className="mr-1 w-16">
                <Button
                  type="button"
                  size="xs"
                  variant="solid"
                  onClick={handleToggleShowPassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </Input.RightElement>
            </Input.Group>
            {errors.password && errors.password.type === 'required' && (
              <FormErrorMessage>Password is required</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select {...register('gender')} size="lg">
              <option value="">Choose...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="solid"
            color="primary"
            size="lg"
            className="w-full"
            loading={loading}
            loadingText="Creating..."
          >
            Create new account
          </Button>
        </form>
      </div>
    </div>
  );
};

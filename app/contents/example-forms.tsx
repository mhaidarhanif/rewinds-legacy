import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  RequiredIndicator,
  Button,
  Select,
} from '@vechaiui/react';
import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { H2 } from '~/components';

interface ExampleFormsProps {}

export const ExampleForms: FunctionComponent<ExampleFormsProps> = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(data));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-xs">
      <H2>Forms</H2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormControl invalid={Boolean(errors.email)}>
          <FormLabel>Email address</FormLabel>
          <Input
            {...register('email', { required: true })}
            placeholder="yourname@email.com"
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
          <Input.Group>
            <Input
              className="pr-16"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              {...register('password', { required: true })}
            />
            <Input.RightElement className="w-16">
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
          <Select {...register('gender')}>
            <option value="other">other</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </Select>
        </FormControl>

        <Button type="submit" variant="solid" color="primary" loading={loading}>
          Sign up
        </Button>
      </form>
    </div>
  );
};

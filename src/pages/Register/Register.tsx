import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/users';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/context/auth-context';

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords should match',
    path: ['confirmPassword'],
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  });

  const authContext = useAuthContext()


  const { isPending, mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(`User ${data.user.email} registered successfully`);
    },
    onError: (error) => {
      console.log(error);
      toast.error(`Unable to register: ${error.message}`);
    },
  });

  const onSubmitHandler: SubmitHandler<RegisterForm> = (data) => {
    mutate({ email: data.email, password: data.password });
  };

  return (
    <section className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>Save your favorite heroes and keep your roster close.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmitHandler)}>
            <fieldset className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </fieldset>
            <div>
              <Button className="w-full" type="submit" disabled={isPending}>
                Sign Up
              </Button>
            </div>
          </form>
          <Button className="w-full" onClick={() => {
            authContext.loginContext('generatedEmaill@email.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhYmlvMkBlbWFpbC5jb20iLCJpYXQiOjE3OTA3NTM5MjksImV4cCI6MTc5MDc1NzUyOSwic3ViIjoiMiJ9.NZz4zmO4HzAbhoczsa-nzr2357vHxMr5j42FpOKMLj4')
          }}>
            Generate Token
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export { Register };

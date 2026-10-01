import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/users';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/context/auth-context';
import { useLocation, useNavigate } from 'react-router';

type LoginForm = {
  email: string;
  password: string;
};

const schema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const location = useLocation()
  const navigate = useNavigate()
  const { loginContext } = useAuthContext()

  const { isPending, mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: loginUser,
    onSuccess: (data) => {
        loginContext(data.user.email, data.accessToken);
        const nextPage = location.state?.from || '/profile';
        navigate(nextPage, { replace: true });
    },

    onError: (error) => {
      toast.error(`Unable to login: ${error.message}`);
    },
  });

  const onSubmitHandler: SubmitHandler<LoginForm> = (data) => {
    mutate({ email: data.email, password: data.password });
  };

  return (
    <section className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>Access your favorite heroes and manage your roster.</CardDescription>
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
            <div>
              <Button className="w-full" type="submit" disabled={isPending}>
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export { Login };

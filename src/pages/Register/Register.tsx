import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords should match",
    path: ["confirmPassword"],
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  });

  console.log('Incorrect formdata', errors)

  const onSubmitHandler: SubmitHandler<RegisterForm> = (data) => {
    console.log('Succes')
    console.log(data);
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
              <Input
                id="email"
                type="email"
                {...register('email')}
              />
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
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </fieldset>
            <div>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export { Register };

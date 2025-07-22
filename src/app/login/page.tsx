"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import useLogin from "@/hooks/auth/use-login";
import useLoginSchema from "@/lib/schemes/login-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginForm() {
  // Mutation
  const { login, isPending, error } = useLogin();

  // Schema
  const LoginSchema = useLoginSchema();

  type Inputs = z.infer<typeof LoginSchema>;

  const LoginForm = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  // Functions
  const SubmitLogin: SubmitHandler<Inputs> = (values) => {
    login({ email: values.email, password: values.password });
  };

  return (
    <div className=" grow">
      <h1 className="mb-5 text-2xl">Login form</h1>
      {/* Form */}
      <Form {...LoginForm}>
        <form onSubmit={LoginForm.handleSubmit(SubmitLogin)} className="gap-6">
          {/* Email */}
          <FormField
            control={LoginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormControl>
                  {/* Field */}
                  <Input
                    {...field}
                    placeholder="Email"
                    type="email"
                    className="rounded-2xl gap-2 w-full p-4 "
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={LoginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormControl>
                  {/* Field */}
                  <Input
                    {...field}
                    placeholder="Password"
                    type="password"
                    className="rounded-2xl gap-2 w-full p-4 "
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error message */}
          {error && <p className="text-red-500 my-2 text-center">{error}</p>}

          {/* Login button */}
          <Button
            className="w-full bg-black text-white text-base rounded-3xl font-medium  p-6 border border-black hover:bg-white hover:text-black "
            disabled={
              isPending || (!LoginForm.formState.isValid && LoginForm.formState.isSubmitted)
            }
          >
            {isPending ? <Spinner size="small" /> : "login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

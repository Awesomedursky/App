import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import InputField from "@/components/atoms/form/input";

import LoginSchema, { LoginSchemaType } from "@/schema/login.schema";

const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <InputField
          control={form.control}
          name="email"
          type="email"
          label="Email"
          placeholder="john.doe@example.com"
        />
        <InputField
          control={form.control}
          name="password"
          type="password"
          label="Password"
          placeholder="******************"
        />
        <Button type="submit" className="bg-primary text-white w-full mt-10 py-6">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

"use client";
import React from "react";
import {
  Button,
  Input,
  Surface,
  Form,
  Fieldset,
  TextField,
  Label,
  FieldError,
} from "@heroui/react";
import { GiPadlock } from "react-icons/gi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Surface className="mx-auto mt-16 max-w-md p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <GiPadlock size={28} />
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>
        <p className="text-sm text-neutral-500">
          Welcome back to MatchMe!
        </p>
      </div>

      {/* Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset className="flex flex-col gap-4">

          {/* Email */}
          <TextField isInvalid={!!errors.email}>
            <Label>Email</Label>
            <Input
              type="email"
              fullWidth
              {...register("email")}
            />
            {errors.email && (
              <FieldError>
                {errors.email.message}
              </FieldError>
            )}
          </TextField>

          {/* Password */}
          <TextField isInvalid={!!errors.password}>
            <Label>Password</Label>
            <Input
              type="password"
              fullWidth
              {...register("password")}
            />
            {errors.password && (
              <FieldError>
                {errors.password.message}
              </FieldError>
            )}
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isDisabled={!isValid}
          >
            Login
          </Button>

          {/* Forgot password */}
          <div className="text-center text-sm hover:underline">
            <Link href="/forgot-password">
              Forgot password?
            </Link>
          </div>

        </Fieldset>
      </Form>
    </Surface>
  );
}
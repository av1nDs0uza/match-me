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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Surface className="mx-auto mt-16 max-w-md p-6">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">Register</h1>
        <p className="text-sm text-neutral-500">
          Create your MatchMe account
        </p>
      </div>

      {/* Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset className="flex flex-col gap-4">

          {/* Name */}
          <TextField isInvalid={!!errors.name}>
            <Label>Name</Label>
            <Input {...register("name")} />
            {errors.name && (
              <FieldError>{errors.name.message}</FieldError>
            )}
          </TextField>

          {/* Email */}
          <TextField isInvalid={!!errors.email}>
            <Label>Email</Label>
            <Input type="email" {...register("email")} />
            {errors.email && (
              <FieldError>{errors.email.message}</FieldError>
            )}
          </TextField>

          {/* Phone */}
          <TextField isInvalid={!!errors.phoneNumber}>
            <Label>Phone Number</Label>
            <Input type="tel" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <FieldError>{errors.phoneNumber.message}</FieldError>
            )}
          </TextField>

          {/* Password */}
          <TextField isInvalid={!!errors.password}>
            <Label>Password</Label>
            <Input type="password" {...register("password")} />
            {errors.password && (
              <FieldError>{errors.password.message}</FieldError>
            )}
          </TextField>

          {/* Confirm Password */}
          <TextField isInvalid={!!errors.confirmPassword}>
            <Label>Confirm Password</Label>
            <Input type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <FieldError>
                {errors.confirmPassword.message}
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
            Register
          </Button>

          {/* Login link */}
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </div>

        </Fieldset>
      </Form>
    </Surface>
  );
}
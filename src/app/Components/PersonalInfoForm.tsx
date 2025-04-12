"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "./validation/validationSchema";

type PersonalInfoData = {
  fullName: string;
  email: string;
  phone: string;
};

interface PersonalInfoFormProps {
  onSubmit: (data: PersonalInfoData) => void;
  defaultValues: PersonalInfoData;
}

export default function PersonalInfoForm({
  onSubmit,
  defaultValues,
}: PersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });

  return (
    <div className="max-w-md mx-auto dark:bg-dark-card shadow-lg rounded-lg p-6 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm md:text-lg font-medium">Full Name :</label>
          <input
            {...register("fullName")}
            className="mt-1 block w-full rounded-md border-2 border-white text-sm md:text-lg dark:border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 dark:text-red-400 text-sm">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm md:text-lg font-medium">Email :</label>
          <input
            {...register("email")}
            className="mt-1 block w-full rounded-md border-2 border-white text-sm md:text-lg dark:border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 dark:text-red-400 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm md:text-lg font-medium">Phone Number :</label>
          <input
            {...register("phone")}
            className="mt-1 block w-full rounded-md border-2 border-white text-sm md:text-lg dark:border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 dark:text-red-400 text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold shadow-md transition duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
}
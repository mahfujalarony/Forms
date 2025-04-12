"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query"; 
import PersonalInfoForm from "./PersonalInfoForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import Success from "./Success";
import { ThemeToggle } from "./ThemeToggle";

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: number;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: 0,
    username: "",
    password: "",
    confirmPassword: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      console.log("Sending form data to the server:", data);
      return data;
    },
    onSuccess: (data) => {
      console.log("Form successfully submitted:", data);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
    },
  });

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (data: Partial<FormData>) => {
    const finalData = { ...formData, ...data };
    console.log("Form Data to submit:", finalData);
    mutation.mutate(finalData);
    setFormData(finalData);
    setStep(4);
  };

  return (
    <div className="border border-gray-400 max-w-md mx-auto mt-10 p-6  dark:bg-dark-card rounded-xl shadow-lg transition-all duration-300">
      {/* Theme Toggle Button */}
      <div className="flex justify-end mb-2">
        <ThemeToggle />
      </div>

      <h1 className="text-2xl font-bold mb-4 ">
        Multi-Step Form
      </h1>

      {step < 4 && (
        <div className="mb-4 text-gray-700 dark:text-gray-300">
          <p>Step {step} of 3</p>
        </div>
      )}

      {step === 1 && (
        <PersonalInfoForm
          onSubmit={handleNext}
          defaultValues={{
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
          }}
        />
      )}

      {step === 2 && (
        <>
          <AddressForm
            onSubmit={handleNext}
            defaultValues={{
              street: formData.street,
              city: formData.city,
              zip: formData.zip,
            }}
          />
          <button
            onClick={handlePrevious}
            className="mt-4 rounded-md bg-gray-500 hover:bg-gray-600 px-4 py-2 text-white transition"
          >
            Previous
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <AccountForm
            onSubmit={handleSubmit}
            defaultValues={{
              username: formData.username,
              password: formData.password,
              confirmPassword: formData.confirmPassword,
            }}
          />
          <button
            onClick={handlePrevious}
            className="mt-4 rounded-md bg-gray-500 hover:bg-gray-600 px-4 py-2 text-white transition"
          >
            Previous
          </button>
        </>
      )}

      {step === 4 && <Success data={formData} />}
    </div>
  );
}

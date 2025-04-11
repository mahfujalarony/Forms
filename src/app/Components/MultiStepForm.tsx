"use client";

import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import Success from "./Success";

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

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (data: Partial<FormData>) => {
    const finalData = { ...formData, ...data };
    console.log("Submitted Data:", finalData);
    setFormData(finalData); // ফাইনাল ডেটা সেট করা
    setStep(4); // Success স্টেপে যাওয়া
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
      {step < 4 && (
        <div className="mb-4">
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
            className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white"
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
            className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white"
          >
            Previous
          </button>
        </>
      )}
      {step === 4 && <Success data={formData} />}
    </div>
  );
}
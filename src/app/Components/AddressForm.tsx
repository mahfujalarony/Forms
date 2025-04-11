import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "./validation/validationSchema";

type AddressData = {
  street: string;
  city: string;
  zip: number;
};

interface AddressFormProps {
  onSubmit: (data: AddressData) => void;
  defaultValues: AddressData;
}

export default function AddressForm({ onSubmit, defaultValues }: AddressFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressData>({
    resolver: zodResolver(addressSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input
          {...register("street")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter your street address"
        />
        {errors.street && (
          <p className="text-red-500 text-sm">{errors.street.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          {...register("city")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter your city"
        />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Zip Code</label>
        <input
          {...register("zip")}
          type="number"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter your zip code"
        />
        {errors.zip && (
          <p className="text-red-500 text-sm">{errors.zip.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold shadow-md transition duration-300"
      >
        Next
      </button>
    </form>
  );
}

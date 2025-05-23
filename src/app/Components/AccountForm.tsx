import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "./validation/validationSchema";

type AccountData = {
  username: string;
  password: string;
  confirmPassword: string;
};

interface AccountFormProps {
  onSubmit: (data: AccountData) => void;
  defaultValues: AccountData;
}

export default function AccountForm({ onSubmit, defaultValues }: AccountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountData>({
    resolver: zodResolver(accountSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto dark:bg-dark-card shadow-lg rounded-lg p-6 space-y-4"
    >
      <div>
        <label className="text-sm md:text-lg font-medium">Username :</label>
        <input
          {...register("username")}
          className="mt-1 block w-full rounded-md border-2 border-white text-sm md:text-lg dark:border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter your username"
        />
        {errors.username && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-sm md:text-lg font-medium">Password :</label>
        <input
          type="password"
          {...register("password")}
          className="mt-1 block w-full rounded-md border-2 border-white text-sm md:text-lg dark:border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-sm md:text-lg font-medium">Confirm Password :</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="mt-1 block w-full rounded-md border-2 border-white text-sm md:text-lg dark:border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold shadow-md transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}
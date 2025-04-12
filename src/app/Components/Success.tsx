import { FormData } from "./MultiStepForm";
import { motion } from "framer-motion";

type SuccessProps = {
  data: FormData;
};

export default function Success({ data }: SuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4"
    >
      <div className="max-w-md mx-auto dark:bg-dark-card shadow-lg rounded-lg p-6 space-y-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <svg
              className="w-12 h-12 mx-auto text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Form Submitted Successfully!
          </h2>
          <h3 className="text-sm md:text-lg font-medium  mb-6">
            Summary of Your Data:
          </h3>
        </div>

        <div className="space-y-4 text-sm md:text-lg ">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Full Name :</span>
            <span>{data.fullName}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Email :</span>
            <span>{data.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Phone :</span>
            <span>{data.phone}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Street :</span>
            <span>{data.street}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">City :</span>
            <span>{data.city}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Zip :</span>
            <span>{data.zip}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Username :</span>
            <span>{data.username}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Password :</span>
            <span className="text-gray-500 dark:text-gray-400">••••••••</span>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/"
            className="inline-block w-full rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold shadow-md transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </motion.div>
  );
}
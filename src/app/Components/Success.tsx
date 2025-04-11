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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 md:p-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <svg
              className="w-16 h-16 mx-auto text-green-500 mb-4"
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

          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Form Submitted Successfully!
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
            Summary of Your Data:
          </h3>
        </div>

        <div className="space-y-4 max-w-md mx-auto text-gray-800">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Full Name:</span>
            <span>{data.fullName}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Email:</span>
            <span>{data.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Phone:</span>
            <span>{data.phone}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Street:</span>
            <span>{data.street}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">City:</span>
            <span>{data.city}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Zip:</span>
            <span>{data.zip}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Username:</span>
            <span>{data.username}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Password:</span>
            <span className="text-gray-500">••••••••</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </motion.div>
  );
}
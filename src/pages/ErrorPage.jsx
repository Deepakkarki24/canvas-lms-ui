import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <AlertCircle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ErrorPage;

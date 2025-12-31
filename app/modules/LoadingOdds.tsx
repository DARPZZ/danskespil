import React from "react";

interface LoadingOddsProps {
  message?: string;
}

const LoadingOdds: React.FC<LoadingOddsProps> = ({ message = "Indlæser odds…" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full animate-fadeIn">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
      <p className="text-xl font-semibold text-gray-700 animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default LoadingOdds;
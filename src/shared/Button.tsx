import React from 'react';

interface ButtonProps {
  label?: string; // Button text
  onClick?: () => void; // Button click handler
  loading?: boolean; // Is the button in a loading state?
  disabled?: boolean; // Is the button disabled?
}

// WARN: DONT USE THIS BUTTON, IT IS SUCKS, GENERATED FOR EXAMPLE
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      className={`flex items-center justify-center rounded-lg px-4 py-2 font-medium text-white transition-all ${disabled || loading ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;

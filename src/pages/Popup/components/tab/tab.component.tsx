import React from "react";

type Props = {
  label: string;
  isActive: boolean;
  onClick: () => any;
};

export const Tab: React.FC<Props> = ({ label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`capitalize w-full cursor-pointer px-2 pb-2 text-center text-base ${
        isActive
          ? "border-solid border-0 border-b-4 border-primary active text-black dark:text-white"
          : "text-gray-600 dark:text-gray-300"
      }`}
    >
      {label}
    </div>
  );
};

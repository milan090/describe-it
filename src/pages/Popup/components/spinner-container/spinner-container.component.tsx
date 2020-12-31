import React, { useEffect } from "react";
import { Spinner } from "../spinner/spinner.component";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const SpinnerContainer: React.FC<Props> = ({ isLoading, children }) => {
  useEffect(() => {
    console.log(isLoading ? "Loading" : "Done");
  });
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center justify-items-center align-middle">
          <Spinner />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

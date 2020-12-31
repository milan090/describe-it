import React from "react";

import "./spinner.styles.scss";

export const Spinner: React.FC = () => (
  <div className="py-28">
    <div className="loader ease-linear rounded-full border-4 border-solid border-t-8 border-gray-200 h-12 w-12"></div>
  </div>
);

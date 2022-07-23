import React from "react";

export interface PassProps {
  passStyle?: String;
}

export const PASSWORD_STYLES: PassStyles = {
  primary:
    "text-neutral-700 leading-tight focus:outline-none focus:shadow-outline",
};

const Password: React.FC<PassProps> = ({
  passStyle = PASSWORD_STYLES.primary,
}) => {
  return (
    <input
      type="password"
      className={`appearance-none border rounded w-full py-2 px-4 ${passStyle} `}
    />
  );
};

interface PassStyles {
  primary: String;
}

export default Password;

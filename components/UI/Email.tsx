import React from "react";

export interface EmailProps {
  emailStyle?: String;
}

export const EMAIL_STYLES: EmailStyles = {
  primary:
    "text-neutral-700 leading-tight ",
};

const Email: React.FC<EmailProps> = ({ emailStyle = EMAIL_STYLES.primary }) => {
  return (
    <input
      type="email"
      className={`focus:outline-none focus:shadow-outline appearance-none border rounded w-full py-2 px-4 ${emailStyle} `}
    />
  );
};

interface EmailStyles {
  primary: String;
}

export default Email;

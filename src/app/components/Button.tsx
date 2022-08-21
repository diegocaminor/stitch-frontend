import React from "react";
interface Props {
  text: string;
  containerClassName: string;
  className: string;
  onClick?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({ text, containerClassName, className, onClick }: Props) => {
  return (
    <div className={`flex  ${containerClassName || ""}`}>
      <button className={`px-4 py-2 ${className || ""}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;

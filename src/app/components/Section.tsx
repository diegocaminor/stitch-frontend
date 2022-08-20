import React from "react";

interface Props {
  containerClassName: string;
  className?: string;
  children: JSX.Element;
}

const Section = ({ className, containerClassName, children }: Props) => {
  return (
    <div className={`flex flex-col ${containerClassName || ""}`}>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Section;

interface Props {
  text: string;
  className?: string;
}

const Caption = ({ text, className }: Props) => {
  return (
    <h4 className={`text-center text-base ${className || ""}`}>
      {text && text.toUpperCase()}
    </h4>
  );
};

export default Caption;

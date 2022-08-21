interface Props {
  text: string;
  colorWord: string;
  className?: string;
}

const Caption = ({ text, colorWord, className }: Props) => {
  return (
    <h2 className={`text-2xl font-bold ${className || ""}`}>
      {text && text}{" "}
      <span className="text-left text-transparent bg-clip-text bg-gradient-to-r from-purple to-green">
        {colorWord}
      </span>
    </h2>
  );
};

export default Caption;

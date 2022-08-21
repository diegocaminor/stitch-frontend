interface Props {
  text: string;
  className?: string;
}

const Title = ({ text, className }: Props) => {
  return <h1 className={`text-3xl font-bold ${className || ""}`}>{text}</h1>;
};

export default Title;

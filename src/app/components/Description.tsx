interface Props {
  text: string;
  className?: string;
}

const Description = ({ text, className }: Props) => {
  return <p className={className}>{text}</p>;
};

export default Description;

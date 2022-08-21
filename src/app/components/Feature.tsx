interface Props {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const Feature = ({ title, description, image, className }: Props) => {
  return (
    <div
      className={`flex flex-row mt-5 border border-white border-opacity-10 rounded-2xl py-5 px-5 ${
        className || ""
      }`}
    >
      <img
        src={image}
        className="px-2 bg-gradient-radial from-green via-purple to-purple text-sm rounded-full"
        alt="logo"
      />
      <div className="flex flex-col ml-5">
        <h3 className="text-white text-left text-xl">{title && title}</h3>
        <p className="text-white text-xs">{description && description}</p>
      </div>
    </div>
  );
};

export default Feature;

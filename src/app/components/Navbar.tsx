import stitchLogo from "assets/stitchLogo.svg";
import Button from "./Button";

interface INavbar {
  children: JSX.Element;
}

const Navbar = ({ children }: INavbar) => {
  return (
    <div className="bg-black h-8 grid gap-4 grid-cols-2">
      <img src={stitchLogo} className="py-2" alt="logo" />
      <Button
        text="Explore app"
        containerClassName="ml-auto"
        className="bg-white rounded-full button bg-gradient-to-r from-purple to-green text-sm "
      ></Button>
      {children}
    </div>
  );
};
export default Navbar;

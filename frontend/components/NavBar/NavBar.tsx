import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-10 right-10 z-50">
      <Button
        variant="outline"
        size="lg"
        className="rounded-full bg-card/80 backdrop-blur-md hover:bg-black hover:text-white text-lg font-bold px-8 h-12"
      >
        Sign In
      </Button>
    </div>
  );
};

export default Navbar;

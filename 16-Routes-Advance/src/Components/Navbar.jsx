import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-3 py-8 bg-cyan-600" >
      <h2 className="text-2xl font-bold">vijayCoder</h2>

      <div className="flex gap-9">
        <Link to="/" className="text-2xl font-bold hover:underline underline-offset-2">Home</Link>
        <Link to="/about" className="text-2xl font-bold hover:underline underline-offset-2">About</Link>
        <Link to="/contact" className="text-2xl font-bold hover:underline underline-offset-2">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
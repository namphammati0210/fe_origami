import Link from "./Link";
import pages from "../MenuData";
import { useSelector } from "react-redux";

const Navbar = () => {
  const loggedInUser = useSelector((state) => state.auth.email);
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div>Welcome {loggedInUser} </div>
      <div className="flex">
        {pages.map((page) => (
          <Link name={page.name} path={page.path} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

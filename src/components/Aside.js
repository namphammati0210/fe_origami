import Link from "./Link";
import pages from "../MenuData";

const Aside = () => {
  return (
    <div className="flex flex-col items-center">
      {pages.map((page) => (
        <Link name={page.name} path={page.path} />
      ))}
    </div>
  );
};

export default Aside;

import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/tuitPage"}>Tuit page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

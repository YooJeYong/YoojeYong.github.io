import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="lnb px-[20px] w-[100px]">
                <ul className="flex flex-col gap-[24px]">
                    <li>
                        <Link to="/1">메뉴 1번</Link>
                    </li>
                    <li>
                        <Link to="/2">메뉴 2번</Link>
                    </li>
                    <li>
                        <Link to="/3">메뉴 3번</Link>
                    </li>
                    <li>
                        <Link to="/4">메뉴 4번</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;

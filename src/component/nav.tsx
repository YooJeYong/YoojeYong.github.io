import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="lnb">
                <ul>
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

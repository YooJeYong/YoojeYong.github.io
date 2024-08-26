import Nav from "./nav";

function Content() {
    return (
        <>
            <main className="flex w-4/5 mx-auto py-[20px]">
                <Nav />
                <section className="container">
                    <ul className="box_article">
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>안녕하세용..</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>zz</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>zz</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>zz</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>zz</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>zz</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="tit">블로그 제목</span>
                                <span className="content">
                                    <span>zz</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Content;

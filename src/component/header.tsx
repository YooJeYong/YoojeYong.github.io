function Header() {
    return (
        <>
            <header className="header relative mx-auto p-[20px] w-4/5 border-b-2 border-solid bb-border text-left">
                <h1 className="flex items-center text-[20px] font-semibold">
                    <a href="https://github.com/YooJeYong">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3291/3291667.png"
                            className="w-[24px] h-[24px] mr-[8px]"
                            alt=""
                        />
                    </a>

                    <a href="https://yoojeyong.github.io/">블로그</a>
                </h1>
            </header>
        </>
    );
}

export default Header;

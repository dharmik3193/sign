const Header = () => {
    return (
        <>
            <div className="container">
                <nav className="primary-menu navbar navbar-expand-md bg-transparent border-bottom-0">
                    <div className="container position-relative row">
                        <div className="col-6">
                            {/* Logo */}
                            <a className="logo" href="/" title="Codesign">
                                {" "}
                                <img src="images/codesignlogodark.png" alt="Codesign" />{" "}
                            </a>
                            {/* Logo End */}
                        </div>
                        <div className="navbar-accordion px-0 col-6">
                            <button
                                className="navbar-toggler ms-auto"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#header-nav"
                            >
                                <span />
                                <span />
                                <span />
                            </button>
                            <div
                                id="header-nav"
                                className="collapse navbar-collapse justify-content-end"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="modal"
                                            data-bs-target="#about"
                                            href="#"
                                        >
                                            Courses We Offer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;
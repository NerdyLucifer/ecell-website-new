import { Discover, Initiatives, Learn, Connect, Incubators } from "./NavItems";
import { Startups,Contacts } from "./NavButtons";
import { SearchOffcanvas, Search } from "./NavSearch";
import { NavToggle } from "./NavToggle";
import { NavLogo } from "./NavLogo";
import Link from "next/link";
import Notification from "./Notification";
import NotificationOffCanvas from "./NotificationOffcanvas";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a>
              <NavLogo />
            </a>
          </Link>
          <NotificationOffCanvas />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Discover />
              <Initiatives />
              <Learn />
              <Incubators/>
              <Connect />
              {/* <form className="d-flex">
                <Search />
              </form> */}
              <div className="buttons">
                <Startups />
                {/* <Contacts /> */}
              </div>
              <Notification />
            </ul>
          </div>
          <NavToggle />
          {/* <SearchOffcanvas /> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;

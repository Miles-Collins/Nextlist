'use client'

import Container from "../Container";
import Categories from "../categories/Categories";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return ( <div className="fixed w-full z-10 shadow-sm">
    <div className="py-4 border-b-[1px] border-neutral-200">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu />
        </div>
      </Container>
    </div>
    <Categories />
  </div> );
}
 
export default Navbar;
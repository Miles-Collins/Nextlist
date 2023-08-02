'use client'

import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";


const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onSell = () => null
  const loginModal = useLoginModal()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onSell}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-300 hover:border-black hover:text-black transition cursor-pointer"
        >
          Sell your car
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[2px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition hover:bg-neutral-200 hover:border-black hover:text-black"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={undefined} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm bg-white">
          <div className="flex flex-col">
            <MenuItem onClick={() => {}} label="My favorites" />
            <MenuItem onClick={() => {}} label="My cars" />
            <MenuItem onClick={() => {}} label="Sell car" />
            <MenuItem onClick={() => {}} label="Logout" />
            <MenuItem onClick={loginModal.onOpen} label="Login" />
            <MenuItem onClick={() => {}} label="Sign Up" />
          </div>
        </div>
      )}
    </div>
  );
}
 
export default UserMenu;
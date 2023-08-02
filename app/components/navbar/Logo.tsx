'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter()
  return ( <Image onClick={() => router.push("/")} alt="Nextlist Logo" src={"/images/NextGurus.png"} className="hidden md:block cursor-pointer" height={200} width={200} /> );
}
 
export default Logo;
'use client'

import Image from "next/image";

const Avatar = () => {
    return ( 
        <Image height={30} width={30} src="/images/avatar.jpeg" alt="" className="rounded-full"  />
     );
}
 
export default Avatar;
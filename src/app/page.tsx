"use client";

import Image from "next/image";
import { Button } from '@heroui/react';
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      
      <h1 className="text-3xl"> hello world</h1>
      <Link href="/members">
      <Button
        color="primary"
        startContent={<FaRegSmile size={20}/>}
      >
      Click me!
     </Button>
      
      </Link>
      

      
    </div>
  );
}

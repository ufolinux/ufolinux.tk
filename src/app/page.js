"use client"
import Image from "next/image";
import HomePage from "./components/home/HomePage";
import {useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      {router.push("/Home")}
    </main>
  );
}

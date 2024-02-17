"use client"
import Image from "next/image";
import HomePage from "./components/home/HomePage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import {useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {
  // const router = useRouter();
  return (
    <main className="">
      <Navigation />
      <HomePage/>
      <Footer />
    </main>
  );
}

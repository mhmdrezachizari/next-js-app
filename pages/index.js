import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ProductNavbar from "@/components/ProductNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <ProductNavbar/>
    <h1 style={{color:"red", alignItems:"center"}}>
      salam man mhmdreachizari hastam
    </h1>
    </>
  );
}

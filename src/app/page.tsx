"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const [img, setImg] = useState('');

  const fetchCatImage = async () => {
    const response = await axios.get("https://aws.random.cat/meow");
    const imgPath = response.data.file;
    console.log(imgPath);
    setImg(imgPath);
  };

  return (
    <main className={styles.main}>
      <h1>猫画像アプリ</h1>
      <img src={img} alt="cat" width={500} height="auto" />
      <button onClick={fetchCatImage}>今日のヌコ</button>
    </main>
  );
}

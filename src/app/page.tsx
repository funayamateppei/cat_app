"use client";

import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ImageUrl {
  file: string,
}

export default function Home() {

  const [img, setImg] = useState("");

  useEffect()

  const fetchCatImage = async (): Promise<ImageUrl> => {
    const response = await axios.get("https://aws.random.cat/meow");
    console.log(response);
    const result = response.data;
    console.log(result);
    return result;
  };

  const handleClick = async () => {
    const src = await fetchCatImage()
    setImg(src.file);
  }

  return (
    <main className={styles.main}>
      <h1>猫画像アプリ</h1>
      <img src={img} alt="cat" width={500} height="auto" />
      <button onClick={handleClick}>今日のヌコ</button>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
    } else {
      try {
        const decodedToken = jwt.decode(token);
        setIsLoggedIn(decodedToken?.userId ? true : false);
      } catch {
        setIsLoggedIn(false);
      }
    }
  }, []);

  return (
    <div>Silahkan Code Tampilan Anda disini</div>
  );
}

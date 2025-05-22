"use client";

import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`);
        const data = await response.json();
        if (data.code === 200) {
          setNotes(data.data.notes);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwt.decode(token);
        setUserId(decoded.userId);
      } catch (error) {
        console.error("Token tidak valid:", error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div>Silahkan Buat Tampilan Untuk menampilkan seluruh Notes</div>
  );
};

export default NotesPage;

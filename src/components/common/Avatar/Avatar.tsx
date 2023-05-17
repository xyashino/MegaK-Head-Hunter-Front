import React from "react";
import classes from "./Avatar.module.css";
import img from "@assets/no-avatar.jpg";

interface AvatarProps {
  type?: "small" | "large";
  githubUsername?: string;
}

export const Avatar = ({ type = "small", githubUsername }: AvatarProps) => {
  const avatarType =
    type === "large" ? classes.img_avatar_large : classes.img_avatar_small;

  return (
    <>
      {githubUsername ? (
        <img
          className={avatarType}
          src={`https://github.com/${githubUsername}.png`}
          alt="Avatar kursanta - ustawione przez niego zdjęcie"
          draggable={false}
        />
      ) : (
        <img
          className={avatarType}
          src={img}
          alt="Domyślny avatar kursanta, który nie ma ustawionego zdjęcia"
          draggable={false}
        />
      )}
    </>
  );
};

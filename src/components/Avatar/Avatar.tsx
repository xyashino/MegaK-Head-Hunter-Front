import React from 'react';
import classes from "./Avatar.module.css";
import img from "@assets/no-avatar.jpg";

export enum size {
    Small,
    Large
}

export type AvatarProps = {
    type: size;
    githubUsername?: string;
}

export const Avatar = ({type, githubUsername}: AvatarProps) => {
    return (
        <>
            {
                githubUsername
                    ?
                    <div>
                        <img
                            className={type === size.Large ? classes.img_avatar_large : classes.img_avatar_small}
                            src={`https://github.com/${githubUsername}.png`}
                            alt="Avatar kursanta - ustawione przez niego zdjęcie"
                            draggable={false}
                        />
                    </div>
                    :
                    <div>
                        <img
                            className={type === size.Large ? classes.img_avatar_large : classes.img_avatar_small}
                            src={img}
                            alt="Domyślny avatar kursanta, który nie ma ustawionego zdjęcia"
                            draggable={false}/>
                    </div>
            }
        </>
    );
};

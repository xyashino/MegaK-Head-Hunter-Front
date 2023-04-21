import React from 'react';
import classes from "./Avatar.module.css";
import img from "@assets/no-avatar.jpg";

// W CSS są dwie klasy: img-avatar-small i img-avatar-large

// Trzeba zaimportować githubUsername z BE/formularza FE

const githubUsername = 'Ami777'; // to trzeba zastąpić githubUsername z BE/formularza FE

const link = `https://github.com/${githubUsername}.png`

export const Avatar = () => {
    return (
        <>
            {
                githubUsername
                    ?
                    <div>
                        <img
                            className={`${classes.img_avatar} ${classes.img_avatar_large}`}
                            src={link}
                            alt="Avatar kursanta - ustawione przez niego zdjęcie"
                            draggable={false}
                        />
                    </div>
                    :
                    <div>
                        <img
                            className={`${classes.img_avatar} ${classes.img_avatar_large}`}
                            src={img}
                            alt="Domyślny avatar kursanta, który nie ma ustawionego zdjęcia"
                            draggable={false}/>
                    </div>
            }
        </>
    );
};

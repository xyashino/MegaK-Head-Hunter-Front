import React from 'react';
import './Avatar.css';
import img from "@assets/no-avatar.jpg";

// W CSS są dwie klasy: img-avatar-small i img-avatar-large

// Trzeba zaimportować githubUsername z BE/formularza FE

const githubUsername = 'Ami777'; // to trzeba zastąpić githubUsername z BE/formularza FE

const link = `https://github.com/${githubUsername}.png`

export const Avatar = () => {
    return (
        <>
            {githubUsername ?
                <div className="div-avatar-wrapper">
                    <img className="img-avatar img-avatar-large"  src={link} alt="Avatar kursanta - ustawione przez niego zdjęcie"/>
                </div>
                :
                <div className="div-avatar-wrapper">
                    <img className="img-avatar img-avatar-large" src={img} alt="Domyślny avatar kursanta, który nie ma ustawionego zdjęcia"/>
                </div>
            }
        </>
    );
};

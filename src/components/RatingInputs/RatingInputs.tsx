import React from 'react';
import { Input } from '@components/Input/Input';
import classes from "./RatingInputs.module.css";

type RatingInput = {
    label: string,
    rating: number | null,
    setRating: (rating: number) => void,
}

type RatingsInputsProps = {
    ratings: RatingInput[],
}

export const RatingsInputs = ({ ratings }: RatingsInputsProps) => (
    <>
        {ratings.map(({ label, rating, setRating }, index) => (
            <React.Fragment key={index}>
                <label htmlFor={`rating-${index}`}>{label}</label>
                <Input
                    type="number"
                    customClasses={classes.input_rating}
                    value={(rating !== null) ? rating.toString() : ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value))}
                    placeholder="Wpisz ocenę kursanta w zakresie od 1 do 5"
                    id={`rating-${index}`}
                />
            </React.Fragment>
        ))}
    </>
);
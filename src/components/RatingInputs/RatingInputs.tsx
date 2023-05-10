import React from "react";
import { Input } from "@components/Input/Input";
import classes from "./RatingInputs.module.css";

type RatingType = {
  label: string;
  rating: number | null;
  setRating: (newRating: number) => void;
};

type RatingsInputsProps = {
  ratings: RatingType[];
};

const RatingInputs = ({ ratings }: RatingsInputsProps) => (
  <>
    {ratings.map(({ label, rating, setRating }, index) => (
      <div key={index}>
        <label htmlFor={`rating-${index}`}>{label}</label>
        <Input
          type="number"
          customClasses={classes.input_rating}
          value={rating !== null ? rating.toString() : ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRating(Number(e.target.value))
          }
          placeholder="Wpisz ocenę kursanta w zakresie od 1 do 5"
          id={`rating-${index}`}
        />
      </div>
    ))}
  </>
);

export default RatingInputs;

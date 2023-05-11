import React,{ SyntheticEvent, useContext } from "react";
import { Text } from "@components/Text/Text";
import { QueryContext } from "@context/QueryContext";
import { Select } from "@components/Select/Select";
import { QueryAction } from "@enums/query-action.enum";
import { Button } from "@components/Button/Button";
import classes from "./Paginator.module.css";
enum Controller {
  Prev = "prev",
  Next = "next",
}

export const Paginator = () => {
    const {
    queryData: {
      pagination: { page, pageCount, take, hasPreviousPage, hasNextPage },
    },
    dispatchQuery,
  } = useContext(QueryContext);

  const handleSelectChange = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatchQuery({
      type: QueryAction.PaginationChangeTake,
      payload: (e.target as HTMLSelectElement).value,
    });
  };

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const { name } = e.target as HTMLButtonElement;
    if (!name) return;
    if (name === Controller.Next && hasNextPage) {
      dispatchQuery({ type: QueryAction.PaginationNextStep });
      return;
    }
    if (name === Controller.Prev && hasPreviousPage) {
      dispatchQuery({ type: QueryAction.PaginationPrevStep });
      return;
    }
  };

  return<div className={classes.pagination_controls}>
      <Text style={{ margin: "0 10px" }}>Ilość Elementów</Text>
      <Select
          fullSize={false}
          defaultValue={`${take}`}
          options={["5", "10", "15", "20", "30", "40", "50"]}
          onChange={handleSelectChange}
      ></Select>
      <Text style={{ margin: "0 10px" }}>
          {page} z {pageCount}
      </Text>
      <Button
          name="prev"
          status={hasPreviousPage ? "active" : "disabled"}
          onClick={handleClick}
      >
          {"<"}
      </Button>
      <Button
          name="next"
          status={hasNextPage ? "active" : "disabled"}
          onClick={handleClick}
      >
          {">"}
      </Button>
  </div>
};

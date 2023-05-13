import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";
import {QueryAction} from "@enums/query-action.enum";
import {useContext} from "react";
import {QueryContext} from "@context/QueryContext";

export const HiredButton = ({ id }: any) => {
  const {dispatchQuery} = useContext(QueryContext)
  const { fetchData, loading } = useAxios({
    url: `${RequestPath.GetOneStudent}${id}`,
    method: "PATCH",
    body: {
      status: "Zatrudniony",
    },
  });
  const hiredStudent = async () => {
    const result = confirm("Czy na pewno chcesz zatrudnić kursanta?");
    if (result) {
      await fetchData(() => {
        toast["success"]("Kursant został zatrudniony");
        dispatchQuery({type:QueryAction.Refresh})
      });
    }
  };

  const handleClick = async () => {
    await hiredStudent();
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      Zatrudniony
    </Button>
  );
};

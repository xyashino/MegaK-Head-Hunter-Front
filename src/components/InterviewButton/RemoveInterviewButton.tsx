import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";
import {QueryAction} from "@enums/query-action.enum";
import {useContext} from "react";
import {QueryContext} from "@context/QueryContext";

export const RemoveInterviewButton = ({ id }: any) => {
  const {dispatchQuery} = useContext(QueryContext)
  const { fetchData, loading } = useAxios({
    url: `${RequestPath.GetInterview}/${id}`,
    method: "DELETE",
  });

  const removeInterview = async () => {
    const result = confirm(
      "Czy na pewno chcesz usunąć kursanta z listy rozmów?"
    );
    if (result) {
      await fetchData(() => {
        toast["success"]("Użytkownik został usunięty z listy rozmów");
        dispatchQuery({type:QueryAction.Refresh})

      });
    }
  };

  const handleClick = async () => {
    await removeInterview();
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      Brak Zainteresowania
    </Button>
  );
};

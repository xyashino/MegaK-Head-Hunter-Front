import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";
import { QueryAction } from "@enums/query-action.enum";
import { HTMLAttributes, useContext } from "react";
import { QueryContext } from "@context/QueryContext";
import { useNavigate } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  studentId: string;
  navigateToMain?: boolean;
  customClasses?: string;
}
export const RemoveInterviewButton = ({
  studentId,
  navigateToMain = false,
  ...rest
}: Props) => {
  const navigate = useNavigate();
  const { dispatchQuery } = useContext(QueryContext);
  const { fetchData, loading } = useAxios({
    url: `${RequestPath.GetInterview}/${studentId}`,
    method: "DELETE",
  });

  const handleClick = async () => {
    await fetchData(() => {
      toast["success"]("Użytkownik został usunięty z listy rozmów");
      dispatchQuery({ type: QueryAction.Refresh });
    });
    if (navigateToMain) navigate(PageRouter.Main);
  };

  return (
    <Button loading={loading} onClick={handleClick} {...rest}>
      Brak Zainteresowania
    </Button>
  );
};

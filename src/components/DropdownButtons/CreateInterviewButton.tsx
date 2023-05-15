import {useAxios} from "@hooks/useAxios";
import {RequestPath} from "@enums/request-path.enum";
import {toast} from "react-hot-toast";
import {Button} from "@componentsCommon/Button/Button";
import {useContext} from "react";
import {QueryContext} from "@context/QueryContext";
import {QueryAction} from "@enums/query-action.enum";
import classes from "./DropDownButton.module.css";

interface Props {
  id:string;
}

export const CreateInterviewButton = ({ id }: Props) => {
  const {dispatchQuery} = useContext(QueryContext)
  const { fetchData, loading } = useAxios({
    url: RequestPath.GetInterview,
    method: "POST",
    body: {
      studentId: id,
    },
  });

  const createInterview = async () => {
    await fetchData(() => {
      toast.success("Kursant został dodany do rozmowy");
      dispatchQuery({type:QueryAction.Refresh})
    });
  };

  const handleClick = async () => {
    await createInterview();
  };

  return (
    <Button loading={loading} onClick={handleClick} customClasses={`${classes.button}`}>
      Zarezerwuj rozmowę
    </Button>
  );
};

import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";
import { QueryAction } from "@enums/query-action.enum";
import {HTMLAttributes, SyntheticEvent, useContext} from "react";
import { QueryContext } from "@context/QueryContext";
import {Confirm} from "@components/Confirm/Confirm";
import {useConfirm} from "@hooks/useConfirm";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  studentId: string;
  customClasses?:string;
}

export const HiredButton = ({ studentId, ...rest }: Props) => {
  const { dispatchQuery } = useContext(QueryContext);
  const { fetchData, loading } = useAxios({
    url: `${RequestPath.GetOneStudent}${studentId}`,
    method: "PATCH",
    body: {
      status: "Zatrudniony",
    },
  });
  const hiredStudent = async () => {
      await fetchData(() => {
        toast.success("Kursant został zatrudniony");
        dispatchQuery({ type: QueryAction.Refresh });
      });
  };

  const {showModal, ...restConfirm} = useConfirm({
    doAfterConfirm:hiredStudent,
    confirmMessage:"Czy na pewno chcesz zatrudnić kursanta?",
  })

  const handleClick = (e:SyntheticEvent)=>{
    e.preventDefault();
    showModal();
  }

  return (
   <>
     <Button loading={loading} onClick={handleClick} {...rest}>
       Zatrudniony
     </Button>
     <Confirm {...restConfirm}/>
   </>
  );
};

import React, { SyntheticEvent } from "react";
import { Button } from "@componentsCommon/Button/Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletData } from "../../types/OutletData";
import { toast } from "react-hot-toast";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { StudentUpdateRequest } from "@backendTypes";
import { PageRouter } from "@enums/page-router.enum";
import {useConfirm} from "@hooks/useConfirm";
import {Confirm} from "@components/Confirm/Confirm";

export const StudentPanelPage = () => {
  const { id } = useOutletContext() as OutletData;
  const navigate = useNavigate();
  const { fetchData, loading } = useAxios({
    url: `${RequestPath.GetOneStudent}${id}`,
    method: "PATCH",
    body: { status: "Zatrudniony" } as StudentUpdateRequest,
  });

  const navigateToCv = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`/cv/${id}`);
  };

  const changeStudentStatus = () => {
    fetchData(() => {
      toast.success("Oznaczono jako zatrudniony");
      navigate(PageRouter.Login);
    });
  };

  const  {showModal,...restConfirm} = useConfirm({
    doAfterConfirm:changeStudentStatus,
    confirmMessage: 'Czy na pewno chcesz to zrobić? Stracisz dostęp do aplikacji.',
  })

  const handleConfirm = (e:SyntheticEvent)=>{
    e.preventDefault();
    showModal()
  }
  return (
    <div style={{ alignSelf: "start" }}>
      <Button
        onClick={navigateToCv}
        style={{ minWidth: "200px", margin: "30px" }}
      >
        Zobacz Swoje CV
      </Button>
      <Button
        onClick={handleConfirm}
        style={{ minWidth: "200px", margin: "30px" }}
        loading={loading}
      >
        Jestem Zatrudniony !!
      </Button>
      <Confirm {...restConfirm}/>
    </div>
  );
};

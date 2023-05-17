import React, { SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { StudentUpdateRequest } from "@backendTypes";
import { Button } from "@componentsCommon/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { useConfirm } from "@hooks/useConfirm";
import { Confirm } from "@components/Confirm/Confirm";
import { OutletData } from "../../types/OutletData";

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

  const markAsEmployed = () => {
    fetchData(() => {
      toast.success("Oznaczono jako zatrudniony");
      navigate(PageRouter.Login);
    });
  };

  const { showModal, ...restConfirm } = useConfirm({
    doAfterConfirm: markAsEmployed,
    confirmMessage:
      "Czy na pewno chcesz to zrobić? Stracisz dostęp do aplikacji.",
  });

  const handleConfirmationButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();
    showModal();
  };
  return (
    <div style={{ alignSelf: "start" }}>
      <Button
        onClick={navigateToCv}
        style={{ minWidth: "200px", margin: "30px" }}
      >
        Zobacz Swoje CV
      </Button>
      <Button
        onClick={handleConfirmationButtonClick}
        style={{ minWidth: "200px", margin: "30px" }}
        loading={loading}
      >
        Jestem Zatrudniony !!
      </Button>
      <Confirm {...restConfirm} />
    </div>
  );
};

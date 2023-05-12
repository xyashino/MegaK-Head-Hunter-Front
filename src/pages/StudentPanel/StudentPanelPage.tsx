import React, { SyntheticEvent } from "react";
import { Button } from "@componentsCommon/Button/Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletData } from "../../types/OutletData";
import { toast } from "react-hot-toast";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { StudentUpdateRequest } from "@backendTypes";
import { PageRouter } from "@enums/page-router.enum";

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

  const changeStudentStatus = (e: SyntheticEvent) => {
    e.preventDefault();
    const result = confirm("Uwaga starcisz dostęp do aplikacji");
    if (result) {
      fetchData(() => {
        toast["success"]("Oznaczono jako zatrudniony");
        navigate(PageRouter.Login);
      });
      return;
    }
    toast["error"]("Anulowano");
  };

  return (
    <div>
      <Button
        onClick={navigateToCv}
        style={{ minWidth: "200px", margin: "30px" }}
      >
        Zobacz Swoje CV
      </Button>
      <Button
        onClick={changeStudentStatus}
        style={{ minWidth: "200px", margin: "30px" }}
        loading={loading}
      >
        Jestem Zatrudniony !!
      </Button>
    </div>
  );
};

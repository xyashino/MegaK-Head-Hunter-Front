import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@components/Button/Button";

export const HiredButton = ({ id }: any) => {
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

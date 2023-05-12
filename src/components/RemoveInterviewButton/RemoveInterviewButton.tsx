import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";

export const RemoveInterviewButton = ({ id }: any) => {
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

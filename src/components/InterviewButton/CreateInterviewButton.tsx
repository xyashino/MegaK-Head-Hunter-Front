import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";

interface Props {
  id:string;
}

export const CreateInterviewButton = ({ id }: Props) => {
  const { fetchData, loading } = useAxios({
    url: RequestPath.GetInterview,
    method: "POST",
    body: {
      studentId: id,
    },
  });

  const createInterview = async () => {
    await fetchData(() => {
      toast["success"]("Kursant został dodany do rozmowy");
    });
  };

  const handleClick = async () => {
    await createInterview();
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      Zarezerwuj rozmowę
    </Button>
  );
};

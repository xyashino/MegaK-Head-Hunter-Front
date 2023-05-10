import { useEffect, useState } from "react";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { toast } from "react-hot-toast";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { Text } from "@components/Text/Text";
import { Avatar } from "@components/Avatar/Avatar";
import { Button } from "@components/Button/Button";
import { SearchUsers } from "@components/Search/Search";
import { FilterModal } from "@components/FilterModal/FilterModal";
import classes from "./StudentsList.module.css";

interface Student {
  id: number;
  firstname: string;
  lastname: string;
  githubUsername: string;
}

export const StudentsList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [url, setUrl] = useState(`http://localhost:3000/students`);
  const [name, setName] = useState("");
  const [filterModalIsOpen, setFilterModalIsOpen] = useState<boolean>(false);

  const openFilterModal = () => {
    setFilterModalIsOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalIsOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await AxiosSetup.get(url);
        setStudents(response.data.data);
      } catch (e) {
        console.log(e);
        toast["error"]("Wystąpił błąd podczas pobierania studentów");
      }
    })();
  }, [url]);

  useEffect(() => {
    setUrl(`http://localhost:3000/students?name=${name}`);
  }, [name]);

  return (
    <>
      <SearchUsers name={name} setName={setName} />
      <div className={classes.div_btn_to_modal_wrapper}>
        <Button customClasses={classes.btn_to_modal} onClick={openFilterModal}>
          <span
            className="material-icons-outlined"
            style={{
              fontSize: "1.5rem",
              verticalAlign: "-6px",
              color: "#4D4D4D",
              backgroundColor: "",
            }}
          >
            filter_alt
          </span>
          Filtrowanie
        </Button>
      </div>
      <FilterModal
        isOpen={filterModalIsOpen}
        onRequestClose={closeFilterModal}
        onConfirm={closeFilterModal}
        onCancel={closeFilterModal}
      />
      {students.map((student) => (
        <Dropdown
          key={student.id}
          userNameData={
            <Text>
              {student.firstname} {student.lastname}
            </Text>
          }
          userNameAvatarData={
            <Avatar githubUsername={student.githubUsername} />
          }
          children={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum ipsum labore maxime natus nemo nostrum omnis quod ratione voluptate? Eum impedit ipsam obcaecati placeat quisquam rerum saepe sit. Debitis?"
          }
          firstOptionalBtn={<Button>Zarezerwuj rozmowę</Button>}
        />
      ))}
    </>
  );
};

import { useLoaderData } from "react-router-dom";
import { ActiveStudentResponse, PageMeta } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import React, { useState } from "react";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { SearchUsers } from "@componentsCommon/Search/Search";
import classes from "@pages/Students/StudentsPage.module.css";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { FilterContextProvider } from "@context/FilterContext";

export const TalksPage = () => {
  const { data: activeStudents, meta } = useLoaderData() as {
    data: ActiveStudentResponse[];
    meta: PageMeta;
  };
  const [students, setStudents] = useState(activeStudents);

  return (
    <FilterContextProvider>
      <QueryManagement
        baseStudents={students}
        meta={meta}
        request={RequestPath.GetInterview}
        updateStudents={(e: ActiveStudentResponse[]) => {
          setStudents(e);
        }}
      >
        <div className={classes.search_bar}>
          <SearchUsers />
          <div className={classes.div_btn_to_modal_wrapper}>
            <FilterModal />
          </div>
        </div>
        {/*{students.map((el) => (*/}
        {/*  <Dropdown*/}
        {/*    key={el.student.id}*/}
        {/*    reservationData={*/}
        {/*      <Text>*/}
        {/*        Rezerwacja do <br />*/}
        {/*        {new Date(el.bookingDate).toLocaleDateString()}*/}
        {/*      </Text>*/}
        {/*    }*/}
        {/*    userNameAvatarData={*/}
        {/*      <Avatar githubUsername={el.student.githubUsername} />*/}
        {/*    }*/}
        {/*    userNameData={*/}
        {/*      <Text>*/}
        {/*        {el.student.firstname} {el.student.lastname}*/}
        {/*      </Text>*/}
        {/*    }*/}
        {/*    children={*/}
        {/*      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum ipsum labore maxime natus nemo nostrum omnis quod ratione voluptate? Eum impedit ipsam obcaecati placeat quisquam rerum saepe sit. Debitis?"*/}
        {/*    }*/}
        {/*    firstOptionalBtn={<Button>Pokaż CV</Button>}*/}
        {/*    secondOptionalBtn={<Button>Brak zainteresowania</Button>}*/}
        {/*    thirdOptionalBtn={<Button>Zatrudniony</Button>}*/}
        {/*  />*/}
        {/*))}*/}
      </QueryManagement>
    </FilterContextProvider>
  );
};

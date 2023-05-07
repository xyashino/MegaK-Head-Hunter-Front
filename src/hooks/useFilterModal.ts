import React, {useState} from "react";

export const useFilterModal = () => {
    const [isRemoteButtonActive, setIsRemoteButtonActive] = useState<boolean>(false);
    const [isOfficeButtonActive, setIsOfficeButtonActive] = useState<boolean>(false);
    const [isPermanentButtonActive, setIsPermanentButtonActive] = useState<boolean>(false);
    const [isBeToBeButtonActive, setIsBeToBeButtonActive] = useState<boolean>(false);
    const [isMandateButtonActive, setIsMandateButtonActive] = useState<boolean>(false);
    const [isContractButtonActive, setIsContractButtonActive] = useState<boolean>(false);

    const [monthsOfExperience, setMonthsOfExperience] = useState<number>(0);

    const [rating, setRating] =
        useState<{
            course: number | null,
            engagement: number | null,
            project: number | null,
            scrum: number | null
        }>({course: null, engagement: null, project: null, scrum: null});

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [salary, setSalary] = useState<{ min: string, max: string }>({min: '', max: ''});

    const clearAllOptions = () => {
        setIsRemoteButtonActive(false);
        setIsOfficeButtonActive(false);
        setIsPermanentButtonActive(false);
        setIsBeToBeButtonActive(false);
        setIsMandateButtonActive(false);
        setIsContractButtonActive(false);
        setMonthsOfExperience(0);
        setIsChecked(false);
        setSalary({min: '', max: ''});
        setRating({course: null, engagement: null, project: null, scrum: null});
    };

    const typeOfContractButtons = [
        {
            text: 'Umowa o pracę',
            isActive: isPermanentButtonActive,
            onClick: () => setIsPermanentButtonActive(!isPermanentButtonActive),
        },
        {
            text: 'B2B',
            isActive: isBeToBeButtonActive,
            onClick: () => setIsBeToBeButtonActive(!isBeToBeButtonActive),
        },
        {
            text: 'Umowa zlecenie',
            isActive: isMandateButtonActive,
            onClick: () => setIsMandateButtonActive(!isMandateButtonActive),
        },
        {
            text: 'Umowa o dzieło',
            isActive: isContractButtonActive,
            onClick: () => setIsContractButtonActive(!isContractButtonActive),
        },
    ];

    const ratings = [
        {
            label: "Ocena przejścia kursu",
            rating: rating.course,
            setRating: (newRating: number) => setRating({...rating, course: newRating}),
        },
        {
            label: "Ocena aktywności i zaangażowania na kursie",
            rating: rating.engagement,
            setRating: (newRating: number) => setRating({...rating, engagement: newRating}),
        },
        {
            label: "Ocena kodu w projekcie własnym",
            rating: rating.project,
            setRating: (newRating: number) => setRating({...rating, project: newRating}),
        },
        {
            label: "Ocena pracy w zespole w Scrum",
            rating: rating.scrum,
            setRating: (newRating: number) => setRating({...rating, scrum: newRating}),
        },
    ];

    return {
        isRemoteButtonActive,
        setIsRemoteButtonActive,
        isOfficeButtonActive,
        setIsOfficeButtonActive,
        isPermanentButtonActive,
        setIsPermanentButtonActive,
        isBeToBeButtonActive,
        setIsBeToBeButtonActive,
        isMandateButtonActive,
        setIsMandateButtonActive,
        isContractButtonActive,
        setIsContractButtonActive,
        monthsOfExperience,
        setMonthsOfExperience,
        rating,
        setRating,
        isChecked,
        setIsChecked,
        salary,
        setSalary,
        clearAllOptions,
        typeOfContractButtons,
        ratings,
    };
};
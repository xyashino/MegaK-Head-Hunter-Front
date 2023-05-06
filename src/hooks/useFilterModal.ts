import { useState } from "react";

export const useFilterModal = () => {
    const [isRemoteButtonActive, setIsRemoteButtonActive] = useState<boolean>(false);
    const [isOfficeButtonActive, setIsOfficeButtonActive] = useState<boolean>(false);
    const [isPermanentButtonActive, setIsPermanentButtonActive] = useState<boolean>(false);
    const [isBeToBeButtonActive, setIsBeToBeButtonActive] = useState<boolean>(false);
    const [isMandateButtonActive, setIsMandateButtonActive] = useState<boolean>(false);
    const [isContractButtonActive, setIsContractButtonActive] = useState<boolean>(false);

    const [monthsOfExperience, setMonthsOfExperience] = useState<number>(0);

    const [courseRating, setCourseRating] = useState<number | null>(null);
    const [engagementRating, setEngagementRating] = useState<number | null>(null);
    const [projectRating, setProjectRating] = useState<number | null>(null);
    const [scrumRating, setScrumRating] = useState<number | null>(null);

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [minSalary, setMinSalary] = useState<string>('');
    const [maxSalary, setMaxSalary] = useState<string>('');

    const clearAllOptions = () => {
        setIsRemoteButtonActive(false);
        setIsOfficeButtonActive(false);
        setIsPermanentButtonActive(false);
        setIsBeToBeButtonActive(false);
        setIsMandateButtonActive(false);
        setIsContractButtonActive(false);
        setMonthsOfExperience(0);
        setIsChecked(false);
        setMinSalary('');
        setMaxSalary('');
        setCourseRating(null);
        setEngagementRating(null);
        setProjectRating(null);
        setScrumRating(null);
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
        courseRating,
        setCourseRating,
        engagementRating,
        setEngagementRating,
        projectRating,
        setProjectRating,
        scrumRating,
        setScrumRating,
        isChecked,
        setIsChecked,
        minSalary,
        setMinSalary,
        maxSalary,
        setMaxSalary,
        clearAllOptions,
        typeOfContractButtons,
    };
};
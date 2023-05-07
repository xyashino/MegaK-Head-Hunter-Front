import React, {useState} from "react";

export const useFilterModal = () => {

    const [isTheButtonActive, setIsTheButtonActive] =
        useState<{
            remote: boolean,
            office: boolean,
            permanent: boolean,
            beToBe: boolean,
            mandate: boolean,
            contract: boolean,
        }>({remote: false, office: false, permanent: false, beToBe: false, mandate: false, contract: false});

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

    const setDefaultValues = (obj: any, defaultValue: any) => {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = obj[prop] || defaultValue;
            }
        }
        return obj;
    };

    const clearAllOptions = () => {
        setIsTheButtonActive(prev => setDefaultValues(prev,false));
        setMonthsOfExperience(0);
        setIsChecked(false);
        setSalary(prev => setDefaultValues(prev,''));
        setRating(prev => setDefaultValues(prev,''));
    };

    const typeOfContractButtons = [
        {
            text: 'Umowa o pracę',
            isActive: isTheButtonActive.permanent,
            onClick: () => (isActive: boolean) => setIsTheButtonActive({...isTheButtonActive, permanent: !isActive}),
        },
        {
            text: 'B2B',
            isActive: isTheButtonActive.beToBe,
            onClick: () => (isActive: boolean) => setIsTheButtonActive({...isTheButtonActive, beToBe: !isActive}),
        },
        {
            text: 'Umowa zlecenie',
            isActive: isTheButtonActive.mandate,
            onClick: () => (isActive: boolean) => setIsTheButtonActive({...isTheButtonActive, mandate: !isActive}),
        },
        {
            text: 'Umowa o dzieło',
            isActive: isTheButtonActive.contract,
            onClick: () => (isActive: boolean) => setIsTheButtonActive({...isTheButtonActive, contract: !isActive}),
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
        isTheButtonActive,
        setIsTheButtonActive,
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
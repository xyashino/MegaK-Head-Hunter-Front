export interface StarState {
    isActive: boolean;
}

export interface RatingCategory {
    name: string;
    label: string;
    state: StarState[];
}

export const RatingCategories: RatingCategory[] = [
    {
        name: "course",
        label: 'Ocena przejścia kursu',
        state: Array.from({length: 5}, () => ({isActive: false}))
    },
    {
        name: "engagement",
        label: 'Ocena aktywności i zaangażowania na kursie',
        state: Array.from({length: 5}, () => ({isActive: false}))
    },
    {
        name: "project",
        label: 'Ocena kodu w projekcie własnym',
        state: Array.from({length: 5}, () => ({isActive: false}))
    },
    {
        name: "scrum",
        label: 'Ocena pracy w zespole w Scrum',
        state: Array.from({length: 5}, () => ({isActive: false}))
    },
];

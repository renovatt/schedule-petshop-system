import { SchedulesListProps } from "@/components/Lists/SchedulesList/types";

export type PetModalProps = {
    petProps: SchedulesListProps
    setPetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
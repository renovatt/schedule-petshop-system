import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types";

export type PetModalProps = {
    petProps: ScheduleFormProps
    setPetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
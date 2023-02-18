import { ClientFormProps } from "@/components/Forms/ClientForm/types";

export type ClientModalProps = {
    clientProps: ClientFormProps
    setPetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
import { ClientFormProps } from "@/components/Forms/ClientForm/types";

export type ClientModalProps = {
    clientProps: ClientFormProps
    setClientModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
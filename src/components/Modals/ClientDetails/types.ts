import { ClientListProps } from "@/components/Lists/ClientList/types";

export type ClientModalProps = {
    clientProps: ClientListProps
    setPetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
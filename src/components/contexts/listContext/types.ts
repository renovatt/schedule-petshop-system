import { DataListClientsProps } from "@/components/Forms/ClientForm/types";
import { DataListSchedulesProps } from "@/components/Forms/ScheduleForm/types";

export type ListContextProviderProps = {
    children: React.ReactNode
}

export type InitialValueProps = {
    error: boolean;
    loader: boolean;
    clients: DataListClientsProps;
    schedules: DataListSchedulesProps;
    clear: () => void;
    loadClients: () => Promise<void>;
    loadSchedules: () => Promise<void>;
    setClients: React.Dispatch<React.SetStateAction<DataListClientsProps>>;
    setSchedules: React.Dispatch<React.SetStateAction<DataListSchedulesProps>>;
};
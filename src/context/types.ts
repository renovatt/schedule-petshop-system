import { DataListClientsProps } from "@/components/Forms/ClientForm/types";
import { DataListSchedulesProps } from "@/components/Forms/ScheduleForm/types";

export type GlobalContextProviderProps = {
    children: React.ReactNode
}

export type InitialValueProps = {
    error: boolean;
    loader: boolean;
    clients: DataListClientsProps;
    schedules: DataListSchedulesProps;
    loadClients: () => Promise<void>;
    loadSchedules: () => Promise<void>;
};
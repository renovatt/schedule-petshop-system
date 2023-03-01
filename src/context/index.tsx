import React from 'react';
import { DataListClientsProps } from '@/components/Forms/ClientForm/types';
import { DataListSchedulesProps } from '@/components/Forms/ScheduleForm/types';
import { renderClientList, renderScheduleList } from '@/services';
import { GlobalContextProviderProps, InitialValueProps } from './types';

const initialValue: InitialValueProps = {
    clients: {},
    schedules: {},
    loadClients: async () => { },
    loadSchedules: async () => { },
    loader: false,
    error: false,
};

export const GlobalContext = React.createContext<InitialValueProps>(initialValue);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [error, setError] = React.useState(initialValue.error)
    const [loader, setLoader] = React.useState(initialValue.loader)
    const [clients, setClients] = React.useState<DataListClientsProps>(initialValue.clients);
    const [schedules, setSchedules] = React.useState<DataListSchedulesProps>(initialValue.schedules);

    async function loadSchedules() {
        setLoader(true);
        try {
            const { response } = await renderScheduleList()
            setSchedules(response)
        } catch (error) {
            setError(true)
        } finally {
            setLoader(false);
        }
    }

    async function loadClients() {
        setLoader(true);
        try {
            const { response } = await renderClientList()
            setClients(response)
        } catch (error) {
            setError(true)
        } finally {
            setLoader(false);
        }
    }

    const contextValue: InitialValueProps = {
        error,
        loader,
        clients,
        schedules,
        loadClients,
        loadSchedules,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

import React from 'react';
import { ClientFormProps, DataListClientsProps } from '@/components/Forms/ClientForm/types';
import { DataListSchedulesProps } from '@/components/Forms/ScheduleForm/types';
import { ListContextProviderProps, InitialValueProps } from './types';
import { AuthContext } from '../authContext';
import { renderClientList } from '@/services/clients';
import { renderScheduleList } from '@/services/schedules';

const initialValue: InitialValueProps = {
    error: false,
    loader: false,
    clients: [],
    schedules: [],
    clear: () => { },
    setClients: () => { },
    setSchedules: () => { },
    loadClients: async () => { },
    loadSchedules: async () => { },
};


export const ListContext = React.createContext({} as InitialValueProps);

export const ListContextProvider = ({ children }: ListContextProviderProps) => {
    const { user, isToken } = React.useContext(AuthContext)
    const [error, setError] = React.useState(initialValue.error)
    const [loader, setLoader] = React.useState(initialValue.loader)
    const [clients, setClients] = React.useState<DataListClientsProps>(initialValue.clients);
    const [schedules, setSchedules] = React.useState<DataListSchedulesProps>(initialValue.schedules);

    async function loadClients() {
        setLoader(true);
        try {
            const { response } = await renderClientList(isToken)
            const filteredClients = await response?.clients?.filter((client: ClientFormProps) => client.userId === user?.id)
            setClients(filteredClients)
        } catch (error) {
            setError(true)
        } finally {
            setLoader(false);
        }
    }

    async function loadSchedules() {
        setLoader(true);
        try {
            const { response } = await renderScheduleList(isToken)
            const filteredSchedules = await response?.schedules?.filter((client: ClientFormProps) => client.userId === user?.id)
            setSchedules(filteredSchedules)
        } catch (error) {
            setError(true)
        } finally {
            setLoader(false);
        }
    }

    async function clear() {
        setClients(() => initialValue.clients)
        setSchedules(() => initialValue.schedules)
    }

    const contextValue: InitialValueProps = {
        error,
        loader,
        clients,
        schedules,
        loadClients,
        loadSchedules,
        setClients,
        setSchedules,
        clear,
    };

    return (
        <ListContext.Provider value={contextValue}>
            {children}
        </ListContext.Provider>
    );
};
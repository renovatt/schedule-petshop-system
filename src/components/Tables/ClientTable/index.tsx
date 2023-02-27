import React from 'react'
import * as S from './style'
import { renderClientList } from '@/services';
import ClientList from '@/components/Lists/ClientList';
import { DataListClientsProps } from '@/components/Forms/ClientForm/types';

type InputSearchValueProps = {
    searchValue: string
}

const ClientTable = ({ searchValue }: InputSearchValueProps) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [prevSize, setPrevSize] = React.useState(0)
    const [clients, setClients] = React.useState<DataListClientsProps | null>(null)
    const [filteredClients, setFilteredClients] = React.useState(clients?.clients || []);

    React.useEffect(() => {
        async function loadClients() {
            const { response } = await renderClientList()
            setClients(response)
        }
        loadClients()
    }, [clients])

    React.useEffect(() => {
        const filtered = clients?.clients?.filter((client) => {
            return client.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setFilteredClients(filtered || []);
    }, [clients, searchValue]);

    React.useEffect(() => {
        if (clients && clients.clients) {
            const newSize = clients.clients.length
            if (newSize > prevSize) {
                scrollRef.current?.scrollTo(0, -scrollRef.current.scrollHeight)
            }
            setPrevSize(newSize)
        }
    }, [clients])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {filteredClients?.map(client => (
                    <ClientList
                        key={client.id}
                        id={client.id}
                        name={client.name}
                        age={client.age}
                        sex={client.sex}
                        city={client.city}
                        street={client.street}
                        contact={client.contact}
                        created_at={client.created_at}
                        neighborhood={client.neighborhood}
                        house_number={client.house_number} />
                ))}
            </S.Table>
        </S.Container>
    )
}

export default ClientTable
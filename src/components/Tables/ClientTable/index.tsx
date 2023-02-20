import { DataListClientsProps } from '@/components/Forms/ClientForm/types';
import ClientList from '@/components/Lists/ClientList';
import { renderClientList } from '@/services';
import React from 'react'
import * as S from './style'

const ClientTable = () => {
    const scrollRef = React.useRef<any>(null)
    const [clients, setClients] = React.useState<DataListClientsProps | null>(null)

    React.useEffect(() => {
        async function loadClients() {
            const { response } = await renderClientList()
            setClients(response)
        }
        loadClients()
    }, [clients])

    React.useEffect(() => {
        scrollRef.current.scrollTo(0, -scrollRef.current.scrollHeight)
    }, [clients])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {clients?.clients?.map(client => (
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
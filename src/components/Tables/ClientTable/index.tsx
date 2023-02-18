import { DataListClientsProps } from '@/components/Forms/ClientForm/types';
import ClientList from '@/components/Lists/ClientList';
import React from 'react'
import * as S from './style'

const ClientTable = () => {
    const scrollRef = React.useRef<any>(null)
    const [dataBase, setDatabase] = React.useState<DataListClientsProps | null>(null)

    const gettingDatabase = async () => {
        const response = await fetch('/api/clients')
        const json = await response.json()
        setDatabase(json)
        console.log(dataBase)
    }

    React.useEffect(() => {
        gettingDatabase()
    }, [])

    React.useEffect(() => {
        scrollRef.current.scrollTo(0, -scrollRef.current.scrollHeight)
    }, [dataBase])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {dataBase?.clients?.map(client => (
                    <ClientList
                        key={client.id}
                        id={client.id}
                        name={client.name}
                        age={client.age}
                        sex={client.sex}
                        city={client.city}
                        street={client.street}
                        contact={client.contact}
                        neighborhood={client.neighborhood}
                        house_number={client.house_number} />
                ))}
            </S.Table>
        </S.Container>
    )
}

export default ClientTable
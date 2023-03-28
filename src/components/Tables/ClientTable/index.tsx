import React from 'react'
import * as S from './style'
import ClientList from '@/components/Lists/ClientList';
import { Loader } from '@/components/Helper/Loader';
import { ListContext } from '@/contexts/listContext';

type InputSearchValueProps = {
    searchValue: string
}

const ClientTable = ({ searchValue }: InputSearchValueProps) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [prevSize, setPrevSize] = React.useState(0)
    const { loader, clients, loadClients } = React.useContext(ListContext)

    const filteredClients = clients?.filter((client) => {
        return client.name.toLowerCase().includes(searchValue.toLowerCase());
    }) || [];

    React.useEffect(() => {
        loadClients()
    }, [])

    React.useEffect(() => {
        if (clients && clients?.length) {
            const newSize = clients?.length
            if (newSize > prevSize) {
                scrollRef.current?.scrollTo(0, -scrollRef.current.scrollHeight)
            }
            setPrevSize(newSize)
        }
    }, [clients])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {loader ? <Loader /> :
                    filteredClients?.length ? filteredClients?.map((client, index) =>
                        (<ClientList key={index} {...client} />)) : <p>Sem clientes.</p>
                }
            </S.Table>
        </S.Container>
    )
}

export default ClientTable;
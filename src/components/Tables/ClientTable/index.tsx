import React from 'react'
import * as S from './style'
import ClientList from '@/components/Lists/ClientList';
import { Loader } from '@/components/Helper/Loader';
import { GlobalContext } from '@/context';

type InputSearchValueProps = {
    searchValue: string
}

const ClientTable = ({ searchValue }: InputSearchValueProps) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [prevSize, setPrevSize] = React.useState(0)
    const { loader, clients, loadClients } = React.useContext(GlobalContext)

    const filteredClients = React.useMemo(() => {
        if (clients && clients?.clients) {
            const filtered = clients?.clients?.filter((client) => {
                return client.name.toLowerCase().includes(searchValue.toLowerCase());
            });
            return filtered
        }
        return [];
    }, [clients?.clients, searchValue]);

    React.useEffect(() => {
        loadClients()
    }, [])

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
                {loader && <Loader />}
                {filteredClients?.map(client => (<ClientList {...client} />))}
            </S.Table>
        </S.Container>
    )
}

export default ClientTable
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'

export default function Loading() {
    return <div>Carregando...</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['@nextauth-token']: token } = parseCookies(ctx)
    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    } else if (token) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}
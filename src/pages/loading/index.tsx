import React from 'react'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { ViewLoading } from '@/views/viewloading'

export default function Loading() {
    return <ViewLoading />
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
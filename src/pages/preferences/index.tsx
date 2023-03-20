import React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import ViewPreferences from '@/views/viewpreferences'

export default function Preferences() {
    return <ViewPreferences />
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
    }
    return {
        props: {}
    }
}
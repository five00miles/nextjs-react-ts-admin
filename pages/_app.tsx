import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HomeLayout from '@/components/homeLayout/index'

function MyApp({ Component, pageProps, router }: AppProps) {
    if (router.pathname.split('/')[1] === 'home') {
        return (
            <HomeLayout>
                <Component {...pageProps} />
            </HomeLayout>
        )
    } else return <Component {...pageProps} />
}

export default MyApp

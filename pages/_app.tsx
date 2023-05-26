import { AuthProvider } from '@/hooks/useAuth'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot} from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
  //High3er order component
  <RecoilRoot>
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  </RecoilRoot> )
}

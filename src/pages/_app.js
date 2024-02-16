import { AuthProvider } from '@/providers/authenticator'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return  <AuthProvider> <Component {...pageProps} /></ AuthProvider>
}

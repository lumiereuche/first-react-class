import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'our first react',
  description: 'react will be interesting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='text-[50px] h-[420px]'>
        
        {children}

        </main >

        <Footer />

      </body>
    </html>
  )
}

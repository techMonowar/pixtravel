import {Nunito} from 'next/font/google';
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'PixTravel',
  description: 'An Airbnb Clone',
}

const font = Nunito({
  subsets:["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={font.className}>
        <ClientOnly >
          <Navbar />
          <Modal />
          </ClientOnly>
        {children}
        </body>
    </html>
  )
}

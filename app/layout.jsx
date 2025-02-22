import { Inter } from "next/font/google";
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import '@styles/globals.css'


export const metadata = {
    title: "David Adegbite",
    description: "Website Portfolio"
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const RootLayout = ({children}) => {
    return (
      <html lang="en" className={inter.variable}>
        <body className=''>
          <div>
            <Navbar />
            <Sidebar />
            <main className="app">
                {children}
            </main>
          </div>
        </body>
      </html>  
    )
}

export default RootLayout;
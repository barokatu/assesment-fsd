import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import UserInformation from '@/components/UserInformation'
import { Accordion } from 'flowbite-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Accordion className={styles.main}>
        <UserInformation />
    </Accordion>
  )
}

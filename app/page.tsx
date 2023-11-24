import Image from 'next/image'
import React from 'react';
import {Header} from '@/components/header/header'
import {Synopsis} from '@/components/synopsis/synopsis'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Synopsis />
    </main>
  )
}

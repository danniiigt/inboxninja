import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'>
        <Image
          src="/images/ninja.png"
          alt="Ninja Logo"
          width={175}
          height={175}
          className='h-[150px] w-[150px] lg:h-[150px] lg:w-[150px] xl:w-[200px] xl:h-[200px]'
        />
        <div className='space-y-2'>
          <h1 className='md:text-8xl xl:text-9xl text-6xl text-center md:text-left underline decoration-primary'>InboxNinja</h1>
          <p className='text-center md:text-left text-neutral-400 text-md md:text-2xl'>Tu gestor de email marketing</p>
        </div>
      </div>
      <div className='flex items-center gap-4 mt-10'>
        <Link href='/login'>
          <Button variant="outline">
            Iniciar sesión
          </Button>
        </Link>
        <Link href='/register'>
          <Button>
            Comenzar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Page

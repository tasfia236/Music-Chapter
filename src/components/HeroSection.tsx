import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

export default function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className="-top-70 left-0 md:left-60 md:-top-60"
                fill="white"
            />
            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-400 to-pink-950'>Unleash Your Musical Potential</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-100  max-w-5xl mx-auto'>Music Chapter is your ultimate destination for mastering music through expertly designed courses. Whether you're a budding musician or a seasoned pro, explore a diverse range of lessons tailored to your skill level and interests. From instruments and vocals to music production and theory, every chapter brings you closer to your musical dreams. Join Music Chapter and let your passion for music flourish!</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="3.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

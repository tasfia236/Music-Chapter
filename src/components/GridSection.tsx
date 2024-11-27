'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function GridSection() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-8 z-10">Hear our Harmony: Voices of Success</h2>
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}



const testimonials = [
    {
        quote: "Music Chapter transformed my guitar skills! The lessons are easy to follow and incredibly effective.",
        name: "Sarah Johnson",
        title: "Aspiring Guitarist",
    },
    {
        quote: "As a music producer, the electronic production course was a game-changer. Highly recommend it!",
        name: "David Lee",
        title: "Professional Music Producer",
    },
    {
        quote: "The drumming basics course was the perfect starting point for my journey into percussion.",
        name: "Alex Wilson",
        title: "Beginner Drummer",
    },
    {
        quote: "The music theory course helped me understand and apply concepts I had struggled with for years.",
        name: "Michael Brown",
        title: "Music Teacher",
    },
    {
        quote: "The songwriting masterclass inspired me to write my first song. It’s an incredible feeling!",
        name: "Laura Daniels",
        title: "Aspiring Songwriter",
    },
]
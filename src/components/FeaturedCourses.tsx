'use client'
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

export default function FeaturedCourses() {
    const FeaturedCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className="py-12 bg-pink-400">
            <div className="text-center">
                <h2 className="text-base text-pink-900 tracking-wide font-semibold uppercase">FEATURED COURSES</h2>
                <p className="mt-4 font-extrabold text-3xl sm:text-4xl text-neutral-100 leading-8 tracking-tight">Learn with the best</p>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {FeaturedCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm h-full overflow-hidden bg-white dark:bg-zinc-900">
                                {/* <Image
                                    src={`/jordans.webp`}
                                    alt="jordans"
                                    height="300"
                                    width="300"
                                    className="object-contain"
                                /> */}
                                <div className="p-4 sm:p-6 flex flex-col items-center text-black text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 flex flex-grow dark:text-neutral-400">
                                        {course.description}
                                    </p>
                                    <Link href={`/courses/${course.slug}`}>
                                    Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div >
            <div className="mt-20 text-center">
                <Link href={"/courses"} className="px-4 py-2 rounded-full border border-neutral-600 text-neutral-700 hover:text-white font-bold bg-white hover:bg-pink-800 transition duration-200">
                    View All Courses
                </Link>
            </div>
        </div >
    )
}

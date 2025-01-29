"use client"

import { motion } from "motion/react"
import Link from "next/link";

const skillsList = [
    ["JavaScript / TypeScript (Node.js, Hono.js, Bun)", "React, Next.js, Tailwind, ShadCN"],
    ["Python (Django, Flask)", "Ruby (Ruby on Rails)", "PHP (Laravel)"],
    ["MySQL, PostgreSQL, MongoDB", "Git, CI/CD, AWS, Cloudflare"],
    ["Fusion 360, Figma", "Data Labeling & Analysis", "AudioUX & Sound Design"],
];

export default function About() {
    return (
        <section className="w-full py-16 sm:py-20 bg-background container max-w-7xl mx-auto">
            <div className="px-4">
                <div className="space-y-8 sm:space-y-12">
                    {/* Introduction */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            I&apos;m a full-stack developer with 5+ years of experience building scalable, user-centric applications that blend design with performance.
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            Throughout my career, I&apos;ve developed software for a range of clients and businesses, from logistics platforms to ERP systems, focusing on user experience.
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            Beyond software development, I have a strong passion for product design, and AudioUX. Under my alias, <Link href="https://instagram.com/mydearshelter" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">@mydearshelter</Link>, I craft auditory identities for brands and businesses.
                        </p>
                    </div>

                    <p className="text-base text-muted-foreground text-center max-w-3xl mx-auto font-mono font-semibold leading-6 tracking-tight">
                        Beyond client work, I&apos;m currently challenging myself to develop 12 startups in 12 months (
                        <Link
                            href="https://emmanuelallan.com/12startupsin12months"
                            className="relative group"
                        >
                            <span className="relative">
                                #12startupsin12months
                                <svg className="absolute -bottom-1 left-0 w-full" width="100%" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                                    <path
                                        className="transition-all duration-300 stroke-muted-foreground/60 fill-none group-hover:translate-x-1"
                                        d="M 0,2 C 20,-2 30,6 50,2 70,-2 80,6 100,2"
                                        strokeWidth="2"
                                        pathLength="1"
                                    />
                                </svg>
                            </span>
                        </Link>
                        ), where I launch a new startup every month.
                    </p>

                    {/* Skills Section */}
                    <div className="space-y-8 sm:space-y-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold"
                        >
                            My Skills
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground max-w-3xl"
                        >
                            Whether you&apos;re a company looking to hire a dedicated engineer or a business in need of a scalable digital solution, I bring a combination of technical expertise, design thinking, and an entrepreneurial mindset to every project.
                        </motion.p>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                            {skillsList.map((column, columnIndex) => (
                                <motion.div
                                    key={columnIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: columnIndex * 0.1 }}
                                    className="space-y-4 sm:space-y-6"
                                >
                                    {column.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: columnIndex * 0.1 + skillIndex * 0.1 }}
                                        >
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 3xl:w-3 3xl:h-3 4xl:w-4 4xl:h-4 5xl:w-5 5xl:h-5 rounded-full bg-[#b4e1e7]/20" />
                                            <span className="text-sm sm:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-muted-foreground">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


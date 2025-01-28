"use client"

import { motion } from "motion/react"

const skillsList = [
    ["JavaScript/TypeScript", "C# - (.NET)", "Ruby - (Ruby on Rails)", "PHP - (Laravel)"],
    ["Node Js - (express, hono)", "HTML, CSS, Bootstrap, Tailwind", "Swift - (Swift UI, UIKit)", "Flutter"],
    ["React Js, Next Js, Gatsby", "Git, CI/CD, Docker & Kubernetes", "AWS", "Postgres, Mysql, Mongo"],
    ["Data Labelling & Visualisation", "UI/UX Design - (Figma)", "Jest, Rspec, xUnit"],
]

export default function About() {
    return (
        <section className="w-full py-20 sm:py-32 bg-background container max-w-7xl mx-auto">
            <div className="px-4">
                <div className="space-y-8 sm:space-y-12">
                    {/* Introduction */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            I&apos;m a 21-year-old student at Purdue University currently studying web development and design.
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            As I&apos;ve grown as a developer, I&apos;ve worked alongside senior designers and developers who have
                            raised my standards for what&apos;s expected of any web application.
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            Through these experiences, I&apos;ve had the opportunity to create memorable products that are not only
                            enjoyable to use but are written in code that&apos;s maintainable and easy to understand.
                        </p>
                    </div>

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
                            Through my studies, I&apos;ve gained a solid understanding of computer science and web development
                            concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and
                            applications.
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
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 3xl:w-3 3xl:h-3 4xl:w-4 4xl:h-4 5xl:w-5 5xl:h-5 rounded-full bg-primary/20" />
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


"use client"

import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        id: 1,
        date: "Aug, 24 - PRESENT",
        title: "Typescript Developer",
        company: "LOGIC Solutions GmbH",
        description:
            "Led the development of the Import module of the Logic Transport Management System, a platform that helps logistics companies manage their operations and optimize their supply chain.",
        technologies: ["TypeScript", "React", "Next.js", "Tailwind", "Shadcn"],
    },
    {
        id: 2,
        date: "Sep, 21 - Feb, 24",
        title: "Reinforcement Learning Coding Specialist",
        company: "Remotasks, Scale AI",
        description:
            "As a Coding Agent Performance Evaluation, I was responsible for evaluating the performance of coding agents in reinforcement learning tasks. I used Python, Reinforcement Learning, and Deep Learning to develop and evaluate the agents.",
        technologies: ["Python", "Reinforcement Learning", "Deep Learning", "Gemini", "Llama"],
    },
    {
        id: 3,
        date: "Jan, 21 - Sep, 21",
        title: "Junior Developer (Contract)",
        company: "Savannah Informatics",
        description:
            "Developed and maintained legacy system EDI, to help data interchange between hospitals, patients and insurance companies.",
        technologies: ["JavaScript", "Angular", "Django"],
    },
    {
        id: 4,
        date: "Apr, 18 - Sep, 18",
        title: "Intern Developer",
        company: "Andela",
        description:
            "Developed three-tier web architecture skills using Python Flask and MySQL through Andela Bootcamp (Cohort 2.0) and collaboration with Google #ALCwithGoogle.",
        technologies: ["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
    },
]

const education = [
    {
        id: 1,
        date: "2016 - 2024",
        title: "Bachelor of Science in Computer Science",
        company: "Chuka University",
        description:
            "Focused on computer science fundamentals, algorithms, data structures, data science and software engineering. Graduated with 2nd class honours and completed multiple practical projects.",
        technologies: ["DS & Algorithms", "Web/Mobile Development", "Data Science", "Software Engineering"],
    },
    {
        id: 2,
        date: "2021 - 2022",
        title: "Full-Stack Development Certification",
        company: "Microverse Bootcamp",
        description:
            "Intensive program coveringboth front-end and back-end development through remote pair programming and collaboration. Completed several real-world projects.",
        technologies: ["Ruby on Rails", "React-Redux", "Design Patterns", "TDD", "CI/CD"],
    },
]

export default function Experience() {
    return (
        <section className="w-full bg-primary">
            <div className="py-16 sm:py-20 text-white container max-w-7xl mx-auto">
                <div className="px-4">
                    <div className="space-y-12 sm:space-y-16">
                        <div className="space-y-4 sm:space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold"
                            >
                                Experienced
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-white/80 max-w-3xl"
                            >
                                Through my studies and experience, I&apos;ve built a strong foundation in computer science, software engineering, and product development, applying these skills to real-world applications and businesses.
                            </motion.p>
                        </div>

                        <Tabs defaultValue="experience" className="w-full">
                            <TabsList className="w-full max-w-[400px] h-11 grid grid-cols-2 bg-white/10 text-white">
                                <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                                    Experience
                                </TabsTrigger>
                                <TabsTrigger value="education" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                                    Education
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="experience" className="mt-8 sm:mt-12">
                                <Timeline items={experiences} />
                            </TabsContent>
                            <TabsContent value="education" className="mt-8 sm:mt-12">
                                <Timeline items={education} />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>

        </section>
    )
}

interface TimelineItem {
    id: number
    date: string
    title: string
    company: string
    description: string
    technologies: string[]
}

function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="space-y-12 sm:space-y-16">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid gap-4 sm:gap-6 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] items-start"
                >
                    <div className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-white/80">
                        {item.date}
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold">
                                {item.title}
                            </h3>
                            <div className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-white/80">
                                {item.company}
                            </div>
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-white/80">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    className="bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}


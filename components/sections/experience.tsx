"use client"

import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        id: 1,
        date: "Aug, 24 - PRESENT",
        title: "Senior Frontend Engineer",
        company: "LOGIC Solutions GmbH",
        description:
            "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        technologies: ["TypeScript", "React", "Next.js"],
    },
    {
        id: 2,
        date: "Jan, 23 - Aug, 24",
        title: "Frontend Engineer",
        company: "Tech Innovators Inc",
        description:
            "Led the development of responsive web applications, implemented new features, and improved application performance. Collaborated with UX designers to create intuitive user interfaces.",
        technologies: ["TypeScript", "Vue.js", "Tailwind"],
    },
    {
        id: 3,
        date: "Jun, 21 - Dec, 22",
        title: "Junior Developer",
        company: "Digital Solutions Ltd",
        description:
            "Developed and maintained client websites, implemented responsive designs, and worked on performance optimization. Participated in code reviews and team meetings.",
        technologies: ["JavaScript", "React", "CSS3"],
    },
]

const education = [
    {
        id: 1,
        date: "2019 - 2023",
        title: "Bachelor of Science in Computer Science",
        company: "Purdue University",
        description:
            "Focused on web development, software engineering, and user interface design. Graduated with honors and completed multiple practical projects.",
        technologies: ["Algorithms", "Data Structures", "Web Development"],
    },
    {
        id: 2,
        date: "2023",
        title: "Full-Stack Development Certification",
        company: "Tech Academy",
        description:
            "Intensive program covering modern web development technologies and practices. Completed several real-world projects.",
        technologies: ["MERN Stack", "Cloud Computing", "DevOps"],
    },
]

export default function Experience() {
    return (
        <section className="w-full bg-primary">
            <div className="py-20 sm:py-32 text-white container max-w-7xl mx-auto">
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
                                I like to stay busy and always have a project in the works. Take a look at some of the applications,
                                articles, and companies I&apos;ve dedicated my time to.
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


"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Christian Beats",
        description: "#1 Christian Beats Marketplace for Christian Artists and Producers",
        image: "https://x9577rfv3h.ufs.sh/f/CyUXOvcaMWOVaTEEKFHP8k2gcMevOwoTBGIHYfhpz5dVQ0rS",
        imageAlt: "Christian Beats",
        href: "https://christian-beats.com",
    },
    {
        id: 2,
        title: "Life Care Dermatology Clinic",
        description: "Dedicated Medical Clinic for Dermatology and Aesthetics for a Dubai-based Dermatologist",
        image: "https://x9577rfv3h.ufs.sh/f/CyUXOvcaMWOVDuenL7aWfHF17nLuSvzrOTmoYGeJZ2QBiKk4",
        imageAlt: "Life Care Dermatology Clinic",
        href: "https://lifecareskin.ae/"
    },
    {
        id: 3,
        title: "Kush Concert Series",
        description: "A Music Event and Entertainment Hub for Music Event Lovers",
        image: "https://x9577rfv3h.ufs.sh/f/CyUXOvcaMWOVx9EXxh0BAC5sNnwvOVFBKH3Q4lqSMz8EZTg0",
        imageAlt: "Kush Concret Series",
        href: "https://kushconcertseries.com"
    },
    {
        id: 4,
        title: "Serum Vst",
        description: "A VST plugin for the Serum plugin host, built with the JUCE framework",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2018-7aJ5wJL6KLjjh3mAGvP4cDAtShZnaE.png",
        imageAlt: "Serum Vst Interface",
        href: "https://serumvst.com",
    },
    {
        id: 5,
        title: "Tunu AI",
        description: "A childs read-along companion who listens, teaches, and transforms them into an enthusiastic reader.",
        image: "https://x9577rfv3h.ufs.sh/f/CyUXOvcaMWOVDEqEOBEaWfHF17nLuSvzrOTmoYGeJZ2QBiKk",
        imageAlt: "Tunu AI",
        href: "https://tunu.ai",
        comingSoon: true,
    },
]

export default function Projects() {
    return (
        <section className="w-full py-16 sm:py-20 bg-background container max-w-7xl mx-auto">
            <div className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12">
                    {/* Left Column - Contains Header and Projects */}
                    <div className="space-y-12">
                        {/* Header Section */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold"
                            >
                                What I&apos;ve been working on
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="mt-4 text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground"
                            >
                                I like to stay busy and always have a project in the works. Take a look at some of the applications,
                                and companies I&apos;ve dedicated my time to.
                            </motion.p>
                        </div>

                        {/* Left Column Projects */}
                        {projects
                            .slice(0, 2)
                            .map(
                                (project, index) =>
                                    !project.comingSoon && <ProjectCard key={project.id} {...project} index={index} />,
                            )}
                    </div>

                    {/* Right Column - Starts Higher */}
                    <div className="space-y-12 md:mt-24">
                        {projects
                            .slice(2, 4)
                            .map(
                                (project, index) =>
                                    !project.comingSoon && <ProjectCard key={project.id} {...project} index={index + 2} />,
                            )}
                    </div>
                </div>

                {/* Coming Soon Project - Full Width */}
                {projects.map(
                    (project) =>
                        project.comingSoon && (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 flex flex-col items-center mt-12"
                            >
                                <Card className="group overflow-hidden w-full">
                                    <motion.a
                                        href={project.href}
                                        className="block relative w-full aspect-video overflow-hidden"
                                        whileHover={{ scale: 0.98 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </motion.a>
                                </Card>
                                <div className="mt-6 text-center max-w-2xl mx-auto">
                                    <div className="flex items-center justify-center gap-3">
                                        <motion.h3
                                            className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                    </div>
                                    <motion.p
                                        className="my-3 text-sm sm:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-muted-foreground"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    <Badge variant="outline" className="border-primary text-primary py-2 px-4">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </motion.div>
                        ),
                )}
            </div>
        </section>
    )
}

interface ProjectCardProps {
    title: string
    description: string
    image: string
    imageAlt: string
    href: string
    comingSoon?: boolean
    index: number
}

function ProjectCard({ title, description, image, imageAlt, href, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="space-y-6"
        >
            <Card className="group overflow-hidden">
                <motion.a
                    href={href}
                    className="block relative w-full aspect-video overflow-hidden"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </motion.a>
            </Card>

            <div className="space-y-3">
                <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold group-hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                >
                    <a href="#" className="inline-flex items-center gap-2 hover:text-muted-foreground transition-colors">
                        {title}
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
                    </a>
                </motion.h3>
                <motion.p
                    className="text-sm sm:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    )
}


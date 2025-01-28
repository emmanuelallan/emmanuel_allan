"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { AudioLines, Binary, Clapperboard, Tangent } from "lucide-react"

import GlobeLightImage from "@/assets/images/icons/globe_light.svg"
import GlobeDarkImage from "@/assets/images/icons/globe_dark.svg"
import HeroAvatar from "@/assets/images/bgs/hero_pic.svg"

export default function Hero() {
    const { theme } = useTheme()

    return (
        <div className="text-center container max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-9.2rem)]">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="flex flex-col items-center gap-7 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        className="flex items-center sm:gap-2.5 gap-2 text-sm sm:text-base font-bold font-satoshi"
                    >
                        <Image src={theme === "dark" ? GlobeDarkImage : GlobeLightImage} alt="Globe" width={30} height={30} />
                        based in Nairobi, Kenya
                    </motion.div>

                    <h1 className="sm:text-5xl text-3xl font-bold mb-4 sm:leading-[4rem] leading-[3rem]">
                        Hi there, I&apos;m Emmanuel. <br /> Full-Stack Developer.
                    </h1>
                </div>

                <div className="relative sm:mt-16 mt-8 max-w-[60rem] mx-auto">
                    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-20 gap-10 relative">
                        <div className="sm:space-y-14 space-y-6 sm:block flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sm:transform-none transform hover:scale-105 transition-transform sm:-mr-10 mr-0"
                            >
                                <ServiceCard
                                    title="Software Development"
                                    description="Streamlining business processes through custom software and scripts."
                                    icon={<Binary className="w-4 h-4 text-teal" />}
                                    align="right"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="sm:transform-none transform hover:scale-105 transition-transform"
                            >
                                <ServiceCard
                                    title="Content Creation"
                                    description="Educating and inspiring through tutorials, vlogs, and creative content."
                                    icon={<Clapperboard className="w-4 h-4 text-teal" />}
                                    align="right"
                                />
                            </motion.div>
                        </div>

                        <div className="flex justify-center sm:order-none order-first">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <Image
                                    src={HeroAvatar || "/placeholder.svg"}
                                    alt="Profile"
                                    width={289}
                                    height={307}
                                    className="relative z-10 -mb-9"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent blur-2xl -z-10 sm:hidden" />
                            </motion.div>
                        </div>

                        <div className="sm:space-y-14 space-y-6 sm:block flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sm:transform-none transform hover:scale-105 transition-transform sm:-ml-10 ml-0"
                            >
                                <ServiceCard
                                    title="Product Design"
                                    description="Creating innovative products that solve real-world problems."
                                    icon={<Tangent className="w-4 h-4 text-teal" />}
                                    align="left"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="sm:transform-none transform hover:scale-105 transition-transform"
                            >
                                <ServiceCard
                                    title="AudioUX"
                                    description="Designing auditory identities for brands, businesses and products."
                                    icon={<AudioLines className="w-4 h-4 text-teal" />}
                                    align="left"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ServiceCard({
    title,
    description,
    icon,
    align,
}: { title: string; description: string; icon: React.ReactNode; align?: "left" | "right" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`flex flex-col ${align === "left" ? "sm:items-start items-center" : "sm:items-end items-center"}
            sm:bg-transparent bg-white/5 sm:p-0 px-6 py-2 sm:rounded-none rounded-xl sm:border-0 border border-white/10`}
        >
            <div
                className={`flex items-center sm:gap-4 gap-2 whitespace-nowrap sm:mb-5 mb-3 ${align === "left" ? "sm:flex-row-reverse flex-row" : ""}`}
            >
                <h3 className="sm:text-xl text-lg font-bold">{title}</h3>
                <div className="sm:p-2.5 p-2 rounded-lg bg-indigo-500/10 text-indigo-500">{icon}</div>
            </div>
            <p
                className={`sm:text-sm text-xs text-muted-foreground font-satoshi font-semibold max-w-xs mx-auto sm:max-w-none ${align === "left" ? "sm:text-left text-center" : "sm:text-right text-center"}`}
            >
                {description}
            </p>
        </motion.div>
    )
}


"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

import AvatarImage from "@/assets/images/bgs/avatar.svg"

const selectedProjects = [
    { name: "Import Module: Logic Transport Management System", link: "https://www.logic.fyi/" },
    { name: "Christian Beats: Beats Marketplace", link: "https://christian-beats.com/" },
    { name: "Life Care Skin: Dermatology Clinic", link: "https://lifecareskin.ae/" },
    { name: "Kush Concert Series: Music Festival", link: "https://kushconcertseries.com/" },
]

const socials = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/emmanuelallan", icon: "linkedin" },
    { name: "Github", link: "https://github.com/emmanuelallan", icon: "github" },
    { name: "Twitter", link: "https://x.com/imma_allan", icon: "twitter-x" },
    { name: "Tiktok", link: "http://tiktok.com/@maxthestranger", icon: "tiktok" },
    { name: "Youtube", link: "http://youtube.com/@maxthestranger", icon: "youtube" },
]

export default function Footer() {
    const [copied, setCopied] = useState(false)
    const email = "imma.allan@gmail.com"

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy email:", err)
        }
    }

    return (
        <footer className="relative w-full bg-black text-white">
            <div className="container max-w-7xl mx-auto px-4 pt-20 sm:pt-32 pb-8">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold"
                            >
                                EMMANUEL ALLAN
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-gray-400"
                            >
                                Full Stack Developer, currently crafting experiences at Logic Solutions.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                        >
                            <Image src={AvatarImage} alt="Emmanuel Allan Avatar" fill className="object-contain" />
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12 sm:space-y-16">
                        <div className="space-y-8">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl font-bold max-w-lg"
                            >
                                Think I&apos;d be a good fit for your team or project? Let&apos;s connect.
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-4"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto text-base sm:text-lg h-auto py-3 px-6 bg-white/5 hover:bg-white/10 hover:text-white border-white/10"
                                    onClick={handleCopyEmail}
                                >
                                    <span className="mr-2">{email}</span>
                                    <Copy className="w-4 h-4" />
                                </Button>
                                {copied && (
                                    <div className="text-sm text-gray-400 py-2 px-4 rounded-md inline-block">
                                        Email copied!
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <h4 className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">Selected Projects</h4>
                                <ul className="space-y-2">
                                    {selectedProjects.map((project) => (
                                        <li key={project.name}>
                                            <a href={project.link} className="text-base sm:text-lg hover:text-muted-foreground transition-colors">
                                                {project.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h4 className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">Socials</h4>
                                <ul className="space-y-2">
                                    {socials.map((social) => (
                                        <li key={social.name}>
                                            <a href={social.link} className="text-base sm:text-lg hover:text-muted-foreground transition-colors flex items-center gap-2">
                                                <i className={`bi bi-${social.icon}`}></i>
                                                {social.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Credits */}
                <div className="sm:mt-0 mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>DESIGNED & BUILT FROM THE DESK OF EMMANUEL ALLAN</p>
                    <p>&copy; {new Date().getFullYear()} Emmanuel Allan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import useSound from "use-sound"
import { Menu } from "lucide-react"

const navItems = ["Projects", "Articles", "Resume", "Uses", "Shop", "My dear shelter"]

export default function Navigation() {
    const [playHover] = useSound("/sounds/hover.mp3", { volume: 0.2 })
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="w-full">
            <nav className="w-full bg-primary border-y border-border">
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center items-center gap-8 px-8 py-4">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors py-3 px-4 uppercase"
                            onHoverStart={() => playHover()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: i * 0.1
                            }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <motion.button
                        className="w-full flex items-center justify-center p-4 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Menu className="w-6 h-6" />
                    </motion.button>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="absolute top-full left-0 right-0 overflow-hidden bg-primary/95 backdrop-blur-sm z-50"
                            >
                                <div className="flex flex-col items-center gap-4 p-4">
                                    {navItems.map((item, i) => (
                                        <motion.a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                                            onHoverStart={() => playHover()}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}


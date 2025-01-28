"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import useSound from "use-sound"
import { Menu } from "lucide-react"

const navItems = ["Projects", "Articles", "Resume", "Uses", "Youtube", "My dear shelter"]

export default function Navigation() {
    const [playHover] = useSound("/sounds/hover.mp3", { volume: 0.2 })
    const [isSticky, setIsSticky] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [hasReachedNav, setHasReachedNav] = useState(false)

    useEffect(() => {
        // Get initial height to prevent layout shifts
        if (wrapperRef.current && navRef.current) {
            wrapperRef.current.style.height = `${navRef.current.offsetHeight}px`
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Add a small buffer to prevent flickering
                const buffer = 10
                const boundingRect = entry.boundingClientRect

                if (entry.isIntersecting) {
                    setHasReachedNav(true)
                }

                if (hasReachedNav) {
                    // Only set sticky if we're clearly past the navigation
                    setIsSticky(boundingRect.top < -buffer)
                }
            },
            {
                // Use rootMargin to create a buffer zone
                rootMargin: "-1px 0px 0px 0px",
                threshold: [0, 1],
            },
        )

        if (navRef.current) {
            observer.observe(navRef.current)
        }

        return () => observer.disconnect()
    }, [hasReachedNav])

    const stickyNavClasses = `
  fixed top-0 left-0 right-0 z-50 px-4 py-2 
  transform transition-transform duration-300 ease-out
  ${isSticky ? "translate-y-0" : "-translate-y-full"}
`

    return (
        <div ref={wrapperRef} className="relative">
            <div
                ref={navRef}
                className={`
          w-full
          ${isSticky ? "invisible" : ""}
        `}
            >
                <motion.div
                    className={`
            w-full
            ${isSticky ? "fixed top-0 left-0 right-0 z-50 px-4 py-2 translate-y-0" : "relative"}
          `}
                    initial={false}
                    animate={{
                        y: isSticky ? 0 : -1,
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        },
                    }}
                >
                    <div
                        className={`
            mx-auto transition-all duration-300 ease-in-out
            ${isSticky ? "max-w-3xl" : "w-full"}
          `}
                    >
                        <nav
                            className={`
                w-full transition-all duration-300 ease-in-out flex justify-center items-center rounded-b-3xl
                ${isSticky ? "bg-black/40 backdrop-blur-xl shadow-lg rounded-full border border-white/10" : "bg-primary"
                                }
              `}
                        >
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex justify-center items-center gap-8 px-8 py-4">
                                {navItems.map((item, i) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className={`
                      text-sm font-medium text-white/90 hover:text-white transition-colors py-3 px-4 rounded
                      ${isSticky ? "text-[15px]" : "text-base"}
                    `}
                                        onHoverStart={() => playHover()}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
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
                </motion.div>
            </div>
            {isSticky && (
                <div className={stickyNavClasses}>
                    <div className="mx-auto max-w-3xl">
                        <nav className="w-full bg-black/40 backdrop-blur-xl shadow-lg rounded-full border border-white/10">
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex justify-center items-center gap-12 px-8 py-4">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm font-medium text-white/90 hover:text-white transition-colors text-[15px]"
                                        onHoverStart={() => playHover()}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
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
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}


"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useThemeSound } from "@/hooks/use-theme-sound"
import LogoLightImage from "@/assets/images/logo_light.svg"
import LogoDarkImage from "@/assets/images/logo_dark.svg"

export function Header() {
    const { theme, setTheme } = useTheme()
    const { playOn, playOff } = useThemeSound()

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
            playOff()
        } else {
            setTheme("dark")
            playOn()
        }
    }

    return (
        <header className="w-full flex justify-between items-center container sm:pt-6 pt-4 max-w-7xl mx-auto">
            <motion.a href="/" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
                <Image src={theme === "dark" ? LogoDarkImage : LogoLightImage} alt="Emmanuel Allan" width={50} height={44} className="sm:w-12 sm:h-11 w-10 h-9" />
            </motion.a>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                {/* make it have glass effect */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="sm:p-4 p-3 rounded-full bg-foreground text-background border border-foreground"
                >
                    {theme === "dark" ? <Sun className="sm:w-4 sm:h-4 w-3 h-3" /> : <Moon className="sm:w-4 sm:h-4 w-3 h-3" />}
                </motion.button>
            </motion.div>
        </header>
    )
}


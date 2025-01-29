"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Clock } from "lucide-react"
import { format } from "date-fns"

const articles = [
    {
        id: 1,
        title: "Salesforce to purchase workplace-chat tool Slack for nearly $28 billion.",
        description: "Slack has become indispensable for many businesses operating remotely during the pandemic.",
        readTime: 8,
        date: "2023-12-05",
        link: "#",
    },
    {
        id: 2,
        title: "Biden's economic team poised to challenge GOP's renewed debt worries.",
        description: "The president's ultimatum targeting the digital protections, known as Section 230.",
        readTime: 6,
        date: "2023-12-05",
        link: "#",
    },
    {
        id: 3,
        title: "More than half of emergency small-business funds went to larger businesses.",
        description:
            "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        readTime: 5,
        date: "2023-11-28",
        link: "#",
    },
]

export default function Articles() {
    return (
        <section className="relative w-full py-16 sm:py-20 overflow-hidden container max-w-7xl mx-auto">

            <div className="px-4">
                <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] 3xl:grid-cols-[500px_1fr] gap-12 sm:gap-16">
                    {/* Left Column - What's New */}
                    <div className="space-y-4 sm:space-y-6 md:sticky md:top-24 self-start">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold"
                        >
                            What&apos;s New?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground"
                        >
                            Sometimes I write about my experiences and learnings. If you are interested, you can read my articles below.
                        </motion.p>
                    </div>

                    {/* Right Column - Articles */}
                    <div className="space-y-8">
                        {articles.map((article, index) => (
                            <ArticleCard key={article.id} {...article} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ArticleCardProps {
    title: string
    description: string
    readTime: number
    date: string
    link: string
    index: number
}

function ArticleCard({ title, description, readTime, date, link, index }: ArticleCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <motion.a
                href={link}
                className="grid gap-4 sm:gap-6 md:grid-cols-[1fr_auto] items-start p-6 sm:p-8 rounded-xl transition-colors hover:bg-muted/50"
                whileHover={{ scale: 0.995 }}
            >
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm sm:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{readTime} Mins Read</span>
                        </div>
                        <span>•</span>
                        <time dateTime={date}>{format(new Date(date), "dd MMM yy")}</time>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold group-hover:text-muted-foreground transition-colors">
                            {title}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-muted-foreground">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex items-start md:items-center md:self-center">
                    <span className="inline-flex items-center text-sm sm:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl font-medium text-primary">
                        Learn More
                        <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                </div>
            </motion.a>
        </motion.article>
    )
}



import { Trophy, Medal, Star, Target, Award, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const achievements = [
    {
        category: "Academics",
        icon: Star,
        title: "District Toppers",
        year: "2024",
        description: "Our students secured top 3 ranks in the district SSLC examinations.",
        stats: "100% Pass Result"
    },
    {
        category: "Sports",
        icon: Trophy,
        title: "Regional Basketball Champions",
        year: "2024",
        description: "The senior boys' basketball team won the inter-school regional championship.",
        stats: "Gold Medal"
    },
    {
        category: "Cultural",
        icon: Medal,
        title: "State Dance Competition",
        year: "2023",
        description: "First prize in the state-level folk dance group competition.",
        stats: "1st Place"
    },
    {
        category: "Innovation",
        icon: Target,
        title: "Young Scientists Award",
        year: "2023",
        description: "Student project on sustainable irrigation selected for national exhibition.",
        stats: "Top 10"
    },
    {
        category: "Sports",
        icon: Trophy,
        title: "Athletics Meet",
        year: "2023",
        description: "Overall champions at the Taluk level annual sports meet.",
        stats: "15 Gold Medals"
    },
    {
        category: "Academics",
        icon: Award,
        title: "Best School Award",
        year: "2022",
        description: "Recognized as the best performing school in the educational block.",
        stats: "Excellence Award"
    }
];

const Achievements = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 bg-hero-gradient">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                            Hall of Fame
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                            Our Achievements
                        </h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Celebrating the dedication, talent, and hard work of our students and faculty. A testament to our pursuit of excellence in every field.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-secondary/50"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary">
                                        <Calendar className="w-3 h-3" />
                                        {item.year}
                                    </span>
                                </div>

                                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="pt-4 border-t border-border flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <span className="text-sm font-bold text-primary">
                                        {item.stats}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-muted rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                                Join Our Legacy of Success
                            </h2>
                            <p className="text-muted-foreground mb-0">
                                At Saint Thomas, every student is encouraged to discover their potential and reach for the stars.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Achievements;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Book, Clock } from "lucide-react";
import laboratoryImage from "@/assets/laboratory.jpg";

const HighSchool = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-hero-gradient">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                            Academic Programs
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                            High School
                        </h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Preparing students for excellence in board examinations and future academic pursuits through rigorous and focused mentorship.
                        </p>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Content */}
                        <div className="space-y-8">
                            <div className="bg-card p-8 rounded-2xl shadow-soft">
                                <h3 className="font-display text-2xl font-bold mb-6">Program Overview</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <span>Classes: 8th to 10th Standard</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <span>Timings: 8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Book className="w-5 h-5" />
                                        </div>
                                        <span>Board: Karnataka State Board (SSLC)</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Program Objectives</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Comprehensive coverage of SSLC syllabus",
                                        "Regular unit tests and preparatory examinations",
                                        "Intensive coaching for Mathematics and Science",
                                        "Career guidance and counseling sessions",
                                        "Development of self-study and time management skills",
                                        "Laboratory practicals for hands-on experience"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Subjects</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "English",
                                        "Kannada",
                                        "Hindi",
                                        "Mathematics",
                                        "Physics",
                                        "Chemistry",
                                        "Biology",
                                        "History & Civics",
                                        "Geography & Economics",
                                        "Information Technology"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 text-muted-foreground bg-muted p-3 rounded-lg">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button variant="hero" asChild>
                                    <Link to="/admissions">
                                        Apply for Admission
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative">
                            <div className="sticky top-24">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium mb-6">
                                    <img
                                        src={laboratoryImage}
                                        alt="High School Science Lab"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-secondary/10 p-6 rounded-2xl">
                                    <h4 className="font-bold text-foreground mb-2">Exam Preparation</h4>
                                    <p className="text-sm text-muted-foreground">
                                        We ensure students are confident and well-prepared for their board exams through a structured revision schedule and personalized attention to learning gaps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HighSchool;

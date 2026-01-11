
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Book, Clock } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import { AdmissionForm } from "@/components/AdmissionForm";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const PrimarySchool = () => {
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
                            Academic Programs
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                            Primary School
                        </h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Building a strong academic foundation with a focus on conceptual understanding, values, and skill development.
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
                                        <span>Classes: 1st to 7th Standard</span>
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
                                        <span>Curriculum: State Board</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Core Subjects</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Kannada (First Language)",
                                        "English",
                                        "Hindi",
                                        "Mathematics",
                                        "General Science",
                                        "Social Science",
                                        "Environmental Studies (EVS)",
                                        "Computer Science",
                                        "Physical Education",
                                        "Value Education"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 text-muted-foreground bg-muted p-3 rounded-lg">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Learning Approach</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our primary school curriculum is designed to move beyond rote learning. We emphasize active participation, critical thinking, and application of knowledge. Students engage in project-based learning, interactive classroom sessions, and regular assessments to track their comprehensive growth.
                                </p>
                            </div>

                            <div className="pt-6">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="hero">
                                            Apply for Admission
                                            <ChevronRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] border-none bg-card p-0 overflow-hidden rounded-2xl">
                                        <div className="bg-hero-gradient p-8 text-white text-center">
                                            <DialogHeader>
                                                <DialogTitle className="text-3xl font-display font-bold">Online Admission</DialogTitle>
                                            </DialogHeader>
                                        </div>
                                        <div className="p-8 max-h-[70vh] overflow-y-auto">
                                            <AdmissionForm />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative">
                            <div className="sticky top-24">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium mb-6">
                                    <img
                                        src={classroomImage}
                                        alt="Primary School Classroom"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-secondary/10 p-6 rounded-2xl">
                                    <h4 className="font-bold text-foreground mb-2">Focus Areas</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Communication Skills (LSRW)</li>
                                        <li>• Mathematical & Logical Reasoning</li>
                                        <li>• Scientific Temperament</li>
                                        <li>• Digital Literacy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrimarySchool;

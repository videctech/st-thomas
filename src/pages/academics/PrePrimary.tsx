
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

const PrePrimary = () => {
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
                            Pre-Primary Education
                        </h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Nurturing curiosity and creativity in our youngest learners through play-based Montessori methodology.
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
                                        <span>Classes: Nursery, LKG, UKG</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <span>Timings: 8:30 AM - 12:30 PM</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Book className="w-5 h-5" />
                                        </div>
                                        <span>Methodology: Montessori & Play-way</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Curriculum Highlights</h3>
                                <ul className="space-y-3">
                                    {[
                                        "English Language Development (Phonics based)",
                                        "Basic Numeracy & Mathematical concepts",
                                        "General Knowledge & Environmental Awareness",
                                        "Art, Craft & Creative Expression",
                                        "Rhymes, Music & Storytelling",
                                        "Physical Development & Gross Motor Skills"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
                                        alt="Pre-Primary Classroom"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-secondary/10 p-6 rounded-2xl">
                                    <h4 className="font-bold text-foreground mb-2">Why Choose Our Pre-Primary?</h4>
                                    <p className="text-sm text-muted-foreground">
                                        We provide a safe, loving, and stimulating environment where each child is encouraged to explore, question, and discover at their own pace.
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

export default PrePrimary;

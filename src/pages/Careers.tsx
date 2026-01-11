import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Send, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CareerApplyForm } from "@/components/CareerApplyForm";
import { useState } from "react";

const jobs = [
    {
        title: "TGT Mathematics",
        department: "Academics",
        location: "Saint Thomas Campus",
        type: "Full-Time",
        experience: "3+ Years",
        description: "Seeking a passionate Mathematics teacher for middle and high school classes. Must have strong conceptual clarity and engaging teaching methods."
    },
    {
        title: "Computer Science Instructor",
        department: "Academics",
        location: "Saint Thomas Campus",
        type: "Full-Time",
        experience: "2+ Years",
        description: "Join our tech department to teach modern computing concepts, coding, and digital literacy to primary and secondary students."
    },
    {
        title: "Administrative Assistant",
        department: "Administration",
        location: "Front Office",
        type: "Full-Time",
        experience: "1+ Years",
        description: "Looking for a well-spoken administrative professional to handle parent queries, office coordination, and documentation."
    }
];

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-cream/30">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <Badge variant="outline" className="mb-4 border-secondary text-secondary px-4 py-1">Join Our Team</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
                    Shape the Future of <span className="text-secondary">Education</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    At Saint Thomas, we believe in empowering educators and professionals who are passionate about nurturing young minds. Explore our open positions and start your journey with us.
                </p>
            </section>

            {/* Job Listings */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-navy/5 overflow-hidden">
                            <CardHeader className="bg-navy/5 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge className="bg-secondary/20 text-secondary border-none group-hover:bg-white/20 group-hover:text-white">
                                        {job.department}
                                    </Badge>
                                    <Clock className="w-4 h-4 opacity-60" />
                                </div>
                                <CardTitle className="text-xl font-display">{job.title}</CardTitle>
                                <CardDescription className="group-hover:text-gray-300">
                                    {job.type} • {job.experience} Exp
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                    <MapPin className="w-4 h-4 text-secondary" />
                                    {job.location}
                                </div>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    {job.description}
                                </p>
                                <Dialog open={isDialogOpen && selectedJob === job.title} onOpenChange={(open) => {
                                    setIsDialogOpen(open);
                                    if (open) setSelectedJob(job.title);
                                }}>
                                    <DialogTrigger asChild>
                                        <Button className="w-full bg-navy hover:bg-navy-dark group-hover:bg-secondary group-hover:text-white transition-all">
                                            Apply Now <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-display text-navy flex items-center gap-2">
                                                <FileText className="text-secondary" /> Application Form
                                            </DialogTitle>
                                            <DialogDescription>
                                                You are applying for the position of <span className="text-navy font-bold">{job.title}</span>
                                            </DialogDescription>
                                        </DialogHeader>
                                        <CareerApplyForm jobTitle={job.title} onSuccess={() => setIsDialogOpen(false)} />
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* General Inquiry */}
                <div className="mt-20 bg-navy rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <Briefcase className="w-12 h-12 text-secondary mx-auto mb-6" />
                        <h2 className="text-3xl font-display font-bold mb-4">Don't see a perfect match?</h2>
                        <p className="text-gray-300 max-w-xl mx-auto mb-8">
                            We are always looking for talented individuals to join our community. Send your CV to careers@stthomas.edu for future opportunities.
                        </p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-secondary hover:bg-secondary-dark text-navy font-bold px-8 py-6 rounded-xl">
                                    Send General Application
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-display text-navy flex items-center gap-2">
                                        <FileText className="text-secondary" /> Application Form
                                    </DialogTitle>
                                    <DialogDescription>
                                        Share your details with us for future opportunities.
                                    </DialogDescription>
                                </DialogHeader>
                                <CareerApplyForm onSuccess={() => setIsDialogOpen(false)} />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;

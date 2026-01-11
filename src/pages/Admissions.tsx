import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, CheckCircle, Download, ChevronRight, Clock, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import { AdmissionForm } from "@/components/AdmissionForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const admissionSteps = [
  {
    step: 1,
    title: "Seat Enquiry",
    description: "Inquire about seat availability for the desired class and academic session by contacting the school office.",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Students participate in a proficiency assessment to evaluate their academic foundation and readiness.",
  },
  {
    step: 3,
    title: "Parent Interview",
    description: "A collaborative interactive session with parents to align on educational goals and student progress.",
  },
  {
    step: 4,
    title: "Document Verification & Submit Application",
    description: "Final verification of all required documents followed by the formal submission of the application form.",
  },
];

const documents = [
  "Birth Certificate (Original & Photocopy)",
  "Transfer Certificate from Previous School",
  "Report Card of Last Academic Year",
  "4 Passport-size Photographs",
  "Aadhar Card of Student",
  "Address Proof (Utility Bill/Passport)",
  "Parent's ID Proof",
];


const importantDates = [
  { event: "Admission Form Available", date: "January 1, 2025" },
  { event: "Last Date for Submission", date: "March 15, 2025" },
  { event: "Entrance Assessment", date: "March 22-24, 2025" },
  { event: "Results Declaration", date: "April 1, 2025" },
  { event: "Academic Session Begins", date: "April 15, 2025" },
];

const Admissions = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-hero-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
              Admissions 2025-26
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Begin Your Journey With Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Applications are now open for the academic year 2025-26. Join our community of learners and experience the Saint Thomas difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="xl">
                    Apply Online Now
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] border-none bg-card p-0 overflow-hidden rounded-2xl">
                  <div className="bg-hero-gradient p-8 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-display font-bold">Online Admission</DialogTitle>
                      <p className="text-white/80 mt-2">Join Saint Thomas English Convent School for the 2025-26 Academic Year.</p>
                    </DialogHeader>
                  </div>
                  <div className="p-8 max-h-[70vh] overflow-y-auto">
                    <AdmissionForm />
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="heroOutline" size="xl">
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-medium p-8 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Now Open</h3>
                <p className="text-muted-foreground text-sm">Admissions 2025-26</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Limited Seats</h3>
                <p className="text-muted-foreground text-sm">Apply Early</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">All Classes</h3>
                <p className="text-muted-foreground text-sm">Nursery to Class XII</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How to Apply</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground">
              A simple and transparent process to welcome new students to our community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {admissionSteps.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg">
                    {item.step}
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="bg-card p-6 rounded-xl shadow-soft flex-1 hover:shadow-medium transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Checklist</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Required Documents
              </h2>
              <p className="text-muted-foreground mb-8">
                Please ensure you have the following documents ready for the admission process.
              </p>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Key Dates</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Important Dates
              </h2>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-soft">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-foreground">{item.event}</span>
                    </div>
                    <p className="text-secondary font-display font-bold text-lg pl-8">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Take the first step towards quality education. Apply now or schedule a campus visit to learn more about Saint Thomas English Convent School.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="xl">
                    Apply Online
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] border-none bg-card p-0 overflow-hidden rounded-2xl">
                  <div className="bg-hero-gradient p-8 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-display font-bold">Online Admission</DialogTitle>
                      <p className="text-white/80 mt-2">Join Saint Thomas English Convent School for the 2025-26 Academic Year.</p>
                    </DialogHeader>
                  </div>
                  <div className="p-8 max-h-[70vh] overflow-y-auto">
                    <AdmissionForm />
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

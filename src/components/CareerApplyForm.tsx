import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { User, Phone, Mail, Briefcase, FileText, Send, Upload } from "lucide-react";

export const CareerApplyForm = ({ jobTitle, onSuccess }: { jobTitle?: string, onSuccess?: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Application Sent!", {
            description: "Our HR team will review your CV and contact you shortly.",
        });

        setIsSubmitting(false);
        if (onSuccess) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="applicantName" className="flex items-center gap-2 text-foreground/80">
                    <User className="w-4 h-4 text-secondary" /> Full Name
                </Label>
                <Input id="applicantName" placeholder="Enter your full name" required className="bg-muted/50 border-border/50 focus:border-secondary/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground/80">
                        <Mail className="w-4 h-4 text-secondary" /> Email Address
                    </Label>
                    <Input id="email" type="email" placeholder="email@example.com" required className="bg-muted/50 border-border/50 focus:border-secondary/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground/80">
                        <Phone className="w-4 h-4 text-secondary" /> Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="bg-muted/50 border-border/50 focus:border-secondary/50" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="position" className="flex items-center gap-2 text-foreground/80">
                    <Briefcase className="w-4 h-4 text-secondary" /> Position Applied For
                </Label>
                <Input
                    id="position"
                    defaultValue={jobTitle}
                    placeholder="e.g. TGT Mathematics"
                    required
                    className="bg-muted/50 border-border/50 focus:border-secondary/50"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="resume" className="flex items-center gap-2 text-foreground/80">
                    <Upload className="w-4 h-4 text-secondary" /> Upload Resume/CV
                </Label>
                <div className="relative">
                    <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="bg-muted/50 border-border/50 focus:border-secondary/50 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-secondary hover:file:bg-secondary/20 cursor-pointer"
                    />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 italic">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="coverLetter" className="flex items-center gap-2 text-foreground/80">
                    <FileText className="w-4 h-4 text-secondary" /> Brief Cover Letter / Experience Summary
                </Label>
                <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you are a good fit for this role..."
                    className="bg-muted/50 border-border/50 focus:border-secondary/50 resize-none"
                    rows={4}
                />
            </div>

            <Button type="submit" className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-6 group transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70" disabled={isSubmitting}>
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Application...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        Send Application
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                )}
            </Button>
        </form>
    );
};

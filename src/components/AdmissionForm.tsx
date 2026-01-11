import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { GraduationCap, User, Phone, MapPin, BookOpen, Send } from "lucide-react";

export const AdmissionForm = ({ onSuccess }: { onSuccess?: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Application Submitted!", {
            description: "Our admissions team will contact you shortly.",
        });

        setIsSubmitting(false);
        if (onSuccess) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="studentName" className="flex items-center gap-2 text-foreground/80">
                        <User className="w-4 h-4 text-secondary" /> Student's Full Name
                    </Label>
                    <Input id="studentName" placeholder="Enter student's name" required className="bg-muted/50 border-border/50 focus:border-secondary/50 focus:ring-secondary/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="grade" className="flex items-center gap-2 text-foreground/80">
                        <GraduationCap className="w-4 h-4 text-secondary" /> Grade Applying For
                    </Label>
                    <Select required>
                        <SelectTrigger className="bg-muted/50 border-border/50 focus:border-secondary/50">
                            <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="playgroup">Play Group</SelectItem>
                            <SelectItem value="lkg">LKG</SelectItem>
                            <SelectItem value="ukg">UKG</SelectItem>
                            {[...Array(10)].map((_, i) => (
                                <SelectItem key={i + 1} value={`class-${i + 1}`}>
                                    Class {i + 1}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="parentName" className="flex items-center gap-2 text-foreground/80">
                        <User className="w-4 h-4 text-secondary" /> Parent's Name
                    </Label>
                    <Input id="parentName" placeholder="Enter parent's name" required className="bg-muted/50 border-border/50 focus:border-secondary/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground/80">
                        <Phone className="w-4 h-4 text-secondary" /> Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="bg-muted/50 border-border/50 focus:border-secondary/50" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2 text-foreground/80">
                    <MapPin className="w-4 h-4 text-secondary" /> Address / Place
                </Label>
                <Input id="address" placeholder="Enter your full address" required className="bg-muted/50 border-border/50 focus:border-secondary/50" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="prevSchool" className="flex items-center gap-2 text-foreground/80">
                    <BookOpen className="w-4 h-4 text-secondary" /> Previous School (if any)
                </Label>
                <Input id="prevSchool" placeholder="Name of previous school" className="bg-muted/50 border-border/50 focus:border-secondary/50" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/80">Additional Comments</Label>
                <Textarea id="message" placeholder="Any special requirements or questions?" className="bg-muted/50 border-border/50 focus:border-secondary/50 resize-none" rows={3} />
            </div>

            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-6 group transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70" disabled={isSubmitting}>
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing Application...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        Submit Application
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                )}
            </Button>
        </form>
    );
};

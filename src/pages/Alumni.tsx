
import { useState } from "react";
import { Users, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Send, ExternalLink, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const alumniSpotlight = [
    {
        name: "Dr. Arun Kumar",
        batch: "Batch of 2008",
        profession: "Senior Surgeon, AIIMS",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
        quote: "Saint Thomas laid the foundation for my medical career. The discipline and value system I learned here guide me every day.",
        achievements: ["Medical Excellence Award 2022", "Published 15+ Research Papers"]
    },
    {
        name: "Priya Sharma",
        batch: "Batch of 2012",
        profession: "Software Architect, Google",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
        quote: "The creative freedom and early exposure to technology at Saint Thomas inspired me to pursue engineering.",
        achievements: ["Innovation Lead", "Tech Mentor for Women in STEM"]
    },
    {
        name: "Capt. Rohan V.",
        batch: "Batch of 2010",
        profession: "Indian Army",
        image: "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?auto=format&fit=crop&q=80&w=400&h=400",
        quote: "The leadership opportunities I had as a prefect shaped my personality. Honored to serve the nation.",
        achievements: ["Shaurya Chakra Recipient", "Mountain Warfare Specialist"]
    }
];

const Alumni = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        batch: "",
        currentRole: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Registration Successful!", {
            description: "Welcome to the Saint Thomas Alumni Network. We'll be in touch soon.",
        });
        setFormData({ name: "", email: "", batch: "", currentRole: "", message: "" });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 bg-hero-gradient">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                            Once a Thomasite, Always a Thomasite
                        </span>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                            Our Global Alumni Network
                        </h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                            Join over 5,000+ graduates making a difference across the world. Reconnect, reminisce, and inspire the next generation.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button variant="hero" size="xl" onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Join the Network
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-card relative -mt-16 z-20">
                <div className="container mx-auto px-4">
                    <div className="bg-card rounded-2xl shadow-medium p-8 grid md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4 border-r border-border last:border-0 pr-8">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-foreground">5000+</h3>
                                <p className="text-muted-foreground text-sm">Active Alumni</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-r border-border last:border-0 pr-8">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-foreground">250+</h3>
                                <p className="text-muted-foreground text-sm">Industry Leaders</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-r border-border last:border-0 pr-8">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-foreground">30+</h3>
                                <p className="text-muted-foreground text-sm">Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alumni Spotlight */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
                        <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">
                            Alumni Spotlight
                        </h2>
                        <p className="text-muted-foreground">
                            Highlighting the extraordinary paths our students have taken since graduation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {alumniSpotlight.map((alumnus, index) => (
                            <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={alumnus.image} alt={alumnus.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-display font-bold text-xl">{alumnus.name}</h3>
                                        <p className="text-white/80 text-sm">{alumnus.batch}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-secondary font-semibold text-sm mb-3 uppercase tracking-wide">{alumnus.profession}</p>
                                    <div className="relative mb-6">
                                        <MessageSquare className="w-8 h-8 text-secondary/10 absolute -top-2 -left-2" />
                                        <p className="italic text-muted-foreground relative z-10 pl-4">{alumnus.quote}</p>
                                    </div>
                                    <div className="space-y-2">
                                        {alumnus.achievements.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                                                <Award className="w-4 h-4 text-secondary" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stay Connected Form */}
            <section id="register-form" className="py-24 bg-muted overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[100px] -mr-64 -mt-64" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Join Us</span>
                            <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">
                                Reconnect with Your Roots
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Whether you're a recent graduate or a veteran alumnus, we want to hear from you. Join the official alumni registry to stay updated on school news, events, and networking opportunities.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-soft">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Networking Events</h4>
                                        <p className="text-sm text-muted-foreground">Annual meetups across major cities.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-soft">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Mentorship Program</h4>
                                        <p className="text-sm text-muted-foreground">Guide and inspire current Thomasites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-3xl shadow-soft border border-border">
                            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Alumni Registration</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="batch">Graduation Batch</Label>
                                        <Input
                                            id="batch"
                                            name="batch"
                                            value={formData.batch}
                                            onChange={handleChange}
                                            placeholder="e.g. 2010"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="currentRole">Current Role/Org</Label>
                                        <Input
                                            id="currentRole"
                                            name="currentRole"
                                            value={formData.currentRole}
                                            onChange={handleChange}
                                            placeholder="e.g. Lead Engineer at Apple"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message to Faculty/Students (Optional)</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Share a memory or a word of advice..."
                                        rows={4}
                                        className="resize-none"
                                    />
                                </div>
                                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Registering..." : (
                                        <>
                                            Register in Network
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alumni;

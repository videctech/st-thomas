import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Beaker, Music, Palette, Globe, Calculator, ChevronRight, Award, Users, Clock } from "lucide-react";
import laboratoryImage from "@/assets/laboratory.jpg";
import classroomImage from "@/assets/classroom.jpg";

const programs = [
  {
    level: "Pre-Primary",
    grades: "Nursery - KG",
    description: "Foundational learning through play-based activities, building curiosity and social skills.",
    subjects: ["English", "Mathematics", "Environmental Studies", "Art & Craft", "Music & Dance"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    level: "Primary School",
    grades: "Classes I - V",
    description: "Building strong fundamentals in core subjects with emphasis on conceptual understanding.",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Art", "Physical Education"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    level: "Middle School",
    grades: "Classes VI - VIII",
    description: "Advanced curriculum preparing students for higher studies with practical applications.",
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer Applications", "Art", "Physical Education"],
    color: "from-violet-500 to-purple-500",
  },
  {
    level: "High School",
    grades: "Classes IX - XII",
    description: "Comprehensive CBSE curriculum with stream choices and career guidance.",
    subjects: ["Science Stream", "Commerce Stream", "Humanities Stream", "Optional Languages", "Physical Education", "Various Electives"],
    color: "from-amber-500 to-orange-500",
  },
];

const facilities = [
  { icon: Beaker, name: "Science Labs", description: "Physics, Chemistry & Biology" },
  { icon: Calculator, name: "Mathematics Lab", description: "Hands-on math learning" },
  { icon: Globe, name: "Computer Lab", description: "Modern digital education" },
  { icon: BookOpen, name: "Library", description: "10,000+ books & resources" },
  { icon: Music, name: "Music Room", description: "Vocal & instrumental training" },
  { icon: Palette, name: "Art Studio", description: "Creative expression space" },
];

const extracurricular = [
  "Basketball", "Cricket", "Football", "Volleyball", "Athletics", "Swimming",
  "Classical Dance", "Western Dance", "Choir", "Band", "Drama", "Debate",
  "Science Club", "Math Olympiad", "Quiz Club", "Eco Club", "Photography", "Robotics"
];

const Academics = () => {
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
              Academics
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Academic Excellence & Beyond
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Our comprehensive curriculum, aligned with CBSE standards, is designed to foster critical thinking, creativity, and a love for lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-card relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-medium p-8 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">CBSE Affiliated</h3>
                <p className="text-muted-foreground text-sm">Affiliation No. XXXXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">20:1 Ratio</h3>
                <p className="text-muted-foreground text-sm">Student to Teacher</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">8:00 AM - 2:30 PM</h3>
                <p className="text-muted-foreground text-sm">School Timings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Academic Programs
            </h2>
            <p className="text-muted-foreground">
              From foundational learning to advanced studies, our programs are tailored to meet the developmental needs of each age group.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6 p-8">
                  <div>
                    <div className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${program.color} text-primary-foreground`}>
                      {program.grades}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">{program.level}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-foreground mb-3">Subjects Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Approach</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Teaching Methodology
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <h4 className="font-display font-bold text-foreground mb-2">Activity-Based Learning</h4>
                  <p className="text-muted-foreground text-sm">Hands-on experiences that make concepts tangible and memorable.</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <h4 className="font-display font-bold text-foreground mb-2">Digital Integration</h4>
                  <p className="text-muted-foreground text-sm">Smart classrooms and digital resources enhancing traditional teaching.</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <h4 className="font-display font-bold text-foreground mb-2">Personalized Attention</h4>
                  <p className="text-muted-foreground text-sm">Small class sizes ensuring individual attention for every student.</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <h4 className="font-display font-bold text-foreground mb-2">Continuous Assessment</h4>
                  <p className="text-muted-foreground text-sm">Regular evaluations to track progress and provide timely feedback.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={laboratoryImage}
                  alt="Students in Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Academic Facilities
            </h2>
            <p className="text-muted-foreground">
              State-of-the-art facilities designed to support comprehensive learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <facility.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{facility.name}</h4>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={classroomImage}
                  alt="Extracurricular Activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Beyond Academics</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Extracurricular Activities
              </h2>
              <p className="text-muted-foreground mb-6">
                We believe in nurturing well-rounded individuals. Our diverse extracurricular programs help students discover their passions and develop essential life skills.
              </p>
              <div className="flex flex-wrap gap-2">
                {extracurricular.map((activity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-card rounded-full text-sm text-foreground shadow-soft"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join St. Thomas English Convent School and give your child the gift of quality education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/admissions">
                  Apply Now
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;

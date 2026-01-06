import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, BookOpen, ChevronRight } from "lucide-react";
import libraryImage from "@/assets/library.jpg";
import classroomImage from "@/assets/classroom.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We foster empathy and kindness, teaching students to care for others and contribute positively to society.",
  },
  {
    icon: BookOpen,
    title: "Excellence",
    description: "We pursue the highest standards in academics, character, and all endeavors, inspiring students to reach their full potential.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "We uphold honesty, ethical conduct, and moral responsibility in all aspects of school life.",
  },
  {
    icon: Award,
    title: "Respect",
    description: "We value diversity and promote mutual respect, creating an inclusive environment for all.",
  },
];

const leadership = [
  {
    name: "Fr. Michael Thomas",
    role: "Director",
    message: "Education is not just about acquiring knowledge; it's about developing character and becoming a responsible citizen.",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Principal",
    message: "Our commitment to holistic education ensures every student develops academically, emotionally, and spiritually.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Shaping Lives Since 2003
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Saint Thomas English Convent School has been a cornerstone of quality education, nurturing generations of students to become responsible citizens and future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our History</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Journey of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by a group of visionary educators and religious leaders, Saint Thomas English Convent School began its journey with a modest building.
                </p>
                <p>
                  Over the decades, we have grown into one of the region's most respected educational institutions, serving over 1,500 students annually. Our growth has been guided by an unwavering commitment to academic excellence and character development.
                </p>
                <p>
                  Today, our sprawling campus features state-of-the-art facilities, modern laboratories, expansive sports grounds, and dedicated spaces for arts and creativity. Yet, we remain true to our founding principles of nurturing the whole child.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={libraryImage}
                  alt="School Library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card p-10 rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a transformative educational experience that develops intellectual curiosity, moral integrity, and social responsibility. We aim to equip students with the knowledge, skills, and values necessary to thrive in a rapidly changing world while making meaningful contributions to society.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-10 rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading institution of academic excellence that nurtures compassionate, innovative, and globally-minded individuals. We envision a community where every student discovers their unique potential and is empowered to create positive change in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Believe</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These foundational principles guide everything we do at Saint Thomas English Convent School.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-all duration-300">
                  <value.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Messages from Our Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">{leader.name}</h4>
                    <p className="text-secondary text-sm">{leader.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{leader.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={classroomImage}
                  alt="Classroom Learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                The Saint Thomas Difference
              </h2>
              <ul className="space-y-4">
                {[
                  "CBSE affiliated curriculum with emphasis on conceptual learning",
                  "Experienced and dedicated faculty committed to student success",
                  "Modern infrastructure with smart classrooms and digital resources",
                  "Strong focus on extracurricular activities and sports",
                  "Safe and nurturing environment for holistic development",
                  "Active parent engagement and transparent communication",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/admissions">
                  Join Our Community
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

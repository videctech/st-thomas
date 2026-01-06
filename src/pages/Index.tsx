import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, Beaker, Trophy, ChevronRight, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import classroomImage from "@/assets/classroom.jpg";
import laboratoryImage from "@/assets/laboratory.jpg";
import sportsImage from "@/assets/sports.jpg";
import libraryImage from "@/assets/library.jpg";

const stats = [
  { number: "1200+", label: "Students", icon: Users },
  { number: "20+", label: "Expert Faculty", icon: GraduationCap },
  { number: "21+", label: "Years of Excellence", icon: Award },
  { number: "10+", label: "Years of Excellence", icon: Trophy },
];

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to foster critical thinking and academic success.",
    image: classroomImage,
  },
  {
    icon: Beaker,
    title: "Modern Laboratories",
    description: "State-of-the-art science labs equipped with latest technology for hands-on learning.",
    image: laboratoryImage,
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description: "World-class sports facilities nurturing physical fitness and team spirit.",
    image: sportsImage,
  },
  {
    icon: BookOpen,
    title: "Rich Library",
    description: "Extensive collection of books and digital resources to inspire lifelong learning.",
    image: libraryImage,
  },
];

const testimonials = [
  {
    name: "Mrs. Priya Sharma",
    role: "Parent",
    content: "Saint Thomas has been instrumental in shaping my child's character. The teachers are dedicated and the environment is nurturing.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Alumni, Batch of 2018",
    content: "The values and education I received here laid the foundation for my success. Forever grateful to this institution.",
    rating: 5,
  },
  {
    name: "Dr. Anita Kapoor",
    role: "Parent",
    content: "Excellent academic standards combined with focus on extracurricular activities. Truly holistic education.",
    rating: 5,
  },
];

const news = [
  {
    date: "Dec 15, 2024",
    title: "Annual Science Fair Winners Announced",
    excerpt: "Our students showcased innovative projects at the annual science fair...",
  },
  {
    date: "Dec 10, 2024",
    title: "Christmas Celebration & Cultural Program",
    excerpt: "Join us for our annual Christmas celebration with performances by students...",
  },
  {
    date: "Dec 5, 2024",
    title: "Inter-School Sports Championship Victory",
    excerpt: "Congratulations to our basketball team for winning the regional championship...",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Saint Thomas English Convent School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl stagger-children md:ml-12 lg:ml-24">

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Building Foundations For<br />
              <span className="text-gradient-gold">A Brighter Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              At Saint Thomas English Convent School, we blend traditional values with modern education to shape tomorrow's leaders with knowledge, character, and compassion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/admissions">
                  Apply for Admission
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-medium p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-3xl font-bold text-primary mb-1">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Our School</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy of Excellence in Education
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over two decades, Saint Thomas English Convent School has been a beacon of quality education. Our institution combines rigorous academics with character development, preparing students not just for examinations but for life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in nurturing the whole child — intellectually, emotionally, and socially — creating an environment where every student can discover their potential and excel.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium">State Board Affiliated</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium">A+ Graded</span>
                </div>
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={classroomImage}
                  alt="Students learning in classroom"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-muted-foreground">
              Our campus is designed to provide students with the best learning environment, combining modern facilities with spaces that inspire creativity and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Our Community Says
            </h2>
            <p className="text-muted-foreground">
              Hear from parents, students, and alumni about their experiences at Saint Thomas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                News & Announcements
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/news">View All News</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="p-6">
                  <span className="text-sm text-secondary font-medium">{item.date}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:text-secondary transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Begin Your Child's Journey of Excellence
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Admissions for the academic year 2025-26 are now open. Give your child the gift of quality education at Saint Thomas English Convent School.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/admissions">
                  Start Application
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
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

export default Index;

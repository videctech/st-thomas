
import { useState } from "react";
import classroomImage from "@/assets/classroom.jpg";
import laboratoryImage from "@/assets/laboratory.jpg";
import libraryImage from "@/assets/library.jpg";
import sportsImage from "@/assets/sports.jpg";
import heroImage from "@/assets/hero-school.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

// Using the images we have and duplicating some for demonstration purposes
const galleryImages = [
    {
        src: classroomImage,
        alt: "Modern Classroom",
        category: "Campus Life",
        title: "Interactive Learning Spaces",
        description: "Modern classrooms equipped with digital learning tools."
    },
    {
        src: laboratoryImage,
        alt: "Science Laboratory",
        category: "Facilities",
        title: "Advanced Science Labs",
        description: "State-of-the-art physics, chemistry, and biology laboratories."
    },
    {
        src: libraryImage,
        alt: "School Library",
        category: "Facilities",
        title: "Knowledge Resource Center",
        description: "Vasta collection of books and digital resources."
    },
    {
        src: sportsImage,
        alt: "Sports Facilities",
        category: "Sports",
        title: "Annual Sports Day",
        description: "Celebrating athletic excellence and team spirit."
    },
    {
        src: heroImage,
        alt: "School Campus",
        category: "Campus",
        title: "Main Campus Building",
        description: "Our beautiful and spacious campus infrastructure."
    },
    {
        src: classroomImage,
        alt: "Art Room",
        category: "Arts",
        title: "Creative Arts Studio",
        description: "Space for students to explore their artistic talents."
    },
];

const categories = ["All", "Campus", "Facilities", "Campus Life", "Sports", "Arts"];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 bg-hero-gradient">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                            Our Campus
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                            Photo Gallery
                        </h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Take a visual tour of Saint Thomas English Convent School. Experience our vibrant campus, modern facilities, and dynamic student life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-secondary text-secondary-foreground shadow-md"
                                    : "bg-card text-foreground hover:bg-muted"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card shadow-soft hover:shadow-medium transition-all duration-300 aspect-[4/3]">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center p-4">
                                                <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                                                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                                                <p className="text-white/80 text-sm">{image.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
                                    <div className="relative rounded-lg overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                                            <h3 className="font-bold text-lg">{image.title}</h3>
                                            <p className="text-sm opacity-80">{image.description || image.category}</p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;

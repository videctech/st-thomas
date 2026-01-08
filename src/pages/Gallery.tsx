
import { useState } from "react";
import classroomImage from "@/assets/classroom.jpg";
import laboratoryImage from "@/assets/laboratory.jpg";
import libraryImage from "@/assets/library.jpg";
import sportsImage from "@/assets/sports.jpg";
import heroImage from "@/assets/hero-school.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Filter } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Categories for the gallery
const categories = ["All", "Campus", "Facilities", "Campus Life", "Sports", "Arts"];

// Dynamically generate years from 2024 down to 2003
const years = ["All", ...Array.from({ length: 2024 - 2003 + 1 }, (_, i) => (2024 - i).toString())];

// Using the images we have and duplicating them with different metadata to fill the filters
const assetList = [
    { src: classroomImage, alt: "Classroom", title: "Learning in Progress" },
    { src: laboratoryImage, alt: "Lab", title: "Science Discovery" },
    { src: libraryImage, alt: "Library", title: "Quiet Study Time" },
    { src: sportsImage, alt: "Sports", title: "Athletic Activities" },
    { src: heroImage, alt: "Campus", title: "Our School View" }
];

const generateDummyImages = () => {
    const images: any[] = [];
    const cats = categories.filter(c => c !== "All");

    // Ensure every category has at least a few images across different years
    // We'll focus on recent years (2020-2024) but add samples for others
    years.filter(y => y !== "All").forEach((year, yIdx) => {
        cats.forEach((cat, cIdx) => {
            // Logic to decide if we add an image for this year/category combo
            // Every category gets an image in 2024, 2023, 2022
            // For older years, we add them more sparsely
            const shouldAdd = parseInt(year) >= 2020 || (parseInt(year) % 3 === 0 && cIdx % 2 === 0);

            if (shouldAdd) {
                const asset = assetList[(yIdx + cIdx) % assetList.length];
                images.push({
                    src: asset.src,
                    alt: `${cat} ${year}`,
                    category: cat,
                    year: year,
                    title: `${cat} - ${year}`,
                    description: `Memorable moments from ${cat} in the year ${year}.`
                });
            }
        });
    });

    // Add additional images for 2024 to make the current view look full
    cats.forEach((cat, i) => {
        const asset = assetList[i % assetList.length];
        images.push({
            src: asset.src,
            alt: `${cat} 2024 Special`,
            category: cat,
            year: "2024",
            title: `Featured ${cat} 2024`,
            description: `Highlighting our latest achievements in ${cat}.`
        });
    });

    return images;
};

const galleryImages = generateDummyImages();


const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");

    const filteredImages = galleryImages.filter(img => {
        const categoryMatch = selectedCategory === "All" || img.category === selectedCategory;
        const yearMatch = selectedYear === "All" || img.year === selectedYear;
        return categoryMatch && yearMatch;
    });

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
                    {/* Filters */}
                    <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-12">
                        <div className="flex items-center gap-2 text-muted-foreground md:mb-3">
                            <Filter className="w-4 h-4" />
                            <span className="text-sm font-medium whitespace-nowrap">Filter by:</span>
                        </div>

                        <div className="w-full md:w-48 space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Category</label>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="bg-card">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full md:w-48 space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Year</label>
                            <Select value={selectedYear} onValueChange={setSelectedYear}>
                                <SelectTrigger className="bg-card">
                                    <SelectValue placeholder="Select Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {years.map((year) => (
                                        <SelectItem key={year} value={year}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
                        {filteredImages.length > 0 ? (
                            filteredImages.map((image, index) => (
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <div className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card shadow-soft hover:shadow-medium transition-all duration-300 aspect-[4/3] animate-fade-in">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center p-4">
                                                    <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                                                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                                                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                                                        <span>{image.category}</span>
                                                        <span>•</span>
                                                        <span>{image.year}</span>
                                                    </div>
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
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-lg">{image.title}</h3>
                                                        <p className="text-sm opacity-80">{image.description || image.category}</p>
                                                    </div>
                                                    <div className="bg-secondary/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-secondary">
                                                        {image.year}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground animate-fade-in">
                                <Filter className="w-12 h-12 mb-4 opacity-20" />
                                <h3 className="text-xl font-display font-semibold">No images found</h3>
                                <p>Try adjusting your filters to see more results.</p>
                                <button
                                    onClick={() => { setSelectedCategory("All"); setSelectedYear("All"); }}
                                    className="mt-4 text-secondary hover:underline font-medium"
                                >
                                    Reset all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;


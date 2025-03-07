"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BarChart3, Heart, FileCheck } from "lucide-react";

interface ImageData {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const showcaseImages: ImageData[] = [
  {
    id: "analytics",
    src: "/1691.png",
    alt: "Nonprofit fundraising dashboard",
    title: "Real-time Analytics",
    description: "Track campaign performance with actionable insights that drive more donations",
    icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
    gradient: "from-blue-600/30 to-indigo-800/30"
  },
  {
    id: "donors",
    src: "/1692.png",
    alt: "Donor engagement platform",
    title: "Donor Management",
    description: "Build meaningful relationships with your supporters through personalized interactions",
    icon: <Heart className="h-8 w-8 text-pink-400" />,
    gradient: "from-pink-600/30 to-purple-800/30"
  },
  {
    id: "impact",
    src: "/1693.png",
    alt: "Impact reporting dashboard",
    title: "Impact Reporting",
    description: "Show your donors the difference they're making with beautiful visualizations",
    icon: <FileCheck className="h-8 w-8 text-emerald-400" />,
    gradient: "from-emerald-600/30 to-teal-800/30"
  }
];

export default function ImageShowcase() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] pointer-events-none" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-blob delay-2000" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 animate-blob delay-4000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            See the Platform in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful tools designed specifically for nonprofit organizations to maximize your impact
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {showcaseImages.map((image, index) => (
            <motion.div 
              key={image.id} 
              className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 bg-gray-900 border border-gray-800/50 transition-all duration-300 hover:-translate-y-2"
              variants={itemVariants}
            >
              {/* Aspect ratio container */}
              <div className="relative aspect-video w-full overflow-hidden">
                {/* Placeholder gradient (shown while image loads) */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${image.gradient} animate-pulse ${imagesLoaded[image.id] ? 'opacity-0' : 'opacity-100'}`}
                  style={{ animationDuration: `${3 + index}s` }}
                />
                
                {/* Actual image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                  onLoad={() => handleImageLoad(image.id)}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-20" />
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 group-hover:translate-y-0 z-30">
                <div className="flex items-center mb-3">
                  <div className="mr-3 p-2 rounded-full bg-black/40 backdrop-blur-md">
                    {image.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
                <p className="text-sm text-gray-300">{image.description}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
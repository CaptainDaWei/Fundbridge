"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { BarChart3, Users, CreditCard, LineChart, Mail, Globe } from "lucide-react";

// Define USP data with more vibrant colors
const uspFeatures = [
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics",
    description: "Turn Data into Donations: See who gives, why they give, and how to inspire them to give more.",
    icon: <BarChart3 className="h-12 w-12 text-blue-500" />,
    color: "rgba(59, 130, 246, 0.8)",
    gradient: "from-blue-500/20 to-blue-700/20",
    shadowColor: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
  },
  {
    id: "donor-management",
    title: "Smart Donor Management",
    description: "Your Donors Deserve Better: Build lasting relationships with personalized engagement that feels genuine.",
    icon: <Users className="h-12 w-12 text-emerald-500" />,
    color: "rgba(16, 185, 129, 0.8)",
    gradient: "from-emerald-500/20 to-emerald-700/20",
    shadowColor: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
  },
  {
    id: "payment-processing",
    title: "Seamless Payment Processing",
    description: "Every Second Counts: Frictionless donation experiences that convert passion into action—instantly.",
    icon: <CreditCard className="h-12 w-12 text-amber-500" />,
    color: "rgba(245, 158, 11, 0.8)",
    gradient: "from-amber-500/20 to-amber-700/20",
    shadowColor: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
  },
  {
    id: "impact-tracking",
    title: "Impact Tracking",
    description: "Show, Don't Just Tell: Beautiful visualizations that transform abstract numbers into inspiring stories.",
    icon: <LineChart className="h-12 w-12 text-purple-500" />,
    color: "rgba(168, 85, 247, 0.8)",
    gradient: "from-purple-500/20 to-purple-700/20",
    shadowColor: "0 10px 25px -5px rgba(168, 85, 247, 0.4)"
  },
  {
    id: "automated-engagement",
    title: "Automated Engagement",
    description: "The Right Message, Right Time: Nurture donor relationships while you focus on your mission.",
    icon: <Mail className="h-12 w-12 text-pink-500" />,
    color: "rgba(236, 72, 153, 0.8)",
    gradient: "from-pink-500/20 to-pink-700/20",
    shadowColor: "0 10px 25px -5px rgba(236, 72, 153, 0.4)"
  },
  {
    id: "global-reach",
    title: "Global Reach",
    description: "No Borders to Generosity: Connect with supporters worldwide through localized experiences they'll love.",
    icon: <Globe className="h-12 w-12 text-indigo-500" />,
    color: "rgba(99, 102, 241, 0.8)",
    gradient: "from-indigo-500/20 to-indigo-700/20",
    shadowColor: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
  },
];

// Dynamic animation for floating effect
const floatingAnimation = {
  initial: { y: 0 },
  animate: (i: number) => ({
    y: [0, -15, 0, -5, 0],
    transition: {
      duration: 8,
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatType: "reverse" as const,
      delay: i * 0.3,
    },
  }),
};

// Session storage key
const SESSION_ANIMATION_KEY = "usp-section-animation-shown";

// Feature card component with animations
const FeatureCard = ({ 
  feature, 
  index, 
  isActive,
  shouldAnimate
}: { 
  feature: typeof uspFeatures[0], 
  index: number, 
  isActive: boolean,
  shouldAnimate: boolean
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.4 });
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden group h-[220px] p-6 rounded-xl backdrop-blur-md bg-gradient-to-br ${feature.gradient} border border-white/10 shadow-lg w-full`}
      initial={shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      animate={shouldAnimate ? 
        (isInView ? { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } } : { opacity: 0, y: 50 })
        : { opacity: 1, y: 0 }
      }
      custom={index}
      variants={floatingAnimation}
      style={{ 
        borderLeft: `4px solid ${feature.color}`,
        boxShadow: isActive ? feature.shadowColor : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
      }}
    >
      {/* Subtle background glow that appears on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={false}
        animate={{
          opacity: isActive ? 0.5 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          background: `radial-gradient(circle at center, ${feature.color}, transparent 70%)`,
          filter: "blur(20px)",
          zIndex: 0
        }}
      />

      <div className="absolute -top-3 -right-3 z-10">
        <motion.div 
          className="p-2 rounded-full shadow-lg" 
          style={{ 
            backgroundColor: feature.color,
            boxShadow: isActive ? `0 0 15px ${feature.color}` : "none",
            transition: "box-shadow 0.2s ease"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 5, 
            repeat: Infinity,
            delay: index * 0.5
          }}
        >
          {feature.icon}
        </motion.div>
      </div>
      
      <div className="relative z-10 mt-4 flex flex-col h-[150px]">
        <motion.h3 
          className="text-2xl font-bold mb-3 text-white leading-tight"
          animate={{ 
            scale: isActive ? 1.02 : 1,
            transition: { duration: 0.2 }
          }}
        >
          {feature.title}
        </motion.h3>
        <p className="text-gray-200 text-sm line-clamp-4">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default function UspSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check for session storage on component mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasShownBefore = sessionStorage.getItem(SESSION_ANIMATION_KEY);
      if (hasShownBefore === 'true') {
        setShouldAnimate(false);
      } else {
        // Mark as shown for future visits
        sessionStorage.setItem(SESSION_ANIMATION_KEY, 'true');
      }
    }
  }, []);
  
  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Subtle radial gradient background - static replacement for particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            background: `radial-gradient(circle at 25% 25%, rgba(30, 64, 175, 0.15), transparent 60%),
                         radial-gradient(circle at 75% 75%, rgba(192, 38, 211, 0.15), transparent 60%),
                         radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.15), transparent 60%),
                         radial-gradient(circle at 25% 75%, rgba(245, 158, 11, 0.15), transparent 60%)` 
          }}
        />
      </div>

      {/* Content container */}
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            initial={shouldAnimate ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Core Fundraising Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our comprehensive platform combines cutting-edge technology with user-friendly design
            to help nonprofits maximize their impact.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {uspFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              className="transform transition-transform duration-200 hover:scale-105 h-[220px]"
            >
              <FeatureCard
                feature={feature}
                index={index}
                isActive={activeFeature === feature.id}
                shouldAnimate={shouldAnimate}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, CreditCard, LineChart, Mail, Globe, ChevronLeft, ChevronRight, AreaChart, Target, PieChart, Zap, Network, Rocket, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function ClientSection() {
  const [activeFeatureSlide, setActiveFeatureSlide] = useState(0);
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const featureSliderRef = useRef<HTMLDivElement>(null);
  const testimonialSliderRef = useRef<HTMLDivElement>(null);
  const featureAutoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialAutoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Turn Data into Donations: See who gives, why they give, and how to inspire them to give more.",
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      hoverAnimation: (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-32 w-32">
            <motion.div 
              className="absolute inset-0" 
              animate={{ rotate: 360 }} 
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <AreaChart className="h-16 w-16 text-blue-500" />
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <PieChart className="h-8 w-8 text-blue-700" />
            </motion.div>
          </div>
        </motion.div>
      ),
      detailedInfo: "Our AI algorithms analyze donation patterns, donor behavior, and campaign performance to provide actionable insights that help you optimize your fundraising strategy. Visualize trends, identify opportunities, and make data-driven decisions."
    },
    {
      title: "Smart Donor Management",
      description: "Your Donors Deserve Better: Build lasting relationships with personalized engagement that feels genuine.",
      icon: <Users className="h-8 w-8 text-green-500" />,
      hoverAnimation: (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-32 w-32">
            <motion.div 
              className="absolute top-0 left-0" 
              animate={{ 
                x: [0, 20, 0], 
                y: [0, -10, 0] 
              }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users className="h-10 w-10 text-green-400" />
            </motion.div>
            <motion.div 
              className="absolute bottom-0 right-0" 
              animate={{ 
                x: [0, -20, 0], 
                y: [0, 10, 0] 
              }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users className="h-10 w-10 text-green-600" />
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Target className="h-12 w-12 text-green-500" />
            </motion.div>
          </div>
        </motion.div>
      ),
      detailedInfo: "Create personalized donor journeys with our smart relationship management tools. Track donor history, preferences, and interactions to build meaningful connections that lead to long-term support and increased lifetime value."
    },
    {
      title: "Seamless Payment Processing",
      description: "Every Second Counts: Frictionless donation experiences that convert passion into action—instantly.",
      icon: <CreditCard className="h-8 w-8 text-yellow-500" />,
      hoverAnimation: (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-32 w-32">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center" 
              animate={{ y: [-40, 0] }} 
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
            >
              <CreditCard className="h-12 w-12 text-yellow-500" />
            </motion.div>
            <motion.div 
              className="absolute bottom-0 w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 0], y: [-10, 0, 10] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <Zap className="h-10 w-10 text-yellow-600" />
            </motion.div>
          </div>
        </motion.div>
      ),
      detailedInfo: "Our multi-payment gateway integration supports credit cards, digital wallets, bank transfers, and cryptocurrencies with optimized checkout flows that reduce abandonment rates and increase donation completion by up to 43%."
    },
    {
      title: "Impact Tracking",
      description: "Show, Don't Just Tell: Beautiful visualizations that transform abstract numbers into inspiring stories.",
      icon: <LineChart className="h-8 w-8 text-purple-500" />,
      hoverAnimation: (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-32 w-32">
            <motion.div 
              className="absolute inset-0" 
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ 
                pathLength: 1,
                pathOffset: [0, 1]
              }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <LineChart className="h-16 w-16 text-purple-500" />
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <PieChart className="h-10 w-10 text-purple-600" />
            </motion.div>
          </div>
        </motion.div>
      ),
      detailedInfo: "Transform complex data into compelling visual narratives that demonstrate your organization's impact. Our customizable dashboards make it easy to share progress with donors, board members, and stakeholders in a meaningful, engaging way."
    },
    {
      title: "Automated Engagement",
      description: "The Right Message, Right Time: Nurture donor relationships while you focus on your mission.",
      icon: <Mail className="h-8 w-8 text-pink-500" />,
      hoverAnimation: (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-32 w-32">
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2" 
              animate={{ x: [-10, 40] }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <Mail className="h-10 w-10 text-pink-500" />
            </motion.div>
            <motion.div 
              className="absolute right-0 bottom-0"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Share2 className="h-8 w-8 text-pink-600" />
            </motion.div>
          </div>
        </motion.div>
      ),
      detailedInfo: "Our intelligent automation tools deliver personalized communications based on donor behavior, preferences, and giving history. From thank-you emails to cultivation sequences, nurture your supporters with the right message at exactly the right moment."
    },
    {
      title: "Global Reach",
      description: "No Borders to Generosity: Connect with supporters worldwide through localized experiences they'll love.",
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      hoverAnimation: (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="h-24 w-24" 
            animate={{ rotate: 360 }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="h-24 w-24 text-indigo-500" />
          </motion.div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Network className="h-12 w-12 text-blue-400" />
          </motion.div>
        </motion.div>
      ),
      detailedInfo: "Expand your reach globally with multi-language support, international payment processing, and culturally adapted campaigns. Our platform helps you connect with donors across borders, currencies, and languages to maximize your fundraising potential worldwide."
    },
  ];

  const testimonials = [
    {
      quote: "Fundbridge has completely transformed how we engage with our donors. We've seen a 58% increase in recurring donations since implementing their platform.",
      author: "Sarah Johnson",
      role: "Executive Director",
      org: "Global Clean Water Initiative",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "The AI-powered analytics tools helped us identify giving patterns we never knew existed. We've been able to customize our outreach and saw a 43% increase in donor retention.",
      author: "Michael Chen",
      role: "Director of Development",
      org: "Education for All Foundation",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "The global reach capabilities allowed us to expand our fundraising efforts to three new countries. The localization features made donors feel like we were speaking directly to them.",
      author: "Amara Okafor",
      role: "International Programs Manager",
      org: "Children First International",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  const resetFeatureAutoplayTimer = () => {
    if (featureAutoplayTimeoutRef.current) {
      clearTimeout(featureAutoplayTimeoutRef.current);
    }
    
    featureAutoplayTimeoutRef.current = setTimeout(() => {
      setActiveFeatureSlide((prev) => (prev + 1) % features.length);
    }, 5000);
  };

  const resetTestimonialAutoplayTimer = () => {
    if (testimonialAutoplayTimeoutRef.current) {
      clearTimeout(testimonialAutoplayTimeoutRef.current);
    }
    
    testimonialAutoplayTimeoutRef.current = setTimeout(() => {
      setActiveTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetFeatureAutoplayTimer();
    return () => {
      if (featureAutoplayTimeoutRef.current) {
        clearTimeout(featureAutoplayTimeoutRef.current);
      }
    };
  }, [activeFeatureSlide]);

  useEffect(() => {
    resetTestimonialAutoplayTimer();
    return () => {
      if (testimonialAutoplayTimeoutRef.current) {
        clearTimeout(testimonialAutoplayTimeoutRef.current);
      }
    };
  }, [activeTestimonialSlide]);

  const handleFeatureSlideChange = (index: number) => {
    setActiveFeatureSlide(index);
    resetFeatureAutoplayTimer();
  };

  const handleFeaturePrev = () => {
    setActiveFeatureSlide((prev) => (prev - 1 + features.length) % features.length);
    resetFeatureAutoplayTimer();
  };

  const handleFeatureNext = () => {
    setActiveFeatureSlide((prev) => (prev + 1) % features.length);
    resetFeatureAutoplayTimer();
  };

  const handleTestimonialSlideChange = (index: number) => {
    setActiveTestimonialSlide(index);
    resetTestimonialAutoplayTimer();
  };

  const handleTestimonialPrev = () => {
    setActiveTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTestimonialAutoplayTimer();
  };

  const handleTestimonialNext = () => {
    setActiveTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    resetTestimonialAutoplayTimer();
  };

  return (
    <section
      id="features"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl mb-6">
            Core Fundraising Technologies
          </h2>
          <p className="mt-4 mb-12 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with user-friendly design to help nonprofits maximize their impact.
          </p>
          
          {/* Feature Slider for small screens */}
          <div className="relative lg:hidden mb-16">
            <div 
              ref={featureSliderRef}
              className="overflow-hidden"
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeFeatureSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card 
                      className="relative border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-md transition-shadow duration-300 h-[320px] flex flex-col"
                      onMouseEnter={() => setIsHovering(index)}
                      onMouseLeave={() => setIsHovering(null)}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        <div className="mb-4 p-2 rounded-full bg-gray-100 dark:bg-gray-900">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-medium mb-2 text-black dark:text-white">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        
                        <AnimatePresence>
                          {isHovering === index && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 flex flex-col items-center justify-center p-6 rounded-lg"
                            >
                              {feature.hoverAnimation}
                              <motion.p 
                                className="text-sm text-gray-700 dark:text-gray-300 mt-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                {feature.detailedInfo}
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Feature Slider Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={handleFeaturePrev}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureSlideChange(index)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all duration-300",
                      index === activeFeatureSlide 
                        ? "bg-blue-500 w-6" 
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleFeatureNext}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Grid for large screens */}
          <div className="hidden lg:grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="relative border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-md transition-shadow duration-300 h-[320px] flex flex-col"
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-2 rounded-full bg-gray-100 dark:bg-gray-900">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-black dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  
                  <AnimatePresence>
                    {isHovering === index && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 flex flex-col items-center justify-center p-6 rounded-lg"
                      >
                        {feature.hoverAnimation}
                        <motion.p 
                          className="text-sm text-gray-700 dark:text-gray-300 mt-auto"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {feature.detailedInfo}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* New Testimonial Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl mb-4">
              Transforming Fundraising Worldwide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join hundreds of nonprofits who are revolutionizing how they connect with donors and amplify their impact.
            </p>
          </div>
          
          <div className="relative">
            <div 
              ref={testimonialSliderRef}
              className="overflow-hidden rounded-xl"
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonialSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6 relative">
                          <div className="absolute -top-1 -left-1 w-20 h-20 bg-[var(--color-one)]/10 rounded-full"></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800"
                          />
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: index === activeTestimonialSlide ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                            "{testimonial.quote}"
                          </p>
                          
                          <div>
                            <p className="font-semibold text-lg text-gray-900 dark:text-white">
                              {testimonial.author}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {testimonial.role}, {testimonial.org}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center items-center mt-8">
              <button 
                onClick={handleTestimonialPrev}
                className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors shadow-md mx-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-3 mx-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTestimonialSlideChange(idx)}
                    className={cn(
                      "h-3 w-3 rounded-full transition-all duration-300",
                      idx === activeTestimonialSlide 
                        ? "bg-[var(--color-one)]" 
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    )}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleTestimonialNext}
                className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors shadow-md mx-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

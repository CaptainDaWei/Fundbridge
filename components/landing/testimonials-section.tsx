"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  org: string;
  avatar: string;
  type: "fund" | "applicant";
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Since partnering with this platform, we've increased our grant distribution efficiency by 47%. The analytics dashboard helps us identify high-impact projects we would have otherwise missed.",
    author: "Elena Rodriguez",
    role: "Program Director",
    org: "Global Impact Fund",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    type: "fund"
  },
  {
    quote: "The seamless application process transformed our fundraising strategy. We secured a $50,000 grant in half the time it previously took, allowing us to launch our community program months ahead of schedule.",
    author: "Marcus Chen",
    role: "Executive Director",
    org: "Urban Youth Initiative",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    type: "applicant"
  },
  {
    quote: "As a small family foundation, we needed a solution that simplified our workflow. This platform's automation features have reduced our administrative overhead by 65%, allowing us to focus on impact.",
    author: "Catherine Williams",
    role: "Foundation Manager",
    org: "Bright Futures Foundation",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    type: "fund"
  },
  {
    quote: "The data-driven insights helped us refine our proposal, addressing exactly what funders were looking for. We've secured three major grants since implementing these strategies.",
    author: "David Okafor",
    role: "Development Director",
    org: "Clean Water Access Project",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    type: "applicant"
  },
  {
    quote: "The platform's matching algorithm connected us with organizations perfectly aligned with our mission. We've built five strategic partnerships that have amplified our impact across three continents.",
    author: "Jennifer Park",
    role: "Grants Officer",
    org: "Innovation for Humanity",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    type: "fund"
  },
  {
    quote: "As a grassroots organization, visibility was our biggest challenge. Through this platform, we connected with funders who shared our vision, increasing our annual budget by 78% and expanding our community impact.",
    author: "Raj Patel",
    role: "Founder",
    org: "Community Resilience Network",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    type: "applicant"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Success Stories from Our Community
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join the nonprofit organizations who've transformed their fundraising with our
            platform. Our solutions are designed to grow with you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <Avatar className="h-12 w-12 border-2 border-orange-500/50">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        testimonial.type === "fund" 
                          ? "bg-orange-500/10 text-orange-400" 
                          : "bg-purple-500/10 text-purple-400"
                      }`}>
                        {testimonial.type === "fund" ? "Fund" : "Applicant"}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.org}</p>
                    </div>
                  </div>
                  
                  <div className="flex-grow relative">
                    <Quote className="absolute -top-1 -left-1 h-5 w-5 text-orange-500/40" />
                    <p className="text-gray-300 pl-5 italic">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
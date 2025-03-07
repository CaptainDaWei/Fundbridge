"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  BarChart,
  ChevronRight,
  File,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
  Users,
  CreditCard,
  LineChart,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const tiles = [
  {
    icon: <HeartHandshake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Globe className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <File className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Shield className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Rss className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <BarChart className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px] filter"></div>
    ),
  },
];

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const Card = (card: { icon: JSX.Element; bg: JSX.Element }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
};

// Value proposition data with expanded content
const valueProps = [
  {
    title: "Building Bridges to Better Giving",
    description: "Our platform connects donors directly to your cause with transparent impact tracking.",
    icon: <Shield className="size-6" />,
    color: "var(--color-one)",
    benefits: [
      "Real-time donation tracking",
      "Direct donor communication",
      "Transparency metrics for trust",
      "Impact visualization tools"
    ],
    cta: "Explore Impact Tracking",
    stats: {
      figure: "94%",
      description: "of donors say transparency increases their likelihood to give again"
    }
  },
  {
    title: "Fundraising Reimagined",
    description: "Leverage AI-powered insights to understand donor behavior and optimize your campaigns.",
    icon: <BarChart className="size-6" />,
    color: "var(--color-two)",
    benefits: [
      "Predictive donor analytics",
      "Campaign optimization tools",
      "Personalized outreach",
      "Data-driven decision making"
    ],
    cta: "See Analytics Demo",
    stats: {
      figure: "237%",
      description: "average increase in donation size with optimized campaigns"
    }
  },
  {
    title: "Impact Amplified",
    description: "Turn your mission into measurable results with our comprehensive engagement tools.",
    icon: <Rss className="size-6" />,
    color: "var(--color-one)",
    benefits: [
      "Multi-channel engagement",
      "Automated donor journeys",
      "Engagement performance metrics",
      "Supporter relationship building"
    ],
    cta: "View Engagement Tools",
    stats: {
      figure: "3.2×",
      description: "higher retention rate with automated engagement"
    }
  }
];

export default function CallToActionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();
  const id = useId();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section id="cta" className="mx-auto max-w-[80rem] px-6 md:px-8">
      <div
        className="max-w-[80rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20"
        ref={containerRef}
      >
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h5 className="text-base text-slate-600 dark:text-slate-400 mb-4">
            Begin Your Impact Journey
          </h5>
          <h2 className="inline text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-7xl">
            <span className="inline bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text font-extrabold text-transparent">
              From Vision to Victory
            </span>{" "}
            — Give Smarter, Not Harder
          </h2>
          <div>
            <div className="mt-10 flex flex-col items-start max-w-xl gap-4">
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                Start your 14-day free trial today. No credit card required. Discover how Fundbridge can revolutionize your fundraising efforts.
              </p>
              <div className="flex flex-row gap-4">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group relative w-max gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                  )}
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                  <span>Start Your Free Trial</span>
                  <ChevronRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group relative w-max gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                  )}
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                  <span>Book a Demo</span>
                  <ChevronRight className="size-4" />
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                No risk, no obligations. Experience the power of Fundbridge for your organization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Stories Section - Now Centered */}
      <div className="w-full flex justify-center items-center py-24 border-t border-gray-800/20 mt-10">
        <motion.div
          className="max-w-3xl text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Success Stories from Our Community
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-base md:text-lg text-white">
                Join the nonprofit organizations who've transformed their fundraising with our platform. Our solutions are designed to grow with you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Value Propositions Section */}
      <div className="py-24">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Why Nonprofits Choose <span className="text-[var(--color-one)]">Fundbridge</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our comprehensive platform is designed to address the unique challenges of modern fundraising
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-6 dark:bg-zinc-900 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative gradient background */}
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-transparent to-[var(--color-one)]/10 group-hover:to-[var(--color-one)]/20 transition-all duration-300"></div>
              
              {/* Icon with animated background */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white to-[var(--color-one)]/10 dark:from-zinc-800 dark:to-[var(--color-one)]/20 group-hover:scale-110 transform transition-all duration-300" style={{ color: prop.color }}>
                {prop.icon}
              </div>
              
              {/* Main content */}
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{prop.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">{prop.description}</p>
              
              {/* Benefits list with animation */}
              <ul className="mb-8 space-y-2">
                {prop.benefits.map((benefit, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Stats highlight */}
              <div className="mb-6 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 p-4">
                <p className="font-bold text-3xl text-[var(--color-one)]">{prop.stats.figure}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{prop.stats.description}</p>
              </div>
              
              {/* CTA Link */}
              <Link 
                href="#"
                className="group mt-auto flex w-full items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                {prop.cta}
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial element */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 text-center dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-one)]/10">
            <Zap className="h-8 w-8 text-[var(--color-one)]" />
          </div>
          <h3 className="mb-4 text-2xl font-bold">Ready to transform your fundraising?</h3>
          <p className="mb-6 mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Join hundreds of nonprofits who have increased their donations by an average of 63% in their first year with Fundbridge.
          </p>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "group relative gap-2 overflow-hidden",
              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <span>Get Started Today</span>
            <TrendingUp className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

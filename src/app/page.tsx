'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
    </main>
  );
}

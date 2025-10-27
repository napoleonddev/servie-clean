"use client";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import BlogDetailsPage from "@/app/blog/[id]/BlogDetailsPage";
import BlogPage from "@/components/ui/Screens/BlogScreen/BlogPage";
import Hero from "@/components/ui/Screens/BlogScreen/Hero";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Blog() {
  return (
    <>
      <Header />
      <Hero />
      <BlogPage />
      <Footer />
    </>
  );
}

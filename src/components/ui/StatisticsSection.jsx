"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Key to force re-animation
  const sectionRef = useRef(null);

  // Statistics data - easily customizable
  const statsData = [
    {
      id: 1,
      label: "Happy Clients",
      value: 157,
      suffix: "+",
      duration: 2000, // ms
      color: "#36B864",
      icon: "😊"
    },
    {
      id: 2,
      label: "Expert Workers",
      value: 63,
      suffix: "+",
      duration: 1800,
      color: "#2E9C54",
      icon: "👨‍💼"
    },
    {
      id: 3,
      label: "Projects Done",
      value: 189,
      suffix: "+",
      duration: 2200,
      color: "#36B864",
      icon: "✅"
    },
    {
      id: 4,
      label: "Years Of Experience",
      value: 7,
      suffix: "+",
      duration: 1500,
      color: "#2E9C54",
      icon: "📅"
    }
  ];

  const [animatedValues, setAnimatedValues] = useState(
    statsData.map(stat => 0)
  );

  // Enhanced Intersection Observer to trigger animation every time section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset animation values when section becomes visible
          setAnimatedValues(statsData.map(stat => 0));
          // Force re-animation by changing the key
          setAnimationKey(prev => prev + 1);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px' // Adjust this to trigger earlier/later
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate counting up when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const timers = statsData.map((stat, index) => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = stat.value;
      const duration = stat.duration;

      const updateValue = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };

      // Add a small delay for staggered animation
      setTimeout(() => {
        requestAnimationFrame(updateValue);
      }, index * 200);

      return undefined;
    });

    return () => {
      timers.forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [isVisible, animationKey]); // Add animationKey as dependency

  return (
    <Box
      ref={sectionRef}
      bg="#fff"
      py="60px"
      px={{ base: "20px", md: "60px" }}
      color="#000"
    >
      <Flex
        justify="space-between"
        align="center"
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "40px", md: "20px" }}
        maxW="1200px"
        mx="auto"
      >
        {statsData.map((stat, index) => (
          <Box
            key={`${stat.id}-${animationKey}`} // Use animationKey to force re-render
            textAlign="center"
            flex="1"
            minW={{ base: "200px", md: "auto" }}
            opacity={isVisible ? 1 : 0}
            transform={isVisible ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.8s ease-out"
            transitionDelay={isVisible ? `${index * 0.2}s` : "0s"}
          >
            {/* Icon */}
            <Text fontSize="48px" mb="16px" opacity="0.9">
              {stat.icon}
            </Text>
            
            {/* Animated Number */}
            <Text
              fontSize={{ base: "42px", md: "48px", lg: "56px" }}
              fontWeight="800"
              lineHeight="1"
              mb="8px"
              color="#000"
            >
              {animatedValues[index].toLocaleString()}
              {stat.suffix}
            </Text>
            
            {/* Label */}
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
              opacity="0.95"
              letterSpacing="0.5px"
            >
              {stat.label}
            </Text>
            
            {/* Decorative Line */}
            <Box
              w="60px"
              h="4px"
              bg="#36B864" // Changed to green to match your theme
              opacity="0.7"
              mx="auto"
              mt="16px"
              borderRadius="2px"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default StatisticsSection;
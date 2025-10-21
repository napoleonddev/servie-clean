"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const StatisticsSection = ({ statsData, bg = "#fff", textColor = "#000" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);
  const [animatedValues, setAnimatedValues] = useState(
    statsData.map(() => 0)
  );

  // Intersection Observer: triggers when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimatedValues(statsData.map(() => 0));
          setAnimationKey((prev) => prev + 1);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [statsData]);

  // Animate numbers
  useEffect(() => {
    if (!isVisible) return;

    const timers = statsData.map((stat, index) => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = stat.value;
      const duration = stat.duration || 2000;

      const updateValue = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOutQuart
        );

        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (progress < 1) requestAnimationFrame(updateValue);
      };

      setTimeout(() => requestAnimationFrame(updateValue), index * 200);
      return undefined;
    });

    return () => timers.forEach((t) => t && clearTimeout(t));
  }, [isVisible, animationKey, statsData]);

  return (
    <Box ref={sectionRef} bg={bg} py="60px" px={{ base: "20px", md: "60px" }} color={textColor}>
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
            key={`${stat.id}-${animationKey}`}
            textAlign="center"
            flex="1"
            minW={{ base: "200px", md: "auto" }}
            opacity={isVisible ? 1 : 0}
            transform={isVisible ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.8s ease-out"
            transitionDelay={isVisible ? `${index * 0.2}s` : "0s"}
          >
            <Text
              fontSize={{ base: "42px", md: "48px", lg: "56px" }}
              fontWeight="800"
              mb="8px"
              color={stat.color || textColor}
            >
              {animatedValues[index].toLocaleString()}
              {stat.suffix || "+"}
            </Text>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
              opacity="0.95"
              letterSpacing="0.5px"
            >
              {stat.label}
            </Text>
            <Box
              w="60px"
              h="4px"
              bg={stat.lineColor || stat.color || "#36B864"}
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

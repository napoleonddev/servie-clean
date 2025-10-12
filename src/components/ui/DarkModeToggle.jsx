'use client';

import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const SwitchButton = () => {
    return (
      <Button onClick={toggleDarkMode} width={'60px'} height={'60px'} bgColor={'transparent'}>
        {darkMode ? <MdLightMode color="#000" /> : <MdDarkMode size={'60px'} color="#000" />}
      </Button>
    )
  }

  return (
    <Box>
      <SwitchButton />
    </Box>
  );
};

export default DarkModeToggle;

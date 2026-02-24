"use client";

import { useState, useEffect } from "react";
import { LAUNCH_DATE } from "@/lib/constants";

export function useCountdown() {
  const [daysRemaining, setDaysRemaining] = useState(14);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      
      if (days <= 0) {
        setDaysRemaining(0);
        setIsLaunched(true);
      } else {
        setDaysRemaining(days);
        setIsLaunched(false);
      }
    }

    calculate();
    const interval = setInterval(calculate, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return { daysRemaining, isLaunched };
}

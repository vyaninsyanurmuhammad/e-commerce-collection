"use client";
import { useEffect, useState } from "react";

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function useCountdown(initialSeconds: number) {
  const [secs, setSecs] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;

  return { h: pad(h), m: pad(m), s: pad(s) };
}

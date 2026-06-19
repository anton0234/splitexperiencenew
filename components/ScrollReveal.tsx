'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('visible');
      });
    };

    // Fallback: if IntersectionObserver isn't available or fails, show everything
    if (typeof IntersectionObserver === 'undefined') {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 100px 0px', // trigger 100px before element enters viewport
      }
    );

    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    };

    observe();

    // Re-observe after a short delay in case elements render late
    const t = setTimeout(observe, 300);

    // Safety net: if after 2s anything is still invisible, force it visible
    const safety = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible');
      });
    }, 2000);

    return () => {
      io.disconnect();
      clearTimeout(t);
      clearTimeout(safety);
    };
  }, []);

  return null;
}

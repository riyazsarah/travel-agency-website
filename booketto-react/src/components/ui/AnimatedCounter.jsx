import { useRef, useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import gsap from 'gsap';

export default function AnimatedCounter({ end, suffix = '', duration = 2, isDecimal = false }) {
  const ref = useRef(null);
  const counterRef = useRef({ val: 0 });
  const finalDisplay = isDecimal ? end.toFixed(1) : Math.round(end).toLocaleString();
  const [display, setDisplay] = useState(finalDisplay);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    counterRef.current.val = 0;
    setDisplay('0');

    gsap.to(counterRef.current, {
      val: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        const val = counterRef.current.val;
        setDisplay(isDecimal ? val.toFixed(1) : Math.round(val).toLocaleString());
      },
    });

    // Fallback: ensure final value is shown after duration
    const timeout = setTimeout(() => {
      setDisplay(finalDisplay);
    }, (duration + 0.5) * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, end, duration, isDecimal, finalDisplay]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

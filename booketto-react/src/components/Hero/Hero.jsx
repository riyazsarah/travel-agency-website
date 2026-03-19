import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import AnimatedCounter from '../ui/AnimatedCounter';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEOS = [
  'https://videos.pexels.com/video-files/10760752/10760752-hd_1280_720_24fps.mp4', // Kashmir — Gulmarg snow drone aerial
  '/kerala-heritage.mp4',                                                           // Kerala — heritage houseboat (local, optimised)
  'https://videos.pexels.com/video-files/35097635/14868724_1280_720_25fps.mp4',    // Kerala — houseboat cruise on backwaters
  'https://assets.mixkit.co/videos/15919/15919-720.mp4',                           // Kashmir — aerial valley & snowy mountains
  'https://assets.mixkit.co/videos/49334/49334-720.mp4',                           // Kerala — drone over jungle river
];

const HERO_BG =
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&auto=format&fit=crop&q=80';

const HEADLINE_LINE1 = ['Journey', 'Beyond'];
const HEADLINE_LINE2 = ['the', 'Ordinary'];

const STATS = [
  { end: 12, suffix: '+', label: 'Destinations' },
  { end: 5000, suffix: '+', label: 'Happy Travellers' },
  { end: 24, suffix: '/7', label: 'Support' },
  { end: 4.9, suffix: '\u2605', label: 'Avg Rating', isDecimal: true },
];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(0);

  /* Parallax */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Ensure videos play on mobile — retry on every active change + first interaction */
  useEffect(() => {
    const playActive = () => {
      const video = videoRefs.current[activeVideo];
      if (video) {
        video.play().catch(() => {});
      }
    };
    playActive();

    // Some mobile browsers only allow play after first user gesture
    const onInteraction = () => {
      videoRefs.current.forEach((v) => {
        if (v) v.play().catch(() => {});
      });
      window.removeEventListener('touchstart', onInteraction);
      window.removeEventListener('scroll', onInteraction);
      window.removeEventListener('click', onInteraction);
    };
    window.addEventListener('touchstart', onInteraction, { once: true, passive: true });
    window.addEventListener('scroll', onInteraction, { once: true, passive: true });
    window.addEventListener('click', onInteraction, { once: true });

    return () => {
      window.removeEventListener('touchstart', onInteraction);
      window.removeEventListener('scroll', onInteraction);
      window.removeEventListener('click', onInteraction);
    };
  }, [activeVideo]);

  /* Video crossfade rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  let wordIndex = 0;

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      {/* Video background with crossfade */}
      <div ref={bgRef} className={styles.bg}>
        {/* Fallback image for slow connections */}
        <img src={HERO_BG} alt="Scenic travel destination" className={styles.bgImg} />

        {/* Video layers */}
        {HERO_VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[i] = el)}
            className={`${styles.bgVideo} ${i === activeVideo ? styles.bgVideoActive : ''}`}
            src={src}
            muted
            autoPlay
            loop
            playsInline
            preload={i === activeVideo ? 'auto' : 'none'}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className={styles.gradient} />

      {/* Geometric grid overlay */}
      <div className={styles.grid} />

      {/* Video indicator dots */}
      <div className={styles.videoDots}>
        {HERO_VIDEOS.map((_, i) => (
          <button
            key={i}
            className={`${styles.videoDot} ${i === activeVideo ? styles.videoDotActive : ''}`}
            onClick={() => setActiveVideo(i)}
            aria-label={`Play video ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className={styles.content}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted Travel Partner • IATA Certified
        </motion.span>

        <motion.h1
          className={styles.headline}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.4 }}
        >
          {HEADLINE_LINE1.map((word) => {
            const i = wordIndex++;
            return (
              <motion.span key={i} className={styles.word} variants={wordVariants} transition={{ duration: 0.5, ease: 'easeOut' }}>
                {word}
              </motion.span>
            );
          })}
          <br />
          {HEADLINE_LINE2.map((word) => {
            const i = wordIndex++;
            const isAccent = word === 'Ordinary';
            return (
              <motion.span
                key={i}
                className={`${styles.word} ${isAccent ? styles.accent : ''}`}
                variants={wordVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Expertly curated domestic & international tours. Kerala, Kashmir,
          Dubai, Maldives & more — with discounted air tickets.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Button variant="primary" size="lg" href="#destinations">
            Explore Destinations
          </Button>
          <Button variant="ghostLight" size="lg" href="#packages">
            View Packages
          </Button>
        </motion.div>
      </div>

      {/* Stats with frosted backdrop */}
      <div className={styles.stats}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statNumber}>
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
              />
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

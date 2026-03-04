import styles from './Testimonials.module.css';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { testimonials } from '../../data/testimonials';

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function TestimonialCard({ testimonial, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article className={styles.card}>
        <div className={styles.stars}>
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        <blockquote className={styles.quote}>
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className={styles.author}>
          <div className={styles.avatar}>
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatarImg} />
            ) : (
              <span className={styles.initials}>{testimonial.initials}</span>
            )}
          </div>
          <div>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.trip}>{testimonial.trip}</p>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <SectionHeader label="Testimonials" title="What Travellers Say" />
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

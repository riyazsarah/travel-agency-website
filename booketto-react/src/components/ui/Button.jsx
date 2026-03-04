import styles from './Button.module.css';
import { cn } from '../../utils/cn';

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className, type = 'button', ...props }) {
  const cls = cn(styles.btn, styles[variant], styles[size], className);

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

import { WhatsAppIcon } from './Icons';
import styles from './Button.module.css';

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;
  const content = (
    <>
      {icon && <WhatsAppIcon size={20} className={styles.icon} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return <button className={cls} {...rest}>{content}</button>;
}

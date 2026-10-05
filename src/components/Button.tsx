import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
}

export function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-sm',
    secondary: 'bg-surface text-foreground border border-border hover:bg-gray-50 shadow-sm',
    outline: 'bg-transparent text-foreground border-2 border-border hover:border-accent hover:text-accent',
    ghost: 'bg-transparent text-muted hover:text-foreground hover:bg-gray-100',
  };

  const sizes = 'px-6 py-2.5 text-sm';
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

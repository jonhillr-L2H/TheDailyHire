import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { CATEGORY_COLORS, type Category } from '@/types';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  category: Category;
  children: React.ReactNode;
}

export function Badge({ category, children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-xs px-3 py-1 rounded-full',
        CATEGORY_COLORS[category],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

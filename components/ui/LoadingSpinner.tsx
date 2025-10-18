import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
};

export function LoadingSpinner({ size = 'md', className, text }: LoadingSpinnerProps) {
  return (
    <div className="text-center py-12">
      <div className="inline-block">
        <div
          className={cn(
            'border-blue-400 border-t-transparent rounded-full animate-spin',
            sizeClasses[size],
            className
          )}
        />
        {text && <p className="text-gray-400 mt-4">{text}</p>}
      </div>
    </div>
  );
}

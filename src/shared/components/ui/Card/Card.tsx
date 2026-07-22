import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = '',
  children,
  ...props
}: CardSectionProps) {
  return (
    <div
      className={`border-b border-gray-200 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className = '',
  children,
  ...props
}: CardSectionProps) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = '',
  children,
  ...props
}: CardSectionProps) {
  return (
    <p
      className={`mt-1 text-sm text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = '',
  children,
  ...props
}: CardSectionProps) {
  return (
    <div
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className = '',
  children,
  ...props
}: CardSectionProps) {
  return (
    <div
      className={`border-t border-gray-200 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
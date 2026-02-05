import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({children, className}: CardProps) => {
  return (
    <div className={`shadow-sm max-w-85 p-4 rounded-lg mt-50 bg-white ${className}`}>
      {children}
    </div>  
  );
}

export default Card;
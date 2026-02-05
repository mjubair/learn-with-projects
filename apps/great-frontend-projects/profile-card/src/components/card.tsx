import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({children}: CardProps) => {
  return (
    <div className="shadow-sm max-w-85 p-4 rounded-lg mt-50 bg-white">
      {children}
    </div>  
  );
}

export default Card;
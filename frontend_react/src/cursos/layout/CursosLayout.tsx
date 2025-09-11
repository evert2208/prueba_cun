import { ReactNode } from 'react';
import './cursoLayout.css';

interface Props {
  children: ReactNode;
}

export const CursosLayout: React.FC<Props> = ({ children }) => {
  return (
    <div id="container">
      <div className="container animate__animated animate__fadeIn animate__faster">
        {children}
      </div>
    </div>
  );
};


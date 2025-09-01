import { ReactNode } from "react";

type FontProps = {
  children: ReactNode;
};

export const Font24Black = ({ children } : FontProps) => {
  return (
    <p style={{ color: 'rgb(7, 7, 7)', fontSize: '24px', fontWeight: 600 }}>
      {children}
    </p>
  );
};
export const Font22Black = ({ children }: FontProps) => {
  return (
    <p style={{ color: 'rgb(7, 7, 7)', fontSize: '22px', fontWeight: 600 }}>
      {children}
    </p>
  );
};

export const Font20Black = ({ children }: FontProps) => {
  return <p style={{ color: 'rgb(7, 7, 7)', fontSize: '20px' }}>{children}</p>;
};

export const Font18Black = ({ children }: FontProps) => {
  return <p style={{ color: 'rgb(7, 7, 7)', fontSize: '18px' }}>{children}</p>;
};

export const Font16Black = ({ children }: FontProps) => {
  return <p style={{ color: 'rgb(7, 7, 7)', fontSize: '16px' }}>{children}</p>;
};

export const Font14Black = ({ children }: FontProps) => {
  return <p style={{ color: 'rgb(7, 7, 7)', fontSize: '14px' }}>{children}</p>;
};

export const Font24Green = ({ children }: FontProps) => {
  return (
    <p style={{ color: '#00a877', fontSize: '24px', fontWeight: 600 }}>
      {children}
    </p>
  );
};
export const Font22Green = ({ children }: FontProps) => {
  return (
    <p style={{ color: '#00a877', fontSize: '22px', fontWeight: 600 }}>
      {children}
    </p>
  );
};

export const Font20Green = ({ children }: FontProps) => {
  return <p style={{ color: '#00a877', fontSize: '20px' }}>{children}</p>;
};

export const Font18Green = ({ children }: FontProps) => {
  return <p style={{ color: '#00a877', fontSize: '18px' }}>{children}</p>;
};

export const Font16Green = ({ children }: FontProps) => {
  return <p style={{ color: '#00a877', fontSize: '16px' }}>{children}</p>;
};

export const Font14Green = ({ children }: FontProps) => {
  return <p style={{ color: '#00a877', fontSize: '14px' }}>{children}</p>;
};

export const Flexiblecolors = {
  AntiFlashWhite: '#F0F0F0',
  DarkCharcoal: '#323232 ',
  HoneyDew: '#E8F9F1',
  SpanishViridian: '#007B5F',
};

export const FoundationalColors = {
  MjollnirGreen: '#00a877',
  VampireBlack: '#070707',
};
export const AccentColors = {
  Gold: '#FFD700 ',
  Tomato: '#FF6347',
  White: '#FFFFFF',
};

import * as React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** show a small petal dot before the text */
  dot?: boolean;
  tone?: 'muted' | 'plum' | 'cream';
}

/** Wide-tracked uppercase micro-label that sits above headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;

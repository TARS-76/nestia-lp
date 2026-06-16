import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** color treatment for the surface it sits on */
  tone?: 'plum' | 'cream' | 'ink';
  /** wordmark font-size in px; tagline scales from it */
  size?: number;
  showTagline?: boolean;
}

/** The nestia. wordmark lockup with the petal-rouge period. */
export function Logo(props: LogoProps): JSX.Element;

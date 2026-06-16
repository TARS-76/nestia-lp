import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** primary = plum (default), accent = petal rouge (emphasis only), outline, ghost */
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** full-width */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** render as a different element, e.g. "a" */
  as?: 'button' | 'a';
  /** target href when as="a" */
  href?: string;
}

/**
 * The nestia. action button — pill-shaped, calm motion.
 * @startingPoint section="Core" subtitle="Pill buttons: plum, accent, outline, ghost" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;

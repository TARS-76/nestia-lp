import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** soft almond (default), solid plum (menu-name pill), outline, accent (urgency) */
  variant?: 'soft' | 'plum' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

/** Pill label for categories, menu names, and urgency marks. */
export function Badge(props: BadgeProps): JSX.Element;

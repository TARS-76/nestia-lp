import * as React from 'react';

export interface PriceTagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** e.g. "90分" — small meta before the price */
  duration?: string | null;
  /** struck-through regular price, e.g. "12,800円" */
  regular?: string | null;
  /** the current price, e.g. "10,800円" */
  now: string;
  /** trailing note in parens; default "税込" */
  note?: string | null;
  /** "plum" (default) or "accent" (petal rouge) for the now price */
  emphasis?: 'plum' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

/** Discounted price line — struck regular → now price with a 税込 note. */
export function PriceTag(props: PriceTagProps): JSX.Element;

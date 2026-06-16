import * as React from 'react';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string | null;
  title: React.ReactNode;
  lead?: React.ReactNode | null;
  align?: 'center' | 'left';
  /** title typeface: JP mincho (default) or Latin display serif */
  titleFont?: 'serif-jp' | 'display';
  /** show the petal-dot divider under the title */
  divider?: boolean;
  /** on light page or dark plum surface */
  tone?: 'light' | 'dark';
}

/**
 * Standard section opener — eyebrow, title, petal divider, lead.
 * @startingPoint section="Content" subtitle="Centered section header with petal divider" viewport="700x260"
 */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;

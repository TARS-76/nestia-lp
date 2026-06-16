import * as React from 'react';

export interface MenuCardProps extends React.HTMLAttributes<HTMLElement> {
  /** menu name shown in the plum pill, e.g. "オーダーメイドケア" */
  name: string;
  duration?: string | null;
  regular?: string | null;
  now: string;
  description: React.ReactNode;
  /** photo node for the rounded thumbnail; omit for a soft placeholder */
  image?: React.ReactNode;
  /** small ranking ribbon, e.g. "No.1" */
  rank?: string | null;
  emphasis?: 'plum' | 'accent';
}

/**
 * The flyer's menu item card — thumbnail, plum name pill, discounted price, copy.
 * @startingPoint section="Content" subtitle="Salon menu item with photo, price & copy" viewport="700x200"
 */
export function MenuCard(props: MenuCardProps): JSX.Element;

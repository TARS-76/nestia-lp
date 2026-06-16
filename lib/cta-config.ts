export const CTA = {
  primary: {
    label: 'LINEで予約する',
    href: process.env.NEXT_PUBLIC_LINE_URL ?? 'https://line.me/R/ti/p/@XXXXXXX',
  },
  secondary: {
    label: 'オンラインで予約',
    href: process.env.NEXT_PUBLIC_BOOKING_URL ?? '#',
  },
  tel: {
    label: '080-4848-9176',
    href: 'tel:08048489176',
    published: false,
  },
} as const

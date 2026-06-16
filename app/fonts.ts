import { Cormorant_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google'

export const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const serifJp = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif-jp',
  display: 'swap',
})

export const body = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

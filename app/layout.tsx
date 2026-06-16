import type { Metadata } from 'next'
import { display, serifJp, body } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'nestia. | 立川のプライベートリラクゼーションサロン',
  description:
    'その日のあなたに合わせたオーダーメイドケア。肩こり・疲れ・眠りの浅さに。立川南駅徒歩1分のプライベートリラクゼーションサロン nestia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${serifJp.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

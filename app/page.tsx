import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Story } from './components/Story'
import { Strength } from './components/Strength'
import { CTA } from './components/CTA'
import { Access } from './components/Access'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Story />
      <Strength />
      <CTA />
      <Access />
    </main>
  )
}

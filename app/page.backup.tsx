import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Problem } from './components/Problem'
import { Strength } from './components/Strength'
import { Access } from './components/Access'
import { CTA } from './components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Problem />
      <Strength />
      <Access />
      <CTA />
    </main>
  )
}

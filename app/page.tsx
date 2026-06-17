import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Problem } from './components/Problem'
import { Strength } from './components/Strength'
import { Menu } from './components/Menu'
import { Voices } from './components/Voices'
import { Staff } from './components/Staff'
import { Access } from './components/Access'
import { CTA } from './components/CTA'
import { FAQ } from './components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Problem />
      <Strength />
      <Menu />
      <Voices />
      <Staff />
      <Access />
      <CTA />
      <FAQ />
    </main>
  )
}

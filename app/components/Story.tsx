import { Eyebrow } from '@/design-system/components/core/Eyebrow'
import { ScrollRevealText } from './ScrollRevealText'

export function Story() {
  return (
    <section className="story">
      <div className="story__inner">
        <Eyebrow dot>story</Eyebrow>
        <ScrollRevealText
          lines={[
            'nestia. の "nest" は、',
            '巣・帰る場所という意味。',
            '',
            '忙しい日々の中で、',
            'ふっと肩の力を抜ける空間をつくりたい。',
            '',
            '特別な日だけではなく、',
            'なんでもない日に思い出してもらえる場所に。',
            '',
            'そんな想いから、nestia. は生まれました。',
          ]}
          className="story__text"
          rootMargin="-30% 0px -40% 0px"
        />
      </div>
    </section>
  )
}

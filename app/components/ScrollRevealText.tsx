'use client'

import { useEffect, useRef } from 'react'

type Props = {
  lines: string[]
  className?: string
  lineClassName?: string
  rootMargin?: string
}

export function ScrollRevealText({
  lines,
  className = '',
  lineClassName = '',
  rootMargin = '-35% 0px -45% 0px',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lineEls = containerRef.current?.querySelectorAll<HTMLElement>('[data-reveal-line]')
    if (!lineEls) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-state', 'active')
          } else {
            const rect = entry.target.getBoundingClientRect()
            entry.target.setAttribute(
              'data-state',
              rect.top < 0 ? 'past' : 'pending'
            )
          }
        })
      },
      { threshold: 0, rootMargin }
    )

    lineEls.forEach(line => observer.observe(line))
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <p key={i} data-reveal-line data-state="pending" className={lineClassName || undefined}>
          {line}
        </p>
      ))}
    </div>
  )
}

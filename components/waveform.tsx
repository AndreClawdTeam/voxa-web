'use client'

import { motion } from 'framer-motion'

interface WaveformProps {
  bars?: number
  className?: string
  barColor?: string
  animated?: boolean
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'logo'
}

const barHeights: Record<string, number[]> = {
  sm: [4, 8, 6, 10, 7, 12, 5, 9, 11, 6, 8, 4],
  md: [8, 16, 12, 20, 14, 24, 10, 18, 22, 12, 16, 8],
  lg: [12, 24, 18, 30, 21, 36, 15, 27, 33, 18, 24, 12],
  hero: [20, 50, 35, 70, 45, 90, 30, 65, 80, 40, 55, 25, 75, 50, 60, 35, 85, 45, 30, 70, 55, 40, 65, 50],
}

// Logo size: heights as % of container (relative, never px)
const logoBarPercents = [35, 70, 50, 90, 60, 100, 45]

// Pre-computed deterministic scaleY values to avoid Math.random() in render
// Each entry is [1, scaleA, 0.8, scaleB, 1] for a bar at index i
const BAR_SCALE_VALUES = Array.from({ length: 30 }, (_, i) => [
  1,
  0.3 + ((i * 17 + 7) % 11) / 11 * 0.7,
  0.8,
  0.2 + ((i * 13 + 5) % 9) / 9 * 0.8,
  1,
])

export default function Waveform({
  className = '',
  barColor = 'var(--accent-bright)',
  animated = true,
  size = 'md',
}: WaveformProps) {

  // Logo mode: fills parent container using relative sizing
  if (size === 'logo') {
    return (
      <div
        className={`flex items-end justify-around w-full h-full ${className}`}
        aria-hidden="true"
      >
        {logoBarPercents.map((pct, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full mx-[3%]"
            style={{
              backgroundColor: barColor,
              height: `${pct}%`,
              opacity: 0.9,
              transformOrigin: 'bottom center',
            }}
            animate={
              animated
                ? {
                    scaleY: [1, 0.3 + (i % 3) * 0.2, 0.8, 0.2 + (i % 4) * 0.2, 1],
                    opacity: [0.9, 0.5, 1, 0.6, 0.9],
                  }
                : undefined
            }
            transition={
              animated
                ? {
                    duration: 1.2 + (i % 5) * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.08,
                  }
                : undefined
            }
          />
        ))}
      </div>
    )
  }

  const heights = barHeights[size]

  return (
    <div
      className={`flex items-center gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="rounded-full flex-shrink-0"
          style={{
            width: size === 'hero' ? '3px' : '2px',
            backgroundColor: barColor,
            height: h,
            opacity: 0.7,
          }}
          animate={
            animated
              ? {
                  scaleY: BAR_SCALE_VALUES[i % BAR_SCALE_VALUES.length],
                  opacity: [0.7, 0.4, 0.9, 0.5, 0.7],
                }
              : undefined
          }
          transition={
            animated
              ? {
                  duration: 1.2 + (i % 5) * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.05,
                }
              : undefined
          }
        />
      ))}
    </div>
  )
}

import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

interface ParallaxOptions {
    offset?: [string, string]
    inputRange?: [number, number]
    outputRange?: [number, number]
}

export function useParallax(
    options: ParallaxOptions = {}
): {
    ref: React.RefObject<HTMLDivElement | null>
    y: MotionValue<number>
    opacity: MotionValue<number>
    scale: MotionValue<number>
} {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: (options.offset as ["start" | "end" | "center", "start" | "end" | "center"] | undefined) ?? ['start end', 'end start'],
    })

    const y = useTransform(
        scrollYProgress,
        options.inputRange ?? [0, 1],
        options.outputRange ?? [80, -80]
    )

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

    return { ref, y, opacity, scale }
}

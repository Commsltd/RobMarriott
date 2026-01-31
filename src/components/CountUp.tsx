import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    separator?: string;
    decimals?: number;
    suffix?: string;
    prefix?: string;
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2,
    className = "",
    separator = ",",
    decimals = 0,
    suffix = "",
    prefix = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    // Use a spring for smoother, more natural ease-out
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });

    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? from : to);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, to, from, direction]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent =
                    prefix +
                    latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator) +
                    suffix;
            }
        });

        // Cleanup listener
        return () => springValue.clearListeners();
    }, [springValue, decimals, separator, suffix, prefix]);

    return <span className={className} ref={ref} />;
}

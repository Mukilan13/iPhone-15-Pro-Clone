export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, aimationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut"
    })

    timeline.to(firstTarget, {
        ...aimationProps,
        ease: "power2.inOut"
    }),
    '<'

    timeline.to(secondTarget, {
        ...aimationProps,
        ease: "power2.inOut"
    }),
    '<'
}
"use client";
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Supports up to 10 images smoothly aligned perfectly.
const GALLERY_IMAGES = [
    { id: "img-0", src: "", name: "", info: "" },
    { id: "img-1", src: "", name: "", info: "" },
    { id: "img-2", src: "/inctf/assets/images/current_speakers/speaker1.jpeg", name: "Speaker Name", info: "Their Info" },
    { id: "img-3", src: "", name: "", info: "" },
    { id: "img-4", src: "", name: "", info: "" },
    { id: "img-5", src: "/inctf/assets/images/current_speakers/speaker2.jpeg", name: "Speaker Name", info: "Their Info" },
    { id: "img-6", src: "", name: "", info: "" },
    { id: "img-7", src: "", name: "", info: "" },
    { id: "img-8", src: "", name: "", info: "" },
    { id: "img-9", src: "", name: "", info: "" }
];
const bentoLayouts = [
    "col-span-1 row-span-1", // 0
    "col-span-1 row-span-1", // 1
    "col-span-2 row-span-2", // 2 [Large]
    "col-span-1 row-span-1", // 3
    "col-span-1 row-span-1", // 4
    "col-span-2 row-span-2", // 5 [Large]
    "col-span-1 row-span-1", // 6
    "col-span-1 row-span-1", // 7
    "col-span-1 row-span-1", // 8
    "col-span-1 row-span-1", // 9
    "col-span-1 row-span-1", // 10
    "col-span-1 row-span-1", // 11
    "col-span-1 row-span-1"  // 12
];

// Global state tracking positions of elements by their UNIQUE ID natively
const imagePositions: Record<string, { x: number; y: number; w: number; h: number }> = {};

const BentoGridItem = ({ item, index, layout }: { item: { id: string; src: string; name: string; info: string }; index: number; layout: string }) => {
    const { id, src, name, info } = item;
    const ref = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const isEmpty = !src;
    const isLarge = layout.includes('col-span-2');
    const isInitialMount = useRef(true);

    // Initial load GSAP animations
    useEffect(() => {
        if (!ref.current || isEmpty) return;
        gsap.registerPlugin(ScrollTrigger);

        if (isInitialMount.current) {
            let ctx = gsap.context(() => {
                // Outer pop-in
                gsap.fromTo(ref.current,
                    { scale: 0.2, opacity: 0 },
                    {
                        scale: 1, opacity: 1, duration: 0.7, delay: index * 0.08, ease: "back.out(1.5)",
                        scrollTrigger: { trigger: ref.current, start: "top bottom-=50", once: true }
                    }
                );

                // Inner scroll scrub effect
                if (innerRef.current) {
                    gsap.fromTo(innerRef.current,
                        { scale: 0.85 },
                        {
                            scale: 1,
                            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "center center", scrub: 1.5 }
                        }
                    );
                }
            });
            isInitialMount.current = false;
            return () => ctx.revert();
        }
    }, [isEmpty, index]);

    const lastId = useRef("");

    useLayoutEffect(() => {
        if (isEmpty || !ref.current) return;

        const el = ref.current;

        const currentTransform = el.style.transform;
        el.style.transform = 'none';
        const currentRect = el.getBoundingClientRect();

        // Convert to absolute page coordinates to protect against user scrolling during shifts
        const absoluteX = currentRect.left + window.scrollX;
        const absoluteY = currentRect.top + window.scrollY;

        el.style.transform = currentTransform;

        const isNewId = lastId.current !== id;

        if (isNewId) {
            // Find where this specific item used to be BEFORE the array shift
            const prev = imagePositions[id];

            // Store current destination position for the NEXT shift securely mapped by strictly Unique ID
            imagePositions[id] = { x: absoluteX, y: absoluteY, w: currentRect.width, h: currentRect.height };

            if (!isInitialMount.current && prev) {
                const dx = prev.x - absoluteX;
                const dy = prev.y - absoluteY;

                // Protect against Zero-division (Infinity scale) throwing unhandled GSAP rejection runtime errors seamlessly
                const safeCurrentW = Math.max(0.1, currentRect.width);
                const safeCurrentH = Math.max(0.1, currentRect.height);

                const dw = prev.w / safeCurrentW;
                const dh = prev.h / safeCurrentH;

                if (Math.abs(dx) > 1 || Math.abs(dy) > 1 || Math.abs(dw - 1) > 0.01) {
                    // The block has moved! Animate EVERYTHING starting FROM its previous position TO its new 0,0 state locally safely natively.
                    gsap.fromTo(el,
                        { x: dx, y: dy, scaleX: dw, scaleY: dh, transformOrigin: "top left", zIndex: 50 },
                        { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 1.0, ease: "power3.inOut", zIndex: isLarge ? 20 : 10, clearProps: "transform,zIndex" }
                    );
                }
            }
            lastId.current = id;
        } else if (!gsap.isTweening(el)) {
            // Unconditionally keep responsive resizes locked in safely if item hasn't moved
            imagePositions[id] = { x: absoluteX, y: absoluteY, w: currentRect.width, h: currentRect.height };
        }
    }, [id, isEmpty, isLarge]);

    if (!item) return <div className={`${layout} aspect-square opacity-0 pointer-events-none`} />;

    return (
        <div
            ref={ref}
            className={`${layout} aspect-square rounded-[0.75rem] overflow-hidden ${isEmpty ? 'opacity-0 pointer-events-none' : 'relative p-[3.5px] bg-slate-900 group shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-shadow duration-500 bento-item-active'}`}
            style={{ zIndex: isLarge ? 20 : 10 }}
        >
            {!isEmpty && (
                <>
                    {/* Static Cohesive PastSpeakers Gradient background edge natively tied to parent layout box! */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-[0.75rem]" />

                    <div ref={innerRef} className="relative w-full h-full p-0.5 bg-slate-950/85 backdrop-blur-sm z-10 rounded-[calc(0.75rem-1.5px)] overflow-hidden border border-cyan-500/10 group-hover:border-transparent transition-colors duration-300">
                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                            <img
                                src={src}
                                alt={`Gallery asset ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 grayscale group-hover:grayscale-0 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent transition-all duration-300" />
                        </div>
                        {/* Tech HUD Corners */}
                        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl-sm pointer-events-none group-hover:border-cyan-300 transition-colors duration-300 z-10" />
                        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-sm pointer-events-none group-hover:border-cyan-300 transition-colors duration-300 z-10" />
                        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-alert-crimson rounded-bl-sm pointer-events-none group-hover:border-red-400 transition-colors duration-300 z-10" />
                        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-alert-crimson rounded-br-sm pointer-events-none group-hover:border-red-400 transition-colors duration-300 z-10" />

                        {/* Speaker Info Card */}
                        <div className={`absolute ${isLarge ? "bottom-2 left-2" : "bottom-1.5 left-1.5"} flex flex-col items-start z-20 max-w-[calc(100%-12px)]`}>
                            {name && name.trim() && (
                                <div className={`bg-slate-950/95 ${isLarge ? "p-1.5" : "p-1"} rounded-t-md w-fit shadow-md flex items-center gap-1`}>
                                    <h4 className={`${isLarge ? "text-xs" : "text-[9px]"} font-bold text-slate-100 flex items-center gap-1`}>
                                        <span>{name}</span>
                                        <span className={`${isLarge ? "w-1.5 h-1.5" : "w-1 h-1"} rounded-full bg-cyan-400 animate-pulse shrink-0`} />
                                    </h4>
                                </div>
                            )}
                            {isLarge && info && info.trim() && (
                                <div className="bg-slate-950/95 p-1 px-2 rounded-b-md w-fit shadow-md">
                                    <p className="text-[10px] text-slate-400 line-clamp-1">{info}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const BentoGalleryCollage = () => {
    // Array order state for interval looping
    const [images, setImages] = React.useState([...GALLERY_IMAGES]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages(prev => {
                const next = [...prev];
                // Find all indices that have populated data (to keep sizes/spacing aligned perfectly on slide)
                const populatedIndices = next
                    .map((item, idx) => item.src ? idx : -1)
                    .filter(idx => idx !== -1);

                if (populatedIndices.length < 2) return prev;

                // Pick two random populated indices to trade slots seamlessly across the layout mesh
                const rand1 = Math.floor(Math.random() * populatedIndices.length);
                let rand2 = Math.floor(Math.random() * populatedIndices.length);
                while (rand2 === rand1) {
                    rand2 = Math.floor(Math.random() * populatedIndices.length);
                }

                const idx1 = populatedIndices[rand1];
                const idx2 = populatedIndices[rand2];

                const temp = next[idx1];
                next[idx1] = next[idx2];
                next[idx2] = temp;

                return next;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-4 grid-flow-dense gap-3 w-full h-auto max-w-[900px] lg:translate-x-10 -translate-y-6 md:-translate-y-10 lg:-translate-y-16 p-2 z-20 pointer-events-auto">
            {images.map((item, index) => {
                const layout = bentoLayouts[index] || "col-span-1 row-span-1";
                // key is INDEX so the layout DOM grid is totally fixed, only content props inside slide!
                return <BentoGridItem key={index} item={item} index={index} layout={layout} />;
            })}
        </div>
    );
};

export default BentoGalleryCollage;

"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroLoadAnimation() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 720px)").matches;

    if (reduceMotion) {
      gsap.set([".top-left-brand", ".side-art", ".hero-word"], { clearProps: "all" });
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(".top-left-brand", { autoAlpha: 0, y: -18 });
      gsap.set(".side-art-left", { autoAlpha: 0, xPercent: isMobile ? -50 : -18, y: isMobile ? 12 : 0, rotation: isMobile ? -3 : -9, scale: 0.88 });
      gsap.set(".side-art-right", { autoAlpha: 0, xPercent: isMobile ? -50 : 18, y: isMobile ? 12 : 0, rotation: isMobile ? 3 : 9, scale: 0.88 });
      gsap.set(".hero-word", { autoAlpha: 0, yPercent: 80, rotateX: -18, transformOrigin: "50% 100%" });
      gsap.set([".launch-stages-heading", ".launch-stages-list li", ".access-strip-heading", ".access-strip-item"], { autoAlpha: 0, y: 38 });

      timeline
        .to(".top-left-brand", { autoAlpha: 1, y: 0, duration: 0.65 })
        .to(".side-art-left", { autoAlpha: 1, xPercent: isMobile ? -50 : 0, y: 0, rotation: isMobile ? -3 : -5, scale: 1, duration: 1.25 }, "-=0.25")
        .to(".side-art-right", { autoAlpha: 1, xPercent: isMobile ? -50 : 0, y: 0, rotation: isMobile ? 3 : 5, scale: 1, duration: 1.25 }, "<0.08")
        .to(".hero-word", { autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.72, stagger: 0.045 }, "-=0.55")
        .add(() => {
          gsap.to(".side-art-left", {
            y: isMobile ? -6 : -18,
            x: isMobile ? 0 : 10,
            rotation: isMobile ? -2.5 : -3.5,
            duration: 3.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
      gsap.to(".access-strip-heading", {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".access-strip-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".launch-stages-heading", {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".launch-stages-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".launch-stages-list li", {
        autoAlpha: 1,
        y: 0,
        duration: 0.68,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".launch-stages-section",
          start: "top 66%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".access-strip-item", {
        autoAlpha: 1,
        y: 0,
        duration: 0.68,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".access-strip-section",
          start: "top 66%",
          toggleActions: "play none none reverse",
        },
      });

          gsap.to(".side-art-right", {
            y: isMobile ? 6 : 20,
            x: isMobile ? 0 : -12,
            rotation: isMobile ? 2.5 : 3.2,
            duration: 4.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
    });

    return () => context.revert();
  }, []);

  return null;
}







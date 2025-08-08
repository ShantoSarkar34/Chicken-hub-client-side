import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";

const Root = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to left, #FCB819,#d40408)",
          transformOrigin: "0%",
          scaleX: scaleX,
          zIndex: 9999,
        }}
      />
      <Header />
      <div className="pt-16 lg:pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

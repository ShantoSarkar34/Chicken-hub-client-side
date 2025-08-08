import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";

const Root = () => {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

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
      <Header />
      <div className="pt-16 lg:pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Reveal = ({
  children,
  variant,
  styles,
  htmlcomponent,
  variantEnd,
}: {
  children: React.ReactNode;
  styles?: any;
  htmlcomponent?: any;
  variant?: Record<string, string | number>;
  variantEnd?: Record<string, string | number>;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const CustomDiv = styled(htmlcomponent ? htmlcomponent : motion.div)`
    ${styles ? styles : ""}
  `;

  return (
    <CustomDiv
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          ...variant,
        },
        visible: {
          opacity: 1,
          ...variantEnd,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      {children}
    </CustomDiv>
  );
};

export default Reveal;

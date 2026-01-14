import { FC, useEffect, useRef } from "react";

import { useCanvasContext } from "../hooks/useCanvas";
import useResponsiveSize from "../hooks/useResponsiveSize";
import WaveObj from "../utils/wave";

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;

  const frequencyRef = useRef(0.013);
  const rafRef = useRef<number | null>(null);

  const waves = {
    // onda mais “forte” (quase preto)
    frontWave: new WaveObj([0.0211, 0.028, 0.015], "rgba(11, 13, 16, 0.10)"),
    // onda de fundo (cinza escuro)
    backWave: new WaveObj([0.0122, 0.018, 0.005], "rgba(42, 47, 53, 0.08)"),
  };

  useEffect(() => {
    if (!context) return;

    const render = () => {
      context.clearRect(0, 0, width, height);

      Object.values(waves).forEach((wave) => {
        wave.draw(context, width, height, frequencyRef.current);
      });

      frequencyRef.current += 0.013;
      rafRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [context, width]);

  return null;
};

export default Wave;

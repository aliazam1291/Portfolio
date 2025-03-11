import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline/next";

export default function SplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish(); // Notify parent component
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <Spline scene="https://prod.spline.design/XuePFKb2YatK-XCP/scene.splinecode" />
    </div>
  );
}

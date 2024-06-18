import { useEffect } from "react";
// https://www.letsbuildui.dev/articles/adding-click-animations-to-anything/
export const useClickAnimation = (element: React.MutableRefObject<any>, config: any) => {
   const {
      size = 100,
      color = "#fff",
      duration = 800,
      effectName = "ripple"
   } = config;

   useEffect(() => {
      if (!element.current) return

      const applyContainerProperties = () => {
         element.current.classList.add("effect-container", effectName);
      };

      const applyStyles = (e: any) => {
         const { offsetX, offsetY } = e;
         const sizeOffset = size / 2;
         const { style } = element.current;

         style.setProperty("--effect-duration", `${duration}ms`);
         style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
         style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
         style.setProperty("--effect-height", `${size}px`);
         style.setProperty("--effect-width", `${size}px`);
         style.setProperty("--effect-color", color);
      };

      const onClick = (e: any) => {
         element.current.classList.remove("active");
         applyStyles(e);
         element.current.classList.add("active");
      };

      // Apply the styles and classname to the element
      applyContainerProperties();

      // Add the event listener on mount
      element.current.addEventListener("mouseup", onClick);

      // Needed for referencing the ref in the return function
      const cleanupRef = element.current;

      return () => {
         cleanupRef.removeEventListener("mouseup", onClick);
      };
   }, [color, duration, effectName, element, size]);
};

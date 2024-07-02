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
      const _el = element.current as HTMLButtonElement

      const applyContainerProperties = () => {
         if (_el.classList.contains('effect-container')) return
         _el.classList.add("effect-container", effectName);
      };

      const applyStyles = (e: MouseEvent) => {
         const { layerX, layerY } = e;
         const sizeOffset = size / 2;
         const { style } = _el;

         style.setProperty("--effect-duration", `${duration}ms`);
         style.setProperty("--effect-top", `${layerY - sizeOffset}px`);
         style.setProperty("--effect-left", `${layerX - sizeOffset}px`);
         style.setProperty("--effect-height", `${size}px`);
         style.setProperty("--effect-width", `${size}px`);
         style.setProperty("--effect-color", color);
      };
      let timer: NodeJS.Timeout

      const onClick = (e: MouseEvent) => {
         _el.classList.remove("active");
         applyStyles(e);
         _el.classList.add("active");

         if (timer) clearTimeout(timer);

         timer = setTimeout(() => {
            _el.classList.remove("active");
            const { style } = _el;
            style.setProperty("--effect-color", 'transparent');
         }, duration);
      };

      // Apply the styles and classname to the element
      applyContainerProperties();

      // Add the event listener on mount
      _el.addEventListener("mouseup", onClick);

      // Needed for referencing the ref in the return function
      const cleanupRef = _el;

      return () => {
         cleanupRef.removeEventListener("mouseup", onClick);
      };
   }, [element]);
};

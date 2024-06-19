import { useEffect } from "react";

type SlideAnimationProp = {
   eToSlide: React.MutableRefObject<any>,
   onClickRef: React.MutableRefObject<any>,
   config?: {
      duration?: number,
      direcction?: 'x' | 'y'
      listening?: any
   },
}

const SLIDE_CSS_NAME = 'slider-container'

export const useSildeAnimation = ({ eToSlide, onClickRef, config = {} }: SlideAnimationProp) => {
   const {
      duration = 600,
      direcction = 'y',
   } = config;

   const ON_Y = direcction === 'y'

   useEffect(() => {
      if (!eToSlide.current) return
      if (!onClickRef.current) return

      const SLIDER: HTMLElement = eToSlide.current
      const height = SLIDER.offsetHeight;
      const width = SLIDER.offsetWidth;


      const applyContainerProperties = () => {
         const { style } = SLIDER;

         SLIDER.classList.add(SLIDE_CSS_NAME, ON_Y ? "slide-y" : "slide-x");
         style.setProperty("--slide-duration", `${duration}ms`);
         if (ON_Y)
            style.setProperty("--slide-height", `${height + 2}px`);
         else
            style.setProperty("--slide-width", `${width}px`);
      };

      const onClick = (e: MouseEvent) => {
         if (ON_Y) {
            if (SLIDER.classList.contains('close'))
               SLIDER.classList.remove("close");
            else SLIDER.classList.add("close");

         } else {
            if (SLIDER.classList.contains('close-x'))
               SLIDER.classList.remove("close-x");
            else SLIDER.classList.add("close-x");
         }
      };

      // Apply the styles and classname to the eToSlide
      applyContainerProperties();

      // Add the event listener on mount
      onClickRef.current.addEventListener("mouseup", onClick);

      // Needed for referencing the ref in the return function
      const cleanupRef = onClickRef.current;

      return () => {
         cleanupRef.removeEventListener("mouseup", onClick);
      };
   }, [eToSlide, onClickRef]);
};


const getSlideElements = () => {
   return document.getElementsByClassName(SLIDE_CSS_NAME)
}

const iterateElements = (array: HTMLCollectionOf<Element>, func: (e: Element) => void) => {
   for (let index = 0; index < array.length; index++) {
      func(array[index])
   }
}

export const removeCloseStyle = () => {
   iterateElements(getSlideElements(), (element) => {
      element.classList.remove('close')
   })
}

export const addSlideStyle = (css_name: string) => {
   iterateElements(getSlideElements(), (element) => {
      if (element.classList.contains(css_name)) return

      element.classList.add(css_name)
   })
}

export const removeSlideStyle = (css_name: string) => {
   iterateElements(getSlideElements(), (element) => {
      element.classList.remove(css_name)
   })
}

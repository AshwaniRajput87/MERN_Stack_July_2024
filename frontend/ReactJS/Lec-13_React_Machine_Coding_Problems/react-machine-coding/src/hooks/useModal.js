import { useCallback, useState } from "react";

export const useModal = (initialVisibility = false) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const show = useCallback(() => {
    setIsVisible(true); // Always set to true to show modal
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false); // Always set to false to hide modal
  }, []);

  const toggle = useCallback(() => {
    setIsVisible((prev) => !prev); // Toggle visibility
  }, []);

  return {
    isVisible,
    show,
    hide,
    toggle,
  };
};

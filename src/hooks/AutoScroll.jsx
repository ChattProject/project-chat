import { useEffect, useRef } from "react";

export function useAutoScroll(length) {
  const elementRef = useRef(null)
  const prevLengthRef = useRef(length)
  const prevLength = prevLengthRef.current
  useEffect(() => {
    prevLengthRef.current = length
    if (prevLength < length && elementRef.current !== null) {
      elementRef.current.scrollTop = elementRef.current.scrollHeight
    }
  }, [length, prevLength]);

  return elementRef;
}
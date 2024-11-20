import { useEffect, useState, useRef } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true if intersecting, never set back to false
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(ref.current);  // Optionally unobserve after visibility
        }
      },
      {
        rootMargin,
        threshold: 0.1  // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default useOnScreen;

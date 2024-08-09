import { useEffect } from 'react';

const useBodyScroll = isOpen => {
  useEffect(() => {
    if (isOpen) {
      // Disable scroll when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll when the modal is closed
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
};

export default useBodyScroll;

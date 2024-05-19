'use client';

import { useCallback, useEffect } from 'react';
import css from './Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
};

const Modal = ({ onClose, children }: Props) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [handleKeyDown]);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modalOverlay} onClick={handleClickOutside}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;

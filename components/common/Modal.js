import { useModal } from '@context/ModalContext';
import CloseIcon from '@icons/CloseIcon';
import { breakpoints, colors, spacing } from '@styles';
import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

function Modal({ children }) {
  const ref = useRef();
  const { handleModal, modal } = useModal();

  useEffect(() => {
    ref.current = document.querySelector('#modal-root');
  }, []);

  const keyPress = useCallback((e) => {
    if (e.key === 'Escape' && modal) {
      () => handleModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return modal
    ? createPortal(
        <Overlay>
          <Body>
            {children}
            <CloseButton onClick={() => handleModal()}>
              <CloseIcon width="20" />
            </CloseButton>
          </Body>
        </Overlay>,
        ref.current
      )
    : null;
}

const fadeIn = keyframes`from { opacity: 0; }`;

const Overlay = styled.div`
  align-items: center;
  animation: ${fadeIn} 200ms ease-out;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const Body = styled.div`
  align-items: center;
  background: ${colors.white};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.small} ${spacing.small};
  position: relative;
  width: 100%;
  @media (min-width: ${breakpoints.medium}) {
    width: ${breakpoints.medium};
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: ${spacing.small};
  top: ${spacing.small};
`;

export default Modal;

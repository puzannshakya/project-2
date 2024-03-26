import styled from "@emotion/styled";
import theme from "../../../utils/Theme";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.neutral.n70};
  opacity: 50%;
  cursor: pointer;
`;

export const ModalBox = styled.div<{ width?: string }>`
  position: relative;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: white;
  cursor: auto;
  width: calc(100% - 32px);

  @media (min-width: 992px) {
    width: auto;
    max-width: ${({ width = "50vw" }) => width};
  }
`;

export const ModalContent = styled.div`
  color: #6b6b6b;
  font-size: 16px;
  max-height: 75vh;
  overflow-y: auto;
`;

export const ModalBack = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 20px;
  left: 16px;
  background: transparent;
  border: none;
  color: #16161d;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #000; // Or whichever color you prefer for hover state
  }
`;

export const ModalClose = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 16px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // :hover{
  //     transform: rotate(180deg);
  // }
`;

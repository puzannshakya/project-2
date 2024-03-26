import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Typography from "../Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: "Inter";
`;

export const Container = styled.div``;

export const InputContainer = styled.div`
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const InputText = styled.input`
  width: 100%;
  border: none;
  ${fontStyle}

  :focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 6px;
  box-sizing: border-box;
`;

export const ListWrapper = styled.div`
  width: 100%;
  max-height: 150px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ItemContainer = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  box-sizing: border-box;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n10};
  }

  :hover {
    background-color: ${({ theme }) => theme.btn.color.lightest};
  }
`;

export const Error = styled(Typography)`
  padding: 0 8px;
`;

export const InputHidden = styled.input``;

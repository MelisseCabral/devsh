import { Copy } from "@styled-icons/ionicons-outline";
import styled from "styled-components";
import { Box } from "../UI/styles";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.one};
  color: ${({ theme }) => theme.colors.tertiary.one};
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;

  & > div {
    padding: 2rem 0;
    display: grid;
    height: 100%;
  }
`;

export const Command = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Instruction = styled(Box)`
  box-shadow: none;
  background-color: ${({ theme }) => theme.colors.tertiary.two};

  & span {
    margin-right: 1rem;
  }
`;

export const IconCopy = styled(Copy)`
  cursor: pointer;
  border: 0 !important;

  width: 1.2rem;
`;

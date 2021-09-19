import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.one};
  color: ${({ theme }) => theme.colors.tertiary.one};
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  flex: 1;

  &::selection {
    background: ${({ theme }) => theme.colors.primary.one};
  }

  & a {
    transition: all 0.3s ease-in-out;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;

  & > div {
    display: grid;
    grid-template-rows: 5fr 1fr;
    height: 100%;
  }
`;

export const HelpPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  & a {
    text-align: center;
    font-family: var(--system-fonts-logo);
    text-decoration: none;
    font-size: 40px;
    transition: all 0.3s ease-in-out;
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.tertiary.two};
  }
`;

export const Emoji = styled.span`
  font-family: Opentype;
`;

export const FooterNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  user-select: none;

  & span {
    font-size: 14px;
  }

  & a:last-child {
    color: ${({ theme }) => theme.colors.tertiary.two};
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.tertiary.one};
  }
`;

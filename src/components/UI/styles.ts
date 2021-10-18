/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.tertiary.one};
  font-family: var(--system-fonts-primary);
  margin-left: 2rem;
  font-weight: 400;
  text-align: left;
  font-size: 24px;
  width: 100%;
  user-select: none;
  padding: 2rem 0;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary.two};
  padding: 1em;
  border-radius: 10px;
  font-family: var(--system-fonts-primary);
  display: flex;
  font-size: 1rem;
  max-width: 70vw;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  text-align: justify;
  line-height: 1.5rem;
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

export const Article = styled.article`
  scroll-snap-align: start;
  min-height: 50vh;
`;

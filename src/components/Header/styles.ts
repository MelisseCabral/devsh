/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.one};
  color: ${({ theme }) => theme.colors.tertiary.one};
  width: 100%;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  flex: 1;

  & > div {
    user-select: none;
  }
`;
export const ContentGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 5fr 1fr;
  height: 100%;
  width: 100%;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'Sketch 3D';
  font-size: 60px;
`;

export const Subtitle = styled.span`
  font-family: var(--system-fonts-primary);
  font-style: italic;
  font-size: 14px;
  font-weight: 100;
`;

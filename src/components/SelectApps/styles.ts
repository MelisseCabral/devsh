import styled from 'styled-components';
import { H2 } from '../UI/styles';

export const Container = styled.form`
  color: ${({ theme }) => theme.colors.quaternary.one};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled(H2)`
  color: ${({ theme }) => theme.colors.quaternary.one};
  font-weight: 500;
`;

export const Section = styled.div`
  & > span {
    user-select: none;
    text-align: left;
    font-size: 20px;
    font-family: var(--system-fonts-secondary);
  }
`;

export const ContainerCategories = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  padding: 2em;
`;

export const ButtonDownload = styled.a`
  width: fit-content;
  margin: auto;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.secondary.one};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.tertiary.one};
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--system-fonts-secondary);
`;

export const ButtonRaw = styled(ButtonDownload)`
  background-color: ${({ theme }) => theme.colors.tertiary.two};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
  }
`;

export const Selector = styled.div`
  text-align: left;
  font-size: 20px;
  display: flex;
  margin-top: 25px;

  & img {
    width: 20px;
    margin: auto;
    margin-right: 15px;
    margin-left: 0;
  }

  & input {
    font-size: 16px;
    margin: auto;
    margin-right: 15px;
    margin-left: 0;
    cursor: pointer;
  }

  & input[type='checkbox'] {
    width: 20px; /*Desired width*/
    height: 20px; /*Desired height*/
  }

  & span {
    font-family: var(--system-fonts-secondary);
    font-size: 1rem;
    user-select: none;
  }
`;

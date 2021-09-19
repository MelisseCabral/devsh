import React from "react";
import { Box } from "../UI/styles";
import {
  Container,
  ContentGrid,
  ContentTitle,
  Subtitle,
  Title,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <ContentGrid>
          <ContentTitle>
            <Title>{"</> DevSH"}</Title>
            <Subtitle>The easiest way to a clean start.</Subtitle>
          </ContentTitle>
          <Box>
            Choose the applications and download a shell script to install all
            the dev tools you need for your debian system!_
          </Box>
        </ContentGrid>
      </div>
    </Container>
  );
};

export default Header;

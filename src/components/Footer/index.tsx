import React from "react";
import { H2 } from "../UI/styles";
import { Container, Content, Emoji, FooterNote, HelpPost } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <H2>Does not find something you like?</H2>
      <Content>
        <div>
          <HelpPost className="noselect">
            <a
              href="https://github.com/MelisseCabral/devsh"
              target="_blank"
              className="logo"
              rel="noreferrer"
            >
              Help us!
            </a>
          </HelpPost>

          <FooterNote className="noselect">
            <span>
              <span>{"Made with "}</span>
              <Emoji>❤️</Emoji>
              <span>{" by: "}</span>
              <a
                href="https://github.com/MelisseCabral"
                target="_blank"
                rel="noreferrer"
              >
                Melisse Cabral
              </a>
            </span>
          </FooterNote>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;

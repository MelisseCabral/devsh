import React from 'react';
import { apps } from '../../data/apps';
import { ICategory } from './ISelectApps';
import {
  ButtonDownload,
  ButtonRaw,
  ButtonsContainer,
  Container,
  ContainerCategories,
  Section,
  Selector,
  Title
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Title>Choose your Apps:</Title>
      <ContainerCategories>
        {apps.map((category: ICategory) => (
          <Section key={category.name}>
            <span>{category.name}</span>
            {category.apps.map((app) => (
              <Selector key={app.name}>
                <input
                  width={30}
                  height={30}
                  type="checkbox"
                  name={app.name?.toString()}
                  defaultChecked={app.defaultCheck}
                  disabled
                />
                {app.icon && <img src={app.icon} alt={app.name} />}
                <span>{app.name}</span>
              </Selector>
            ))}
          </Section>
        ))}
      </ContainerCategories>
      <ButtonsContainer>
        <div>
          <ButtonDownload href="./install.sh" download>
            Download
          </ButtonDownload>
          <ButtonRaw href=".api/raw/install.sh" target="_blank">
            RAW
          </ButtonRaw>
        </div>
      </ButtonsContainer>
    </Container>
  );
};

export default Footer;

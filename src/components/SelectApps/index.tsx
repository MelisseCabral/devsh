import apps from './../../data/apps.json';
import { AppSelect, ButtonDownload, CategorySection, Container, ContainerCategories, Title } from './styles';

interface ICategory {
  name: string,
  apps: IApp[]
}

interface IApp {
  name: string,
  commands: string,
  icon: string
}

function Footer() {

  function AppSelector(app: IApp){
    return (
      <AppSelect className="AppSelect">
        <input width={30} height={30} type="checkbox" name={app.name?.toString()}/>
        <img src={'data:image/png;base64,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'} />
        <span>
          {app.name}
        </span>
      </AppSelect>
    )
  }
  return (
    <Container>
        <Title>
            Choose your Apps :
        </Title>

        <ContainerCategories>
          {
            apps.map((category: ICategory) => {
              return (
                <CategorySection>
                  {category.name}
                  {category.apps.map((app: IApp) => 
                    AppSelector(app)
                  )}
                </CategorySection>
              )
            })
          }
        </ContainerCategories>

        <ButtonDownload>
          Download
        </ButtonDownload>
    </Container>
  );
}

export default Footer;

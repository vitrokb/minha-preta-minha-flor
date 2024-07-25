import { Typography as MuiTypography, styled, TypographyProps } from '@mui/material';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';
import './Project.css';

function Project() {
  const StyledTypography = styled(MuiTypography)<TypographyProps>(() => ({
    fontSize: '1rem',
    margin: '4rem 2rem',
    textAlign: 'center',
    '@media (min-width: 769px)': {
      margin: '4rem 4rem',
      width: '80%',
      alignSelf: 'center',
    },
  }));

  return (
    <section className="project-wrapper">
      <div>
        <Logo />
        <Navbar />
      </div>
      <StyledTypography variant="h1">
        O PROJETO MINHA PRETA MINHA FLOR - OLHAR SOB NOSSAS RAINHAS YABÁS, CONSISTE NA PRODUÇÃO E
        REALIZAÇÃO DE ENSAIOS FOTOGRÁFICOS QUE CULMInaram NA MONTAGEM dessa EXPOSIÇÃO, FÍSICA E
        VIRTUAL QUE VALORIZE E ENALTEÇA A BELEZA DE MULHERES NEGRAS SOBRE O OLHAR DE EQUIPE FORMADA
        POR MULHERES PRETAS SOB OS CENÁRIOS DA CIDADE DE NITERÓI COM A REFERÊNCIA ARTÍSTICA
        ANCESTRAL E MATRIARCAL DAS YABÁS, RAINHAS E DEUSAS DA MITOLOGIA YORÙBÁ E DE EXALTAÇÃO DAS
        CULTURAS DE MATRIZ AFRICANA. ESTA EXPOSIÇÃO FOI UM PROJETO CONTEMPLADO PELA CHAMADA PÚBLICA
        02/2023 SECRETARIA MUNICIPAL - LEI PAULO GUSTAVO
      </StyledTypography>
      <Footer />
    </section>
  );
}

export default Project;

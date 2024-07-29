import { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './OrixaSection.css';

interface OrixaSectionProps {
  isDesktop: boolean;
  firstImage: string;
  carrouselImages: { name: string }[];
  orixaName: string;
  firstSectionText: ReactNode | string;
  modelName: ReactNode | string;
  modelStatement: string;
  firstSectionInverse?: boolean;
  grid: ReactNode;
  minWidth?: boolean;
  obaSection?: boolean;
}

function OrixaSection({
  isDesktop,
  firstImage,
  carrouselImages,
  orixaName,
  firstSectionText,
  modelName,
  modelStatement,
  firstSectionInverse = false,
  grid,
  minWidth,
  obaSection,
}: OrixaSectionProps) {
  const typographySx = {
    textAlign: isDesktop ? (!firstSectionInverse ? 'right' : 'left') : 'center',
    minWidth: minWidth ? 'max-content' : '',
  };

  const responsiveClasses = {
    firstSectionWrapper: firstSectionInverse
      ? 'first-section-wrapper-inverse'
      : 'first-section-wrapper',
    firstSectionText: firstSectionInverse
      ? 'first-section-text inverse-text'
      : 'first-section-text',

    firstPictureWrapper: obaSection ? 'first-picture-wrapper oba-section' : 'first-picture-wrapper',
    firstPictureFlexWrapper: firstSectionInverse
      ? 'first-picture-flex-wrapper inverse-flex'
      : 'first-picture-flex-wrapper',
  };

  return (
    <section className="section-wrapper">
      <div className={responsiveClasses.firstSectionWrapper}>
        <div className={responsiveClasses.firstSectionText}>
          <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
            {orixaName}
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: typographySx.textAlign, minWidth: typographySx.minWidth }}
          >
            {firstSectionText}
          </Typography>
        </div>
        <div
          className={`${responsiveClasses.firstPictureWrapper} ${responsiveClasses.firstPictureFlexWrapper}`}
        >
          <div className="first-picture">
            <img src={firstImage} />
          </div>
        </div>
      </div>

      <div className="carrousel-wrapper">
        <div className="carrousel">
          <Carousel fade controls={isDesktop} interval={5000}>
            {carrouselImages.map((picture, key) => (
              <CarouselItem key={key}>
                <img className="carrousel-img" src={picture.name} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="second-section-wrapper">
        <div className="second-section-text">
          <div className="">
            <Typography
              variant="h6"
              sx={{
                marginBottom: '1rem',
                textAlign: 'center',
                fontWeight: 700,
                lineHeight: '1.375rem',
              }}
            >
              {modelName}
            </Typography>
          </div>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            {modelStatement}
          </Typography>
        </div>
        {grid}
      </div>
    </section>
  );
}

export default OrixaSection;

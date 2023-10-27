import React from 'react';

import { AboutContent } from './content';
import { PageHeader, ImageSection } from '../../components';
import { ChisselsImage } from '../../../public/images';

const About = () => (
  <>
    <PageHeader title="За мен" description="Моята история" />
    <ImageSection image={ChisselsImage} />
    <AboutContent />
  </>
);

export default About;

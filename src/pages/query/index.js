import React from 'react';

import { PageHeader, QueryForm, FAQ } from '../../components';

const Query = () => (
  <>
    <PageHeader title="Запитване" description="Изпрати запитване относно конкретна изработка" />
    <QueryForm />
    <FAQ />
  </>
);

export default Query;

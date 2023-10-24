import React from 'react';

import { PageHeader, ImageSection, CategoriesList, QueryForm } from '../components';
import { HomeImage } from '../../public/images';
import './home.less';

const WelcomeSection = () => (
  <div className="section">
    <h3>ДОБРЕ ДОШЛИ В “ЦАРСТВОТО НА ДЪРВОТО“</h3>
    <p>
      Дърворезбата, това е изкуство подвластно на магията на дървото. Тя е един от най-старите
      занаяти практикувани у нас. Красотата, която остава на дървото идва от вън от природата, от
      безпределните картини на човешката фантазия, пречупени през призмата на живота. Дървото сякаш
      оживява, говори ми, радва душата, очите ми. Аз съм подвласна на неговата магия.
    </p>
    <p>
      С този сайт искам да ви даря със частици от тази магия. Да внеса гората в дома Ви, за да стане
      итериора неповторим. Колорит, мекота, изисканост, нежност, любов, културно наследство,
      родолюбие и гордост. Това са неговите дарове.
    </p>
  </div>
);

const Home = () => (
  <>
    <PageHeader
      title="Магия от дърво"
      description="Авторски дърворезби и еко изделия от Диди Георгиева"
    />
    <ImageSection image={HomeImage} />
    <WelcomeSection />
    <PageHeader title="Категории" description="Галерия от уникални изработки" />
    <CategoriesList />
    <PageHeader title="Запитване" description="Изпрати запитване относно конкретна изработка" />
    <QueryForm />
  </>
);

export default Home;

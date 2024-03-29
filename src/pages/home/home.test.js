import React from 'react';
import { render } from '@testing-library/react';

import Home from './';

jest.mock('../../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

jest.mock('../../components/categories-list', () => () => <div>CategoriesList</div>);
jest.mock('../../components/query-form', () => () => <div>QueryForm</div>);
jest.mock('../../../public/images', () => ({ HomeImage: 'home-img' }));

describe('home page', () => {
  it('should render', () => {
    const { container } = render(<Home />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin-top: 10px;
      }

      .c0 img {
        width: 100%;
      }

      .c1 {
        margin: auto;
        margin-bottom: 50px;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .c1 h3 {
        align-self: center;
        margin: 40px;
      }

      .c1 p {
        padding: 10px;
      }

      <div>
        <div>
          Магия от дърво
           
          Авторски дърворезби и еко изделия от Диди Георгиева
        </div>
        <div
          class="c0"
        >
          <img
            src="home-img"
          />
        </div>
        <div
          class="c1"
        >
          <h3>
            ДОБРЕ ДОШЛИ В “ЦАРСТВОТО НА ДЪРВОТО“
          </h3>
          <p>
            Дърворезбата, това е изкуство подвластно на магията на дървото. Тя е един от най-старите занаяти практикувани у нас. Красотата, която остава на дървото идва от вън от природата, от безпределните картини на човешката фантазия, пречупени през призмата на живота. Дървото сякаш оживява, говори ми, радва душата, очите ми. Аз съм подвласна на неговата магия.
          </p>
          <p>
            С този сайт искам да ви даря със частици от тази магия. Да внеса гората в дома Ви, за да стане итериора неповторим. Колорит, мекота, изисканост, нежност, любов, културно наследство, родолюбие и гордост. Това са неговите дарове.
          </p>
        </div>
        <div>
          Категории
           
          Галерия от уникални изработки
        </div>
        <div>
          CategoriesList
        </div>
        <div>
          Запитване
           
          Изпрати запитване относно конкретна изработка
        </div>
        <div>
          QueryForm
        </div>
      </div>
    `);
  });
});

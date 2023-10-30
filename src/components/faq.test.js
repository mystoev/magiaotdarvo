import React from 'react';
import { renderWithTheme } from '../../test/utils';

import FAQ from './faq';

describe('<FAQ />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<FAQ />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c1 {
        height: 3px;
      }

      .c2 {
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1C1311;
      }

      .c2 h1 {
        font-size: 3em;
      }

      .c2 h2 {
        font-size: 1.2em;
      }

      .c2 h1,
      .c2 h2 {
        color: #F3E5CF;
        text-shadow: 0px 0px 10px #EEC61F;
        text-decoration: none;
        text-align: center;
      }

      .c3 {
        width: 80%;
        margin: 20px auto;
      }

      .c3 h3 {
        margin: 20px auto;
      }

      .c3 li {
        margin-left: 20px;
      }

      @media only screen and (max-width:768px) {
        .c2 h1 {
          font-size: 2em;
        }

        .c2 h2 {
          font-size: 1em;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
        <div
          class="c2"
        >
          <h1>
            ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
          </h1>
          <h2>
            Вижте отговори на въпроси, които могат да Ви интересуват
          </h2>
        </div>
        <div
          class="c0 c1"
        />
        <div
          class="c3"
        >
          <h3
            id="faq1"
          >
            Как да поръчам?
          </h3>
          <p>
            Може да направите поръчка по няколко начина:
          </p>
          <ul>
            <li>
              като се обадите директно по телефон на номер 0890932001;
            </li>
            <li>
              като пуснете запитване, за конкретна изработка;
            </li>
          </ul>
          <h3
            id="faq2"
          >
            Искате да поръчате вече изработен продукт?
          </h3>
          <p>
            За да поръчате вече изработен продукт, може да пуснете запитване от страницата на самия продукт. Цената на всяка изработка от индивидуална, тъй като зависи от размерите на изработка, материалите, от които ще е направена и детайлите.
          </p>
          <h3
            id="faq3"
          >
            Колко време отнема изработката?
          </h3>
          <p>
            Зависи от големината, сложността и детайлите на изработката. Може да пуснете запитване или директно да се обадите на номер 0890932001, където може да получите отговорите на всякакви въпроси.
          </p>
        </div>
      </div>
    `);
  });
});

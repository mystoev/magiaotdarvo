import React from 'react';
import { render } from '@testing-library/react';

import FAQ from './faq';

describe('<FAQ />', () => {
  it('should render', () => {
    const { container } = render(<FAQ />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 eYwklx fDJSZx"
        />
        <div
          class="page-header__HeaderTitles-sc-1ejvrf1-0 gErLqz"
        >
          <h1>
            ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
          </h1>
          <h2>
            Вижте отговори на въпроси, които могат да Ви интересуват
          </h2>
        </div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 eYwklx fDJSZx"
        />
        <div
          class="faq__FAQContainer-sc-1xuqxwm-0 eDpewO"
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

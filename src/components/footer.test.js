import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router, useNavigate } from 'react-router-dom';

import Footer from './footer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));
jest.mock('../../public/images', () => ({ FacebookIcon: 'fb-icon', InstagramIcon: 'insta-icon' }));

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <Footer />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c2 {
        height: 3px;
      }

      .c5 {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .c5 >span {
        font-size: 0.8em;
      }

      .c5 >img {
        width: 24px;
        height: 24px;
      }

      .c6 {
        display: block;
        font-size: 0.6em;
        line-height: 1.4em;
        text-align: center;
      }

      .c6 span {
        font-family: Verdana;
      }

      .c0 {
        margin-top: auto;
      }

      .c3 {
        padding: 20px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-content: space-evenly;
        background-color: #1C1311;
      }

      .c4 {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .c4 h3 {
        color: #F3E5CF;
        margin-bottom: 10px;
        text-decoration: underline;
      }

      .c4 p,
      .c4 a {
        color: #F3E5CF;
      }

      .c4 p span,
      .c4 a span {
        font-family: Verdana;
        font-size: 0.8em;
      }

      @media only screen and (max-width:768px) {
        .c0 {
          flex-direction: column;
          gap: 30px;
        }
      }

      @media only screen and (max-width:768px) {
        .c4 {
          align-items: center;
          text-align: center;
        }
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1 c2"
          />
          <div
            class="c3"
          >
            <div
              class="c4"
            >
              <h3>
                Контакти
              </h3>
              <p>
                Телефон: 
                <span>
                  0890932001
                </span>
              </p>
              <p>
                Адрес: 
                <span>
                  5177, с. Сушица
                </span>
              </p>
              <p>
                Имейл:
                <span>
                  <a
                    href="mailto:magiaotdarvo@gmail.com"
                  >
                     magiaotdarvo@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div
              class="c4"
            >
              <h3>
                Социални мрежи
              </h3>
              <a
                class="c5"
                href="https://www.facebook.com/profile.php?id=100048409279352"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="fb-icon"
                />
                <span>
                  Facebook
                </span>
              </a>
              <a
                class="c5"
                href="https://www.instagram.com/magiaotdarvo/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="insta-icon"
                />
                <span>
                  Instagram
                </span>
              </a>
            </div>
            <div
              class="c4"
            >
              <h3>
                ЧЗВ
              </h3>
              <a
                href="/query#faq1"
              >
                Как да поръчам?
              </a>
              <a
                href="/query#faq2"
              >
                Колко време отнема изработката?
              </a>
              <a
                href="/query#faq3"
              >
                Искате да поръчате вече изработен продукт?
              </a>
            </div>
          </div>
          <div
            class="c6"
          >
            <span>
              ©
            </span>
             
            2023
             Магия от дърво. Всички права запазени.
          </div>
        </div>
      </div>
    `);
  });

  it('should not navigate to admin when clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { queryByText } = renderWithTheme(
      <Router>
        <Footer />
      </Router>
    );

    fireEvent.click(queryByText('Всички права запазени', { exact: false }));

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});

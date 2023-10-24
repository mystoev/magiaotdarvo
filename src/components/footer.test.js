import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router, useNavigate } from 'react-router-dom';

import Footer from './footer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <Footer />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="footer-container"
        >
          <div
            class="accent-bar normal"
          />
          <div
            class="footer"
          >
            <div
              class="footer-section"
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
              class="footer-section"
            >
              <h3>
                Социални мрежи
              </h3>
              <a
                class="social-link"
                href="https://www.facebook.com/profile.php?id=100048409279352"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  class="social-icon"
                  src="[object Object]"
                />
                <span>
                  Facebook
                </span>
              </a>
              <a
                class="social-link"
                href="https://www.instagram.com/magiaotdarvo/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  class="social-icon"
                  src="[object Object]"
                />
                <span>
                  Instagram
                </span>
              </a>
            </div>
            <div
              class="footer-section"
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
            class="copyright"
          >
            <span>
              ©
            </span>
             2022 Магия от дърво. Всички права запазени.
          </div>
        </div>
      </div>
    `);
  });

  it('should not navigate to admin when clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { queryByText } = render(
      <Router>
        <Footer />
      </Router>
    );

    fireEvent.click(queryByText('Всички права запазени', { exact: false }));

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});

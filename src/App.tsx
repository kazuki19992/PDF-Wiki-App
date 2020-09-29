import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/all';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import 'bulma/css/bulma.css';
import './App.css';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'ホーム': 'Home',
        'ドキュメント': 'Docs',
        'English': '日本語',
        'ログイン': 'Log in'
      },
    },
    ja: {
      translation: {
        'ホーム': 'ホーム',
        'ドキュメント': 'ドキュメント',
        'English': 'English',
        'ログイン': 'ログイン'
      },
    },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

function App() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="App">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            <i className="fas fa-book-reader"></i> Tech_Library
          </span>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              {t('ホーム')}
            </a>

            <a className="navbar-item">
              {t('ドキュメント')}
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-hover" onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>
                  {t('English')}
                </button>
                <a className="button is-primary">
                  {t('ログイン')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;

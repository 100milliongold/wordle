import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/styles/index.css';
import reportWebVitals from './core/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import { Loading } from 'pages';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from 'core/reducer';
import { Provider } from 'react-redux';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { SWRConfig } from 'swr';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const MainPage = lazy(() => import('pages/main'));
const GamePage = lazy(() => import('pages/game'));

root.render(
  <React.StrictMode>
    <SWRConfig>
      <Provider store={store}>
        <HotkeysProvider>
          <GlobalStyles />
          <Suspense fallback={<Loading />}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/game/:id' element={<GamePage />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </HotkeysProvider>
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { ModalProvider } from '@context/ModalContext';
import { RoutesProvider } from '@context/RoutesContext';
import { colors, fonts } from '@styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    color: ${colors.black};
    font-family: ${fonts.base};
    font-size: ${fonts.size.default};
    margin: 0;
    padding: 0;
  }
  a {
    color: ${colors.primary};
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <RoutesProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </RoutesProvider>
    </>
  );
}

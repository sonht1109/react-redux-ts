import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-styles';
// css style configs
import 'styles/fonts.css'; // import config font define
import theme from 'styles/theme';
// diff import
import GlobalSetup from 'components/Layout/GlobalSetup';
import Loading from 'components/Loading';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import LanguageProvider from './LanguageProvider';
import MapRoutes from './MapRoutes';
import { appSelector } from './store';

function App() {
  const { loading } = useSelector(appSelector);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalSetup />
        <MapRoutes />
        {loading && <Loading />}
        <GlobalStyle />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
          }}
          reverseOrder={false}
        />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

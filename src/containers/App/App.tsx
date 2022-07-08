import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
// css style configs
import theme from 'styles/theme';
import 'styles/fonts.css'; // import config font define
// diff import
import { useSelector } from 'react-redux';
import LanguageProvider from './LanguageProvider';
import { appSelector } from './store';
import Loading from 'components/Loading';
import { Toaster } from 'react-hot-toast';
import GlobalSetup from 'components/Layout/GlobalSetup';
import MapRoutes from './MapRoutes';

function App() {
  const { loading } = useSelector(appSelector);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalSetup />
        <MapRoutes />
        {/* // extra config global */}
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

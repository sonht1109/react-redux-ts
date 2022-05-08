import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
// css style configs
import theme from 'styles/theme';
import 'styles/fonts.css'; // import config font define
// diff import
import Home from 'containers/Home';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import LanguageProvider from './LanguageProvider';
import { appSelector } from './store';
import Loading from 'components/Loading';

function App() {
  const { loading } = useSelector(appSelector);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
        {/* // extra config global */}
        {loading && <Loading />}
        <GlobalStyle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

import { useContext } from 'react';
import themeContext from '../ThemeContext';

function ThemeProvider(props) {
  const { isThemeDark } = useContext(themeContext);

  return <div className={isThemeDark ? 'darkMode' : 'lightMode'}>{props.children}</div>;
}

export default ThemeProvider;

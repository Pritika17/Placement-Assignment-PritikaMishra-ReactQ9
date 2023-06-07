import React from 'react';
import { ThemeProvider, ThemeContext } from './themeChanger';
import "./App.css"

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className={theme}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

const MainContent = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <main className={theme}>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is the main content area.</p>
    </main>
  );
};

export default App;

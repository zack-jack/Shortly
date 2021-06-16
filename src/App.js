import AppHeader from './components/AppHeader';
import Home from './views/Home';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div
      id="app"
      className="flex flex-col min-h-screen"
    >
      <AppHeader />
      <main className="flex-grow">
        <Home />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

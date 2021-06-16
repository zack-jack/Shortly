import AppHeader from './components/AppHeader';

function App() {
  return (
    <div
      id="app"
      className="flex flex-col min-h-screen"
    >
      <AppHeader />
      <main className="flex-grow px-3">
        <h1>Main Content</h1>
      </main>
    </div>
  );
}

export default App;

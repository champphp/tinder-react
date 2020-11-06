import './App.css';
import Header from './header/Header'
import TinderCards from './tinder-cards/TinderCards'
import SwipeButtons from './swipe-buttons/SwipeButtons'

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />

    </div>
  );
}

export default App;

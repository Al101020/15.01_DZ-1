import './App.css';
import ShopItemFunc from './ShopItemFunc';
import item from './item';

function App() {

  return (
    <div>
      <div className="title">
        <h1>Задание - 1</h1>
      </div>
      
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          {/* <div>className="window"</div> */}
          <ShopItemFunc item={item} />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="drag-n-drop">
          <div className="dnd-group">
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
          </div>
          <div className="dnd-group">
            <div className="dnd-item">
              <div>
                <p>ITEM 4</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 5</p>
              </div>
            </div>
          </div>
          <div className="dnd-group"></div>
        </div>
      </header>
    </div>
  );
};

export default App;

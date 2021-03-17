import "./App.css";

const App = () => {
  const data = [
    { title: "Group 1", items: [1, 2, 3] },
    { title: "Group 2", items: [4, 5] },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="drag-n-drop">
          {data.map((group, groupI) => (
            <div key={groupI} className="dnd-group">
              <div className="group-title">{group.title}</div>
              {group.items.map((item, itemI) => (
                <div key={itemI} className="dnd-item">
                  <div>
                    <p>{`ITEM ${item}`}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;

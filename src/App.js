import './App.css';
import React, { useState } from 'react';
import Toggle from 'react-toggle';

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

let totalCubes =
  Math.round(viewportHeight / 40) * Math.round(viewportWidth / 40);

function App() {
  const [isOpen, setIsOpen] = useState([]);
  const [isCount] = useState(totalCubes);

  const [isMouseClick, setIsMouseClick] = useState(true);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isErase, setIsErase] = useState(false);

  // const [isCount, setIsCount] = useState(81);

  var list = [];

  // const setCount = (e) => {
  //   setIsCount(e.target.value);
  // };

  window.onload = function () {
    doRender();
  };

  const doRender = () => {
    for (let i = 0; i < isCount; i++) {
      list.push(true);
    }
    setIsOpen(list);
  };

  const toggleState = (index) => {
    let newState = [...isOpen];
    newState[index] = false;
    setIsOpen(newState);
  };

  const defaultState = (index) => {
    let newState = [...isOpen];
    newState[index] = true;
    setIsOpen(newState);
  };

  const items = isOpen.map((item, key) => {
    return (
      <div
        key={key}
        onClick={() => {
          isMouseClick && toggleState(key);
          isErase && isMouseClick && defaultState(key);
        }}
        onMouseOver={() => {
          isMouseHover && toggleState(key);
          isErase && isMouseHover && defaultState(key);
        }}
        className={isOpen[key] ? 'item' : 'selected-item'}>
        {item}
      </div>
    );
  });

  return (
    <div className="App App-header">
      {/* <input
        value={isCount}
        onChange={(e) => {
          setCount(e);
        }}
      />
      <div
        onClick={() => {
          doRender();
        }}>
        Render
      </div> */}

      <div className="container">
        <div className="toggles">
          <Toggle
            id="mouse-click"
            defaultChecked={isMouseClick}
            onChange={() => {
              setIsMouseClick(!isMouseClick);
            }}
          />
          <label htmlFor="cheese-status">Mouse Click</label>
          <Toggle
            id="mouse-hover"
            defaultChecked={isMouseHover}
            onChange={() => {
              setIsMouseHover(!isMouseHover);
            }}
          />
          <label htmlFor="cheese-status">Mouse Hover</label>
          <Toggle
            id="mouse-hover"
            defaultChecked={isErase}
            onChange={() => {
              setIsErase(!isErase);
            }}
          />
          <label htmlFor="cheese-status">Erase</label>
        </div>

        {items}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelect = (id) => {
    setSelected(prev => (prev === id ? null : id)); // toggle selection
  };

  const handleMultiSelection = (id) => {
    let cpyMultiple = [...multiple];
    const index = cpyMultiple.indexOf(id);

    if (index === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(index, 1);
    }

    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(prev => !prev)}>
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSelect(dataItem.id)
                }
              >
                <h3>{dataItem.title}</h3>
                <span>
                  {enableMultiSelection
                    ? multiple.includes(dataItem.id) ? "-" : "+"
                    : selected === dataItem.id ? "-" : "+"}
                </span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="content">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.content}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

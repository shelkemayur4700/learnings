import { useState } from "react";

function Folder({ explorer, showInput, setShowInput, handleInserNode }) {
  const [expand, setExpand] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleNewFolder = (e, val) => {
    e?.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder: val });
  };
  const addNewFolder = (e) => {
    console.log(
      "function invokation",
      explorer?.id,
      e.target.value,
      showInput?.isFolder
    );
    if (e.keyCode == 13 && e?.target?.value) {
      // add logic
      handleInserNode(explorer?.id, e.target.value, showInput?.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div>
      {explorer?.isFolder ? (
        <div style={{ marginTop: 5 }}>
          <div className="folder" onClick={() => setExpand((prev) => !prev)}>
            <span>📁 {explorer?.name}</span>
            <div>
              <button onClick={(e) => handleNewFolder(e, true)}>
                folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>file +</button>
            </div>
          </div>

          <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            {/* Show input field for new folder/file */}
            {showInput?.visible && (
              <div className="inputContainer">
                <span>{showInput?.isFolder ? "📁" : "📝"}</span>
                <input
                  type="text"
                  className="inputContainer_input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e?.target?.value)}
                  onKeyDown={(e) => addNewFolder(e)}
                />
              </div>
            )}

            {/* Render child folders/files recursively */}
            {explorer?.items?.map((item) => (
              <Folder
                explorer={item}
                key={item?.id}
                showInput={showInput}
                setShowInput={setShowInput}
                handleInserNode={handleInserNode}
              />
            ))}
          </div>
        </div>
      ) : (
        <span className="file">📝 {explorer?.name}</span>
      )}
    </div>
  );
}

export default Folder;

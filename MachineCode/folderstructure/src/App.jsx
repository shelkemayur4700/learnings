import "./style.css";
import Folder from "./Folder";
import { useState } from "react";
import { explorer } from "./folderData";
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [data, setData] = useState(explorer);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const { insertNode } = useTraverseTree();

  const handleInserNode = (folderId, item, isFolder) => {
    console.log("function props", folderId, item, isFolder);
    const finalTree = insertNode(data, folderId, item, isFolder);
    setData(finalTree);
  };

  return (
    <div className="App">
      <Folder
        handleInserNode={handleInserNode}
        explorer={data}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    </div>
  );
}

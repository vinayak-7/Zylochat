import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "BLOCK";

const DraggableBlock = ({ text, subText, index, moveBlock }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveBlock(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-4 bg-white border border-[#8594e4] rounded-lg shadow-md text-center w-64 cursor-pointer transition ${
        isDragging ? "opacity-50" : ""
      } ${isOver ? "bg-[#d5def5]" : ""}`}
    >
      <p className="font-semibold text-[#430f58]">{text}</p>
      {subText && <p className="text-xs text-gray-500">{subText}</p>}
    </div>
  );
};

const AutomationEditor = () => {
  const [activeTab, setActiveTab] = useState("Editor");
  const [blocks, setBlocks] = useState([
    { text: "Post or Reel Comments", subText: "Not set up yet." },
    { text: "Send Instagram Message" },
  ]);

  const moveBlock = (fromIndex, toIndex) => {
    const updatedBlocks = [...blocks];
    const [movedBlock] = updatedBlocks.splice(fromIndex, 1);
    updatedBlocks.splice(toIndex, 0, movedBlock);
    setBlocks(updatedBlocks);
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#430f58]">
            New Automation
          </h1>
          <div className="flex items-center pt-4 md:pt-0 gap-4">
            <button className="bg-[#d5def5] text-[#430f58] px-5 py-2 rounded-lg transition hover:bg-[#8594e4]">
              Draft
            </button>
            <button className="bg-[#6643b5] text-white px-5 py-2 rounded-lg transition hover:bg-[#430f58]">
              Publish
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#8594e4]">
          <button
            onClick={() => setActiveTab("Editor")}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === "Editor"
                ? "text-[#6643b5] border-b-2 border-[#6643b5]"
                : "text-gray-500 hover:text-[#6643b5]"
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setActiveTab("Runs")}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === "Runs"
                ? "text-[#6643b5] border-b-2 border-[#6643b5]"
                : "text-gray-500 hover:text-[#6643b5]"
            }`}
          >
            Runs
          </button>
        </div>

        {/* Editor View */}
        {activeTab === "Editor" && (
          <div className="mt-6 bg-[#d5def5] p-6 rounded-lg shadow-lg min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              {blocks.map((block, index) => (
                <DraggableBlock
                  key={index}
                  index={index}
                  {...block}
                  moveBlock={moveBlock}
                />
              ))}
            </div>
          </div>
        )}

        {/* Runs View */}
        {activeTab === "Runs" && (
          <div className="mt-6 bg-[#d5def5] p-6 rounded-lg shadow-lg min-h-[500px] flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-[#430f58]">Run History</p>
            <p className="text-gray-600">No runs available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomationEditor;

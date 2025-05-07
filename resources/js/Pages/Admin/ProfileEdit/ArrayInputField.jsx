import { useState } from "react";

const ArrayInputField = ({
    items,
    onAdd,
    onRemove,
    placeholder = "Add new item",
    buttonText = "Add",
}) => {
    const [newItem, setNewItem] = useState("");

    const handleAdd = () => {
        if (newItem.trim()) {
            onAdd(newItem.trim());
            setNewItem("");
        }
    };
    return (
        <div className="space-y-4">
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleAdd();
                        }
                    }}
                    className="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    {buttonText}
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                    >
                        <span>{item}</span>
                        <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="ml-2 text-gray-500 hover:text-red-500 transition-colors"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArrayInputField;

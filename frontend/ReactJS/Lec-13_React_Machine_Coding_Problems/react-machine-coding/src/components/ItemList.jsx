import React, { useCallback, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["item1", "item2", "item3"]);

  const removeItem = useCallback((removedItem) => {
    console.log(removedItem);
    setItems((prevItems) => {
      return prevItems.filter((item) => item !== removedItem);
    });
  }, []);

  return (
    <>
      {items &&
        items.map((item, idx) => {
          return (
            <li key={idx}>
              {item}
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          );
        })}
    </>
  );
};

export default React.memo(ItemList);

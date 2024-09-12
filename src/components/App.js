import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   // { id: 1, description: "Passports", quantity: 2, packed: false },
//   // { id: 2, description: "Socks", quantity: 12, packed: true },
//   // { id: 3, description: "Charger", quantity: 1, packed: false },
// ];
export default function App() {
  const [items, setItem] = useState([]);
  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }
  function handleDeletedItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    if (!items.length) return;
    const confirmed = window.confirm("Are you sure to delete all the list?");
    if (confirmed) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems} />
      <PackingList
        clearList={handleClearList}
        items={items}
        handleDeletedItems={handleDeletedItems}
        onToggle={handleToggleItems}
      />
      <Stats items={items} />
    </div>
  );
}

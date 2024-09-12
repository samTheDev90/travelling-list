export default function Item({ i, handleDeletedItems, onToggle }) {
  return (
    <li>
      <input type="checkbox" value={i.packed} onChange={() => onToggle(i.id)} />
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>
        {i.quantity} {i.description}
      </span>
      <button onClick={() => handleDeletedItems(i.id)}>❌</button>
    </li>
  );
}

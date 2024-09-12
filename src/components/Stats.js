export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const parcentagePacked = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {parcentagePacked === 100
          ? "You have packed everything and ready to GO ✈️"
          : ` You have ${numItems} item on your list, and you already packed ${packedItems} (${parcentagePacked}%)`}
      </em>
    </footer>
  );
}

import { initialItems } from "./InitialItems.js";
import Item from "./Item";

function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default PackingList;

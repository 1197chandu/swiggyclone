// import { IMAGE_CDN } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordionList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddedItems = (items) => {
    // Dispatch An Action
    dispatch(addItem(items));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div className="border-b-2 flex py-7 w-9/12" key={item.card.info.id}>
          <div className="w-10/12">
            <p className="font-bold">{item.card.info.name}</p>
            <p>₹ {item.card.info.price / 100}</p>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-2/12 relative">
            <button
              className="absolute w-24 h-9 border-2 rounded-lg text-green-500 font-bold -bottom-3 left-3 bg-white"
              onClick={() => handleAddedItems(item)}
            >
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// higher order component
// export const withBestseller = (AccordionList) => {
//     return () => {
//         return(
//             <div>
//                 <label>Bestseller</label>
//                 <AccordionList {...props}/>
//             </div>
//         )
//     }
// }

export default AccordionList;

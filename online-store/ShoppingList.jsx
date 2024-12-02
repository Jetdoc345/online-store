import "./styles/shoppingList.css";

function ShoppingList{} {
    const [itemName, setItemName] = useState("");
    const [itemList, setItemList] = useState([]);

    function handleInputChange(e) {
        const text = e.target.value;
        setItemName(text);
    }

    function addItem()  {
        console.log(itemName);

        var copy = [...itemList];
        copy.push(itemName);
        setItemList(copy);
    }

    return (
        <div className="List page">
            <h1> Build your shopping list</h1>

            <div className='form'>
                <input type="text" placeholder='Add items to your list' />
                <button className='btn btn-sm btn-primary'>Add</button>
            </div>

        <div className="items">
            <label>You have {itemList.length}items in your list.</label>
        
            <ul>
                {itemList.map(item => <li>{itme}</li>)}
            </ul>
        
        </div>
    </div>
    );
}

export default ShoppingList;
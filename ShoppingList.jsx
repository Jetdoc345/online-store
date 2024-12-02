import "./styles/shoppingList.css";

function ShoppingList{} {
    const [itemName, setItemName] = useState("");

    function HandleInputChange(e) {
        const text = e.target.value;
        setItemName(text);
    }

    function addItem()  {
        console.log(itemName);
    }

    return (
        <div className="List page">
            <h1> Build your shopping list</h1>

            <div className='form'>
                <input type="text" placeholder='Add items to your list' />
                <button className='btn btn-sm btn-primary'>Add</button>
            </div>
        </div>
    );
}

export default ShoppingList;


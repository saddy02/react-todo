import Item from "./Item";

const Items = ({conf}) => {
    return ( 
        <div className="todo__main">
            {
                conf.db.map(e => <Item key={e.id} item={e} conf={conf} />)
            }
        </div>
    );
}

export default Items;
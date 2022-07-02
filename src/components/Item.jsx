import { useState } from "react"

const Item = ({item, conf}) => {

    let [check, setCheck] = useState(item.done)
    function checkTask() {
        setCheck(check ? false : true)
    }

    function deleteTask() {
        let tmp = conf.db.filter(e => e.id !== item.id)
        conf.setDB(tmp)
    }

    let [text, setText] = useState(item.title)
    function editTask() {
        let newText = prompt( `Edit: ${text}` )
        if ( newText.replaceAll(/\s/g, "") === "" || newText === null ) return 
        setText(newText)
    }

    return ( 
        <div className="item">
            <label>
                <input 
                    className="check"
                    type="checkbox" 
                    checked={check} 
                    onChange={checkTask}
                    />
                <span className="item__text"> { text } </span>
            </label>
            <div>
                <button onClick={deleteTask}>delete</button>
                <button onClick={editTask}>edit</button>
            </div>
        </div>
    );
}

export default Item;
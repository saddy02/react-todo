import { useRef } from "react";

const Footer = ( {conf} ) => {
    const input = useRef()
    function addItem(){
        if ( input.current.value.replaceAll(/\s/g, "") === "" ) return 
        let tmp = {}
        tmp.id = conf.db[conf.db.length-1] ? conf.db[conf.db.length-1].id+1 : 0
        tmp.done = false
        tmp.title = input.current.value
        conf.setDB( [ ...conf.db, tmp ] )
        input.current.value = ''
    } 

    window.onkeydown = ( {key} ) => {
        input.current.focus()
        if (key === "Enter") addItem()
    }

    return ( 
        <footer className="todo__footer">
            <input
                className="input"
                type="text" 
                ref={input}
            />
            <button onClick={addItem}>add</button>
        </footer>
    );
}

export default Footer;
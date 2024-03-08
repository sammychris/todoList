import Button from "./Button"
import InputField from "./InputField"

const Item = ({name, status, id, handleStatusField, deleteTodo}) => {
    console.log({status})
    return (<div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'grey', border: '1px solid black', padding: '5px 0'}}>
        
            {name}
            <div><label>Complete</label><InputField onChange={(e) => handleStatusField(e, id)} type="checkbox" checked={status === 'completed'} value="completed"/></div>
            <div><label>Not Completed</label><InputField onChange={(e) => handleStatusField(e, id)}  type="checkbox" checked={status === 'not completed'} value="not completed"/></div>
            <Button text={'delete'} onClick={() => deleteTodo(id)}/>
    </div>)
}

export default Item;

import Item from "./Item"


const ListItems = ({list, handleStatusField, deleteTodo}) => {
    if(!list.length) return null;
    return (<div>
        {list.map(item => <Item {...item} handleStatusField={handleStatusField} deleteTodo={deleteTodo}/>)}
    </div>)
}

export default ListItems
import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    
    /* Iterate over each object in the array (employee data) and mark the data as props of the component. */
    const elements = data.map(item => {
        /* сonst {id, ...itemProps} = item */
        return (
            <EmployeesListItem 
                key={item.id} 
                name={item.name} 
                salary={item.salary} 
                increase={item.increase}
                rise = {item.rise}
                onDelete={() => onDelete(item.id)}
                onToggleIncrease={() => onToggleIncrease(item.id)}
                onToggleRise ={() => onToggleRise(item.id)}/> /* key={id} {...itemProps} */
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
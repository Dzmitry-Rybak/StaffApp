import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {
    
    /* Iterate over each object in the array (employee data) and mark the data as props of the component. */
    const elements = data.map(item => {
        /* сonst {id, ...itemProps} = item */
        return (
            <EmployeesListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/> /* key={id} {...itemProps} */
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}ы
        </ul>
    )
}

export default EmployeesList;
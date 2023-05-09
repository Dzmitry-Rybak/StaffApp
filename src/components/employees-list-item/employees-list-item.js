import './employees-list-item.css'

const EmployeesListItem = ({name, salary, increase}) => {
    
    /* Adding a class to an object based on 'increase' property. */
    const classes = "list-group-item d-flex justify-content-between";
    const classesWithIncrease = increase === true ? classes + ' increase' : classes;
    return (
        <li className={classesWithIncrease}> 
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;
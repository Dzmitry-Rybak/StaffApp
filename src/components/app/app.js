import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App () {
    
    /* Creating a database of employees as an array of objects. */
    const data = [ 
        {name: 'Rybak D.', salary: 800, increase: true, id: 1},
        {name: 'Patsuk D.', salary: 3000, increase: false, id: 2},
        {name: 'Marta L.', salary: 4000, increase: true, id: 3}
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;
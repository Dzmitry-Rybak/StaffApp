import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            data: [ 
                {name: 'Rybak D.', salary: 800, increase: true, id: 1, rise: true},
                {name: 'Patsuk D.', salary: 3000, increase: false, id: 2, rise: false},
                {name: 'Marta L.', salary: 4000, increase: true, id: 3, rise: false}
            ],
            term: '',
            filter: ''
        }
        this.maxId = 4;
    }

    /* Method to delete persone in data */
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)}
            });
    }

    /* Method to add persone in data */
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {data: newArr};
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if( item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0){
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})  /* or just {term} - shortened form */
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }
    onFilterPost = (filter) => {
        this.setState({filter});
    }

    render(){
        const {data,term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)


        return (
            <div className="app">
                <AppInfo
                number={data.length}
                awarded={data.filter(item => item.increase).length}/>
                
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    onFilterPost={this.onFilterPost}
                    filter={filter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
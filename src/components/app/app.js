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
            ]
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

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if( item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if( item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    render(){
        return (
            <div className="app">
                <AppInfo
                number={this.state.data.length}
                awarded={this.state.data.filter(item => item.increase).length}/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
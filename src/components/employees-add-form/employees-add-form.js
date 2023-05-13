import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const salary = this.state.salary;
        if(name.length >= 2 && salary > 0){
            this.props.onAdd(`${name.charAt(0).toUpperCase()}${name.slice(1)}`, salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="What's his name" 
                           name="name"
                           value={name} /* controlled component  */
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Salary in $?" 
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}
 
export default EmployeesAddForm;
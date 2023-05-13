import './app-filter.css'

const  AppFilter = ({onFilterPost, filter}) => {
    
  
    return (
        <div className="btn-group">
            <button 
            className={`btn ${filter === '' ? 'btn-light' : 'btn-outline-light'}`}
            data-filter=""
            type="button"
            onClick={() => onFilterPost('')}>
                All employees
            </button>
            <button 
            className={`btn ${filter === 'rise' ? 'btn-light' : 'btn-outline-light'}`}
            data-filter="rise"
            type="button"
            onClick={() => onFilterPost('rise')}>
                For promotion
            </button>
            <button 
            className={`btn ${filter === 'moreThen1000' ? 'btn-light' : 'btn-outline-light'}`}
            data-filter="moreThen1000"
            type="button"
            onClick={() => onFilterPost('moreThen1000')}>
                Salary more then 1000$
            </button>
        </div>
    );

}

export default AppFilter;
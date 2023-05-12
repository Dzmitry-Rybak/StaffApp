
import './app-info.css';

const AppInfo = ({awarded, number}) => {

    return (
        <div className="app-info">
            <h1>Employee management at the company "Horns and hooves"</h1>
            <h2>The total number of employees: {number} </h2>
            <h2>The bonus will be awarded to:{awarded} </h2>

        </div>
    )
}

export default AppInfo;
import React, {Component} from 'react';

class Table extends Component{
    
    render(){
        return(
        <div className="container background">
            <table className="highlight">
                    <thead>
                    <tr>
                        <th>Species</th>
                        <th>Location</th>
                        <th>Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Yellowtail</td>
                        <td>Santa Monica Pier</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Yellowtail</td>
                        <td>Santa Monica Pier</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Yellowtail</td>
                        <td>Santa Monica Pier</td>
                        <td>10</td>
                    </tr>
                    </tbody>
                </table>
     </div>
        );
    }
}

export default Table;
import React from 'react';
import Data from './items';

class ListItems extends React.Component {
    constructor() {
        super();

        this.state = {
            itemCollection: Data
        }
    }

    renderTableData() {
        return this.state.itemCollection.map((item, index) => {
            const { id, name, quantities } = item
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{quantities}</td>
                    <td><button>Add to cart</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Available Items To Add</h1>
                <table>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListItems;
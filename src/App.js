import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import confirmSvc from './confirmSvc';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Eat hamburger',
                'Drink coke',
                'Go to bathroom'
            ]
        };
        this.removeItem = this.removeItem.bind(this);
    }

    async removeItem({target: {value}}) {
        const result = await confirmSvc.show({
            message: 'Are you sure of delete this item?'
        });
        if (result) {
            const items = this.state.items.filter((item, index) => index !== parseInt(value));
            this.setState({items});
        }
    }

    render() {
        const {items} = this.state;
        return (
            <div className="container-fluid">
                <h1 className="h1">React Confirm as a Service</h1>
                <p>try to delete one</p>
                <h2>TODO:</h2>
                <div className="col">
                    {items.map((item, index) => (
                        <div className="col-6 mb-2" key={item}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="title">{item}</p>
                                </div>
                                <footer className="card-footer">
                                    <p>
                                        <button
                                            className="btn btn-danger"
                                            value={index}
                                            onClick={this.removeItem}
                                        >
                                            Delete
                                        </button>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {render} from 'react-dom';

let resolve;
const defaultProps = {
    title: 'Confirmation',
    message: 'Are you sure?'
};

class Confirm extends Component {
    static create(props = {}) {
        const containerElement = document.createElement('div');
        document.body.appendChild(containerElement);
        return render(<Confirm createConfirmProps={props}/>, containerElement);
    }

    constructor() {
        super();

        this.state = {
            isOpen: false,
            showConfirmProps: {},
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.show = this.show.bind(this);
    }

    handleCancel() {
        this.setState({isOpen: false});
        resolve(false);
    }

    handleConfirm() {
        this.setState({isOpen: false});
        resolve(true);
    }

    show(props = {}) {
        const showConfirmProps = {...this.props.createConfirmProps, ...props};
        this.setState({isOpen: true, showConfirmProps});
        return new Promise((res) => {
            resolve = res;
        });
    }

    render() {
        const {isOpen, showConfirmProps} = this.state;
        const {message, title, ...rest} = showConfirmProps;

        return (
            <div className={!isOpen ? 'modal fade' : 'modal fade show'} style={{display: isOpen ? 'block' : ''}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title || defaultProps.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    onClick={this.handleCancel}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{message || defaultProps.message}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleConfirm}>OK</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleCancel}>Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;

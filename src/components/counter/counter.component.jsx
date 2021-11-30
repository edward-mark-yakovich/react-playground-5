import React from 'react';

export class Counter extends React.Component {
    constructor() {
        super();
        
        this.increment = this.increment.bind( this );


        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div className='ui-counter'>
                <p className='ui-counter__title'>Counter Widget</p>

                <div className='ui-counter__body'>
                    <p className='ui-counter__body__name'>{ this.props.name }</p>
                    <p className='ui-counter__body__count'>{ this.state.count }</p>
                    <button
                        className='ui-counter__body__button'
                        onClick={ () => this.increment() }
                        disabled={ this.state.count === 3 }
                    >Increment</button>
                </div>
            </div>
        );
    }
}
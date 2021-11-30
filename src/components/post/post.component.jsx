import React from 'react';
import axios from 'axios';
import {isEmptyObj} from './../../utils/helpers';

export class Post extends React.Component {
    constructor( props ) {        
        super();

        if (props.staticContext) {
            this.state = {
                isLoading: false,
                title: props.staticContext.title,
                description: props.staticContext.body,
            };
        } else if (typeof window !== "undefined" && !isEmptyObj(window.initial_state?.['post'] || {})) {
            const initialState = window.initial_state['post'];

            this.state = {
                isLoading: false,
                title: initialState.title,
                description: initialState.body,
            };
        } else {
            this.state = {
                isLoading: true,
                title: '',
                description: '',
            };
        }
    }

    static fetchData() {
       return axios.get( 'https://jsonplaceholder.typicode.com/posts/3' )
        .then( response => {
            return {
                title: response.data.title,
                body: response.data.body,
            };
        } );
    }

    componentDidMount() {
        if( this.state.isLoading ) {
            Post.fetchData().then( data => {
                this.setState( {
                    isLoading: false,
                    title: data.title,
                    description: data.body,
                } );
            } );
        }
    }

    render() {
        return (
            <div className='ui-post'>
                <p className='ui-post__title'>Post Widget</p>
                
                {this.state.isLoading 
                    ? 'loading...' 
                    : <div className='ui-post__body'>
                            <p className='ui-post__body__title'>{ this.state.title }</p>
                            <p className='ui-post__body__description'>{ this.state.description }</p>
                        </div>
                }

            </div>
        );
    }
}
import React, { Component } from 'react';

import store from '../store'


export function connect(mapStateToProps) {
    return function (InputComponent) {
        class Container extends Component {
            constructor(props) {
                super(props)
                const state = mapStateToProps(store.getState(), props)
                this.state = {
                    ...state
                }
            }
            componentDidMount() {
                this.unsubscribe = store.subscribe(() => {
                    const state = mapStateToProps(store.getState(), this.props)
                    this.setState({ ...state })
                })
            }
            componentDidUpdate(nextProps, nextState) {
                if (nextProps !== this.props) {
                    const state = mapStateToProps(store.getState(), this.props)
                    this.setState({ ...state })
                }
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                return (
                    <div><InputComponent {...this.state} {...this.props} /></div>
                )
            }
        }
        return Container;
    }
}
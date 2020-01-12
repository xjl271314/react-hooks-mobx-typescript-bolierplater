import { PureComponent } from 'react';

export interface ErrorCatchProps {
    /* empty */
}

export interface ErrorCatchStates {
    /* empty */
}

export default class ErrorCatch extends PureComponent<ErrorCatchProps, ErrorCatchStates> {
    componentDidCatch(error:any, info:object) {
        // 在这里可以做异常的上报
        console.log('componentDidCatch:', info)
    }
    render() {
        return this.props.children;
    }
}
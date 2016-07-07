import React from 'react'

class TestIncrementor extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
            Counter: {this.state.counter}
            <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

export default TestIncrementor

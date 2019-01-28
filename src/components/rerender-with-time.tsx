import * as React from 'react'

interface Props {
    milliseconds: number,
    renderComponent: Function
}

interface State {
    timeNow: number
}

export default class RerenderWithTime extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { timeNow: Date.now() }
        console.log(props)
        setInterval(
            () => {
                this.setState({ timeNow: Date.now() })
            },
            props.milliseconds
        )
    }

    render() {
        const { renderComponent: Component } = this.props
        return <Component/>
    }
}
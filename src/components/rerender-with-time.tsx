import * as React from 'react'

interface Props {
    milliseconds: number,
    renderComponent: Function
}

interface State {
    timeNow: number,
    intervalId: any
}

export default class RerenderWithTime extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { timeNow: Date.now(), intervalId: 0 }
    }

    componentDidMount() {
        const { milliseconds } = this.props
        const intervalId = setInterval(
            () => {
                this.setState({ timeNow: Date.now() })
            },
            milliseconds
        )
        this.setState({ intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render() {
        const { renderComponent } = this.props
        return renderComponent()
    }
}
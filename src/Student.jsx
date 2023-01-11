import React from 'react'
import Scores from './Scores'

export default class Students extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>

                <p>{this.props.bio}</p>

                <Scores
                    scores={this.props.scores}
                />
            </div>
        )
    }
}
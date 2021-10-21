import React, { Component } from 'react';



class RowAnalytics extends Component
{

    render()
    {
        return (

            <tr>
                <td>{this.props.term}</td>
                <td>{this.props.num}</td>
            </tr>
        )
    }
}

export default RowAnalytics;
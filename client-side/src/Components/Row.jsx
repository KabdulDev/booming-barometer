import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Row extends Component
{
    handleOnClick()
    {
        console.log("Hello")
        /*
            What to do with click here
        */
       
    }

    render()
    {
        return (

            <tr>
                <td><Link to={`/game/${this.props.id}`} onClick={this.handleOnClick}>{this.props.name}</Link></td>
                <td>{this.props.id}</td>
            </tr>
        )
    }
}

export default Row;
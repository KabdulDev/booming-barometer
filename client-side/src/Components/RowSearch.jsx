import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class RowSearch extends Component
{
    handleOnClick = async () =>
    {
        let search = this.props.search;
        console.log(search);
        try
        {
            await axios.post(`/searchtype=name/term=${search}/appId=${this.props.id}/gameClick`);
        }
        catch(err)
        {
            console.log(err);
        }
       
    }

    render()
    {
        return (

            <tr>
                <td><Link to={`/game/${this.props.search}/${this.props.id}`} onClick={this.handleOnClick}>{this.props.name}</Link></td>
                <td>{this.props.id}</td>
            </tr>
        )
    }
}

export default RowSearch;
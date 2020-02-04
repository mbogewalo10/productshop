import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

 class ProductTable extends Component {
    render() {
        return (
               <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.productName}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.quantity}</td>
                <td>
                    <Link className="edit-link" to={"/edit-product/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default ProductTable;

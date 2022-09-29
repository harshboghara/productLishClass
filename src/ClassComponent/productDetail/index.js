import React from "react";
import "./detail.css";

export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.items = this.props.item;
    }
    render() {
        return (
            <div className="box-25">
                <div className="broder">
                <img src={this.items.img} />
                <div className="w-100">
                    <h1>{this.items.name}</h1>
                    <p>{`${this.items.decribtion} ${this.items.id}`}</p>
                    <label>Rs - {this.items.rs} /-</label>
                    <br />
                    <button className="buy">Buy</button>
                </div>
            </div>
            </div>
        )
    }
}
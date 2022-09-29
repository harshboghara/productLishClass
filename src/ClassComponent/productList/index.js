import React from "react";
import ProductDetail from "../productDetail";
import './lish.css';

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.ites = [
            {
                id: '1',
                name: 'Product-1',
                decribtion: 'this product id -',
                img: './img/1.jpg',
                rs: 10,
            }, {
                id: '2',
                name: 'Product-2',
                decribtion: 'this product id -',
                img: './img/2.jpg',
                rs: 20,
            }, {
                id: '3',
                name: 'Product-3',
                decribtion: 'this product id -',
                img: './img/3.jpg',
                rs: 25,
            }, {
                id: '4',
                name: 'Product-4',
                decribtion: 'this product id -',
                img: './img/4.jpg',
                rs: 15,
            },
        ]
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        {
                            this.ites.map((value, index) => {
                                return <ProductDetail item={value} key={`productdeteail=${index}`} />
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
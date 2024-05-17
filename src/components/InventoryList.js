import React from 'react';
import {Item} from "./Item";

export const InventoryList = () => {

    const items = [
        { name: 'Item 1', description: 'Description for Item 1', price: 10 },
        { name: 'Item 2', description: 'Description for Item 2', price: 20 },
        { name: 'Item 3', description: 'Description for Item 3', price: 30 },
        { name: 'Item 4', description: 'Description for Item 4', price: 40 },
        { name: 'Item 5', description: 'Description for Item 5', price: 50 },
        { name: 'Item 6', description: 'Description for Item 6', price: 60 }
    ];

    return (
        <div>
            <ul>
                <div className="row row-cols-3 g-4">
                    {items.map((item, index) => (
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <Item
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                        </div>
                        ))}
                </div>
            </ul>
        </div>
    );
};
import React from 'react';

const InventoryItem = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
}

export default InventoryItem;

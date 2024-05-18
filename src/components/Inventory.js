import React from 'react';
import { InventoryList } from './InventoryList';
import './Inventory.css'

export const Inventory = () => {

    return (
        <div className="inventory">
            <h2 className="inventory__tittle">Inventory</h2>
            <InventoryList />
        </div>
    );
};

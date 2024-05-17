import React, { useState, useEffect } from 'react';
import { InventoryList } from './InventoryList';
import { getInventoryItems } from '../services/api';
import './Inventory.css'

export const Inventory = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        // Fetch inventory items from API
        getInventoryItems()
            .then(items => setInventoryItems(items))
            .catch(error => console.error('Error obteniendo item del inventario:', error));
    }, []);

    return (
        <div className="inventory">
            <h2 className="inventory__tittle">Inventory</h2>
            <InventoryList items={inventoryItems} />
        </div>
    );
};

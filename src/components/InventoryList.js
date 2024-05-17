import React, { useState } from 'react';
import {Item} from "./Item";

export const InventoryList = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = [
        { name: 'Item 1', description: 'Description for Item 1', price: 10 },
        { name: 'Item 2', description: 'Description for Item 2', price: 20 },
        { name: 'Item 3', description: 'Description for Item 3', price: 30 },
        { name: 'Item 4', description: 'Description for Item 4', price: 40 },
        { name: 'Item 5', description: 'Description for Item 5', price: 50 },
        { name: 'Item 6', description: 'Description for Item 6', price: 60 }
    ];

    // Manejar cambios en el término de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterItems(event.target.value);
    };

    // Filtrar elementos de la lista basados en el término de búsqueda
    const filterItems = (term) => {
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(term.toLowerCase()) ||
            item.description.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    // Mostrar todos los elementos si no hay término de búsqueda, de lo contrario, mostrar los elementos filtrados
    const itemsToDisplay = searchTerm ? filteredItems : items;

    return (
        <div>
            {/* Buscador */}
            <h5>Search Product:</h5>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                <div className="row row-cols-3 g-4">
                    {itemsToDisplay.map((item, index) => (
                        <div key={index} className="col-sm-6 mb-3 mb-sm-0">
                        <Item
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
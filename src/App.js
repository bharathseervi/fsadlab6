
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Display_Inventory,
    AddInventory
} from './to_inventory';

function App() {

    const [inventory, setInventory] = useState([]);

    // Fetch inventory from backend
    const getInventory = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8000"
            );

            setInventory(response.data);

        }
        catch (error) {

            console.log("Error fetching inventory", error);

        }
    };

    // Execute when component loads
    useEffect(() => {

        getInventory();

    }, []);

    return (

        <div>

            <Display_Inventory inventory={inventory} />

            <AddInventory refreshInventory={getInventory} />

        </div>

    );
}

export default App;

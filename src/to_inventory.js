
import React, { useState } from 'react';
import axios from 'axios';

const API = "http://localhost:8000";

function Display_Inventory({ inventory }) {

    return (
        <div>

            <h1>Inventory Management</h1>

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>

                    {inventory.map((item) => (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.prodname}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

function AddInventory({ refreshInventory }) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    const SubmitEvent = async (e) => {

        e.preventDefault();

        const fo = {
            id: id,
            prodname: name,
            qty: qty,
            price: price
        };

        try {

            const response = await axios.post(
                API + "/add",
                fo
            );

            console.log(response.data);

            alert("Product added successfully!");

            // Refresh inventory table
            refreshInventory();

            // Clear form
            setId("");
            setName("");
            setQty("");
            setPrice("");

        }
        catch (error) {

            alert("Error adding product");

            console.log(error);

        }
    };

    return (

        <div>

            <h1>Add Inventory</h1>

            <form onSubmit={SubmitEvent}>

                <table border="1">

                    <tbody>

                        <tr>
                            <td>ID</td>
                            <td>
                                <input
                                    type="number"
                                    value={id}
                                    onChange={(e) =>
                                        setId(e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Product Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Quantity</td>
                            <td>
                                <input
                                    type="number"
                                    value={qty}
                                    onChange={(e) =>
                                        setQty(e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Price</td>
                            <td>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                                <button type="submit">
                                    Add Product
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </form>

        </div>
    );
}

export { Display_Inventory, AddInventory };

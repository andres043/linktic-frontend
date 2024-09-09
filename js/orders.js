const API_BASE_URL = "http://localhost:8080/v1"; // URL base de la API

function createOrder() {
    const order = {
        order_id: document.getElementById("orderId").value,
        product: document.getElementById("product").value,
        quantity: parseInt(document.getElementById("quantity").value),
        price: parseFloat(document.getElementById("price").value),
    };

    axios.post(`${API_BASE_URL}/orders`, order)
        .then(response => {
            alert('Order created successfully!');
        })
        .catch(error => {
            console.error('There was an error creating the order!', error);
        });
}

function listOrders() {
    axios.get(`${API_BASE_URL}/orders`)
        .then(response => {
            const orders = response.data;
            let ordersTable = document.getElementById("ordersTable");
            orders.forEach(order => {
                let row = `
                    <tr>
                        <td>${order.product}</td>
                        <td>${order.quantity}</td>
                        <td>${order.price}</td>
                    </tr>
                `;
                ordersTable.innerHTML += row;
            });
        })
        .catch(error => {
            console.error('There was an error fetching the orders!', error);
        });
}


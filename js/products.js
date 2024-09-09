const API_BASE_URL = "http://localhost:8080/v1"; // URL base de la API

function listProducts() {
    axios.get(`${API_BASE_URL}/products`)
        .then(response => {
            const products = response.data;
            let productsTable = document.getElementById("productsTable");
            products.forEach(product => {
                let row = `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>${product.price}</td>
                        <td>${product.stock}</td>
                    </tr>
                `;
                productsTable.innerHTML += row;
            });
        })
        .catch(error => {
            console.error('There was an error fetching the products!', error);
        });
}

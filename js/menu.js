document.getElementById('menu').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Order Management</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./../html/create_order.html">Create Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./../html/list_orders.html">List Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./../html/list_products.html">List Products</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

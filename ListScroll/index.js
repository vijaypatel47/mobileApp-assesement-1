let productList = document.getElementById("productList");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

let itemsPerPage = 5;
let currentPage = 1;
let totalItems = 0;

function fetchProducts(page) {
  return fetch(
    `https://fakestoreapi.com/products?limit=${itemsPerPage}&page=${page}`
  ).then((response) => response.json());
}

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.title;
    productList.appendChild(li);
  });
}

function updatePaginationButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage * itemsPerPage >= totalItems;
}

function loadPage(page) {
  fetchProducts(page)
    .then((data) => {
      totalItems = data.length;
      renderProducts(data);
      updatePaginationButtons();
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

prevButton.addEventListener("click", () => {
  currentPage--;
  loadPage(currentPage);
});

nextButton.addEventListener("click", () => {
  currentPage++;
  loadPage(currentPage);
});

loadPage(currentPage);

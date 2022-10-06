const baseUrl = 'https://fakestoreapi.com/products';

export default {
  async getAllProducts() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
  },

  async getProduct(id) {
    const response = await fetch(baseUrl + id);
    const result = await response.json();
    return result;
  },
};

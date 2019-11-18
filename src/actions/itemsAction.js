export const getItems = () => {
    return fetch("/api/v1/products")
    .then(res => {
    return res.json();
  });
};

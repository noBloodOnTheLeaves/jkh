export const getRequestData = async () => {
  return fetch('http://localhost:3000/api/request').then((res) => res.json());
};

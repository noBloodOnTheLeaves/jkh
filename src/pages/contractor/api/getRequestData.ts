export const getRequestData = async () => {
  return fetch('http://localhost:3000/api/contractor').then((res) => res.json());
};

export const selectToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

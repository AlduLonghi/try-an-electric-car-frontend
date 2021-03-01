const fetchConfig = () => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  };
};

export default fetchConfig;

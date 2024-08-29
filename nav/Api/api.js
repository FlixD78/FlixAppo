const baseURL = 'https://flixapp-server.onrender.com';

// export const getAllUsers = async () => {
//   const url = '/getAllUsers';
//   return await fetchApi(url);
// };

// const fetchApi = async (url, method, body) => {
//   const fullUrl = baseURL + url;

//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   if (body) {
//     const bodyStr = JSON.stringify(body);
//     params.body = bodyStr;
//   }
//   params.method = method || 'GET';

//   return await fetch(fullUrl, params)
//     .then(res => res.json())
//     .catch(e => console.log('fetch error: ', e));
// };

// api.js
// api.js


export const fetchApi = async (url, method = 'GET', body) => {
  const fullUrl = baseURL + url;

  const params = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(fullUrl, params);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('fetch error:', error);
    throw new Error('Fetch request failed.');
  }
};

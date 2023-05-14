export const standarFetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Something went wrong');
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const standarGetWithJwt = async (
  url: string,
  getAccessTokenSilently: Function
) => {
  try {
    const accessToken = await getAccessTokenSilently();
    if (accessToken) throw new Error('Something went wrong');
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if(!response.ok) throw new Error('Something went wrong');
    return await response.json();
  } catch (error) {
    return error;
  }
};

// const fetcher = async (
//   url: string,
//   getAccessTokenSilently: Function,
//   user: User | undefined
// ) => {
//   try {
//     const accessToken = await getAccessTokenSilently();
//     if (!user) throw new Error('User not found');
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify(user),
//     });
//     if (res.ok) return await res.json();
//     throw new Error('Error in fetching');
//   } catch (error) {
//     return error;
//   }
// };

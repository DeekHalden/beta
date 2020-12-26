export const fetchToken = async (): Promise<string[]> => {

  try {
    const data = await fetch("https://my-json-server.typicode.com/DeekHalden/beta/tokens");
    const res = await data.json()
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

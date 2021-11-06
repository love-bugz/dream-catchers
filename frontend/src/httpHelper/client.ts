const BASE_URL = process.env.REACT_APP_DB_URL;

function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
}

export class HttpClient {
  async get(path: string) {
    try {
      const response = await fetch(`${BASE_URL}${path}`);
      handleErrors(response); // check that the reponse was `ok`
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(String(err));
    }
  }

  async post(path: string, body: Record<string, unknown>) {
    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      handleErrors(response);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(String(err));
    }
  }
}

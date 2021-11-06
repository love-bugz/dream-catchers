const BASE_URL = process.env.REACT_APP_DB_URL;

export class HttpClient {
  async get(path: string) {
    try {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async post(path: string, body: Record<string, unknown>) {
    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

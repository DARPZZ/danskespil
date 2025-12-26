export async function GetData()
{
    const url = "http://127.0.0.1:8000/danskespil"
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Request failed with status:", response.status);
      return;
    }
        const jsonData = await response.json();
    return jsonData;
}

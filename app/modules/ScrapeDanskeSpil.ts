import { json } from "stream/consumers";

export async function GetData()
{
    const url = "https://srv589522.hstgr.cloud/fastapi-api/danskespil"
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Request failed with status:", response.status);
      return;
    }
        const jsonData = await response.json();
    return jsonData;
}
export async function GetMyBets(navn:string)
{
    const url = `https://srv589522.hstgr.cloud/fastapi-api/danskespil/mybets/?name=${navn}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Request failed with status:", response.status);
      return;
    }
        const jsonData = await response.json();
    return jsonData;
}

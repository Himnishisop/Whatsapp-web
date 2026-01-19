export const config = { runtime: "edge" };

export default async function handler(req) {
  return fetch("https://web.whatsapp.com/", {
    headers: {
      "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
  });
}

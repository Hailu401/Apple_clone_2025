const apikey = import.meta.env.VITE_API_KEY;
export const AccessPoint = {
  Full_Api_key: `https://www.googleapis.com/youtube/v3/search?key=${apikey}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`,

  Api_channel:
    `https://www.googleapis.com/youtube/v3/channels?key=${apikey}&forUsername=Apple&part=id`
};

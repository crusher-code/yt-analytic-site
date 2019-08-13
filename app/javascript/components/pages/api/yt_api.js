
let getChannelData = function(channelId, apiKey) {
   return fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`)
      .then( resp =>{
          return resp.json()
        })
}
let getVideoData = function(videoId, apiKey) {
   return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${videoId}&key=${apiKey}`)
      .then( resp =>{
          return resp.json()
        })
}

let getVideoStatData = function(videoIds, apiKey) {
   return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${apiKey}`)
      .then( resp =>{
          return resp.json()
        })
}

 export {
    getChannelData,
    getVideoData,
    getVideoStatData
 }
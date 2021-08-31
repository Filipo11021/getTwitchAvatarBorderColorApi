import fetch from 'node-fetch'

const getStreamer = async (streamer) => {
  try {
    const res = await fetch('https://gql.twitch.tv/gql', {
      body: JSON.stringify({
        query: `query {
         user(login: "${streamer}") {
           id
           login
           displayName
           description
           createdAt
           roles {
             isPartner
           }
           stream {
             id
             title
             type
             viewersCount
             createdAt
             game {
               name				
             }
           }
         }
       }
       `,
        variables: {},
      }),
      headers: {
        'Content-Type': 'application/json',
        'Client-id': process.env.TWITCH_API_ID,
      },
      method: 'POST',
    })
    const data = await res.json()
    return data.data
  } catch (error) {
     console.log(error)
  }
}
export default getStreamer

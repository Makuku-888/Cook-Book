import * as contentful from  'contentful';


const client = contentful.createClient({
 accessToken: process.env.REACT_APP_ACCESS_TOKEN,
 space: process.env.REACT_APP_SPACE_ID
})

export default client;
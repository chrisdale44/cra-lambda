import axios from "axios"
export async function handler(event, context) {
  const cloudinaryEndpoint = `https://376147756999958:xtGvgGCECygguBMyZiuRXErZf_c@api.cloudinary.com/v1_1/dsjx8r2ll/resources/image?max_results=500&tags=true&context=true`;
  try {
    const response = await axios.get(cloudinaryEndpoint, { headers: { Accept: "application/json" } })
    const data = response.data
    return {
      statusCode: 200,
      body: JSON.stringify({ images: data })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}

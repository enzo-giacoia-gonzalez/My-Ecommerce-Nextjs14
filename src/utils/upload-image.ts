import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: 'dnh3hw4ve',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});


export const uploadImage = async (image: File): Promise<string | null> => {

    try {

        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)



        const result: any = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, (error, result) => {
                if (error) {
                    reject(error)

                }
                resolve(result)
            }).end(buffer)
        })

        return result.secure_url



    } catch (error) {
        console.log(error)
        return null
    }

}
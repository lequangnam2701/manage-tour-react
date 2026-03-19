// import axios from "axios";

// export const uploadImage = async (file, onProgress) => {
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "shopdemo");

//   const res = await axios.post(
//     "https://api.cloudinary.com/v1_1/shopdemo/image/upload",
//     data,
//     {
//       onUploadProgress: (event) => {
//         const percent = Math.round((event.loaded * 100) / event.total);
//         if (onProgress) onProgress(percent);
//       },
//     }
//   );

//   return res.data.secure_url;
// };

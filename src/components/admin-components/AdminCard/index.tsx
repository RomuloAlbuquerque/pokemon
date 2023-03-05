import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

// const AdminCard = () => {
//   const [el, setEl] = useState<card>();

//   useEffect(() => {
//     axios.get(`${baseUrl}/admin/card-home`, { headers: {"ngrok-skip-browser-warning": 6942}}).then((response) => {
//       setEl(response.data);
//     })
//   },[]);
//   return (
//     <div>
//       <div className="container-cards-admincard">
//         <div className="row">
//             <div className="container-card-admincard col-sm-12 col-md-4">
//               <div className="container-card-admincard">
//                 <div className="content-card-admincard">
//                   <div className="title-card-admincard">
//                     <h2>{el?.title}</h2>
//                   </div>
//                   <div className="detail-card-admincard">
//                     <p>{el?.detail}</p>
//                   </div>
//                   <div className="img-card-admincard">
//                     <img src={el?.imgUrl} alt={el?.title} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminCard;













// function Form() {

//   const [url, setUrl] = useState("");

//   const handleSubmit = (event: any) => {
//     event.preventDefault();

//     const data = {
//       name: url
//     };

//     axios.post("http://localhost:3000/api/submit-form", data)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
//       </label>

//       <button type="submit">Download</button>
//     </form>
//   );
// }






function VideoDownloader() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://ytdt.romulodev.repl.co/download`, { videoUrl }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'video.mp4');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="video-url">URL do vídeo:</label>
      <input
        type="text"
        id="video-url"
        name="videoUrl"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button type="submit">Download</button>
    </form>
  );
}

export default VideoDownloader;

//funcionou
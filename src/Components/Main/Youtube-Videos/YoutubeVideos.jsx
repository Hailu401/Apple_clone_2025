import React, { useState, useEffect } from "react";
import style from "./Youtube.module.css";
import { AccessPoint } from "../../../Api/Api.js";
function YoutubeVideos() {
  const [Videos, setVideos] = useState([]);
  const full_api = AccessPoint.Full_Api_key

  // useEffect(()=>{

  //     fetch(full_api).then((res)=> res.json()).then((data)=>{
  //       setVideos(data.items)
  //     }).catch((err)=>{
  //       console.log("something went wrong", err);
  //     });

  // },[])

  // console.log(Videos);

  return (
    <>
      <section>
        <div className={style.header}>
          <h2>Latest Videos</h2>
        </div>
        <div className={style.VideoContainer}>
          <div className={style.SingleVideo}>
            {Videos?.map((VidItem) => {
              let id = VidItem.id.videoId;
              let VidLink = `https://www.youtube.com/watch?v=${id}`
              let Vdesc = VidItem.snippet.description;
              return (
                <div key={id}>
                  <div className={style.VideoLink}>
                    <a href={VidLink} target="_blank">
                      <img src={VidItem.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className={style.title}>
                    {VidItem.snippet.title.substring(0, 50)}
                    ...
                  </div>
                  <div className={style.desc}>
                    {Vdesc.substring(0, 100)}
                    ...
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default YoutubeVideos;

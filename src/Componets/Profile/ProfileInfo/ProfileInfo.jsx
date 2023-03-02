import React from "react"
import c from './ProfileInfo.module.css'

let ProfileInfo = () => {
  return (
    <div>
      <img className={c.backImage} src='https://pibig.info/uploads/posts/2021-06/1623579917_36-pibig_info-p-vidi-prirodi-priroda-krasivo-foto-38.jpg' alt='Not Found'></img>    
      <div className={c.info}>
        <img className={c.avatar} src='https://damion.club/uploads/posts/2022-03/1646255026_29-damion-club-p-anime-tyan-na-avu-v-stime-art-31.jpg' alt='Not Found'></img>
        <div>
          <div className={c.name}>
            Danila S.
          </div>
          <div className={c.desk}>
            Date of Birth: 25 october <br></br>
            City: Moscow<br></br>
            Education: RGSU<br></br>
            Web Site: GitHub<br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
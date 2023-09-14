import style from './video.module.css'

const Vdeo = (props) => {
    let {videoData} = props;
    return <div className= {style.container}>

            <img src = {videoData.thumbnailUrl} className= {style.videoimage}/>

            <div className={style.text}>    
                <h3 className={style.title}>{videoData.title}</h3>

                <p className={style.review}>
                    <span className={style.likes}>{videoData.likes}</span> likes |
                    <span className={style.views}>{videoData.views}</span> views
                </p>

                <p className={style.channel}>
                    <img src= {videoData.channelLogoUrl} className={style.channellogo} />
                    <span className={style.channelname}>{videoData.channelName}</span>
                </p>
            </div>
        </div>
}

export default Vdeo
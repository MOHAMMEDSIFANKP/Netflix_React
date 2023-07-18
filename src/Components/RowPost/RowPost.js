import React, { useEffect,useState} from 'react';
import Youtube from 'react-youtube'
import './RowPost.css';
import {imageUrl,API_KEY} from '../../constants/constants';
import axios from '../../axios';
function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,seturlId] = useState()
  useEffect(()=>{
    axios.get(props.url ).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      //alert('Network Error')
    })
  }, [])
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie=(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          seturlId(response.data.results[0])
        }else{
          alert('Trailer not avilable')
        }
      })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster' }alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>
      )}
      </div>
      { urlId &&   <Youtube opts={opts} videoId={urlId.key}/>}
    
    </div>
  );
}

export default RowPost;

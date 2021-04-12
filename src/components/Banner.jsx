
import { useEffect, useState } from 'react';
import requests from './../request';
import axios from '../axios'
import './Banner.css'
const base_url = 'https://image.tmdb.org/t/p/original'

const Banner = () => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)

            const result = request.data.results

            const randomMovieNum = Math.floor(Math.random() * (result.length - 1))
            console.log(randomMovieNum)
            setMovie(result[randomMovieNum])

        }

        fetchData()

    }, [])

    const bannerStyle = {
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className='banner'
            style={bannerStyle}
        >
            <div className="banner__contents">
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My Lists</button>
                </div>
                <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
            </div>
            <div className="banner_fadeBottom" />
        </header>);
}

export default Banner;
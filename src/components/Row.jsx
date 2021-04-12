

import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios'
import './Row.css'
import TrailerNotFound from './TrailerNotFound';


const base_url = 'https://image.tmdb.org/t/p/original/'
const API_KEY = 'db9ea423b48941f95993931996042e48'

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMoives] = useState([])
    const [Trailer, setTrailer] = useState('')


    useEffect(() => {

        async function fetchDatas() {

            const request = await axios.get(fetchUrl)
            setMoives(request.data.results)
        }

        fetchDatas()

    }, [fetchUrl])

    const getMovieTrailer = async (movie) => {
        { console.log('Trailer', Trailer) }
        if (Trailer) {
            setTrailer('')
        } else {
            try {
                //get the movie key
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}}/videos?api_key=${API_KEY}&language=en-US`)

                //set state to movie key
                console.log(res.data?.results[0].key)
                setTrailer(res.data?.results[0].key)
                console.log('hiiiiiiiiii', res.data?.results[0].key)
            }
            catch (err) {
                setTrailer(null)
                console.log('err', err)
            }

        }

    }

    const opts = {
        height: '390',
        width: '100%',
        palyerVars: {
            autoplay: 1
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>


            <div className='row__posters'>
                {
                    movies.map((movie) => (
                        <img

                            onClick={() => getMovieTrailer(movie)}
                            key={movie.id}
                            className={`row__poster ${isLargeRow && 'row_posterLarge'}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" />
                    ))
                }
            </div>
            {Trailer && <YouTube
                opts={opts}
                videoId={Trailer} />}
            {Trailer == null && <TrailerNotFound />}

        </div>
    );
}

export default Row;



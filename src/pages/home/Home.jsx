import { useEffect, useState } from 'react'
import { getMoviesApi } from '../../api/movie.api'

const Home = () => {

    useEffect(() => {
        getMoviesApi().then((result) => {
            console.log("result: ", result)
        }).catch(err => console.log("error: ", err))
    }, [])


    return (
        <div className='home'>
            Home Content ...
        </div>
    )
}

export default Home

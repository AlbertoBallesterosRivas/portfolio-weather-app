const Weather = ({ weather }) => {
    if(!weather){
        return null
    }

    return (
        <p>{weather.main.temp}</p>
    )
}

export default Weather
import clouds from './clouds.png'
import sunny from './sunny.png'

const Icon = ({ weather }) => {
    switch (weather) {
        case "Clouds":
            return   <img src={clouds} alt="" />
        case "Clear":
            return   <img src={sunny} alt="" />
        default:
    }
}

export default Icon
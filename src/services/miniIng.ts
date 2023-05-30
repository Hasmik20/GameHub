import noImg from '../assets/noImg.webp'

const minimizeImg =(url: string) =>{
    if(!url) return noImg
 let index = url.indexOf('media/') + 'media/'.length
 return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default minimizeImg
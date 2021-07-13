import React from 'react'
import {Callout} from '../atoms/StyledComponents'


const Record = (album) => {
    

    return (
       
        <div style={{width: '300px', height: '500px'}}>
        <img src={album.imgUrl} alt={album.bandName} style={{height: '300px', width: '300px', objectFit: 'cover'}}></img>
        <Callout style={{textAlign: 'center', paddingTop: '10px'}}>{album.bandName}</Callout>
            
        </div>
    )
}

export default Record

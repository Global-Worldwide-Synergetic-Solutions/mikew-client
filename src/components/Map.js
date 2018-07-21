import React from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Mapping = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZnJhc2VyaXNsYW5kIiwiYSI6ImNqanJ0YjdydzAxMzMzcG9zZzNydDR3NGsifQ.HGp2D9BXVgnAFIO1miIcXA"
  });

class Map extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="Map">
                <div className="Map--frame">  
                    <Mapping
                    zoom={[15]}
                    center=  {[152.953761,-27.492133]}
                    style="mapbox://styles/mapbox/navigation-preview-night-v3"
                    containerStyle={{
                        height: "40vh",
                        width: "50vw",
                    }}>
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                            <Feature coordinates={[152.953761,-27.492133]}/>
                        </Layer>
                    </Mapping>
                </div>
                <div className="Map--info">
                    <p> All production appointments will be received at my home office. My studio has everything needed to produce professional music </p>
                    <div>
                        <p> <img className="Map--Icon" src="http://www.myiconfinder.com/uploads/iconsets/256-256-35be70cfc8168446fdd9c9803ea9f6a1.png" alt="map icon"/>
                         Address: 1 Pilin Place, Chapel Hill, Queensland </p>
                    </div>
                    <p> <img className="Map--Icon" src="http://www.thamesriverservices.co.uk/assets/address.png" alt="address icon"/> 
                    Postal Address: PO Box 93 </p>
                    <p> <img className="Map--Icon" src="https://png.icons8.com/cotton/2x/secured-letter.png" alt="email icon"/>
                    michael.s.waye@gmail.com  </p>
                    <p> <img className="Map--Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/phone-icon.png" alt="phone icon"/>
                    0450309283 </p>
                </div>
            </div>
         )
    }
}
 
export default Map
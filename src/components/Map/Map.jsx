import React from 'react';
import './Map.css'

import {YMaps , Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, RouteButton, TypeSelector} from 'react-yandex-maps';


const Maps = () =>{
    return (

        <YMaps>
            <div className="demo">

                <Map 
                    defaultState={{
                        center: [40.388451, 71.793167],
                        zoom: 15,
                        
                    }}
                >
                <Placemark geometry={[40.388451, 71.793167]} />
                <FullscreenControl options={{ float: 'left'}} />
                <GeolocationControl options={{ float: 'right'}} />
                <TrafficControl options={{float: 'right'}} />
                <ZoomControl options={{float: 'left'}} />
                <RouteButton options={{ float: 'right'}} />
                <TypeSelector options={{float: 'right'}} />
                </Map>

            </div>
        </YMaps>

    )
}

export default Maps
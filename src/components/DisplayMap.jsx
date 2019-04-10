import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import AlgoliaPlaces from 'algolia-places-react';


 class DisplayMap extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

     selectAddressHandler = (rawAnswer, suggestion) => {
         console.log('rawAnswer',rawAnswer);
         console.log('suggestion', suggestion);
         console.log('coordinate', suggestion.latlng)
     };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <AlgoliaPlaces
                    placeholder="Write an address here"
                    options={{
                        appId: 'APP ID',
                        apiKey: 'API Key'
                    }}
                    onChange={({
                                   query,
                                   rawAnswer,
                                   suggestion,
                                   suggestionIndex
                    }) => this.selectAddressHandler(rawAnswer, suggestion)}
                    onSuggestions={({ rawAnswer, query, suggestions }) =>
                        console.log('You will receive the array of suggestions that are displayed.')

                    }
                />
                <Map center={position}
                     zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

export default DisplayMap;
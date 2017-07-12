/*import React,{Component} from 'react';
import  GoogleMap from 'react-google-maps';
import GoogleMapLoader from "react-google-maps-loader";

export default (props)=>{
    return(
        <GoogleMapLoader 
        containerElement={<div style={{height:'100%'}} />}
        GoogleMapElement={
            <GoogleMap defaultZoom={12}  defaultCenter={{lat:props.lat,lng:props.lon}} />
          }
        />
    );
}
*/




// export default class GoogleMap extends Component{
//     ComponentDidMount(){
//         new google.maps.Map(this.refs.map,{
//             zoom:12,
//             center:{
//             lat:this.props.lat,
//             long:this.props.lon
//             }
//         });
//     }

//     render(){
//     return <div ref="map" />;    
//     }
// }


/*import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
var GoogleMapsAPI = window.google.maps;
 
export default class GoogleMap extends Component {
 
  render() {
    return (
      <GoogleMapReact
        defaultCenter={{lat:this.props.lat,lng:this.props.lon}}
        defaultZoom={12}
      >
      </GoogleMapReact>
    );
  }
}*/

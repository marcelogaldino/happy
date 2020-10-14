import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { FiPlus, FiArrowRight } from 'react-icons/fi'

import MapIcon from '../utils/mapIcon'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

function OrphanagesMap() {
    useEffect(() => {
        api.get('orphanages').then(response => {
            console.log(response)
        })
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Mandaguari</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map
                center={[-23.5184436, -51.6860508]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                    position={[-23.5184436, -51.6860508]}
                    icon={MapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Orfanato
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>    
                

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
}

export default OrphanagesMap
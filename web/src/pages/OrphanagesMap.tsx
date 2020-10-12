import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'

import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
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
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
}

export default OrphanagesMap
import React, { useEffect, useState } from 'react'
import { API } from './../services'

function WorldData() {

    const defaultData = { confirmed: 0, recovered: 0, deaths: 0 }
    const [worldData, setWorldData] = useState(defaultData)

    useEffect(() => {
        API.getWorldData().then(response => {
            let temp = {
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
            }
            setWorldData(temp)
        })
    }, [])

    return (
        <div className="row pt-3" style={{ marginLeft: "110px" }}>
            <div className="col-3 card shadow pb-2 mr-2 ml-2">
                Confirmed
                    <span>{worldData.confirmed}</span>
            </div>
            <div className="col-3 card shadow pb-2 mr-2 ml-2">
                Recovered
                    <span>{worldData.recovered}</span>
            </div>
            <div className="col-3 card shadow pb-2 mr-2 ml-2">
                Deaths
                    <span>{worldData.deaths}</span>
            </div>
        </div>
    )
}

export { WorldData }
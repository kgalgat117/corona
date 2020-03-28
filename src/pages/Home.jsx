import React from 'react'
import { WorldData, CountryTable } from './../components'

function Home() {
    return (
        <div className="container-fluid ">
            <WorldData />
            <div className="row pt-3 " style={{ display: "flex", justifyContent: "space-around" }}>
                <div>Countries</div>
                <div>+</div>
            </div>
            <CountryTable />
        </div>
    )
}

export { Home }
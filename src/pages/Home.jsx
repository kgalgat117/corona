import React from 'react'
import { WorldData } from './../components'

function Home() {
    return (
        <div className="container-fluid ">
            <WorldData />
            <div className="row">
                row 2
            </div>
        </div>
    )
}

export { Home }
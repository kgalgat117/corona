import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';

function CountryTable() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <div className="row pt-3">
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export { CountryTable }
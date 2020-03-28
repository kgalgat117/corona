import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import { API } from './../services/apiService'

function CountryTable() {

    var localStorageCountry = localStorage.getItem('country')
    var userCountryArray = []
    if (localStorageCountry) {
        userCountryArray = localStorageCountry.split(',')
    }
    const [userCountries, setUserCountries] = useState(userCountryArray)
    const [tableRows, setTableRows] = useState([])

    useEffect(() => {
        let promises = []
        userCountries.forEach(userCountry => {
            promises.push(
                API.getCountryData(userCountry)
            )
        })
        let index = 0
        Promise.all(promises).then(response => {
            let tempArray = []
            response.forEach(singleResponse => {
                tempArray.push({
                    countryName: userCountries[index],
                    confirmed: singleResponse.data.confirmed.value,
                    recovered: singleResponse.data.recovered.value,
                    deaths: singleResponse.data.deaths.value
                })
                index++;
            })
            setTableRows(tempArray)
        })
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
                    {tableRows.map((row, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{row.countryName}</td>
                            <td>{row.confirmed}</td>
                            <td>{row.recovered}</td>
                            <td>{row.deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export { CountryTable }
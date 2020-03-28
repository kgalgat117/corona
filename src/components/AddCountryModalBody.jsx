import React, { useEffect, useState } from 'react'
import { Input, Badge } from 'reactstrap';
import { API } from './../services'

function AddCountryModalBody() {

    var localStorageCountry = localStorage.getItem('country')
    var localStorageCountryArray = []
    if (localStorageCountry) {
        localStorageCountryArray = localStorageCountry.split(',')
    }
    const [userCountries, setUserCountries] = useState(localStorageCountryArray)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        API.getCountries().then(response => {
            setCountries(response.data.countries)
        })
    }, [])

    const updateUserCountry = () => {
        let value = document.getElementById('userCountrySelect').value
        if (value) {
            let tempLocalStorageCountry = localStorage.getItem('country')
            let updatedValue = ''
            if (tempLocalStorageCountry) {
                updatedValue = tempLocalStorageCountry + ',' + value
            } else {
                updatedValue = value
            }
            if (userCountries.indexOf(value) == -1) {
                localStorage.setItem('country', updatedValue)
                let tempArray = []
                tempArray = tempArray.concat(userCountries)
                tempArray.push(value)
                setUserCountries(tempArray)
            }
        }
    }

    const removeUserCountry = (value, index) => {
        let temp = []
        temp = temp.concat(userCountries)
        temp.splice(index, 1)
        setUserCountries(temp)
        localStorage.setItem('country', temp.toString())
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <Input type="select" name="select" id="userCountrySelect">
                        {countries.map((country, index) => (
                            <option value={country.name} key={index}>{country.name}</option>
                        ))}
                    </Input>
                </div>
                <div className="col-6">
                    <button type="button" onClick={updateUserCountry} className="btn btn-primary">Add</button>
                </div>
            </div>
            <div className="row mt-3 pl-3">
                {userCountries.map((userCountry, index) => (
                    <div key={index} className="row border border-primary mr-4 mb-2">
                        <Badge color="primary">{userCountry}</Badge>
                        <div style={{ backgroundColor: 'grey' }} onClick={e => { removeUserCountry(userCountry, index) }} className="border border-dark">X</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { AddCountryModalBody }

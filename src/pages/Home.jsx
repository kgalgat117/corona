import React, { useState } from 'react'
import { WorldData, CountryTable, AddCountryModalBody } from './../components'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Home() {

    const [addCountryModalState, setAddCountryModalState] = useState(true);
    const toggleAddCountryModalState = () => setAddCountryModalState(!addCountryModalState);

    return (
        <div className="container-fluid ">
            <WorldData />
            <div className="row pt-3 " style={{ display: "flex", justifyContent: "space-around" }}>
                <div>Countries</div>
                <div onClick={toggleAddCountryModalState}>+</div>
            </div>
            <CountryTable />
            <Modal isOpen={addCountryModalState} toggle={toggleAddCountryModalState}>
                <ModalHeader toggle={toggleAddCountryModalState}>Add Country</ModalHeader>
                <ModalBody>
                    <AddCountryModalBody />
                </ModalBody>
            </Modal>
        </div>
    )
}

export { Home }
import React, { useState } from 'react'
import { WorldData, CountryTable, AddCountryModalBody, AppHeader, AppFooter } from './../components'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function Home() {

    const [addCountryModalState, setAddCountryModalState] = useState(false);
    const toggleAddCountryModalState = () => setAddCountryModalState(!addCountryModalState);

    return (
        <div className="container-fluid pr-0 pl-0">
            <AppHeader />
            <WorldData />
            <div className="row pt-3" style={{ display: "flex", justifyContent: "space-around" }}>
                <div>Countries</div>
                <div onClick={toggleAddCountryModalState}>+</div>
            </div>
            {!addCountryModalState &&
                <CountryTable />
            }
            <Modal isOpen={addCountryModalState} toggle={toggleAddCountryModalState}>
                <ModalHeader toggle={toggleAddCountryModalState}>Add Country</ModalHeader>
                <ModalBody>
                    <AddCountryModalBody />
                </ModalBody>
            </Modal>
            <AppFooter />
        </div>
    )
}

export { Home }
import React, {  useState } from 'react'
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, ModalFooter} from 'reactstrap'
import {useMutation} from "@apollo/client";
import Switch from "react-bootstrap/Switch";
import { updateDevice} from "../graphql-client/mutations";
import {FormCheck} from "react-bootstrap";

const ModalForm = ({item}) => {
    const [name, setName] = useState(item.name);
    const [serial, setSerial] = useState(item.serial);
    const [region, setRegion] = useState(item.region);
    const [isActive, setIsActive] = useState(item.active);
    const [isOpen, setIsOpen] = useState(false);
    const [updateSensorData, dataMutation] = useMutation(updateDevice)

    const updateSensor = () => {
        setIsOpen(false)
        updateSensorData({
            variables: {
                deviceId: item.deviceId,
                application: item.application,
                name: name,
                model: item.model,
                serial: serial,
                mac: item.mac,
                region: region,
                longitude: item.longitude,
                latitude: item.latitude,
                floor: item.floor,
                distance: item.distance,
                remark: item.remark,
                optional: item.optional,
                active: isActive,
                x: item.x,
                y: item.y,
                z: item.z,
                tags: item.tags
            }
        }).then(res => console.log('res of update  ', res ))
            .catch(err => console.log('err udpate', err))
    }

    return (
        <div>
            <Button style={{ color: '#000', backgroundColor: 'yellow', width: 60, borderWidth: 0}} onClick={() => setIsOpen(true)} >
                <div>Edit</div>
            </Button>
        <Modal isOpen={isOpen} >
                <ModalHeader >Update sensor data</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="first">Name</Label>
                    <Input type="text" id="name" onChange={(name) => setName(name.target.value)} value={name} />
                </FormGroup>
                <FormGroup>
                    <Label for="last">Serial</Label>
                    <Input type="text" id="serial" onChange={(serial) => setSerial(serial.target.value)} value={serial}  />
                </FormGroup>
                <FormGroup>
                    <Label for="last">Region</Label>
                    <Input type="text" id="region" onChange={(region) => setRegion(region.target.value)} value={region}  />
                </FormGroup>
                <FormGroup>
                    <Label for="last">Sensor status</Label>
                    <FormCheck
                        id="switchEnabled"
                        type="switch"
                        checked={isActive}
                        onChange={() => setIsActive(!isActive)}
                        label={isActive ? "Sensor is enable" : "Sensor is disable"}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={updateSensor}>Update sensor data</Button>{' '}
                <Button color="secondary" onClick={() =>setIsOpen(false)}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    )
}

export default ModalForm

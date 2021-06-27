import React, { useState } from 'react'

import {useMutation, useQuery} from '@apollo/client'
import { getSensorsWithIoT} from '../graphql-client/queries'
import ModalForm from "./Modal";
import Button from "react-bootstrap/Button";
import {Table} from "react-bootstrap";
import {deleteDevices} from "../graphql-client/mutations";

const SensorList = () => {
	const [deleteSensorDevices, dataDeleteSensorDevices] = useMutation(deleteDevices)
	const { loading, error, data } = useQuery(getSensorsWithIoT)

	const deleteSensor =(item) => {
		console.log('item. divice id', item.deviceId)
		deleteSensorDevices({
			variables: {
				type: 'Delete',
				deviceIds: [item.deviceId],
			},
			refetchQueries: [
				{
					query: getSensorsWithIoT
				}
			]
			}
		).then(res =>
		{
			console.log('delete sensor success', res)
		})
			.catch(error => console.log('delete sensor error', error))
	}

	if (loading) return <p>Loading Sensor....</p>
	if (error) return <p>Error loading sensors!</p>

	const items = data.getSensorsWithIoT.map(item => {
		return (
			<tr key={item.deviceId}>
				<th scope="row">{item.deviceId}</th>
				<td>{item.name}</td>
				<td>{item.region}</td>
				<td>{item.serial}</td>
				<td>{item.longitude}</td>
				<td>{item.latitude}</td>
				<td>{item.active ? 'Active' : 'Not active'}</td>
				<td>
					<div style={{ display: 'flex', width: 130, flexDirection: 'row', justifyContent: 'space-between'}}>
						<ModalForm item={item}
						/>
						<Button style={{ backgroundColor: 'red', width: 60, borderWidth: 0, marginLeft: 10}}
							onClick={() => deleteSensor(item)}
						>Del</Button>
					</div>

				</td>
			</tr>
		)
	})


	return (
		<Table responsive hover>
			<thead>
			<tr>
				<th>DeviceID</th>
				<th>Name</th>
				<th>Region</th>
				<th>Serial</th>
				<th>Longitude</th>
				<th>Latitude</th>
				<th>Active</th>
				<th>Actions</th>
			</tr>
			</thead>
			<tbody>
			{items}
			</tbody>
		</Table>
	)
}

export default SensorList

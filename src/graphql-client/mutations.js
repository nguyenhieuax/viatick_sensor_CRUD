import { gql } from '@apollo/client'

const updateDevice = gql`
mutation updateDevice($input: DeviceUpdateInput) {
         updateDevice(input: $input) {
            deviceId
            application {
             name
            }
            name
            model {
              name
            }
            serial
            mac
            region
            longitude
            latitude
            floor
            distance
            remark
            optional
            active
            x
            y
            z
            tags
         }
}
`

const deleteDevices = gql`
mutation deleteDevices($type: String, $deviceIds: [Int]) {
  deleteDevices(
      type: $type,
      deviceIds: $deviceIds
  ) 
    {
      rows_deleted
    }
  }
  `

export {  updateDevice, deleteDevices }

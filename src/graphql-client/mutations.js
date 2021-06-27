import { gql } from '@apollo/client'

const updateDevice = gql`
mutation updateDevice(
            $deviceId: Int
            $application: Int
            $name: String
            $model: Int
            $serial: String
            $mac: String
            $region: String
            $longitude: Float
            $latitude: Float
            $floor: Int
            $distance: Float
            $remark: String
            $optional: AWSJSON
            $active: Boolean
            $x: Float
            $y: Float
            $z: Float
            $tags: [String]
) {
         updateDevice(
            deviceId: $deviceId
            application: $application
            name: $name
            model: $model
            serial: $serial
            mac: $mac
            region: $region
            longitude: $longitude
            latitude: $latitude
            floor: $floor
            distance: $distance
            remark: $remark
            optional: $optional
            active: $active
            x: $x
            y: $y
            z: $z
            tags: $tags
         ) {
            deviceId
            application
            name
            model
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

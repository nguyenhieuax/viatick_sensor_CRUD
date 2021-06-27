import { gql } from '@apollo/client'

const getSensorsWithIoT = gql`query getSensorsWithIoT {
         getSensorsWithIoT {
            deviceId
            model {
                name
            }
            name
            application {
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
            date
            live
            battery
            humidity
            temperature
            height
            maxHeight
            x
            y
            z
            tags
            deploymentDate
            compositionData
            unicastAddr
            meshStatus
            status
            error
            lockStatus
            network
            frequency
            server
         }
}
`
const getSensorsWithIoTbyId = gql`query getSensorsWithIoT($name: String) {
         getSensorsWithIoT(name: $name) {
            model {
                name
            }
            name
            application {
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
            date
            live
            battery
            humidity
            temperature
            height
            maxHeight
            x
            y
            z
            tags
            deploymentDate
            compositionData
            unicastAddr
            meshStatus
            status
            error
            lockStatus
            network
            frequency
            server
         }
}
`


export { getSensorsWithIoT, getSensorsWithIoTbyId }

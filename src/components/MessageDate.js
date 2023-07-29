import appConfig from '/config.json'
import { Text } from '@skynexui/components'

export default ({ message }) => {

    function dateStringFormatConvert(dateString) {
        const [day, time] = dateString.slice(0, 16).replaceAll('-', '/').replace('T', ' ').split(' ')

        const formattedDay = day.slice(8, 10) + day.slice(4, 8) + day.slice(0, 4)

        const numericHour = Number(time.slice(0, 2))
        const correctedTimeZoneHour = numericHour >= 3 ? numericHour - 3
            : numericHour == 2 ? 23
                : numericHour == 1 ? 22
                    : 21
        const formattedTime = correctedTimeZoneHour + time.slice(2, 5)

        return `${formattedDay} ${formattedTime}`
    }

    return (
        <Text
            styleSheet={{
                fontSize: '10px',
                marginLeft: '8px',
                color: appConfig.theme.colors.neutrals[300],
                marginTop: '5px'
            }}
            tag="span"
        >
            {dateStringFormatConvert(message.created_at)}
        </Text>
    )

}
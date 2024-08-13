import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCamera, faEye } from '@fortawesome/free-solid-svg-icons'

export default function Icon() {
    return (
        <div>
            <h2>Danh sách các Icon</h2>
            <FontAwesomeIcon icon={faCoffee} style={{
                width: '50px',
                height: '50px',
            }}  />
            <FontAwesomeIcon icon={faCamera} style={{
                width: '50px',
                height: '50px',
            }} />
            <FontAwesomeIcon icon={faEye} style={{
                width: '50px',
                height: '50px',
            }} />
        </div>
    )
}
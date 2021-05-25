import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Load() {
    return (
        <>
            <main style={styles.container} className="flex flex-wrap justify-center content-center">
                <FontAwesomeIcon icon={faSpinner} style={styles.spinner} spin size="2x" />
            </main>
        </>
    )
}

const styles = {
    container: {
        height: '100vh'
    },
    spinner: {
        color: 'brown',
        opacity: '0.65'
    }
}

export default Load
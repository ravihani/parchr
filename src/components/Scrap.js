import React from 'react'
import { withFirebase } from './Firebase'

const Scrap = (props) => {
    return (
        <div>
            {console.log("Scrap: ", props) }
            <h2>Scrap</h2>
        </div>
    )
}

export default withFirebase(Scrap)

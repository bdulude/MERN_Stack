import React from 'react'

const Display = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
            {
                props.boxArr.map((box, idx) => {
                    return (
                        <div key={idx} style={{background: box, width: 100, height: 100, marginRight: 10, borderRadius: 10}} >
                            {idx}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display
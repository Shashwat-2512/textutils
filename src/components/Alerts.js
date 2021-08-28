import React from 'react'

export default function Alerts(props) {
    return (
    <div style={{height: '44px'}}>
    {props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type} : </strong>{props.alert.msg}
    </div>}
    </div>
    )
}

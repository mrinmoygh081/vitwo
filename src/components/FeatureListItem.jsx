import React from 'react'

const FeatureListItem = ({ icon, title, para }) => {
    return (
        <div>
            <div className="feature-item">
                <i className={icon}></i>
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default FeatureListItem
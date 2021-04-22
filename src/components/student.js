import React from 'react';

export default function Student(props) {
    const {name, avatar, email, key} = props;
    
    return (
        <div className="div-container">
            <div className="tile">
                
                    ${avatar}
                <div className="details">
                    ${name.first}
                </div>
            </div>

        </div>
    )
}
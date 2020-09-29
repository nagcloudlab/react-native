import React from 'react';

const Box = (props) => {
    let { children, title } = props;

    const renderChildren = () => {
        return children.map((child, idx) => {
            return (
                <li key={idx} className="list-group-item">
                    {child}
                </li>
            )
        })
    };

    return (
        <div className="card">
            <div className="card-header">{title} Box</div>
            <div className="card-body">
                <ul className="list-group">
                    {renderChildren()}
                </ul>
            </div>
        </div>
    );
};

export default Box;
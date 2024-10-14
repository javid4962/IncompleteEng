import React from 'react';

const DataDisplay = ({ data }) => {

    return (
        <div className='component'>
            <h2 className="center">{data.name}</h2>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <p>University: <b>{data.university}</b></p>
            <p>Departments: <b>{data.departments}</b></p>
            <p>Address: <b>{data.address}</b></p>
            <p>Principal Name: <b>{data.principalName}</b></p>
            <p>Principal Number: <b>{data.principalNumber}</b></p>
            <p>TPO Name: <b>{data.tpoName}</b></p>
            <p>TPO Number: <b>{data.tpoNumber}</b></p>
            <p>Mail: <b><a href={`mailto:${data.mailId}`}>{data.mailId}</a></b></p>
            <p>Office Number: <b><a href={`tel:${data.officeNumber}`}>{data.officeNumber}</a></b></p>

            {/* <img src={data.image} alt="" /> */}

            <div className="center">
                <iframe src={data.iframe} style={{ border: 1 }} allowfullscreen="" loading="lazy"
                    className="iframe"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default DataDisplay;

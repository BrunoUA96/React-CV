import React from 'react';

function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Porto, Portugal</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Number</h2>
                        <p><a href="tel:+351937373213">+351 937373213</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ostapklysa@gmail.com">ostapklysa@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;
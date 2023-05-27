import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
const FaqPage = () => {
    return (
        <div className="container" style={{marginBottom:'80px', marginTop:'80px'}}>
            <div className="d-flex justify-content-center">
                <h3>Frequently Asked Questions</h3>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What does our company stand for?</Accordion.Header>
                    <Accordion.Body>
                    Our cleaning company offers a wide range of professional cleaning services to cater to your needs. 
                    We pride ourselves on delivering high-quality cleaning solutions and ensuring customer satisfaction. 
                    Whether you require residential cleaning, commercial cleaning, or specialized cleaning services, we 
                    have the expertise and resources to handle it all. Our team of skilled cleaners is trained to provide 
                    efficient and reliable cleaning services.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the service selection feature?</Accordion.Header>
                    <Accordion.Body>
                    We understand that every cleaning requirement is unique. Our service selection feature allows you 
                    to choose the specific type of cleaning service you require. You can select from options such as 
                    regular house cleaning, deep cleaning, office cleaning, carpet cleaning, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the service selection feature?</Accordion.Header>
                    <Accordion.Body>
                    We understand that every cleaning requirement is unique. Our service selection feature allows you 
                    to choose the specific type of cleaning service you require. You can select from options such as 
                    regular house cleaning, deep cleaning, office cleaning, carpet cleaning, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How to use the booking system?</Accordion.Header>
                    <Accordion.Body>
                    Our easy-to-use booking system enables you to schedule appointments at your convenience. You can 
                    select your preferred date and time for the cleaning service, and our team will confirm the 
                    appointment. We strive to accommodate your scheduling needs and ensure timely service delivery.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can we pay online for our service request?</Accordion.Header>
                    <Accordion.Body>
                    To ensure secure and hassle-free transactions, we have integrated a reliable payment gateway. You 
                    can make online payments easily and securely using various payment methods. We prioritize the 
                    security of your personal and financial information.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FaqPage;

// WebDesignServices.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const services = [
    {
        icon:"/images/inov.webp",
        title: "Innovative Designers",
        points: [
            "At Nakshatra Namaha Creations, our talented design team merges strategy, creativity, and technology to deliver visually compelling and effective designs. As the best website development company in Mysore, we craft industry-specific web designs that not only enhance user engagement but also drive business growth. Additionally, recognized as the best mobile app development company in Mysore, we bring expertise and innovation to create mobile applications that perfectly complement your digital presence."
        ]
    },
    {
       icon: "/images/UI-UX-.webp",
        title: "UI/UX Experts",
        points: [
            "Our UI/UX designers are dedicated to creating seamless and intuitive experiences for users. As the best website design company in Mysore, we focus on crafting layouts, color schemes, typography, and icons that enhance user interaction and satisfaction. Recognized as the best website development company in Mysore, we ensure every visual and functional element works harmoniously to deliver an exceptional experience across digital platforms."
        ]
    },
    {
         icon: "/images/Devel.webp",
        title: "Development Specialists",
        points: [
            "Our skilled developers collaborate closely with clients to analyze needs, code efficiently, and deliver outstanding results. Recognized as the best mobile app development company in Mysore, we leverage deep technical knowledge to build innovative applications that meet the highest industry standards. Additionally, as the best website development company in Mysore, we ensure every solution is designed to align with client goals while maintaining superior quality and performance."
        ]
    },
    {
     
         icon: "/images/WDb.webp",    
        title: "Web Development Team",
        points: [
            "Our experienced web development team focuses on turning your business vision into reality. As the best website design company in Mysore, we pay meticulous attention to every detail, ensuring visually appealing and user-friendly designs. Recognized as the best website development company in Mysore, we work through every phase of development to deliver solutions that align with your goals and exceed expectations in today’s competitive market."
        ]
    },
    {
       icon: "/images/App.webp",
        title: "App Creators",
        points: [
            "Bringing app ideas to life is our specialty. At Nakshatra Namaha Creations, we design and develop mobile applications that are engaging, functional, and precise, providing users with an unforgettable experience. As the best mobile app development company in Mysore, we ensure that every app we create is tailored to meet your specific needs and goals."
        ]
    },
    {
        icon: "/images/Anim.webp",
        title: "Animation Experts",
        points: [
            "Our animation team excels in crafting visually captivating content that enhances brand storytelling. Whether it's explainer videos, 2D animations, or puppet animation, we bring creativity and technical precision to create animations that leave a lasting impression on your audience. As the best 2D animation company in Mysore, we are committed to delivering exceptional quality and creativity in every project."
        ]
    },
];

const WebDesignServices = () => {
    return (
        <Container className="py-5">
            <Row>
                {services.map((service, i) => (
                    <Col key={i} md={4} className="mb-4">
                        <div className="p-4 border h-100 shadow-sm rounded text-center text-md-start">
                            <div className="mb-3">
                                <img src={service.icon} alt="Service Icon" style={{ width: '150px', height: '150px' }} />
                            </div>
                            <h5 className="fw-bold">{service.title}</h5>
                            <p className="mt-3">
                                {service.points.join('. ') + '.'}
                            </p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WebDesignServices;

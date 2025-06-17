import React from 'react';
import { Carousel } from 'react-bootstrap';
import './OurClientsSays.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: `NNC provides the best services in digital marketing and branding with their excellent team and I thank Mr.Harish and 
    team members who supported in each and every step, I would rate their work as one of the best in Bangalore! Thank you`,
    author: 'Bhaskar Bhasu'   
  },
  {
    text: `Very nice service I approached Harish sir for my company website and sir was very professional and he
explains everything very nicely so that customer can understand everything clearly and the quality of work is
good.`,
    author: 'M. Nagahari'
  },
  {
    text: `They have created a highly functional and visually 
    appealing website that perfectly meets our needs. Their attention to detail and timely 
    communication throughout the process were exceptional.`,
    author: 'Dr.Ashwini'
  },
  {
    text: `Good service we got from the Nakshatra website creations,it was great moment's we had with Mr.Harish ... We had started the new business at JP nagar.,...,. To improve the business and marketing activities we got best support from Nakshatra website creations team.....
I really suggest and recomend others to connect with Nakshatra website creations team to develop the website creation and Google adds or other online activities.......
Staff and Owner is very helpful and kind people....`,
    author: 'Patil Sandeep'
  },
];

const ClientsCarousel = () => {
  return (
    <section className="testimonial-wrapper bg-gradient">
      <div className="testimonial-container">
        <h2 className="testimonial-heading">What Our Clients Say</h2>
        <Carousel
          controls
          indicators
          interval={6000}
          nextIcon={<FaChevronRight className="arrow-icon right" />}
          prevIcon={<FaChevronLeft className="arrow-icon left" />}
        >
          {testimonials.map((t, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{t.text}</p>
                <h5 className="testimonial-author">- {t.author}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsCarousel;

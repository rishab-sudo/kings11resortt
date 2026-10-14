import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  // Only one FAQ can be open at a time
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Where is King 11 Resort located?",
      answer:
        "King 11 Resort is located in a peaceful setting, offering guests a comfortable stay away from the everyday rush. Please contact us for exact location and directions.",
    },
    {
      question: "What kind of rooms are available?",
      answer:
        "King 11 Resort offers comfortable and well-appointed rooms designed for both short stays and extended visits. Room options may vary based on availability.",
    },
    {
      question: "Can I book a room directly?",
      answer:
        "Yes, you can contact our team directly to check room availability, pricing and make a reservation.",
    },
    {
      question: "Is King 11 suitable for families and groups?",
      answer:
        "Yes, King 11 Resort is suitable for families, friends and groups looking for a comfortable and relaxing stay.",
    },
    {
      question: "How can I plan an event or special stay?",
      answer:
        "For events, celebrations or special arrangements, please contact our team. We will be happy to discuss your requirements and help plan your stay.",
    },
    {
      question: "Does the resort have dining facilities?",
      answer:
        "Yes, guests can enjoy dining options at the resort. Please contact us for the current menu, timings and availability.",
    },
  ];

  const handleToggle = (index) => {
    // If same FAQ is clicked, close it.
    // Otherwise, open the new FAQ and automatically
    // close the previously opened FAQ.
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">

        {/* FAQ HEADER */}
        <div className="faq-header">

          <span className="faq-eyebrow">
            <span className="faq-eyebrow-line"></span>
            GOOD TO KNOW
          </span>

          <h2 className="faq-heading">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="faq-subheading">
            Contact us if you have any questions about your stay,
            rooms, dining, events or celebrations at King 11 Resort.
          </p>

        </div>


        {/* FAQ GRID */}
        <div className="faq-grid">

          {faqData.map((faq, index) => {

            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item ${
                  isOpen ? "faq-item-active" : ""
                }`}
                key={index}
              >

                {/* QUESTION */}
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >

                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS ICON */}
                  <span
                    className={`faq-icon ${
                      isOpen ? "faq-icon-open" : ""
                    }`}
                  >
                    <span className="faq-icon-horizontal"></span>
                    <span className="faq-icon-vertical"></span>
                  </span>

                </button>


                {/* ANSWER */}
                <div
                  className={`faq-answer-wrapper ${
                    isOpen ? "faq-answer-open" : ""
                  }`}
                >
                  <div className="faq-answer">

                    <p>{faq.answer}</p>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FAQ;
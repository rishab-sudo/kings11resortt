import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomPreference: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts correcting field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s'-]+$/;
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;

    /* First Name */
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (
      formData.firstName.trim().length < 2
    ) {
      newErrors.firstName =
        "First name must contain at least 2 characters.";
    } else if (
      !nameRegex.test(formData.firstName.trim())
    ) {
      newErrors.firstName =
        "Please enter a valid first name.";
    }

    /* Last Name */
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (
      formData.lastName.trim().length < 2
    ) {
      newErrors.lastName =
        "Last name must contain at least 2 characters.";
    } else if (
      !nameRegex.test(formData.lastName.trim())
    ) {
      newErrors.lastName =
        "Please enter a valid last name.";
    }

    /* Email */
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !emailRegex.test(formData.email.trim())
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    /* Phone */
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (
      !phoneRegex.test(formData.phone.trim())
    ) {
      newErrors.phone =
        "Please enter a valid phone number.";
    }

    /* Room */
    if (!formData.roomPreference) {
      newErrors.roomPreference =
        "Please select a room preference.";
    }

    /* Message */
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      Swal.fire({
        icon: "warning",
        title: "Please check your details",
        text: "Please fill in all required fields correctly.",
        confirmButtonColor: "#c7a46a",
        background: "#1a2924",
        color: "#f4efe5",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      /*
        Replace this section with your API/PHP endpoint
        when backend integration is ready.

        Example:

        const response = await fetch(
          "https://yourdomain.com/send-contact.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      */

      // Temporary submission simulation
      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      Swal.fire({
        icon: "success",
        title: "Enquiry Sent Successfully",
        text: "Thank you for contacting King 11 Resort. Our team will get back to you shortly.",
        confirmButtonColor: "#c7a46a",
        background: "#1a2924",
        color: "#f4efe5",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        roomPreference: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "We could not submit your enquiry. Please try again later.",
        confirmButtonColor: "#c7a46a",
        background: "#1a2924",
        color: "#f4efe5",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-wrapper">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}
        <div className="contact-form-content">

          <div className="contact-form-eyebrow"> 
            <span className="contact-form-eyebrow-line eyebrow-text"></span>
            GET IN TOUCH
            <span className="contact-form-eyebrow-line"></span>
          </div>

          <h2 className="contact-form-heading section-heading">
            Plan Your Stay
          </h2>

          <p className="contact-form-description section-subHeading">
            Ready to escape? Reach out to our team and
            we'll curate a bespoke experience tailored to
            your perfect retreat.
          </p>


          {/* CONTACT DETAILS */}
          <div className="contact-details">

            {/* LOCATION */}
            <div className="contact-detail-item">

              <div className="contact-detail-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-detail-content">

                <span className="contact-detail-label">
                  LOCATION
                </span>

                <p>
                  King 11 Resort, Lakeside Hills,
                  <br />
                  Nature Reserve District
                </p>

              </div>

            </div>


            {/* PHONE */}
            <div className="contact-detail-item">

              <div className="contact-detail-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-detail-content">

                <span className="contact-detail-label">
                  RESERVATIONS
                </span>

                <a href="tel:+1800546411">
                  +1 (800) KING-II
                </a>

              </div>

            </div>


            {/* EMAIL */}
            <div className="contact-detail-item">

              <div className="contact-detail-icon">
                <FaEnvelope />
              </div>

              <div className="contact-detail-content">

                <span className="contact-detail-label">
                  EMAIL
                </span>

                <a href="mailto:reservations@king11resort.com">
                  reservations@king11resort.com
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            RIGHT FORM
        ===================================== */}
        <div className="contact-form-container">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* FIRST + LAST NAME */}
            <div className="contact-form-row">

              {/* FIRST NAME */}
              <div className="contact-form-field">

                <label htmlFor="firstName">
                  FIRST NAME
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  autoComplete="given-name"
                />

                {errors.firstName && (
                  <span className="contact-form-error">
                    {errors.firstName}
                  </span>
                )}

              </div>


              {/* LAST NAME */}
              <div className="contact-form-field">

                <label htmlFor="lastName">
                  LAST NAME
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  autoComplete="family-name"
                />

                {errors.lastName && (
                  <span className="contact-form-error">
                    {errors.lastName}
                  </span>
                )}

              </div>

            </div>


            {/* EMAIL + PHONE */}
            <div className="contact-form-row">

              {/* EMAIL */}
              <div className="contact-form-field">

                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@email.com"
                  autoComplete="email"
                />

                {errors.email && (
                  <span className="contact-form-error">
                    {errors.email}
                  </span>
                )}

              </div>


              {/* PHONE */}
              <div className="contact-form-field">

                <label htmlFor="phone">
                  PHONE
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (000) 000-0000"
                  autoComplete="tel"
                />

                {errors.phone && (
                  <span className="contact-form-error">
                    {errors.phone}
                  </span>
                )}

              </div>

            </div>


            {/* ROOM PREFERENCE */}
            <div className="contact-form-field">

              <label htmlFor="roomPreference">
                ROOM PREFERENCE
              </label>

              <select
                id="roomPreference"
                name="roomPreference"
                value={formData.roomPreference}
                onChange={handleChange}
              >
                <option value="">
                  Select a room type
                </option>

                <option value="deluxe-room">
                  Deluxe Room
                </option>

                <option value="premium-room">
                  Premium Room
                </option>

                <option value="suite">
                  Luxury Suite
                </option>

                <option value="family-room">
                  Family Room
                </option>

              </select>

              {errors.roomPreference && (
                <span className="contact-form-error">
                  {errors.roomPreference}
                </span>
              )}

            </div>


            {/* MESSAGE */}
            <div className="contact-form-field">

              <label htmlFor="message">
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your ideal stay..."
                rows="5"
              />

              {errors.message && (
                <span className="contact-form-error">
                  {errors.message}
                </span>
              )}

            </div>


            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className={`contact-form-submit ${
                isSubmitting
                  ? "contact-form-submit-loading"
                  : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "SENDING..."
                : "SEND ENQUIRY"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
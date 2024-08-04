import React from "react";
import Navbar from "../components/Navbar";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;

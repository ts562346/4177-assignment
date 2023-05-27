import React from 'react';
import FaqPage from '../components/faq-page';
import Navbar from '../components/nav-bar';
import ContactForm from '../components/contact/contact-form';
import Footer from '../components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function FAQ() {
    return (
        <div>
            <ChakraProvider>
                <Navbar />
            </ChakraProvider>
            <FaqPage />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default FAQ;
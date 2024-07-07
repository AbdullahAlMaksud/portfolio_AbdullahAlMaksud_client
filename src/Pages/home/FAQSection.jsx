import React from 'react';
import { Card, Typography, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Subtitle from '../../components/Subtitle';

const FAQSection = () => {
    const [open, setOpen] = React.useState(null);

    const handleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            question: "What is a front-end developer?",
            answer: "A front-end developer is responsible for implementing visual elements that users see and interact with in a web application. They work with HTML, CSS, JavaScript, and frameworks like React."
        },
        {
            question: "What are the main responsibilities of a front-end developer?",
            answer: "The main responsibilities include building user interfaces, ensuring responsive design, optimizing performance, and collaborating with designers and back-end developers."
        },
        {
            question: "What is the difference between HTML and HTML5?",
            answer: "HTML5 is the latest version of HTML and includes new features like semantic elements, improved support for multimedia, and new APIs for better web application development."
        },
        {
            question: "What is CSS Flexbox?",
            answer: "CSS Flexbox is a layout model that allows for the arrangement of elements within a container, making it easier to design flexible and responsive layout structures."
        },
        {
            question: "What is the DOM?",
            answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."
        },
        {
            question: "What is the purpose of JavaScript in web development?",
            answer: "JavaScript is used to create dynamic and interactive user experiences on the web. It allows developers to manipulate the DOM, handle events, and make asynchronous requests."
        },
        {
            question: "What are JavaScript frameworks and libraries?",
            answer: "JavaScript frameworks (like Angular, Vue) and libraries (like React, jQuery) are collections of pre-written JavaScript code that help developers build applications more efficiently."
        },
        {
            question: "What is responsive web design?",
            answer: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes using CSS media queries."
        },
        {
            question: "What are CSS preprocessors?",
            answer: "CSS preprocessors (like Sass, Less) are scripting languages that extend CSS and compile into regular CSS, allowing for variables, nesting, and more maintainable stylesheets."
        },
        {
            question: "What is the role of a front-end build tool?",
            answer: "Front-end build tools (like Webpack, Gulp) automate tasks such as bundling JavaScript files, preprocessing CSS, and optimizing assets for better performance."
        },
    ];

    return (
        <Card className="p-6 pt-0 mt-6 border-t border-black dark:border-slate-300 bg-transparent dark:bg-slate-950 rounded-md shadow mb-10">

            <Subtitle title={'Frequently Asked Questions (FAQ)'} />

            {faqs.map((faq, index) => (
                <Accordion key={index} open={open === index} icon={<></>}>
                    <AccordionHeader onClick={() => handleOpen(index)} className="flex justify-between items-center text-base font-monospce dark:text-white dark:border-b-slate-700">
                        <span>{faq.question}</span>
                        <span className="ml-auto">{open === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </AccordionHeader>
                    <AccordionBody className="text-gray-900  font-monospce dark:text-slate-100">
                        {faq.answer}
                    </AccordionBody>
                </Accordion>
            ))
            }
        </Card >
    );
};

export default FAQSection;

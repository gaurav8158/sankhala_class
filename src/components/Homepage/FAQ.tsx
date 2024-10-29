"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import HeadingAll from "../ui/HeadingAll";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What courses does Sankhala Classes offer?",
    answer:
      "Sankhala Classes offers coaching for NEET, JEE (Main & Advanced), and other competitive exams, including foundation courses for 9th and 10th grade students.",
  },
  {
    question: "What is the teaching methodology at Sankhala Classes?",
    answer:
      "Our teaching methodology focuses on conceptual clarity, regular assessments, and personalized mentoring, ensuring each student gets the attention they need to excel.",
  },
  {
    question: "Are there any scholarship programs available?",
    answer:
      "Yes, we offer scholarship programs based on merit, as well as entrance tests that provide discounts for deserving students based on their performance.",
  },
  {
    question: "What study materials are provided to students?",
    answer:
      "Students at Sankhala Classes receive comprehensive study materials, including subject-specific notes, question banks, and practice papers designed by experts.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Classes are conducted both in physical classrooms and online, allowing students to choose the mode of learning that suits them best.",
  },
  {
    question: "What is the student-teacher ratio at Sankhala Classes?",
    answer:
      "We maintain a low student-teacher ratio to ensure personalized attention and better interaction between students and teachers.",
  },
  {
    question: "How often are tests conducted?",
    answer:
      "Regular tests are conducted weekly and monthly to assess student progress and help them practice under exam-like conditions.",
  },
  {
    question: "Does Sankhala Classes provide doubt-solving sessions?",
    answer:
      "Yes, we conduct regular doubt-solving sessions where students can clarify their queries and strengthen their understanding of key concepts.",
  },
  {
    question: "What is the fee structure for the courses?",
    answer:
      "The fee structure varies depending on the course. Please contact us directly or visit our website for detailed information on the fees.",
  },
  {
    question: "How can I enroll in a course at Sankhala Classes?",
    answer:
      "You can enroll by visiting our center or through our website. We also offer an entrance test for students seeking scholarships.",
  },
];

export default function FAQ() {
  return (
    <div className="z-10 relative ">
      <div className="mx-auto max-w-[1100px] px-4 py-14 mb-20 lg:mb-40">
        <HeadingAll head="Frequently Asked Questions" />

        <div className="space-y-4">
          <Accordion type="single" defaultValue="0" collapsible>
            {faqs.map((faq, index) => (
              <div key={index}>
                <AccordionItem value={`${index}`} className="py-2 px-4">
                  <AccordionTrigger className="font-medium text-start text-xl sm:text-2xl">
                    {" "}
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-normal text-gray-500 text-base sm:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                {/* </Accordion> */}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

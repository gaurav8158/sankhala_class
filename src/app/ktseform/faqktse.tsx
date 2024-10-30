"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import HeadingAll from "@/components/ui/HeadingAll";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who is eligible to appear for KTSE?",
    answer:
      "Students from Grades 6 to 12 studying in schools within Karnal district or nearby regions are eligible for KTSE. Each grade level has specific examination content tailored to their curriculum.",
  },
  {
    question: "What is the exam pattern and syllabus for KTSE?",
    answer:
      "The KTSE exam usually consists of multiple-choice questions covering subjects like Mathematics, Science, and Reasoning. The syllabus is largely based on the CBSE curriculum, with questions set to test logical reasoning, problem-solving, and understanding of core subjects.",
  },
  {
    question: "How can students register for the KTSE?",
    answer:
      "Registration for KTSE can typically be done through the official website. Students need to fill out an application form, submit required documents, and pay the registration fee (if applicable) to complete the registration.",
  },
  {
    question: "What are the benefits of participating in KTSE?",
    answer:
      " Apart from the scholarship opportunities and prizes for top performers, KTSE provides students with an early experience in competitive exams, helping them develop skills in time management and problem-solving, which are essential for future academic and entrance exams.",
  },
];

export default function KtseFAQ() {
  return (
    <div className="z-10 relative bg-gray-50 ">
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

'use client';

import 'swiper/css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@public/icons';
import { FAQS } from '@/constants/faq.const';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Frequently Asked Questions
          </h2>
          <p className="font-18 mx-auto my-4 mb-4 max-w-[1000px] font-primary font-normal md:mb-12">
            Here&#39;s a list of FAQs that will help you to know more about MindInventory.
          </p>
        </div>
        {/* List các FAQItem */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.quest}
              answer={faq.ans}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div
      className={`overflow-hidden rounded-[16px] border transition-all duration-300 ${isOpen && 'bg-[#f0f0f0]'}`}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left transition-colors"
        onClick={onClick}
      >
        <h4 className="font-20 font-medium">{question}</h4>

        <X className={`icon ml-2 flex-shrink-0 rotate-45 text-sm ${isOpen && 'rotate-0'}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-[#f0f0f0] p-5 pt-0" dangerouslySetInnerHTML={{ __html: answer }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

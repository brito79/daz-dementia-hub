import React, { useState } from 'react';

interface QuestionAnswer {
    question: string;
    answer: string;
}

const faqData: QuestionAnswer[] = [
    {
        question: "What is dementia?",
        answer: "Dementia is a general term for a decline in mental ability severe enough to interfere with daily life."
    },
    {
        question: "What are the symptoms of dementia?",
        answer: "Common symptoms include memory loss, difficulty communicating, and changes in mood or behavior."
    },
    {
        question: "How can I support someone with dementia?",
        answer: "You can support them by being patient, listening to their needs, and helping them maintain a routine."
    }
];

const FaQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-sm"
                    >
                        <h3
                            onClick={() => toggleQuestion(index)}
                            className="cursor-pointer p-4 bg-gray-100 hover:bg-gray-200 text-lg font-medium text-gray-800 flex justify-between items-center"
                        >
                            {item.question}
                            <span className="text-gray-500">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </h3>
                        {activeIndex === index && (
                            <div className="p-4 bg-white text-gray-700">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaQ;
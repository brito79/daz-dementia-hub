
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, X, MessageSquare, SendHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([
    { type: 'bot', content: "Hello! I'm DAZ Assistant. I can help you learn about dementia. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput("");

    // Simulate bot response (replace with actual AI integration later)
    setTimeout(() => {
      const botResponse = getDementiaInfo(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);
  };

  const getDementiaInfo = (query: string) => {
    const responses = {
      default: "I can provide information about dementia symptoms, causes, and care. What specific aspect would you like to know about?",
      symptoms: "Common dementia symptoms include memory loss, difficulty communicating, and changes in mood or behavior.",
      causes: "Dementia can be caused by various factors including Alzheimer's disease, vascular problems, and other neurological conditions.",
      care: "Caring for someone with dementia involves creating a safe environment, maintaining routines, and providing emotional support.",
    };

    query = query.toLowerCase();
    if (query.includes('symptom')) return responses.symptoms;
    if (query.includes('cause')) return responses.causes;
    if (query.includes('care')) return responses.care;
    return responses.default;
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-daz-blue hover:bg-daz-blue/90 shadow-lg z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-[350px] bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4 border-b flex justify-between items-center bg-daz-blue text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-medium">DAZ Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-daz-blue/90 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-daz-green text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about dementia..."
                  className="flex-1"
                />
                <Button onClick={handleSend} className="bg-daz-green hover:bg-daz-green/90">
                  <SendHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

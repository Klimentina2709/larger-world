import { useState, ReactNode } from "react";

interface FAQItem {
  title: string;
  text: string;
}

interface AccordionProps {
  data: FAQItem[];
}

interface AccordionItemProps {
  num: number;
  title: string;
  currOpen: number | null;
  onOpen: (num: number | null) => void;
  children: ReactNode;
}

const faqs: FAQItem[] = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }: AccordionProps) {
  const [currOpen, setIsOpen] = useState<number | null>(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setIsOpen}
          key={item.title}
          num={index}
          title={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  currOpen,
  onOpen,
  children,
}: AccordionItemProps) {
  const isOpen = num === currOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
      <p className="number"> {num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

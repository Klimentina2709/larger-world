import React, { useState, ReactNode } from "react";
import styles from "./Accordion.module.css"; // Import the CSS module

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

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [currOpen, setIsOpen] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
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
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  num,
  title,
  currOpen,
  onOpen,
  children,
}) => {
  const isOpen = num === currOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{num <= 9 ? `${num + 1}` : num + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>
        {isOpen ? (
          <i className="fa-solid fa-circle-arrow-up"></i>
        ) : (
          <i className="fa-solid fa-circle-arrow-down"></i>
        )}
      </p>
      {isOpen && <div className={styles["content-box"]}>{children}</div>}
    </div>
  );
};

const faqs: FAQItem[] = [
  {
    title: "What is Larger.world's unlearning platform?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How can I benefit from using Larger.world's unlearning platform?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "What sets Larger.world's unlearning platform apart from others?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title:
      "Are there any success stories from users of Larger.world's unlearning platform?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "How can I get started with Larger.world's unlearning platform?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

export default App;

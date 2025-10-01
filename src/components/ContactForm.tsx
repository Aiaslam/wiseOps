import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We will contact you soon.`);
    setName(""); setEmail(""); setMessage(""); onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Us">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="border px-3 py-2 rounded"/>
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border px-3 py-2 rounded"/>
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required className="border px-3 py-2 rounded"/>
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
};

export default ContactForm;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+251 975 80 5980",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdelazizebrahim5980@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Addis Ababa, Ethiopia",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let’s work together</h3>
              <p className="text-white/60">
                Feel free to reach out by filling in the form below. Let’s build
                something great!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Lastname"
                  required
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, service: value }))
                }>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Service</SelectLabel>
                      <SelectItem value="Front End">
                        Front End Web Dev.t
                      </SelectItem>
                      <SelectItem value="Back End">Back End Dev.t</SelectItem>
                      <SelectItem value="Content Creaetion">
                        Content Creation
                      </SelectItem>
                      <SelectItem value="API Int.">API Integration</SelectItem>
                      <SelectItem value="API Testing">API Testing</SelectItem>
                      <SelectItem value="Others">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <Button type="submit" size="md" className="max-w-40 h-10">
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

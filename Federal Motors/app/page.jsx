"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Car as CarIcon, Facebook, Instagram, MessageCircle } from "lucide-react";
import { cars } from "@/data/carsData";
import emailjs from "emailjs-com";
import Image from "next/image";

export default function FederalMotors() {
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER
      )
      .then(
        () => {
          setFormStatus("success");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setFormStatus("error");
          setLoading(false);
        }
      );
  };

  const brands = ["All", ...new Set(cars.map((car) => car.brand))];
  const filteredCars = filter === "All" ? cars : cars.filter((car) => car.brand === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-red-500"
        >
          Federal Motors
        </motion.h1>
        <p className="text-lg text-gray-300 mb-8">Premium Car Showroom – PWD Rawalpindi</p>
        <Button
          aria-label="Explore Cars"
          className="bg-red-600 hover:bg-red-700 rounded-2xl text-lg px-8 py-3"
          onClick={() => document.getElementById("cars-section").scrollIntoView({ behavior: "smooth" })}
        >
          Explore Cars
        </Button>
      </section>

      {/* Cars Grid */}
      <section id="cars-section" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>

        {/* Brand Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {brands.map((brand) => (
            <Button
              key={brand}
              onClick={() => setFilter(brand)}
              className={`rounded-xl px-4 py-2 ${filter === brand ? "bg-red-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-200"}`}
            >
              {brand}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredCars.map((car, i) => (
            <motion.div
              key={`${car.name}-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg bg-gray-800 border border-gray-700">
                <div className="w-full h-56 relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    priority={i < 3}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-300 mb-4">{car.price}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 rounded-xl">Book a Test Drive</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Federal Motors</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Federal Motors, located in PWD Rawalpindi, is your trusted destination for locally assembled and imported vehicles in Pakistan.
            We specialize in Toyota, Honda, Suzuki, Changan, Haval, MG, Mercedes, BMW, and more. With competitive prices and premium service,
            we ensure every customer drives away satisfied.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://facebook.com/federalmotors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/federalmotors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4 text-gray-300">Visit our showroom or send us a message.</p>
            <div className="space-y-4 text-gray-200">
              <p className="flex items-center gap-3"><Phone /> +92 330 1816337</p>
              <p className="flex items-center gap-3"><Mail /> muhammadabbasagha@gmail.com</p>
              <p className="flex items-center gap-3"><MapPin /> PWD, Rawalpindi</p>
            </div>
            <iframe
              title="Map to PWD Rawalpindi"
              className="mt-6 rounded-xl w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0774182745073!2d73.0587!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9596fd07b2a3%3A0xfcb787e73a89!2sPWD%20Society%2C%20Islamabad!5e0!3m2!1sen!2s!4v1693232048399"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <form onSubmit={sendEmail} className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900" required />
            <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900" required />
            <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 rounded-xl border border-gray-600 bg-gray-900" required />
            <Button disabled={loading} className="w-full bg-red-600 hover:bg-red-700 rounded-xl">
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {formStatus === "success" && <p className="text-green-400 mt-2">✅ Thank you! Your message has been sent.</p>}
            {formStatus === "error" && <p className="text-red-400 mt-2">❌ Oops! Something went wrong. Try again.</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-6">
        <p className="flex justify-center items-center gap-2">
          <CarIcon className="w-5 h-5" /> © 2025 Federal Motors, Rawalpindi. All rights reserved.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923301816337"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}

import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Yash Rathore",
      location: "Jamshedpur",
      image: assets.testimonial_image_1,
      testimonial:
        "The booking process was smooth, and the car was in excellent condition. Made my trip stress-free!",
    },
    {
      name: "Mayur Malviya",
      location: "Harda",
      image: assets.testimonial_image_2,
      testimonial:
        "I rented a sedan for the weekend and it felt just like new. Very clean, comfortable, and reliable!”",
    },
    {
      name: "Saransh Pare",
      location: "Gawalior",
      image: assets.testimonial_image_3,
      testimonial:
        "Great experience! The pickup and return were hassle-free, and the owner was very polite.",
    },
    {
      name: "Gautam Malviya",
      location: "Indore",
      image: assets.testimonial_image_4,
      testimonial:
        "The car drove perfectly throughout my journey. Affordable pricing with top-notch service!",
    },
    {
      name: "Priyanshu Patnare",
      location: "Indore",
      image: assets.testimonial_image_5,
      testimonial:
        "Highly recommend! The car was well-maintained and the whole rental process was quick and easy.",
    },

  ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customer Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay:index * 0.2, ease:'easeOut' }}
            viewport={{once:true, amount:0.3}}
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

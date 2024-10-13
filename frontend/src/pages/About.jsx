import React from "react";
import AboutUs from "../assets/aboutUs.png";

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] object-cover"
          src={AboutUs}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Our journey began in 2012 when a group of dedicated farmers set out
            to revolutionize agriculture through sustainable practices, expert
            guidance, and innovative solutions. Today, we stand at the forefront
            of sustainable agriculture, encompassing crop and livestock
            production, aquaculture, fisheries, and forestry for both food and
            non-food purposes. Our commitment to excellence is evident in our
            numbers: we perform over 200,000 quality tests and analytics,
            develop more than 100,000 hybrids, manage 6,80+ farm productions,
            and engage with 420+ US farmers for production.
          </p>
          <p>
            At the heart of our mission is the desire to nourish your health and
            well-being with the finest, locally sourced vegetables. We offer a
            unique farm-to-table experience, inviting you to visit our farms,
            pick your own produce, and savor the unparalleled freshness of our
            harvest. Our diverse range of crops showcases the fertile abundance
            of our land, while our eco-friendly farming practices prioritize
            soil health and environmental sustainability, ensuring a secure
            future for generations to come.
          </p>
        </div>
      </div>
      <div className="mt-16 bg-gray-100 py-10 px-4 md:px-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Values
        </h2>
        <p className="text-sm text-gray-600 max-w-4xl mx-auto">
          We are driven by a passion for innovation, ethical practices, and
          environmental stewardship. Our values are rooted in creating
          climate-resilient futures for farmers, protecting and improving their
          livelihoods through advanced technology and insurance solutions. We
          believe in the power of education, running campaigns and events to
          spread awareness about sustainable agriculture. Our dedication to
          excellence and innovation shapes the future of agriculture, one year
          at a time, as we strive to connect with our community through social
          media and encourage support for our cause.
        </p>
      </div>
    </div>
  );
};

export default About;

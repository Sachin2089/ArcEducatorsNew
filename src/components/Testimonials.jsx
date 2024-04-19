import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import "../style/index.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      designation: "Astrophysics Enthusiast",
      quote:
        "Attending the stargazing event hosted by this team was an absolute delight! The organizers' passion for astronomy was infectious, and their knowledge truly enhanced the experience. Highly recommended!"
    },
    {
      name: "Michael Chen",
      designation: "Amateur Astronomer",
      quote:
        "I've been to numerous stargazing events, but none quite like this! The team's expertise and professionalism made for a memorable evening under the stars. Can't wait for the next one!"
    },
    {
      name: "Emily Rodriguez",
      designation: "Science Teacher",
      quote:
        "As a science educator, I'm always on the lookout for engaging experiences for my students. The stargazing event organized by this team exceeded all expectations! It was informative, interactive, and incredibly fun. Kudos to the team!"
    },
    {
      name: "David Thompson",
      designation: "Nature Photographer",
      quote:
        "Capturing the beauty of the night sky is a passion of mine, and this team's stargazing event provided the perfect backdrop. Their attention to detail and commitment to sharing their knowledge made for an unforgettable photography experience."
    },
    {
      name: "Jessica Patel",
      designation: "Astronomy Student",
      quote:
        "Attending the stargazing event hosted by this team was a dream come true for a budding astronomer like myself. The team's enthusiasm and expertise were inspiring, and I left with a deeper appreciation for the cosmos."
    },
    {
      name: "Robert Lee",
      designation: "Outdoor Enthusiast",
      quote:
        "I've always been fascinated by the stars, so when I heard about this stargazing event, I knew I had to attend. The team's passion for astronomy shone through in every aspect of the event, from the presentations to the telescope observations. I can't wait to join them again!"
    },
    {
      name: "Maria Garcia",
      designation: "Parent",
      quote:
        "Taking my children to the stargazing event organized by this team was a fantastic decision! Not only did they learn a lot about the night sky, but they also had a blast participating in the activities. Thank you to the team for creating such a memorable experience!"
    },
    {
      name: "Daniel Kim",
      designation: "Software Engineer",
      quote:
        "As a busy professional, it's not often that I get to indulge my passion for astronomy. However, attending the stargazing event hosted by this team allowed me to do just that. The organizers' knowledge and enthusiasm rekindled my love for the stars. Can't recommend it enough!"
    },
    {
      name: "Sarah Johnson",
      designation: "Astrophysics Enthusiast",
      quote:
        "Attending the stargazing event hosted by this team was an absolute delight! The organizers' passion for astronomy was infectious, and their knowledge truly enhanced the experience. Highly recommended!"
    },
    {
      name: "Michael Chen",
      designation: "Amateur Astronomer",
      quote:
        "I've been to numerous stargazing events, but none quite like this! The team's expertise and professionalism made for a memorable evening under the stars. Can't wait for the next one!"
    },
    {
      name: "Emily Rodriguez",
      designation: "Science Teacher",
      quote:
        "As a science educator, I'm always on the lookout for engaging experiences for my students. The stargazing event organized by this team exceeded all expectations! It was informative, interactive, and incredibly fun. Kudos to the team!"
    },
    {
      name: "David Thompson",
      designation: "Nature Photographer",
      quote:
        "Capturing the beauty of the night sky is a passion of mine, and this team's stargazing event provided the perfect backdrop. Their attention to detail and commitment to sharing their knowledge made for an unforgettable photography experience."
    },
    {
      name: "Jessica Patel",
      designation: "Astronomy Student",
      quote:
        "Attending the stargazing event hosted by this team was a dream come true for a budding astronomer like myself. The team's enthusiasm and expertise were inspiring, and I left with a deeper appreciation for the cosmos."
    },
    {
      name: "Robert Lee",
      designation: "Outdoor Enthusiast",
      quote:
        "I've always been fascinated by the stars, so when I heard about this stargazing event, I knew I had to attend. The team's passion for astronomy shone through in every aspect of the event, from the presentations to the telescope observations. I can't wait to join them again!"
    },
    {
      name: "Maria Garcia",
      designation: "Parent",
      quote:
        "Taking my children to the stargazing event organized by this team was a fantastic decision! Not only did they learn a lot about the night sky, but they also had a blast participating in the activities. Thank you to the team for creating such a memorable experience!"
    },
    {
      name: "Daniel Kim",
      designation: "Software Engineer",
      quote:
        "As a busy professional, it's not often that I get to indulge my passion for astronomy. However, attending the stargazing event hosted by this team allowed me to do just that. The organizers' knowledge and enthusiasm rekindled my love for the stars. Can't recommend it enough!"
    }
  ];

  return (
    <div className="overflow-hidden h-[350px] w-[80vw]  flex items-center rounded-sm">
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card flex flex-col items-center justify-start h-[300px] w-[1020px] p-6 bg-orange-400 rounded-[10px]"
          >
            <div className="h-[230px] w-full flex flex-col items-start justify-start text-2xl Apercu-Medium p-4">
              <ImQuotesLeft className="bg-[cecec5] text-3xl mb-4" />
              <p className="Apercu-Light">{testimonial.quote}</p>
            </div>
            <div className="h-[70px] w-full text-2xl flex items-center justify-start">
              <div className="bg-blue-700 rounded-[50%] h-[45px] w-[45px] mx-4"></div>
              <h1 className="Apercu-Bold">
                {testimonial.name},
                <span className="Apercu-Regular"> {testimonial.designation}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

import React from "react";

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vansh Mehra",
      title: "BCA Student, Christ University",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "TEDx completely changed how I see opportunities. I left feeling more focused and full of ideas I actually want to pursue.",
      stars: 5,
    },
    {
      id: 2,
      name: "Ananya Reddy",
      title: "Engineering Student, VIT Vellore",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "I went in looking for inspiration, and came out with clarity. TEDx made me believe in my potential again.",
      stars: 4,
    },
    {
      id: 3,
      name: "Rohan Gupta",
      title: "MBA Aspirant, Delhi University",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      quote:
        "The speakers weren’t just inspiring — they were relatable. It felt like they were speaking *to* us, not *at* us.",
      stars: 5,
    },
    {
      id: 4,
      name: "Sneha Patil",
      title: "Design Student, NIFT Mumbai",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      quote:
        "Every session sparked a new idea in my mind. It wasn’t just talks — it was a turning point.",
      stars: 4,
    },
    {
      id: 5,
      name: "Aarav Shah",
      title: "Computer Science, IIT Bombay",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      quote:
        "TEDx gave me a glimpse of where innovation meets action. It’s an event that every student should experience.",
      stars: 5,
    },
    {
      id: 6,
      name: "Ishita Roy",
      title: "Psychology Major, Presidency University",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      quote:
        "From mental health to tech to storytelling — the diversity of ideas blew me away. I felt seen.",
      stars: 5,
    },
  ];

  const renderStars = (count) => (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
  return (
    <div className="mx-auto p-4 w-full mt-20 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            className={`gradient rounded-xl shadow-sm flex flex-col justify-center  items-center px-8 py-8 h-[70vh] ${
              idx === 1 || idx === 4 ? "-mt-10" : ""
            }`}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow mb-4"
            />
            <div className="font-bold text-lg text-white mb-0.5">{t.name}</div>
            <div className="text-sm text-gray-200 mb-2">{t.title}</div>
            {renderStars(t.stars)}
            <div className="flex flex-col items-center w-full">
              <svg
                className="w-8 h-8 text-blue-100 mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 8.93A5.5 5.5 0 0 1 12 3.5V2A7 7 0 0 0 5 9c0 2.21 1.79 4 4 4v2c-3.31 0-6-2.69-6-6a7 7 0 0 1 7-7v1.5a5.5 5.5 0 0 0-4.83 7.43zM17.17 8.93A5.5 5.5 0 0 1 22 3.5V2a7 7 0 0 0-7 7c0 2.21 1.79 4 4 4v2c-3.31 0-6-2.69-6-6a7 7 0 0 1 7-7v1.5a5.5 5.5 0 0 0-4.83 7.43z" />
              </svg>
              <blockquote className="text-white text-base text-center leading-relaxed mb-2">
                {t.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;

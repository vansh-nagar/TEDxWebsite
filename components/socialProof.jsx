import React from "react";

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: "Daksh Gupta",
      title: "Licensee",
      image:
        "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763051/ez0lfms6bmpefi9ioj1v.jpg",
      quote:
        "TEDx completely changed how I see opportunities. I left feeling more focused and full of ideas I actually want to pursue.",
      stars: 5,
    },
    {
      id: 2,
      name: "Apoorva Singh",
      title: "Licensee",
      image:
        "http://res.cloudinary.com/dz12pywzs/image/upload/v1750930983/wv2jitiwacbikqentcqz.jpg",
      quote:
        "I went in looking for inspiration, and came out with clarity. TEDx made me believe in my potential again.",
      stars: 4,
    },
    {
      id: 3,
      name: "Chhavi Sharma",
      title: "Curation Lead",
      image:
        "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763924/bkbd6ac2mnh0qrug0ci1.jpg",
      quote:
        "The speakers weren’t just inspiring — they were relatable. It felt like they were speaking *to* us, not *at* us.",
      stars: 5,
    },
    {
      id: 4,
      name: "Vedanshi Goyal",
      title: "Curation Co-Lead",
      image:
        "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763939/sb8su4alppleyw7tztep.jpg",
      quote:
        "Every session sparked a new idea in my mind. It wasn’t just talks — it was a turning point.",
      stars: 4,
    },
    {
      id: 5,
      name: "Manasvi Singh",
      title: "Tech Lead",
      image:
        "http://res.cloudinary.com/dz12pywzs/image/upload/v1750953942/burcqkys67zajyoebrqe.jpg",
      quote:
        "TEDx gave me a glimpse of where innovation meets action. It’s an event that every student should experience.",
      stars: 5,
    },
    {
      id: 6,
      name: "Vansh Nagar",
      title: "Tech Co-Lead",
      image:
        "http://res.cloudinary.com/dz12pywzs/image/upload/v1750900854/fbxhdsrrtzqybjfu2a07.jpg",
      quote:
        "From mental health to tech to storytelling — the diversity of ideas blew me away. I felt seen.",
      stars: 5,
    },
  ];

  const renderStars = (count) => <div className="flex mb-2"></div>;
  // Part 1: First half of testimonials
  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <div className="mx-auto p-4 w-full mt-20 mb-20 ">
      {/* First half */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-8">
        {firstHalf.map((t, idx) => (
          <div
            key={t.id}
            className={`gradient rounded-xl shadow-sm flex flex-col justify-center  items-center px-20 h-[60vh] py-14 hover:scale-105 transition-all duration-150 `}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover  shadow mb-4"
            />
            <div className="font-medium underline decoration-wavy decoration-2 decoration-red-600 text-lg text-white mb-0.5">
              ✦ {t.name} ✦
            </div>
            <div className="font-medium text-sm text-gray-200 mb-2">
              {t.title}
            </div>
            {renderStars(t.stars)}
            <div className="flex flex-col items-center w-full">
              <blockquote className="font-light text-white text-base text-center leading-relaxed mb-2">
                {t.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-3xl max-sm:text-xl text-white border-t border-b border-double py-4">
        ꕤ <span className="underline">Inspired</span>? Join us for the next TEDx
        event and experience the{" "}
        <span className="bg-red-500 max-sm:py-0.5 max-sm:px-2 px-4 py-2 rounded-md underline decoration-black italic">
          magic
        </span>{" "}
        yourself! ꕤ
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-8">
        {secondHalf.map((t, idx) => (
          <div
            key={t.id}
            className={`gradient rounded-xl shadow-sm flex flex-col justify-center  items-center px-20 h-[60vh] py-14 hover:scale-105 transition-all duration-150 `}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover  shadow mb-4"
            />
            <div className=" text-lg text-white mb-0.5 font-medium underline decoration-wavy decoration-2 decoration-red-600 ">
              {t.name}
            </div>
            <div className="text-sm text-gray-200 mb-2">{t.title}</div>
            {renderStars(t.stars)}
            <div className="flex flex-col items-center w-full">
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

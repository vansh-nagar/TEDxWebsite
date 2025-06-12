import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className=" mx-auto w-full ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            i === 3 || i === 6
              ? "md:col-span-2  hover:shadow-white bg-[#242426] "
              : " hover:shadow-white hover:scale-[1.02]  bg-[#242426] "
          }
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ color }) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl `}
    style={{
      background: color,
    }}
  ></div>
);
const items = [
  {
    title: <span className="text-white">Ideas Worth Spreading</span>,
    description: (
      <span className="text-white">
        Discover the mission of TEDx: sharing powerful ideas that inspire and
        ignite change.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconClipboardCopy className="h-4 w-4" color="#f0f0f0" />,
  },
  {
    title: <span className="text-white">Local, Independent, Global</span>,
    description: (
      <span className="text-white">
        Learn how TEDx events bring communities together while connecting to a
        worldwide movement.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconFileBroken className="h-4 w-4" color="#f0f0f0" />,
  },
  {
    title: <span className="text-white">Diverse Voices</span>,
    description: (
      <span className="text-white">
        Experience talks from speakers of all backgrounds, sharing unique
        perspectives and stories.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconSignature className="h-4 w-4" color="#f0f0f0" />,
  },
  {
    title: <span className="text-white">Innovation & Creativity</span>,
    description: (
      <span className="text-white">
        Explore how TEDx fosters innovation, creativity, and new ways of
        thinking in every community.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconTableColumn className="h-4 w-4" color="#f0f0f0" />,
  },
  {
    title: <span className="text-white">Community Impact</span>,
    description: (
      <span className="text-white">
        See how TEDx events inspire action and make a difference locally and
        globally.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4" color="#f0f0f0" />,
  },
  {
    title: <span className="text-white">Volunteer Driven</span>,
    description: (
      <span className="text-white">
        Meet the passionate volunteers who make every TEDx event possible.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4" color="#f0f0f0" />,
  },
  {
    title: <span className="text-white">Join the Conversation</span>,
    description: (
      <span className="text-white">
        Be part of a global dialogue—attend, speak, or volunteer at your local
        TEDx.
      </span>
    ),
    header: <Skeleton color="#e5e7eb" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4" color="#f0f0f0" />,
  },
];

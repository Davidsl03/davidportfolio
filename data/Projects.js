import { SiTailwindcss, SiNextdotjs, SiMongodb} from "react-icons/si"

const projects = [
    {
      id: 1,
      title: "PromptLand",
      description: "Promptland is an open-source AI prompting tool for modern world to discover, create and share creative prompts ",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "MongoDb", icon: <SiMongodb /> },
      ],
      link: "https://promptland-sepia.vercel.app",
      image: "/assets/images/Promtland.png",
    },
  ];
  
  export default projects;
  
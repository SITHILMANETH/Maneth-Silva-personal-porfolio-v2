const logotext = "MANET LAB";

const meta = {
    title: "Manet | Robotics & AI Portfolio",
    description:
        "Robotics, AI, electronics, PCB, Webots, and maker project portfolio.",
};

const introdata = {
    title: "I build robots, circuits, and intelligent systems.",
    animated: {
        first: "Micro mouse runs",
        second: "Battle bot builds",
        third: "AI vision experiments",
    },
    description:
        "A hands-on portfolio for robotics competitions, PCB work, NASA App ideas, Webots simulations, smart devices, and machine learning projects.",
    badge: "Robotics + AI + Electronics",
};

const dataabout = {
    title: "About me",
    cv: "/maneth-silva-cv.pdf",
    aboutme: [
        "I'm Maneth Silva, a robotics and artificial intelligence undergraduate passionate about building intelligent systems that bridge software, hardware, and real world environments. My focus is on developing autonomous machines and AI driven systems that can perceive, decide, and act in dynamic conditions.",
        "I am particularly interested in robotics, machine learning, embedded systems, and human centered AI applications. I enjoy working on projects that combine multiple disciplines such as control systems, computer vision, and intelligent decision making to create functional and interactive machines rather than just simulations or theory based models.",
        "Through my academic journey and personal projects, I have been exploring areas like autonomous navigation, hybrid robotic behavior, and AI powered companion systems. I like building systems from the ground up, starting from understanding the problem, designing the architecture, implementing algorithms, and testing them in real environments.",
        "My long term goal is to contribute to the development of intelligent robotic systems that can operate safely and effectively in real world scenarios, whether that is in automation, assistance, exploration, or human interaction. I am continuously learning and improving my skills in AI, robotics frameworks, and system design to move closer to that goal.",
        "Outside of technical work, I am someone who enjoys breaking down complex problems into simple logical systems and experimenting with new ideas that push my understanding of how intelligent machines work.",
    ],
};

const worktimeline = [
    {
        jobtitle: "Robotics Builder",
        where: "Micro Mouse, Battle Bot, Scorpion Robot",
        date: "Current",
    },
    {
        jobtitle: "AI + Automation Explorer",
        where: "Object Detection, Naive Bayes Email Filter",
        date: "Current",
    },
    {
        jobtitle: "Competition + App Projects",
        where: "HackX, NASA App, Webots Projects",
        date: "Current",
    },
    {
        jobtitle: "Electronics + PCB Maker",
        where: "Custom circuits, sensors, and control boards",
        date: "Current",
    },
];

const skills = [
    {
        name: "Robotics Prototyping",
        value: 92,
    },
    {
        name: "Embedded Systems",
        value: 88,
    },
    {
        name: "PCB Design",
        value: 84,
    },
    {
        name: "Computer Vision",
        value: 82,
    },
    {
        name: "Webots Simulation",
        value: 80,
    },
    {
        name: "Python + Machine Learning",
        value: 86,
    },
];

const services = [
    {
        title: "Robotics Builds",
        description:
            "Designing and documenting robots from mechanical ideas to sensors, control logic, testing, and competition-ready improvements.",
    },
    {
        title: "AI + Vision Experiments",
        description:
            "Building practical models for object detection, automation, email filtering, and smart-device decision making.",
    },
    {
        title: "Electronics + PCB Work",
        description:
            "Creating clean electronics layouts, wiring plans, and PCB-ready project documentation for real-world prototypes.",
    },
];

const openForWork = {
    title: "Open for Work",
    badge: "CAD + PCB commissions",
    intro:
        "I am open for small 3D design, 3D printing, and PCB design work. Send the project idea, dimensions, reference images, or circuit requirements and I will reply with the next steps.",
    email: "manethsilva@proton.me",
    fileDropUrl: "https://wormhole.app/",
    fileDropTitle: "Share project files with Wormhole",
    fileDropDescription:
        "Upload your CAD references, sketches, images, Gerbers, schematics, or notes on Wormhole, then email me the share link with your project message.",
    services: [
        {
            title: "3D Designing and Printing",
            shortTitle: "3D Design",
            description:
                "Design your CAD model for printing, prototyping, robotics parts, enclosures, brackets, and custom mechanical ideas.",
            details: ["CAD design", "3D print-ready files", "Prototype planning"],
        },
        {
            title: "PCB Designing",
            shortTitle: "PCB Design",
            description:
                "Make your PCB design from a circuit idea, schematic, module layout, or electronics project requirement.",
            details: ["Schematic cleanup", "PCB layout", "Gerber-ready output"],
        },
    ],
};

const buildMedia = (slug) => ({
    folder: `/projects/${slug}`,
    photo: `/projects/${slug}/photos/cover.jpg`,
    video: `/projects/${slug}/videos/demo.mp4`,
});

const dataportfolio = [
    {
        title: "Micro Mouse",
        tag: "Autonomous robotics",
        description:
            "A maze-solving robot project focused on sensing, motor control, path planning, and fast decision making inside a maze.",
        details:
            "This project is about building a small autonomous robot that can understand a maze, follow walls or sensor readings, choose paths, and improve its movement through testing.",
        highlights: ["Maze navigation", "Sensor tuning", "Control algorithms"],
        ...buildMedia("micro-mouse"),
    },
    {
        title: "Battle Bot",
        tag: "Combat robotics",
        description:
            "A rugged robot build for robot-battle challenges, balancing drive power, weapon strategy, durability, and quick repairs.",
        details:
            "Battle Bot is focused on strong mechanical design, reliable drive control, protected electronics, and quick changes after testing or match damage.",
        highlights: ["Chassis design", "Drive system", "Impact testing"],
        galleryPhotos: [
            {
                title: "Battle Bot photo 01",
                src: "/projects/battle-bot/photos/FB_IMG_1759077448382.jpg",
            },
            {
                title: "Battle Bot photo 02",
                src: "/projects/battle-bot/photos/Snapchat-1154343386.jpg",
            },
        ],
        youtubeVideos: [
            {
                title: "Battle Bot test run 01",
                url: "https://youtu.be/IVeNeMpzEO8",
                embed: "https://www.youtube.com/embed/IVeNeMpzEO8",
            },
            {
                title: "Battle Bot test run 02",
                url: "https://youtu.be/vpn60O3UuKc",
                embed: "https://www.youtube.com/embed/vpn60O3UuKc",
            },
            {
                title: "Battle Bot test run 03",
                url: "https://youtu.be/dsOZVHYid2k",
                embed: "https://www.youtube.com/embed/dsOZVHYid2k",
            },
        ],
        ...buildMedia("battle-bot"),
    },
    {
        title: "HackX",
        tag: "Hackathon project",
        description:
            "A fast-build innovation project from ideation to demo, shaped for pitching, prototyping, and solving a real problem under time pressure.",
        details:
            "HackX is the space for hackathon ideas, teamwork, quick research, prototyping, demo preparation, and explaining the solution clearly to judges.",
        highlights: ["Rapid prototype", "Team workflow", "Demo build"],
        galleryPhotos: [
            {
                title: "HackX photo 01",
                src: "/projects/hack-x/photos/IMG-20251112-WA0084(1).jpg",
            },
            {
                title: "HackX photo 02",
                src: "/projects/hack-x/photos/IMG-20251112-WA0086(1).jpg",
            },
            {
                title: "HackX photo 03",
                src: "/projects/hack-x/photos/IMG-20251112-WA0087(1).jpg",
            },
            {
                title: "HackX photo 04",
                src: "/projects/hack-x/photos/IMG-20251112-WA0088(1).jpg",
            },
            {
                title: "HackX photo 05",
                src: "/projects/hack-x/photos/IMG-20251114-WA0015(1).jpg",
            },
            {
                title: "HackX photo 06",
                src: "/projects/hack-x/photos/IMG-20251114-WA0016.jpg",
            },
            {
                title: "HackX photo 07",
                src: "/projects/hack-x/photos/IMG-20251114-WA0019(1).jpg",
            },
            {
                title: "HackX photo 08",
                src: "/projects/hack-x/photos/IMG-20251114-WA0021(2).jpg",
            },
            {
                title: "HackX photo 09",
                src: "/projects/hack-x/photos/IMG-20251114-WA0028(1).jpg",
            },
            {
                title: "HackX photo 10",
                src: "/projects/hack-x/photos/IMG-20251114-WA0029(4).jpg",
            },
            {
                title: "HackX photo 11",
                src: "/projects/hack-x/photos/IMG-20251120-WA0016.jpg",
            },
        ],
        ...buildMedia("hack-x"),
    },
    {
        title: "NASA App",
        tag: "Space + data app",
        description:
            "An app idea inspired by space, science, and public datasets, designed to turn complex information into something people can explore.",
        details:
            "NASA App collects space-inspired ideas, interface experiments, and data-driven features that make science information easier to understand.",
        highlights: ["Space data", "App design", "Public impact"],
        ...buildMedia("nasa-app"),
    },
    {
        title: "Smart Fan",
        tag: "IoT + embedded systems",
        description:
            "A smart fan concept that can react to environment data and user settings, combining sensors, control logic, and automation.",
        details:
            "Smart Fan combines sensor readings, simple automation logic, and embedded control so the fan can respond to temperature or user preferences.",
        highlights: ["Temperature sensing", "Automation", "Embedded control"],
        ...buildMedia("smart-fan"),
    },
    {
        title: "Naive Bayes Email Filter",
        tag: "Machine learning",
        description:
            "A classifier for filtering emails using Naive Bayes, text preprocessing, probability scoring, and practical spam-detection logic.",
        details:
            "This machine learning project uses text cleaning, word probabilities, and Naive Bayes classification to separate useful emails from spam-like messages.",
        highlights: ["Text classification", "Spam filtering", "Model evaluation"],
        ...buildMedia("naive-bayes-email-filter"),
    },
    {
        title: "Webots Projects",
        tag: "Robot simulation",
        description:
            "Robot simulations built in Webots to test movement, sensors, robot behavior, and ideas before building hardware.",
        details:
            "Webots Projects are for testing robot behavior in simulation first, including movement, sensor response, control code, and environment interactions.",
        highlights: ["Simulation", "Robot behavior", "Sensor testing"],
        ...buildMedia("webots-projects"),
    },
    {
        title: "PCB",
        tag: "Electronics design",
        description:
            "A collection space for PCB layouts, circuit experiments, board photos, schematic screenshots, and tested electronics modules.",
        details:
            "PCB work documents circuit planning, component placement, board layouts, soldering, testing, and the electronics that support robot builds.",
        highlights: ["Circuit design", "Board layout", "Hardware testing"],
        ...buildMedia("pcb"),
    },
    {
        title: "Scorpion Robot",
        tag: "Bio-inspired robotics",
        description:
            "A scorpion-inspired robot concept for exploring movement, mechanism design, expressive robotics, and sensor-driven behavior.",
        details:
            "Scorpion Robot explores character-like robot motion, mechanical structure, and sensor-based behavior inspired by the shape and movement of a scorpion.",
        highlights: ["Mechanisms", "Motion design", "Robot character"],
        ...buildMedia("scorpion-robot"),
    },
    {
        title: "Object Detection",
        tag: "Computer vision",
        description:
            "A vision project for detecting objects in images or video, with room to show test clips, dataset examples, and model results.",
        details:
            "Object Detection focuses on camera input, model testing, detection results, and showing how computer vision can help robots or apps understand a scene.",
        highlights: ["Detection model", "Camera input", "Real-time testing"],
        ...buildMedia("object-detection"),
    },
];

const contactConfig = {
    YOUR_EMAIL: "manethsilva@proton.me",
    YOUR_FONE: "",
    description:
        "Have a 3D design, 3D printing, PCB, robotics, AI, electronics, or competition idea? Send a message and include a Wormhole link if you have files to share.",
    availability: "Open for 3D design, 3D printing, PCB design, robotics, AI, and student innovation collaborations.",
    // Create an emailjs.com account and replace these IDs before using the form in production.
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/SITHILMANETH",
    linkedin: "https://www.linkedin.com/in/maneth-silva-98844a19a",
    youtube: "https://www.youtube.com/@manethsilva9515",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    openForWork,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};

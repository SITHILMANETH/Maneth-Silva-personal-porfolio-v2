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
    title: "A bit about my maker side",
    aboutme:
        "I like turning ideas into machines that move, sense, and react. My work blends robotics, embedded systems, PCB design, computer vision, simulations, and practical AI experiments. This portfolio is now set up like a project lab, with room to add real photos and videos for each build as it grows.",
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
        highlights: ["Maze navigation", "Sensor tuning", "Control algorithms"],
        ...buildMedia("micro-mouse"),
    },
    {
        title: "Battle Bot",
        tag: "Combat robotics",
        description:
            "A rugged robot build for robot-battle challenges, balancing drive power, weapon strategy, durability, and quick repairs.",
        highlights: ["Chassis design", "Drive system", "Impact testing"],
        ...buildMedia("battle-bot"),
    },
    {
        title: "HackX",
        tag: "Hackathon project",
        description:
            "A fast-build innovation project from ideation to demo, shaped for pitching, prototyping, and solving a real problem under time pressure.",
        highlights: ["Rapid prototype", "Team workflow", "Demo build"],
        ...buildMedia("hack-x"),
    },
    {
        title: "NASA App",
        tag: "Space + data app",
        description:
            "An app idea inspired by space, science, and public datasets, designed to turn complex information into something people can explore.",
        highlights: ["Space data", "App design", "Public impact"],
        ...buildMedia("nasa-app"),
    },
    {
        title: "Smart Fan",
        tag: "IoT + embedded systems",
        description:
            "A smart fan concept that can react to environment data and user settings, combining sensors, control logic, and automation.",
        highlights: ["Temperature sensing", "Automation", "Embedded control"],
        ...buildMedia("smart-fan"),
    },
    {
        title: "Naive Bayes Email Filter",
        tag: "Machine learning",
        description:
            "A classifier for filtering emails using Naive Bayes, text preprocessing, probability scoring, and practical spam-detection logic.",
        highlights: ["Text classification", "Spam filtering", "Model evaluation"],
        ...buildMedia("naive-bayes-email-filter"),
    },
    {
        title: "Webots Projects",
        tag: "Robot simulation",
        description:
            "Robot simulations built in Webots to test movement, sensors, robot behavior, and ideas before building hardware.",
        highlights: ["Simulation", "Robot behavior", "Sensor testing"],
        ...buildMedia("webots-projects"),
    },
    {
        title: "PCB",
        tag: "Electronics design",
        description:
            "A collection space for PCB layouts, circuit experiments, board photos, schematic screenshots, and tested electronics modules.",
        highlights: ["Circuit design", "Board layout", "Hardware testing"],
        ...buildMedia("pcb"),
    },
    {
        title: "Scorpion Robot",
        tag: "Bio-inspired robotics",
        description:
            "A scorpion-inspired robot concept for exploring movement, mechanism design, expressive robotics, and sensor-driven behavior.",
        highlights: ["Mechanisms", "Motion design", "Robot character"],
        ...buildMedia("scorpion-robot"),
    },
    {
        title: "Object Detection",
        tag: "Computer vision",
        description:
            "A vision project for detecting objects in images or video, with room to show test clips, dataset examples, and model results.",
        highlights: ["Detection model", "Camera input", "Real-time testing"],
        ...buildMedia("object-detection"),
    },
];

const contactConfig = {
    YOUR_EMAIL: "your-email@example.com",
    YOUR_FONE: "",
    description:
        "Have an idea for a robot, AI experiment, electronics build, or competition project? Send a message and let's build something useful.",
    // Create an emailjs.com account and replace these IDs before using the form in production.
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
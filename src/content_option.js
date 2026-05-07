const logotext = "Maneth Silva";

const meta = {
    title: "Maneth Silva | Robotics, PCB, and Practical Software",
    description:
        "A personal portfolio of robotics builds, PCB work, machine learning experiments, and notes from the workbench.",
};

const introdata = {
    title: "I build small robots, practical circuits, and tools for testing them.",
    animated: {
        first: "Micro mouse notes",
        second: "Battle bot repairs",
        third: "Vision tests",
    },
    description:
        "This is a working portfolio, not a pitch deck. Some projects are polished, some are still messy, and the useful lessons are kept in view.",
    badge: "Robotics, boards, code",
};

const dataabout = {
    title: "About me",
    cv: "/maneth-silva-cv.pdf",
    aboutme: [
        "I'm Maneth Silva, a robotics and AI undergraduate who likes building things close enough to reality that they can fail in useful ways.",
        "Most of my work sits between mechanical prototypes, electronics, control code, and small machine learning experiments. I care about the boring parts too: wiring that can be debugged, notes that make sense later, and interfaces that do not fight the person using them.",
    ],
};

const worktimeline = [
    {
        jobtitle: "Robotics",
        where: "Micro Mouse, Battle Bot, Scorpion Robot",
        date: "On the bench",
    },
    {
        jobtitle: "Vision and ML",
        where: "Object Detection, Naive Bayes Filter",
        date: "Testing",
    },
    {
        jobtitle: "Simulation",
        where: "Webots Projects",
        date: "Iterating",
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
            "Small robots, drive systems, sensor tuning, and the mechanical decisions that make testing easier.",
    },
    {
        title: "Vision Experiments",
        description:
            "Object detection, simple classifiers, camera input, and model checks that are grounded in actual use.",
    },
    {
        title: "Electronics and PCB Work",
        description:
            "Schematics, board layouts, wiring notes, and prototype documentation that someone can follow later.",
    },
];

const openForWork = {
    title: "Open for Work",
    badge: "Small build help",
    intro:
        "I take on small 3D design, 3D printing, and PCB design tasks when the scope is clear. Send the rough idea first; we can tighten the details together.",
    email: "manethsilva@proton.me",
    fileDropUrl: "https://wormhole.app/",
    fileDropTitle: "Share files without making an account",
    fileDropDescription:
        "Upload references, sketches, Gerbers, schematics, or photos on Wormhole. Paste the link into your email so I can see the real constraints.",
    services: [
        {
            title: "3D design and printing",
            shortTitle: "3D Design",
            description:
                "Small CAD parts for enclosures, brackets, robot mounts, and print-ready prototypes.",
            details: ["STL / STEP output", "Print-friendly shapes"],
        },
        {
            title: "PCB design",
            shortTitle: "PCB Design",
            description:
                "Simple boards from a circuit idea, schematic, module layout, or repairable prototype.",
            details: ["Schematic cleanup", "PCB layout"],
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
            "A maze-solving robot where the hard work is sensor consistency, motor control, and making the next turn less random.",
        details:
            "A small autonomous robot that reads a maze, chooses paths, and gets better through repeated testing rather than one perfect theory.",
        highlights: ["Maze navigation", "Sensor tuning", "Control algorithms"],
        status: "Prototype notes",
        ...buildMedia("micro-mouse"),
    },
    {
        title: "Battle Bot",
        tag: "Combat robotics",
        description:
            "A rugged robot build where reliability, repair time, and drive power matter as much as the fun parts.",
        details:
            "Focused on mechanical design, drive control, protected electronics, and quick changes after each test.",
        highlights: ["Chassis design", "Drive system", "Impact testing"],
        status: "Test footage",
        galleryPhotos: [
            {
                title: "Battle Bot photo 01",
                src: "/projects/battle-bot/photos/FB_IMG_1759077448382.jpg",
            },
        ],
        youtubeVideos: [
            {
                title: "Battle Bot test run 01",
                url: "https://youtu.be/IVeNeMpzEO8",
                embed: "https://www.youtube.com/embed/IVeNeMpzEO8",
            },
        ],
        ...buildMedia("battle-bot"),
    },
    {
        title: "Smart Fan",
        tag: "IoT + embedded systems",
        description:
            "A small automation project for reading environment data and changing fan behavior without overcomplicating the controls.",
        details:
            "Combines sensor readings, simple automation logic, and embedded control.",
        highlights: ["Temperature sensing", "Automation", "Embedded control"],
        status: "Concept build",
        ...buildMedia("smart-fan"),
    },
    {
        title: "Naive Bayes Email Filter",
        tag: "Machine learning",
        description:
            "A plain machine learning exercise in text cleaning, word probabilities, and knowing where a simple model is enough.",
        details:
            "Uses text cleaning, word probabilities, and classification to separate useful emails from spam.",
        highlights: ["Text classification", "Spam filtering", "Model evaluation"],
        status: "Code study",
        ...buildMedia("naive-bayes-email-filter"),
    },
    {
        title: "Webots Projects",
        tag: "Robot simulation",
        description:
            "Simulation work for testing movement and sensor behavior before spending time on hardware fixes.",
        details:
            "Testing robot behavior in simulation before building hardware.",
        highlights: ["Simulation", "Robot behavior", "Sensor testing"],
        status: "Simulation log",
        ...buildMedia("webots-projects"),
    },
    {
        title: "PCB",
        tag: "Electronics design",
        description:
            "A collection space for circuit experiments, board layouts, soldering notes, and small hardware checks.",
        details:
            "Documents circuit planning, component placement, board layouts, soldering, and testing.",
        highlights: ["Circuit design", "Board layout", "Hardware testing"],
        status: "Workbench notes",
        ...buildMedia("pcb"),
    },
    {
        title: "Scorpion Robot",
        tag: "Bio-inspired robotics",
        description:
            "A robot concept for testing character-like motion, mechanisms, and sensor-driven behavior.",
        details:
            "Explores character-like motion, mechanical structure, and sensor-based behavior.",
        highlights: ["Mechanisms", "Motion design", "Robot character"],
        status: "Early idea",
        ...buildMedia("scorpion-robot"),
    },
    {
        title: "Object Detection",
        tag: "Computer vision",
        description:
            "A computer vision project for checking object detection behavior with images, video, and camera input.",
        details:
            "Focuses on camera input, model testing, and detection results.",
        highlights: ["Detection model", "Camera input", "Real-time testing"],
        status: "Model checks",
        ...buildMedia("object-detection"),
    },
];

const contactConfig = {
    YOUR_EMAIL: "manethsilva@proton.me",
    YOUR_FONE: "",
    description:
        "Have a part to print, a small board to route, or a robotics idea that needs another pair of eyes? Send the context, not just the headline.",
    availability: "Open for small 3D design, PCB design, robotics, and student collaborations.",
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

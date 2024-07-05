const logotext = "SAITO";

const introdata = {
    title: "I`m Takeshi Saito",
    animated: {
        first: "I love coding",
        second: "I love computer graphics",
        third: "I love games",
    },
    description: "Technical artist with a programmer background",
    home_img_url: `${process.env.PUBLIC_URL}/dhw-still-half.jpg`,
    e_mail: "takeshi.saito.9119@gmail.com"
};

const meta = {
    title: "Takeshi Saito",
    description: "I`m Takeshi _ Techinical Artist,currently working in Tokyo",
}
const socialprofils = {
    github: "https://github.com/TakeshiSaito",
    linkedin: "https://www.linkedin.com/in/takeshi-saito-aa6894180/",
    twitter: "https://twitter.com/TakeshiSaito_TA",
    artstation: "https://www.artstation.com/takeshisaito",
};
const dataabout = {
    title: "About me",
    aboutme: "I am currently working as a Technical Director at ModelingCafe inc.. My primary responsibilities include creating tools for Maya using Python, creating Blueprints necessary for production in UE, and developing tools required for workflow optimization. " +
        "I am dedicated to building scalable systems, such as developing deadline(AWS) plugins and establishing CI/CD workflows with limited resources.\n" +
        "Additionally, I also create essential support tools for artists, including tools for virtual human production. I am actively working on ensuring the quality of in-house tools by implementing Python unittest.\n" +
        "Before this role, I worked as a Technical Artist, providing support for cinematic scenes in games. During this time, I gained experience in creating Python programs for DCC tools, developing standalone tools, and creating Blueprints for UE.\n" +
        "My career started as a client-side engineer for mobile games, where I worked with Unity and C#. Here, I was involved in both new development and the maintenance of existing titles. I learned how to optimize for low-end devices and focused on designing solutions that are easy to maintain.",
};
const skills = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Unity",
        value: 85,
    },
    {
        name: "Unreal Engine",
        value: 70,
    },
    {
        name: "Autodesk Maya",
        value: 70,
    },
    {
        name: "Continuous Integration and Deployment",
        value: 60,
    },
];
const careers = [
    {
        title: "ModelingCafe .inc(2023.1 - present)",
        description: "As a Technical Director, I am involved in building pipelines, providing technical support for production, and creating support tools. I have worked on developing tools for digital humans, including launchers, and have built CI/CD flows to focus on how to deploy efficiently to users.",
    },
    {
        title: "HAL Osaka Python instructor(2023.11 - present)",
        description: "I am conducting Python lectures with the goal of applying it practically in 3D CG work.",
    },
    {
        title: "ILCA .inc(2022.1 - 2022.12)",
        description: "I developed consumer-oriented games using Unreal Engine, worked on the development of DCC tools with Python, constructed Blueprints in Unreal Engine, and was responsible for character rigging.",
    },
    {
        title: "Digital Hollywood(2021.4 - 2022.3)",
        description: "I learned how to use DCC tools such as Maya, ZBrush, Substance Painter, and Houdini, and studied the entire process of 3D CG creation.",
    },
    {
        title: "grimoire co., ltd.(2018 - 2021)",
        description: "I experienced everything from maintenance of Unity mobile games to the development of new titles.",
    },
    {
        title: "Japan Steel Works, Ltd.(2016-2018)",
        description: "I experienced in sales and production management.",
    },
    {
        title: "Keio University(2011-2016)",
        description: "I studied commerce.",
    }
];

const dataportfolio = [
    {
        img: `${process.env.PUBLIC_URL}/anome2.png`,
        description: "Meido Sarasa ”Monday the 13th” Official MV",
        link: "https://youtu.be/2I_alumYC1I?si=cRAqqLqBYKQpD0cx"
    },
    {
        img: `${process.env.PUBLIC_URL}/riverreve.jpg`,
        description: "ReverseBlue×ReverseEnd",
        link: "https://rxr.happyelements.co.jp/",
    },
    {
        img: `${process.env.PUBLIC_URL}/brebre.png`,
        description: "BraveSword×BlazeSoul",
        link: "https://grimoire.co/bxb/",
    },
    {
        img: `${process.env.PUBLIC_URL}/ge-cloe-crop.jpg`,
        description: "Individual game project",
        link: "https://unityroom.com/games/growth_minigame"
    },
    {
        img: `${process.env.PUBLIC_URL}/dhw-still-icon.jpg`,
        description: "Digital Hollywood assignment",
        link: "https://www.artstation.com/artwork/bKqQLv"
    }
]


export {
    introdata,
    meta,
    logotext,
    socialprofils,
    dataabout,
    skills,
    careers,
    dataportfolio
};

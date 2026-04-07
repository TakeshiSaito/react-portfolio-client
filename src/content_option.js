const logotext = "SAITO";

const introdata = {
    title: "I`m Takeshi Saito",
    animated: {
        first: "I develop CG pipelines",
        second: "I build tools for production",
        third: "I love computer graphics",
    },
    description: "Production Engineer | Technical Artist | Programmer",
    home_img_url: `/dhw-still-half.jpg`,
    e_mail: "takeshi.saito.9119@gmail.com"
};

const meta = {
    title: "Takeshi Saito",
    description: "Production Engineer specializing in CG pipelines and technical workflows.",
}
const socialprofils = {
    github: "https://github.com/TakeshiSaito",
    linkedin: "https://www.linkedin.com/in/takeshi-saito-aa6894180/",
    artstation: "https://www.artstation.com/takeshisaito",
};
const dataabout = {
    title: "About me",
    aboutme: "I am a Production Engineer with 8+ years of experience in the game and CG industry. My passion lies in designing and optimizing CG production pipelines, bridging the gap between technical art and production workflows. I specialize in Python scripting, pipeline architecture, DCC tool integration, and CI/CD workflow optimization.\n\nCurrently: Production Engineer at a CG company somewhere in Tokyo (2024.10 - Present) 🗼 Tokyo\n- Developing and maintaining CG pipelines for production\n- Optimizing DCC tool workflows and integrations\n- Building scalable pipeline architectures\n- Supporting technical implementation for production teams\n\nPreviously: Python instructor at HAL Osaka (2023.11 - 2024.9)\n- Conducted practical Python lectures for 3D CG applications\n\nFun fact: I love muscle training 💪💪💪",
};
const skills = [
    { name: "Python", value: 95 },
    { name: "Unreal Engine", value: 85 },
    { name: "Autodesk Maya", value: 80 },
    { name: "Unity", value: 85 },
    { name: "C#", value: 75 },
    { name: "C++", value: 65 },
    { name: "Production Pipeline Development", value: 90 },
    { name: "CI/CD & Deployment Workflows", value: 85 },
    { name: "Tool Development for Artists", value: 90 },
    { name: "Digital Human Production", value: 80 },
    { name: "DCC Tool Integration", value: 85 },
    { name: "Unit Testing & Code Quality", value: 80 },
    { name: "Optimization for Low-end Devices", value: 75 },
];
const careers = [
    { title: "Production Engineer", description: "A CG company in Tokyo (2024.10 - Present): Developing and maintaining CG production pipelines, optimizing DCC tool workflows, building scalable pipeline architectures, supporting technical implementation for production teams." },
    { title: "Technical Director", description: "ModelingCafe inc. (2023.1 - 2024.9): Built pipelines, created digital human production tools, established CI/CD workflows for efficient deployment, provided technical support for production." },
    { title: "Python Instructor", description: "HAL Osaka (2023.11 - 2024.9): Taught practical Python lectures for 3D CG applications." },
    { title: "Technical Artist", description: "ILCA inc. (2022): Developed consumer games using Unreal Engine, created DCC tools with Python, constructed Blueprints, performed character rigging." },
    { title: "Student", description: "Digital Hollywood (2021 - 2022): Learned DCC tools (Maya, ZBrush, Substance Painter, Houdini), studied full 3D CG production pipeline." },
    { title: "Client-side Engineer", description: "grimoire co., ltd. (2018 - 2021): Maintained and developed Unity mobile games, gained experience in optimization for low-end devices." },
    { title: "Sales & Production Manager", description: "Japan Steel Works, Ltd. (2016 - 2018): Worked in sales and production management." },
    { title: "Student", description: "Keio University (2011 - 2016): Studied commerce." },
];
const certifications = [
    { title: "IPA Applied Information Technology Engineer Examination", date: "2025.12" },
    { title: "TOEIC Listening & Reading: 935", date: "2023.02" },
];
const dataportfolio = [
    { img: `/anome2.png`, description: "Meido Sarasa \u201CMonday the 13th\u201D Official MV", link: "https://youtu.be/2I_alumYC1I?si=cRAqqLqBYKQpD0cx" },
    { img: `/riverreve.jpg`, description: "ReverseBlue\u00D7ReverseEnd", link: "https://rxr.happyelements.co.jp/" },
    { img: `/brebre.png`, description: "BraveSword\u00D7BlazeSoul", link: "https://grimoire.co/bxb/" },
    { img: `/ge-cloe-crop.jpg`, description: "Individual game project", link: "https://unityroom.com/games/growth_minigame" },
    { img: `/dhw-still-icon.jpg`, description: "Digital Hollywood assignment", link: "https://www.artstation.com/artwork/bKqQLv" }
];

const blogposts = [
    {
        id: 1,
        title: "CGパイプライン構築の基礎",
        excerpt: "効率的なCGパイプラインを構築するための基本的な考え方と、実際のプロジェクトでの実装例を紹介します。",
        date: "2026-04-01",
        category: "Pipeline",
        readTime: "5 min",
    },
    {
        id: 2,
        title: "Pythonでの Maya ツール開発入門",
        excerpt: "MayaのPython APIを使ったツール開発の始め方。基本的なスクリプト作成からGUIの構築まで解説。",
        date: "2026-03-25",
        category: "Python",
        readTime: "8 min",
    },
    {
        id: 3,
        title: "CI/CDをCGワークフローに導入する方法",
        excerpt: "Jenkins、GitHub Actionsを活用したCGプロダクションでの継続的インテグレーションの実践。",
        date: "2026-03-15",
        category: "DevOps",
        readTime: "6 min",
    },
    {
        id: 4,
        title: "Digital Human制作のテクニカルノウハウ",
        excerpt: "リアルなデジタルヒューマンを制作する際のテクニカルアーティストの視点からのアプローチ。",
        date: "2026-03-08",
        category: "Technical Art",
        readTime: "10 min",
    },
    {
        id: 5,
        title: "DCCツール間のデータ連携ベストプラクティス",
        excerpt: "Maya、Houdini、Unreal Engine間でのアセット連携を効率化するためのワークフロー設計。",
        date: "2026-02-28",
        category: "Pipeline",
        readTime: "7 min",
    },
];

export { introdata, meta, logotext, socialprofils, dataabout, skills, careers, certifications, dataportfolio, blogposts };

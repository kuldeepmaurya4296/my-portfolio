import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Kuldeep',
    lastName: 'Maurya',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Front Developer',
    avatar: '/images/profile.jpg',
    location: 'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/kuldeepmaurya4296',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/kuldeepmaurya4296/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/kuldeep00806918',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:kuldeepmaurya4296@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Turning Ideas into Reality with Code</>,
    subline: <>Hi, I'm Kuldeep – a Web Developer at  <InlineCode>Flourishers Edge</InlineCode>, passionate about crafting <br /> intuitive user experiences. Outside of work, I bring my ideas to life by building innovative personal projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Kuldeep is a passionate web developer with expertise in crafting intuitive user experiences and building efficient, scalable web solutions. Based in India, his work bridges creativity and technology, delivering innovative digital interfaces and impactful projects.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Flourishers Edge Pvt. Ltd.',
                timeframe: 'August 2024 - Present',
                role: 'Front-End Developer Intern',
                achievements: [
                    <>Built responsive web interfaces using Next.js and Tailwind CSS, improving user engagement across multiple platforms.</>,
                    <>Integrated Framer Motion to deliver smooth, interactive animations, enhancing the overall user experience.</>,
                    <>Collaborated with cross-functional teams to design and implement scalable web solutions aligned with client needs.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/flourishers-edge.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Technocrats Institute of Technology, Bhopal',
                description: <>Bachelor of Technology (B.Tech) in Computer Science and Engineering, specialized in Artificial Intelligence and Machine Learning. CGPA: 8.80/10 (2020 - 2024).</>,
            },
            {
                name: 'Govt. Model H S School, Sitlaha, Rewa',
                description: <>Higher Secondary (Class XII) with 83.6% marks (2020).</>,
            },
            {
                name: 'Govt. Model H S School, Sitlaha, Rewa',
                description: <>High School (Class X) with 87.7% marks (2018).</>,
            }
        ]
    },

    technical: {
        display: true, // set to false to hide this section
        title: 'Technical Skills',
        skills: [
            {
                title: 'Java',
                description: <>Proficient in Java programming, with experience in building scalable applications and solving complex problems.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'JavaScript',
                description: <>Skilled in JavaScript for building dynamic web applications, using both front-end and back-end technologies like React.js, Node.js, and Express.js.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'MERN Stack',
                description: <>Experience with the MERN stack (MongoDB, Express.js, React.js, Node.js) to build full-stack applications.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'MySQL',
                description: <>Proficient in MySQL for database management, including designing and querying relational databases.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'Tailwind CSS',
                description: <>Expert in using Tailwind CSS for building responsive, customizable, and maintainable web designs.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'React.js',
                description: <>Skilled in building dynamic and responsive user interfaces with React.js, leveraging hooks and component-based architecture.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Experience in building modern web applications with Next.js, focusing on server-side rendering and static site generation.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'Framer Motion',
                description: <>Proficient in using Framer Motion for creating smooth animations and transitions within React-based applications.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            },
            {
                title: 'Three.js',
                description: <>Skilled in creating interactive 3D web applications using Three.js, including 3D models, animations, and complex scenes.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 0,
                        
                    },
                ]
            }
        ]
    }

}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
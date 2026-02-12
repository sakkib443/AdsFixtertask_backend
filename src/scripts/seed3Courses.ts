// ===================================================================
// CreativeHub LMS - 3 New Courses Seeder
// Creates 3 courses: Illustrator, UI/UX, Web Development
// ===================================================================

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Import models
import { Course } from '../app/modules/course/course.model';
import { Module } from '../app/modules/module/module.model';
import { Lesson } from '../app/modules/lesson/lesson.model';
import { Category } from '../app/modules/category/category.model';

const MONGO_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/creativehub';

// ==================== Course 1: Adobe Illustrator with AI ====================
const illustratorCourse = {
    title: "Mastering Adobe Illustrator with AI",
    titleBn: "AI দিয়ে Adobe Illustrator মাস্টারিং",
    slug: "mastering-adobe-illustrator-with-ai",
    description: `Learn to create stunning vector graphics using Adobe Illustrator combined with AI-powered design tools. This comprehensive course covers everything from basic illustration to advanced AI-assisted design workflows.

You'll master pen tool techniques, create complex illustrations, design logos, icons, and learn how to use AI tools like Adobe Firefly and Midjourney to enhance your creative process.

Perfect for designers who want to stay ahead with AI-powered design skills.`,
    descriptionBn: `AI-powered design tools এর সাথে Adobe Illustrator ব্যবহার করে stunning vector graphics তৈরি করতে শিখুন। এই comprehensive course টি basic illustration থেকে advanced AI-assisted design workflows সব কভার করে।`,
    shortDescription: "Master vector graphics with Adobe Illustrator and AI tools. Create logos, icons, and illustrations with modern AI-powered techniques.",
    shortDescriptionBn: "Adobe Illustrator ও AI tools দিয়ে vector graphics মাস্টার করুন।",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    previewVideo: "https://www.youtube.com/watch?v=Ib8UBwu3yGA",
    bannerImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
    tags: ["illustrator", "adobe", "vector", "ai", "design", "graphics", "logo", "illustration"],
    price: 5999,
    discountPrice: 3499,
    currency: "BDT" as const,
    isFree: false,
    courseType: "recorded" as const,
    level: "intermediate" as const,
    language: "bangla" as const,
    features: [
        "40+ hours of HD video content",
        "AI Design Tools Integration",
        "100+ Project Files",
        "Lifetime access",
        "Certificate of completion",
        "Community Discord access",
        "1-on-1 Mentorship support"
    ],
    requirements: [
        "Basic computer knowledge",
        "Adobe Illustrator installed",
        "Interest in graphic design"
    ],
    whatYouWillLearn: [
        "Master Adobe Illustrator tools and techniques",
        "Create professional logos and brand identities",
        "Use AI tools like Firefly for design assistance",
        "Design icons, illustrations, and infographics",
        "Create print-ready artwork",
        "Work with typography and color theory"
    ],
    targetAudience: [
        "Graphic designers wanting to learn AI tools",
        "Beginners interested in illustration",
        "Marketing professionals",
        "Freelance designers"
    ],
    status: "published" as const,
    isFeatured: true,
    isPopular: true,
    publishedAt: new Date()
};

const illustratorModules = [
    {
        title: "Module 1: Illustrator Fundamentals",
        titleBn: "মডিউল ১: Illustrator ফান্ডামেন্টালস",
        description: "Learn the basics of Adobe Illustrator interface, tools, and workspace.",
        order: 1,
        isPublished: true
    },
    {
        title: "Module 2: Advanced Vector Techniques",
        titleBn: "মডিউল ২: Advanced Vector টেকনিক",
        description: "Master pen tool, pathfinder, and complex shape creation.",
        order: 2,
        isPublished: true
    },
    {
        title: "Module 3: AI-Powered Design Workflow",
        titleBn: "মডিউল ৩: AI-Powered ডিজাইন",
        description: "Integrate AI tools into your Illustrator workflow for faster design.",
        order: 3,
        isPublished: true
    }
];

const illustratorLessons = [
    { moduleIndex: 0, title: "Introduction to Adobe Illustrator", titleBn: "Adobe Illustrator পরিচিতি", description: "Getting started with Illustrator workspace and tools.", videoUrl: "https://www.youtube.com/watch?v=Ib8UBwu3yGA", videoDuration: 1500, videoProvider: "youtube" as const, order: 1, isFree: true, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 0, title: "Artboards & Navigation", titleBn: "Artboards ও Navigation", description: "Working with artboards and document setup.", videoUrl: "https://www.youtube.com/watch?v=xyz123", videoDuration: 1200, videoProvider: "youtube" as const, order: 2, isFree: true, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 0, title: "Basic Shape Tools", titleBn: "Basic Shape Tools", description: "Creating shapes and basic objects.", videoUrl: "https://www.youtube.com/watch?v=xyz124", videoDuration: 1800, videoProvider: "youtube" as const, order: 3, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "Pen Tool Mastery", titleBn: "Pen Tool মাস্টারি", description: "Master the pen tool for precise vector paths.", videoUrl: "https://www.youtube.com/watch?v=xyz125", videoDuration: 2400, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "Pathfinder Operations", titleBn: "Pathfinder অপারেশন", description: "Combine and manipulate shapes with pathfinder.", videoUrl: "https://www.youtube.com/watch?v=xyz126", videoDuration: 1800, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 2, title: "Using Adobe Firefly", titleBn: "Adobe Firefly ব্যবহার", description: "Generate and enhance designs with Adobe Firefly AI.", videoUrl: "https://www.youtube.com/watch?v=xyz127", videoDuration: 2100, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 2, title: "AI-Assisted Logo Design", titleBn: "AI-Assisted Logo ডিজাইন", description: "Create logos faster with AI assistance.", videoUrl: "https://www.youtube.com/watch?v=xyz128", videoDuration: 2700, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const }
];

// ==================== Course 2: UI/UX Design Full Course ====================
const uiuxCourse = {
    title: "Complete UI/UX Design Masterclass 2024",
    titleBn: "সম্পূর্ণ UI/UX ডিজাইন মাস্টারক্লাস ২০২৪",
    slug: "complete-ui-ux-design-masterclass-2024",
    description: `Become a professional UI/UX designer with this complete masterclass. Learn user research, wireframing, prototyping, and visual design using industry-standard tools like Figma and Adobe XD.

This course covers the entire design process from research to final handoff. You'll work on real projects and build a portfolio that gets you hired.

Perfect for aspiring designers who want to break into the tech industry.`,
    descriptionBn: `এই complete masterclass দিয়ে professional UI/UX designer হন। User research, wireframing, prototyping, এবং visual design শিখুন Figma ও Adobe XD দিয়ে।`,
    shortDescription: "Master UI/UX design with Figma. Learn user research, wireframing, prototyping, and build a professional portfolio.",
    shortDescriptionBn: "Figma দিয়ে UI/UX design মাস্টার করুন। Professional portfolio তৈরি করুন।",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    previewVideo: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
    bannerImage: "https://images.unsplash.com/photo-1586717799252-bd134f5c0b98?w=1200",
    tags: ["ui", "ux", "design", "figma", "adobe xd", "user experience", "interface", "prototype"],
    price: 6999,
    discountPrice: 3999,
    currency: "BDT" as const,
    isFree: false,
    courseType: "recorded" as const,
    level: "beginner" as const,
    language: "bangla" as const,
    features: [
        "60+ hours of HD video content",
        "20+ Real-world Projects",
        "Figma Design Files",
        "Lifetime access",
        "Certificate of completion",
        "Portfolio Review",
        "Job Interview Prep"
    ],
    requirements: [
        "No prior design experience needed",
        "A computer with Figma (free)",
        "Creativity and willingness to learn"
    ],
    whatYouWillLearn: [
        "User Research and Persona Creation",
        "Information Architecture",
        "Wireframing and Prototyping",
        "Visual Design Principles",
        "Figma Advanced Techniques",
        "Design Systems Creation",
        "Developer Handoff Best Practices"
    ],
    targetAudience: [
        "Complete beginners in design",
        "Graphic designers transitioning to UI/UX",
        "Developers wanting design skills",
        "Product managers"
    ],
    status: "published" as const,
    isFeatured: true,
    isPopular: true,
    publishedAt: new Date()
};

const uiuxModules = [
    {
        title: "Module 1: UX Design Foundations",
        titleBn: "মডিউল ১: UX ডিজাইন ফাউন্ডেশন",
        description: "Understand user experience principles, research methods, and design thinking.",
        order: 1,
        isPublished: true
    },
    {
        title: "Module 2: UI Design with Figma",
        titleBn: "মডিউল ২: Figma দিয়ে UI ডিজাইন",
        description: "Master Figma for creating beautiful user interfaces.",
        order: 2,
        isPublished: true
    },
    {
        title: "Module 3: Prototyping & Handoff",
        titleBn: "মডিউল ৩: Prototyping ও Handoff",
        description: "Create interactive prototypes and prepare designs for development.",
        order: 3,
        isPublished: true
    }
];

const uiuxLessons = [
    { moduleIndex: 0, title: "What is UX Design?", titleBn: "UX Design কি?", description: "Introduction to user experience design and its importance.", videoUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", videoDuration: 1200, videoProvider: "youtube" as const, order: 1, isFree: true, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 0, title: "User Research Methods", titleBn: "User Research পদ্ধতি", description: "Learn various user research techniques.", videoUrl: "https://www.youtube.com/watch?v=abc123", videoDuration: 1800, videoProvider: "youtube" as const, order: 2, isFree: true, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 0, title: "Creating User Personas", titleBn: "User Persona তৈরি", description: "Build effective user personas for design.", videoUrl: "https://www.youtube.com/watch?v=abc124", videoDuration: 1500, videoProvider: "youtube" as const, order: 3, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "Figma Interface Tour", titleBn: "Figma Interface টুর", description: "Get familiar with Figma workspace.", videoUrl: "https://www.youtube.com/watch?v=abc125", videoDuration: 1200, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "Components & Variants", titleBn: "Components ও Variants", description: "Create reusable components in Figma.", videoUrl: "https://www.youtube.com/watch?v=abc126", videoDuration: 2400, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "Auto Layout Mastery", titleBn: "Auto Layout মাস্টারি", description: "Master Figma auto layout for responsive designs.", videoUrl: "https://www.youtube.com/watch?v=abc127", videoDuration: 2100, videoProvider: "youtube" as const, order: 3, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 2, title: "Interactive Prototyping", titleBn: "Interactive Prototyping", description: "Create clickable prototypes in Figma.", videoUrl: "https://www.youtube.com/watch?v=abc128", videoDuration: 1800, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 2, title: "Developer Handoff", titleBn: "Developer Handoff", description: "Prepare designs for development.", videoUrl: "https://www.youtube.com/watch?v=abc129", videoDuration: 1500, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const }
];

// ==================== Course 3: Web Development ====================
const webDevCourse = {
    title: "Full Stack Web Development Bootcamp",
    titleBn: "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট বুটক্যাম্প",
    slug: "full-stack-web-development-bootcamp",
    description: `Become a full-stack web developer with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.

Build real-world projects including e-commerce sites, social media apps, and APIs. By the end, you'll have the skills to build and deploy professional web applications.

This is the most complete web development course available in Bangla.`,
    descriptionBn: `এই comprehensive bootcamp দিয়ে full-stack web developer হন। HTML, CSS, JavaScript, React, Node.js, Express, MongoDB এবং আরও অনেক কিছু শিখুন।`,
    shortDescription: "Learn full-stack web development. Build real projects with React, Node.js, and MongoDB. Get job-ready skills.",
    shortDescriptionBn: "Full-stack web development শিখুন। React, Node.js, MongoDB দিয়ে real projects তৈরি করুন।",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    previewVideo: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    bannerImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200",
    tags: ["web development", "html", "css", "javascript", "react", "node.js", "mongodb", "full stack"],
    price: 7999,
    discountPrice: 4499,
    currency: "BDT" as const,
    isFree: false,
    courseType: "recorded" as const,
    level: "beginner" as const,
    language: "bangla" as const,
    features: [
        "80+ hours of HD video content",
        "15+ Real-world Projects",
        "Source Code Access",
        "Lifetime access",
        "Certificate of completion",
        "Job Assistance",
        "Interview Preparation"
    ],
    requirements: [
        "No programming experience needed",
        "A computer with internet",
        "Dedication to learn"
    ],
    whatYouWillLearn: [
        "HTML5 and CSS3 Fundamentals",
        "JavaScript ES6+ Complete",
        "React.js with Hooks and Context",
        "Node.js and Express.js",
        "MongoDB and Mongoose",
        "REST API Development",
        "Authentication and Security",
        "Deployment to Cloud"
    ],
    targetAudience: [
        "Complete beginners",
        "Career changers",
        "Students and graduates",
        "Anyone interested in web development"
    ],
    status: "published" as const,
    isFeatured: true,
    isPopular: true,
    publishedAt: new Date()
};

const webDevModules = [
    {
        title: "Module 1: Frontend Fundamentals",
        titleBn: "মডিউল ১: Frontend ফান্ডামেন্টালস",
        description: "Learn HTML, CSS, and JavaScript basics.",
        order: 1,
        isPublished: true
    },
    {
        title: "Module 2: React.js Development",
        titleBn: "মডিউল ২: React.js ডেভেলপমেন্ট",
        description: "Build modern frontend applications with React.",
        order: 2,
        isPublished: true
    },
    {
        title: "Module 3: Backend with Node.js",
        titleBn: "মডিউল ৩: Node.js ব্যাকএন্ড",
        description: "Create APIs and server-side applications.",
        order: 3,
        isPublished: true
    },
    {
        title: "Module 4: Database & Deployment",
        titleBn: "মডিউল ৪: ডাটাবেস ও ডিপ্লয়মেন্ট",
        description: "Work with MongoDB and deploy applications.",
        order: 4,
        isPublished: true
    }
];

const webDevLessons = [
    { moduleIndex: 0, title: "HTML5 Basics", titleBn: "HTML5 বেসিকস", description: "Learn HTML document structure.", videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE", videoDuration: 1800, videoProvider: "youtube" as const, order: 1, isFree: true, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 0, title: "CSS3 Styling", titleBn: "CSS3 স্টাইলিং", description: "Master CSS for beautiful designs.", videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc", videoDuration: 2400, videoProvider: "youtube" as const, order: 2, isFree: true, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 0, title: "JavaScript Basics", titleBn: "JavaScript বেসিকস", description: "Introduction to JavaScript programming.", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk", videoDuration: 2100, videoProvider: "youtube" as const, order: 3, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "React Introduction", titleBn: "React পরিচিতি", description: "Getting started with React.", videoUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0", videoDuration: 1500, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "Components & Props", titleBn: "Components ও Props", description: "Building reusable components.", videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4", videoDuration: 2100, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 1, title: "React Hooks", titleBn: "React Hooks", description: "State management with hooks.", videoUrl: "https://www.youtube.com/watch?v=O6P86uwfdR0", videoDuration: 2700, videoProvider: "youtube" as const, order: 3, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 2, title: "Node.js Basics", titleBn: "Node.js বেসিকস", description: "Introduction to server-side JavaScript.", videoUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4", videoDuration: 1800, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 2, title: "Express.js APIs", titleBn: "Express.js APIs", description: "Building REST APIs with Express.", videoUrl: "https://www.youtube.com/watch?v=L72fhGm1tfE", videoDuration: 2400, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 3, title: "MongoDB Basics", titleBn: "MongoDB বেসিকস", description: "NoSQL database fundamentals.", videoUrl: "https://www.youtube.com/watch?v=pWbMrx5rVBE", videoDuration: 2100, videoProvider: "youtube" as const, order: 1, isFree: false, isPublished: true, lessonType: "video" as const },
    { moduleIndex: 3, title: "Deployment", titleBn: "ডিপ্লয়মেন্ট", description: "Deploy to Vercel and cloud.", videoUrl: "https://www.youtube.com/watch?v=5ICTz1QNXEI", videoDuration: 1500, videoProvider: "youtube" as const, order: 2, isFree: false, isPublished: true, lessonType: "video" as const }
];

// ==================== Helper Function ====================
async function createCourse(courseData: any, modulesData: any[], lessonsData: any[], categoryId: mongoose.Types.ObjectId) {
    // Create Course
    const course = await Course.create({
        ...courseData,
        category: categoryId,
        modules: [],
        lessons: [],
        totalDuration: 0,
        totalLessons: lessonsData.length,
        totalModules: modulesData.length
    });
    console.log(`   ✅ Course: ${course.title}`);

    // Create Modules
    const createdModules: any[] = [];
    for (const moduleData of modulesData) {
        const module = await Module.create({
            ...moduleData,
            course: course._id
        });
        createdModules.push(module);
    }
    console.log(`   📦 ${createdModules.length} Modules created`);

    // Create Lessons
    const createdLessons: any[] = [];
    let totalDuration = 0;
    for (const lessonData of lessonsData) {
        const module = createdModules[lessonData.moduleIndex];
        const lesson = await Lesson.create({
            ...lessonData,
            course: course._id,
            module: module._id
        });
        createdLessons.push(lesson);
        totalDuration += lessonData.videoDuration || 0;
    }
    console.log(`   📖 ${createdLessons.length} Lessons created`);

    // Update course references
    await Course.findByIdAndUpdate(course._id, {
        modules: createdModules.map(m => m._id),
        lessons: createdLessons.map(l => l._id),
        totalDuration: Math.round(totalDuration / 60),
        totalLessons: createdLessons.length,
        totalModules: createdModules.length
    });

    return course;
}

// ==================== Main Seeder Function ====================
async function seed3Courses() {
    try {
        console.log('🚀 Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        // Find or create course category
        let category = await Category.findOne({ type: 'course' });
        if (!category) {
            category = await Category.create({
                name: 'Course',
                slug: 'course',
                type: 'course',
                description: 'Online courses'
            });
            console.log('✅ Created category: Course\n');
        }

        console.log('═══════════════════════════════════════════════════');
        console.log('📚 CREATING 3 NEW COURSES');
        console.log('═══════════════════════════════════════════════════\n');

        // Create Course 1: Illustrator
        console.log('🎨 Creating Illustrator Course...');
        await createCourse(illustratorCourse, illustratorModules, illustratorLessons, category._id);

        // Create Course 2: UI/UX
        console.log('\n🖌️ Creating UI/UX Course...');
        await createCourse(uiuxCourse, uiuxModules, uiuxLessons, category._id);

        // Create Course 3: Web Development
        console.log('\n💻 Creating Web Development Course...');
        await createCourse(webDevCourse, webDevModules, webDevLessons, category._id);

        console.log('\n═══════════════════════════════════════════════════');
        console.log('🎉 ALL 3 COURSES CREATED SUCCESSFULLY!');
        console.log('═══════════════════════════════════════════════════');
        console.log('\n📋 Summary:');
        console.log('   1. Mastering Adobe Illustrator with AI');
        console.log('   2. Complete UI/UX Design Masterclass 2024');
        console.log('   3. Full Stack Web Development Bootcamp');
        console.log('═══════════════════════════════════════════════════');

    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('\n📡 Disconnected from MongoDB');
        process.exit(0);
    }
}

// Run the seeder
seed3Courses();

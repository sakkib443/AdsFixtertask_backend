// ===================================================================
// CreativeHub LMS - 3 New Courses Seeder
// Run: node src/scripts/seed3Courses.js
// ===================================================================

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://melm:melm@cluster0.b5kfivm.mongodb.net/melmDB?appName=Cluster0';

// ==================== Schemas ====================
const categorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    type: String,
    description: String,
    status: { type: String, default: 'active' }
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
    title: String,
    titleBn: String,
    slug: { type: String, unique: true },
    description: String,
    descriptionBn: String,
    shortDescription: String,
    shortDescriptionBn: String,
    thumbnail: String,
    previewVideo: String,
    bannerImage: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    tags: [String],
    price: Number,
    discountPrice: Number,
    currency: { type: String, default: 'BDT' },
    isFree: { type: Boolean, default: false },
    courseType: { type: String, default: 'recorded' },
    level: { type: String, default: 'beginner' },
    language: { type: String, default: 'bangla' },
    totalDuration: { type: Number, default: 0 },
    totalLessons: { type: Number, default: 0 },
    totalModules: { type: Number, default: 0 },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    features: [String],
    requirements: [String],
    whatYouWillLearn: [String],
    targetAudience: [String],
    status: { type: String, default: 'published' },
    isFeatured: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    totalEnrollments: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    likeCount: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId }],
    metaTitle: String,
    metaDescription: String,
    publishedAt: Date
}, { timestamps: true });

const moduleSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    title: String,
    titleBn: String,
    description: String,
    order: Number,
    isPublished: { type: Boolean, default: true }
}, { timestamps: true });

const lessonSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
    title: String,
    titleBn: String,
    description: String,
    videoUrl: String,
    videoDuration: Number,
    videoProvider: { type: String, default: 'youtube' },
    order: Number,
    isFree: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    lessonType: { type: String, default: 'video' }
}, { timestamps: true });

// ==================== Models ====================
const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
const Module = mongoose.models.Module || mongoose.model('Module', moduleSchema);
const Lesson = mongoose.models.Lesson || mongoose.model('Lesson', lessonSchema);

// ==================== Course 1: Adobe Illustrator with AI ====================
const illustratorCourse = {
    title: "Mastering Adobe Illustrator with AI",
    titleBn: "AI দিয়ে Adobe Illustrator মাস্টারিং",
    slug: "mastering-adobe-illustrator-with-ai",
    description: `Learn to create stunning vector graphics using Adobe Illustrator combined with AI-powered design tools. Master pen tool techniques, create complex illustrations, design logos, icons, and learn how to use AI tools like Adobe Firefly to enhance your creative process.`,
    descriptionBn: `AI-powered design tools এর সাথে Adobe Illustrator ব্যবহার করে stunning vector graphics তৈরি করতে শিখুন।`,
    shortDescription: "Master vector graphics with Adobe Illustrator and AI tools.",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    previewVideo: "https://www.youtube.com/watch?v=Ib8UBwu3yGA",
    bannerImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
    tags: ["illustrator", "adobe", "vector", "ai", "design", "graphics", "logo"],
    price: 5999,
    discountPrice: 3499,
    currency: "BDT",
    courseType: "recorded",
    level: "intermediate",
    features: ["40+ hours of HD content", "AI Tools Integration", "100+ Project Files", "Lifetime access", "Certificate"],
    requirements: ["Basic computer knowledge", "Adobe Illustrator installed"],
    whatYouWillLearn: ["Master Illustrator tools", "Create logos and brand identities", "Use AI tools for design", "Design icons and infographics"],
    targetAudience: ["Graphic designers", "Beginners in illustration", "Marketing professionals"],
    status: "published",
    isFeatured: true,
    isPopular: true,
    metaTitle: "Mastering Adobe Illustrator with AI",
    metaDescription: "Learn vector graphics with AI-powered design tools.",
    publishedAt: new Date()
};

const illustratorModules = [
    { title: "Module 1: Illustrator Fundamentals", titleBn: "মডিউল ১: Illustrator ফান্ডামেন্টালস", description: "Learn the basics of Illustrator.", order: 1 },
    { title: "Module 2: Advanced Vector Techniques", titleBn: "মডিউল ২: Advanced Vector টেকনিক", description: "Master pen tool and pathfinder.", order: 2 },
    { title: "Module 3: AI-Powered Design", titleBn: "মডিউল ৩: AI-Powered ডিজাইন", description: "Integrate AI tools.", order: 3 }
];

const illustratorLessons = [
    { moduleIndex: 0, title: "Introduction to Illustrator", titleBn: "Illustrator পরিচিতি", description: "Getting started.", videoUrl: "https://www.youtube.com/watch?v=Ib8UBwu3yGA", videoDuration: 1500, order: 1, isFree: true },
    { moduleIndex: 0, title: "Artboards & Navigation", titleBn: "Artboards ও Navigation", description: "Document setup.", videoUrl: "https://www.youtube.com/watch?v=xyz123", videoDuration: 1200, order: 2, isFree: true },
    { moduleIndex: 0, title: "Basic Shape Tools", titleBn: "Basic Shape Tools", description: "Creating shapes.", videoUrl: "https://www.youtube.com/watch?v=xyz124", videoDuration: 1800, order: 3, isFree: false },
    { moduleIndex: 1, title: "Pen Tool Mastery", titleBn: "Pen Tool মাস্টারি", description: "Precise vector paths.", videoUrl: "https://www.youtube.com/watch?v=xyz125", videoDuration: 2400, order: 1, isFree: false },
    { moduleIndex: 1, title: "Pathfinder Operations", titleBn: "Pathfinder অপারেশন", description: "Combine shapes.", videoUrl: "https://www.youtube.com/watch?v=xyz126", videoDuration: 1800, order: 2, isFree: false },
    { moduleIndex: 2, title: "Using Adobe Firefly", titleBn: "Adobe Firefly ব্যবহার", description: "AI design generation.", videoUrl: "https://www.youtube.com/watch?v=xyz127", videoDuration: 2100, order: 1, isFree: false },
    { moduleIndex: 2, title: "AI-Assisted Logo Design", titleBn: "AI-Assisted Logo", description: "Logos with AI.", videoUrl: "https://www.youtube.com/watch?v=xyz128", videoDuration: 2700, order: 2, isFree: false }
];

// ==================== Course 2: UI/UX Design ====================
const uiuxCourse = {
    title: "Complete UI/UX Design Masterclass 2024",
    titleBn: "সম্পূর্ণ UI/UX ডিজাইন মাস্টারক্লাস ২০২৪",
    slug: "complete-ui-ux-design-masterclass-2024",
    description: `Become a professional UI/UX designer with this complete masterclass. Learn user research, wireframing, prototyping, and visual design using Figma.`,
    descriptionBn: `এই complete masterclass দিয়ে professional UI/UX designer হন।`,
    shortDescription: "Master UI/UX design with Figma.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    previewVideo: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
    bannerImage: "https://images.unsplash.com/photo-1586717799252-bd134f5c0b98?w=1200",
    tags: ["ui", "ux", "design", "figma", "prototype"],
    price: 6999,
    discountPrice: 3999,
    currency: "BDT",
    courseType: "recorded",
    level: "beginner",
    features: ["60+ hours of HD content", "20+ Projects", "Figma Files", "Lifetime access", "Certificate"],
    requirements: ["No prior design experience needed", "Figma (free)"],
    whatYouWillLearn: ["User Research", "Wireframing and Prototyping", "Visual Design", "Figma Advanced Techniques"],
    targetAudience: ["Complete beginners", "Graphic designers", "Developers"],
    status: "published",
    isFeatured: true,
    isPopular: true,
    metaTitle: "Complete UI/UX Design Masterclass 2024",
    metaDescription: "Master UI/UX design with Figma.",
    publishedAt: new Date()
};

const uiuxModules = [
    { title: "Module 1: UX Design Foundations", titleBn: "মডিউল ১: UX ফাউন্ডেশন", description: "User experience principles.", order: 1 },
    { title: "Module 2: UI Design with Figma", titleBn: "মডিউল ২: Figma UI ডিজাইন", description: "Master Figma.", order: 2 },
    { title: "Module 3: Prototyping & Handoff", titleBn: "মডিউল ৩: Prototyping", description: "Interactive prototypes.", order: 3 }
];

const uiuxLessons = [
    { moduleIndex: 0, title: "What is UX Design?", titleBn: "UX Design কি?", description: "Introduction.", videoUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", videoDuration: 1200, order: 1, isFree: true },
    { moduleIndex: 0, title: "User Research Methods", titleBn: "User Research পদ্ধতি", description: "Research techniques.", videoUrl: "https://www.youtube.com/watch?v=abc123", videoDuration: 1800, order: 2, isFree: true },
    { moduleIndex: 0, title: "Creating User Personas", titleBn: "User Persona তৈরি", description: "Build personas.", videoUrl: "https://www.youtube.com/watch?v=abc124", videoDuration: 1500, order: 3, isFree: false },
    { moduleIndex: 1, title: "Figma Interface Tour", titleBn: "Figma Interface টুর", description: "Figma workspace.", videoUrl: "https://www.youtube.com/watch?v=abc125", videoDuration: 1200, order: 1, isFree: false },
    { moduleIndex: 1, title: "Components & Variants", titleBn: "Components ও Variants", description: "Reusable components.", videoUrl: "https://www.youtube.com/watch?v=abc126", videoDuration: 2400, order: 2, isFree: false },
    { moduleIndex: 1, title: "Auto Layout Mastery", titleBn: "Auto Layout মাস্টারি", description: "Responsive designs.", videoUrl: "https://www.youtube.com/watch?v=abc127", videoDuration: 2100, order: 3, isFree: false },
    { moduleIndex: 2, title: "Interactive Prototyping", titleBn: "Interactive Prototyping", description: "Clickable prototypes.", videoUrl: "https://www.youtube.com/watch?v=abc128", videoDuration: 1800, order: 1, isFree: false },
    { moduleIndex: 2, title: "Developer Handoff", titleBn: "Developer Handoff", description: "Prepare for dev.", videoUrl: "https://www.youtube.com/watch?v=abc129", videoDuration: 1500, order: 2, isFree: false }
];

// ==================== Course 3: Web Development ====================
const webDevCourse = {
    title: "Full Stack Web Development Bootcamp",
    titleBn: "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট বুটক্যাম্প",
    slug: "full-stack-web-development-bootcamp",
    description: `Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.`,
    descriptionBn: `Full-stack web developer হন।`,
    shortDescription: "Learn full-stack web development with React, Node.js, MongoDB.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    previewVideo: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    bannerImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200",
    tags: ["web development", "html", "css", "javascript", "react", "node.js", "mongodb"],
    price: 7999,
    discountPrice: 4499,
    currency: "BDT",
    courseType: "recorded",
    level: "beginner",
    features: ["80+ hours of content", "15+ Projects", "Source Code", "Lifetime access", "Certificate"],
    requirements: ["No programming experience needed", "A computer with internet"],
    whatYouWillLearn: ["HTML5 and CSS3", "JavaScript ES6+", "React.js", "Node.js", "MongoDB"],
    targetAudience: ["Complete beginners", "Career changers", "Students"],
    status: "published",
    isFeatured: true,
    isPopular: true,
    metaTitle: "Full Stack Web Development Bootcamp",
    metaDescription: "Learn full-stack web development.",
    publishedAt: new Date()
};

const webDevModules = [
    { title: "Module 1: Frontend Fundamentals", titleBn: "মডিউল ১: Frontend ফান্ডামেন্টালস", description: "HTML, CSS, JavaScript.", order: 1 },
    { title: "Module 2: React.js Development", titleBn: "মডিউল ২: React.js ডেভেলপমেন্ট", description: "Modern frontend.", order: 2 },
    { title: "Module 3: Backend with Node.js", titleBn: "মডিউল ৩: Node.js ব্যাকএন্ড", description: "Server-side.", order: 3 },
    { title: "Module 4: Database & Deployment", titleBn: "মডিউল ৪: ডাটাবেস ও ডিপ্লয়মেন্ট", description: "MongoDB and deploy.", order: 4 }
];

const webDevLessons = [
    { moduleIndex: 0, title: "HTML5 Basics", titleBn: "HTML5 বেসিকস", description: "HTML structure.", videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE", videoDuration: 1800, order: 1, isFree: true },
    { moduleIndex: 0, title: "CSS3 Styling", titleBn: "CSS3 স্টাইলিং", description: "CSS for designs.", videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc", videoDuration: 2400, order: 2, isFree: true },
    { moduleIndex: 0, title: "JavaScript Basics", titleBn: "JavaScript বেসিকস", description: "JS programming.", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk", videoDuration: 2100, order: 3, isFree: false },
    { moduleIndex: 1, title: "React Introduction", titleBn: "React পরিচিতি", description: "Getting started.", videoUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0", videoDuration: 1500, order: 1, isFree: false },
    { moduleIndex: 1, title: "Components & Props", titleBn: "Components ও Props", description: "Reusable components.", videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4", videoDuration: 2100, order: 2, isFree: false },
    { moduleIndex: 1, title: "React Hooks", titleBn: "React Hooks", description: "State management.", videoUrl: "https://www.youtube.com/watch?v=O6P86uwfdR0", videoDuration: 2700, order: 3, isFree: false },
    { moduleIndex: 2, title: "Node.js Basics", titleBn: "Node.js বেসিকস", description: "Server-side JS.", videoUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4", videoDuration: 1800, order: 1, isFree: false },
    { moduleIndex: 2, title: "Express.js APIs", titleBn: "Express.js APIs", description: "Building REST APIs.", videoUrl: "https://www.youtube.com/watch?v=L72fhGm1tfE", videoDuration: 2400, order: 2, isFree: false },
    { moduleIndex: 3, title: "MongoDB Basics", titleBn: "MongoDB বেসিকস", description: "NoSQL database.", videoUrl: "https://www.youtube.com/watch?v=pWbMrx5rVBE", videoDuration: 2100, order: 1, isFree: false },
    { moduleIndex: 3, title: "Deployment", titleBn: "ডিপ্লয়মেন্ট", description: "Deploy to cloud.", videoUrl: "https://www.youtube.com/watch?v=5ICTz1QNXEI", videoDuration: 1500, order: 2, isFree: false }
];

// ==================== Helper Function ====================
async function createCourse(courseData, modulesData, lessonsData, categoryId, courseName) {
    console.log(`\n🎨 Creating ${courseName}...`);

    // Check if already exists
    const existing = await Course.findOne({ slug: courseData.slug });
    if (existing) {
        console.log(`   ⚠️ Course already exists, skipping...`);
        return null;
    }

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

    const createdModules = [];
    for (const moduleData of modulesData) {
        const module = await Module.create({ ...moduleData, course: course._id, isPublished: true });
        createdModules.push(module);
    }
    console.log(`   📦 ${createdModules.length} Modules created`);

    const createdLessons = [];
    let totalDuration = 0;
    for (const lessonData of lessonsData) {
        const module = createdModules[lessonData.moduleIndex];
        const lesson = await Lesson.create({
            ...lessonData,
            course: course._id,
            module: module._id,
            videoProvider: 'youtube',
            lessonType: 'video',
            isPublished: true
        });
        createdLessons.push(lesson);
        totalDuration += lessonData.videoDuration || 0;
    }
    console.log(`   📖 ${createdLessons.length} Lessons created`);

    await Course.findByIdAndUpdate(course._id, {
        modules: createdModules.map(m => m._id),
        lessons: createdLessons.map(l => l._id),
        totalDuration: Math.round(totalDuration / 60),
        totalLessons: createdLessons.length,
        totalModules: createdModules.length
    });

    return course;
}

// ==================== Main Seeder ====================
async function seed3Courses() {
    try {
        console.log('🚀 Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB');

        // Find or create category
        let category = await Category.findOne({ type: 'course' });
        if (!category) {
            category = await Category.create({
                name: 'Course',
                slug: 'course',
                type: 'course',
                description: 'Online courses'
            });
            console.log('✅ Created category: Course');
        } else {
            console.log('✅ Found category:', category.name);
        }

        console.log('\n═══════════════════════════════════════════════════');
        console.log('📚 CREATING 3 NEW COURSES');
        console.log('═══════════════════════════════════════════════════');

        // Create Course 1
        await createCourse(illustratorCourse, illustratorModules, illustratorLessons, category._id, 'Illustrator Course');

        // Create Course 2
        await createCourse(uiuxCourse, uiuxModules, uiuxLessons, category._id, 'UI/UX Course');

        // Create Course 3
        await createCourse(webDevCourse, webDevModules, webDevLessons, category._id, 'Web Development Course');

        console.log('\n═══════════════════════════════════════════════════');
        console.log('🎉 ALL 3 COURSES CREATED SUCCESSFULLY!');
        console.log('═══════════════════════════════════════════════════');
        console.log('\n📋 Summary:');
        console.log('   1. Mastering Adobe Illustrator with AI');
        console.log('   2. Complete UI/UX Design Masterclass 2024');
        console.log('   3. Full Stack Web Development Bootcamp');
        console.log('═══════════════════════════════════════════════════');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('\n📡 Disconnected from MongoDB');
        process.exit(0);
    }
}

seed3Courses();

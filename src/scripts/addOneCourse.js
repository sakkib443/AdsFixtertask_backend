// Add 1 more course - Motion Graphics & Video Editing
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://melm:melm@cluster0.b5kfivm.mongodb.net/melmDB?appName=Cluster0';

// Schemas
const categorySchema = new mongoose.Schema({
    name: String, slug: String, type: String, description: String,
    status: { type: String, default: 'active' }
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
    title: String, titleBn: String, slug: { type: String, unique: true },
    description: String, descriptionBn: String, shortDescription: String,
    thumbnail: String, previewVideo: String, bannerImage: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    tags: [String], price: Number, discountPrice: Number,
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
    features: [String], requirements: [String],
    whatYouWillLearn: [String], targetAudience: [String],
    status: { type: String, default: 'published' },
    isFeatured: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    totalEnrollments: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    likeCount: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId }],
    metaTitle: String, metaDescription: String, publishedAt: Date
}, { timestamps: true });

const moduleSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    title: String, titleBn: String, description: String,
    order: Number, isPublished: { type: Boolean, default: true }
}, { timestamps: true });

const lessonSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
    title: String, titleBn: String, description: String,
    videoUrl: String, videoDuration: Number,
    videoProvider: { type: String, default: 'youtube' },
    order: Number, isFree: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    lessonType: { type: String, default: 'video' }
}, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
const Module = mongoose.models.Module || mongoose.model('Module', moduleSchema);
const Lesson = mongoose.models.Lesson || mongoose.model('Lesson', lessonSchema);

// ==================== Motion Graphics Course ====================
const motionCourse = {
    title: "Motion Graphics & Video Editing Masterclass",
    titleBn: "মোশন গ্রাফিক্স ও ভিডিও এডিটিং মাস্টারক্লাস",
    slug: "motion-graphics-video-editing-masterclass",
    description: `Master motion graphics and video editing with After Effects and Premiere Pro. Create stunning animations, visual effects, and professional videos from scratch.

Learn industry-standard techniques for creating motion graphics, lower thirds, title sequences, and promotional videos. Perfect for content creators, video editors, and aspiring motion designers.`,
    descriptionBn: `After Effects ও Premiere Pro দিয়ে motion graphics এবং video editing শিখুন। Stunning animations এবং professional videos তৈরি করুন।`,
    shortDescription: "Master After Effects & Premiere Pro. Create stunning motion graphics and edit professional videos.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
    previewVideo: "https://www.youtube.com/watch?v=YP3RwNzEJVg",
    bannerImage: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200",
    tags: ["motion graphics", "after effects", "premiere pro", "video editing", "animation", "vfx"],
    price: 6499,
    discountPrice: 3799,
    currency: "BDT",
    courseType: "recorded",
    level: "intermediate",
    features: ["55+ hours of HD content", "50+ Project Files", "After Effects Templates", "Premiere Pro Presets", "Lifetime access", "Certificate"],
    requirements: ["Basic computer knowledge", "After Effects & Premiere Pro installed", "Creative mindset"],
    whatYouWillLearn: ["After Effects fundamentals", "Motion graphics animation", "Video editing in Premiere Pro", "Visual effects (VFX)", "Color grading", "Export & delivery"],
    targetAudience: ["Video editors", "Content creators", "YouTubers", "Aspiring motion designers"],
    status: "published",
    isFeatured: true,
    isPopular: true,
    metaTitle: "Motion Graphics & Video Editing Masterclass",
    metaDescription: "Master After Effects and Premiere Pro for stunning motion graphics.",
    publishedAt: new Date()
};

const motionModules = [
    { title: "Module 1: After Effects Fundamentals", titleBn: "মডিউল ১: After Effects ফান্ডামেন্টালস", description: "Learn After Effects basics.", order: 1 },
    { title: "Module 2: Animation & Motion Graphics", titleBn: "মডিউল ২: Animation ও Motion Graphics", description: "Create stunning animations.", order: 2 },
    { title: "Module 3: Premiere Pro Editing", titleBn: "মডিউল ৩: Premiere Pro এডিটিং", description: "Master video editing.", order: 3 },
    { title: "Module 4: VFX & Color Grading", titleBn: "মডিউল ৪: VFX ও Color Grading", description: "Visual effects and color.", order: 4 }
];

const motionLessons = [
    { moduleIndex: 0, title: "Introduction to After Effects", titleBn: "After Effects পরিচিতি", description: "Getting started.", videoUrl: "https://www.youtube.com/watch?v=YP3RwNzEJVg", videoDuration: 1800, order: 1, isFree: true },
    { moduleIndex: 0, title: "Interface & Workspace", titleBn: "Interface ও Workspace", description: "AE workspace.", videoUrl: "https://www.youtube.com/watch?v=xyz201", videoDuration: 1500, order: 2, isFree: true },
    { moduleIndex: 0, title: "Layers & Compositions", titleBn: "Layers ও Compositions", description: "Working with layers.", videoUrl: "https://www.youtube.com/watch?v=xyz202", videoDuration: 2100, order: 3, isFree: false },
    { moduleIndex: 1, title: "Keyframe Animation", titleBn: "Keyframe Animation", description: "Animation basics.", videoUrl: "https://www.youtube.com/watch?v=xyz203", videoDuration: 2400, order: 1, isFree: false },
    { moduleIndex: 1, title: "Shape Layer Animation", titleBn: "Shape Layer Animation", description: "Animate shapes.", videoUrl: "https://www.youtube.com/watch?v=xyz204", videoDuration: 2100, order: 2, isFree: false },
    { moduleIndex: 1, title: "Text Animation", titleBn: "Text Animation", description: "Kinetic typography.", videoUrl: "https://www.youtube.com/watch?v=xyz205", videoDuration: 1800, order: 3, isFree: false },
    { moduleIndex: 2, title: "Premiere Pro Basics", titleBn: "Premiere Pro বেসিকস", description: "Getting started.", videoUrl: "https://www.youtube.com/watch?v=xyz206", videoDuration: 1500, order: 1, isFree: false },
    { moduleIndex: 2, title: "Video Editing Workflow", titleBn: "Video Editing Workflow", description: "Edit workflow.", videoUrl: "https://www.youtube.com/watch?v=xyz207", videoDuration: 2400, order: 2, isFree: false },
    { moduleIndex: 2, title: "Audio Editing & Mixing", titleBn: "Audio Editing ও Mixing", description: "Audio work.", videoUrl: "https://www.youtube.com/watch?v=xyz208", videoDuration: 1800, order: 3, isFree: false },
    { moduleIndex: 3, title: "Visual Effects Basics", titleBn: "VFX বেসিকস", description: "VFX fundamentals.", videoUrl: "https://www.youtube.com/watch?v=xyz209", videoDuration: 2100, order: 1, isFree: false },
    { moduleIndex: 3, title: "Color Grading Techniques", titleBn: "Color Grading টেকনিক", description: "Color correction.", videoUrl: "https://www.youtube.com/watch?v=xyz210", videoDuration: 1800, order: 2, isFree: false }
];

async function addCourse() {
    try {
        console.log('🚀 Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB');

        let category = await Category.findOne({ type: 'course' });
        if (!category) {
            category = await Category.create({ name: 'Course', slug: 'course', type: 'course', description: 'Online courses' });
        }

        // Check if exists
        const existing = await Course.findOne({ slug: motionCourse.slug });
        if (existing) {
            console.log('⚠️ Course already exists!');
            await mongoose.disconnect();
            process.exit(0);
            return;
        }

        console.log('\n🎬 Creating Motion Graphics Course...');

        const course = await Course.create({
            ...motionCourse,
            category: category._id,
            modules: [],
            lessons: [],
            totalLessons: motionLessons.length,
            totalModules: motionModules.length
        });
        console.log('   ✅ Course created:', course.title);

        const createdModules = [];
        for (const m of motionModules) {
            const mod = await Module.create({ ...m, course: course._id, isPublished: true });
            createdModules.push(mod);
        }
        console.log('   📦 Modules:', createdModules.length);

        const createdLessons = [];
        let totalDuration = 0;
        for (const l of motionLessons) {
            const mod = createdModules[l.moduleIndex];
            const lesson = await Lesson.create({ ...l, course: course._id, module: mod._id, videoProvider: 'youtube', lessonType: 'video', isPublished: true });
            createdLessons.push(lesson);
            totalDuration += l.videoDuration || 0;
        }
        console.log('   📖 Lessons:', createdLessons.length);

        await Course.findByIdAndUpdate(course._id, {
            modules: createdModules.map(m => m._id),
            lessons: createdLessons.map(l => l._id),
            totalDuration: Math.round(totalDuration / 60),
            totalLessons: createdLessons.length,
            totalModules: createdModules.length
        });

        console.log('\n═══════════════════════════════════════════════════');
        console.log('🎉 COURSE ADDED SUCCESSFULLY!');
        console.log('   Motion Graphics & Video Editing Masterclass');
        console.log('   4 Modules, 11 Lessons');
        console.log('═══════════════════════════════════════════════════');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('\n📡 Disconnected');
        process.exit(0);
    }
}

addCourse();

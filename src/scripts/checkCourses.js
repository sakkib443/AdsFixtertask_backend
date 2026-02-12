const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://melm:melm@cluster0.b5kfivm.mongodb.net/melmDB?appName=Cluster0';

async function checkAll() {
    try {
        await mongoose.connect(MONGO_URI);
        const db = mongoose.connection.db;

        const courses = await db.collection('courses').find({}).toArray();
        const modules = await db.collection('modules').find({}).toArray();
        const lessons = await db.collection('lessons').find({}).toArray();

        console.log('COURSES:', courses.length);
        courses.forEach((c, i) => {
            console.log(`${i + 1}. ${c.title} | Modules: ${c.totalModules} | Lessons: ${c.totalLessons}`);
        });
        console.log('\nMODULES:', modules.length);
        console.log('LESSONS:', lessons.length);

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
}
checkAll();

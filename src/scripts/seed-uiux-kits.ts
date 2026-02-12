// ===================================================================
// UI/UX Kit Seed Data - Insert 4 Sample UI Kits
// Run: npx ts-node src/scripts/seed-uiux-kits.ts
// ===================================================================

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

// UI Kit Schema (inline for seeding)
const uiKitSchema = new mongoose.Schema({
    title: String,
    slug: String,
    description: String,
    shortDescription: String,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    tags: [String],
    thumbnail: String,
    previewImages: [String],
    previewVideo: String,
    livePreviewUrl: String,
    mainFile: { url: String, size: Number, format: String },
    software: [String],
    screens: { type: Number, default: 0 },
    components: { type: Number, default: 0 },
    icons: { type: Number, default: 0 },
    responsive: { type: Boolean, default: true },
    darkMode: { type: Boolean, default: false },
    price: { type: Number, default: 0 },
    salePrice: Number,
    features: [String],
    highlights: [String],
    whatIncluded: [String],
    views: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    sales: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    status: { type: String, default: 'published' },
    isFeatured: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    version: { type: String, default: '1.0' },
    seoTitle: String,
    seoDescription: String,
    publishedAt: Date,
}, { timestamps: true });

const UIKit = mongoose.model('UIKit', uiKitSchema);

const sampleUIKits = [
    {
        title: "Modern Dashboard Pro UI Kit",
        slug: "modern-dashboard-pro-ui-kit",
        description: "A comprehensive dashboard UI kit designed for analytics, admin panels, and SaaS applications. Features 150+ unique screens, 500+ components, and a complete design system with auto-layout support.",
        shortDescription: "Premium dashboard UI kit with 150+ screens for Figma",
        type: "dashboard",
        tags: ["dashboard", "admin", "analytics", "saas", "figma"],
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        previewImages: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"
        ],
        livePreviewUrl: "https://preview.example.com/dashboard",
        mainFile: { url: "https://files.example.com/dashboard-pro.fig", size: 156, format: "fig" },
        software: ["figma"],
        screens: 150,
        components: 500,
        icons: 250,
        responsive: true,
        darkMode: true,
        price: 4999,
        salePrice: 2999,
        features: [
            "150+ Unique Screens",
            "500+ UI Components",
            "Auto-layout Support",
            "Dark & Light Mode",
            "Responsive Design",
            "Free Lifetime Updates",
            "Premium Support"
        ],
        highlights: ["Best Seller", "Top Rated", "New Release"],
        whatIncluded: [
            "Figma Source File",
            "Complete Design System",
            "Icons Library (250+ icons)",
            "Documentation",
            "Free Updates"
        ],
        views: 15420,
        downloads: 1234,
        sales: 856,
        rating: 4.9,
        reviewCount: 127,
        status: "published",
        isFeatured: true,
        isBestSeller: true,
        version: "2.0",
        publishedAt: new Date(),
    },
    {
        title: "Mobile App Design System",
        slug: "mobile-app-design-system",
        description: "Complete mobile app UI kit with iOS and Android design patterns. Perfect for fintech, social, e-commerce, and lifestyle apps. Includes gesture animations and micro-interactions.",
        shortDescription: "iOS & Android UI kit with 200+ screens",
        type: "mobile-app",
        tags: ["mobile", "ios", "android", "app", "fintech"],
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        previewImages: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop"
        ],
        mainFile: { url: "https://files.example.com/mobile-design.fig", size: 98, format: "fig" },
        software: ["figma", "sketch"],
        screens: 200,
        components: 350,
        icons: 180,
        responsive: true,
        darkMode: true,
        price: 3999,
        salePrice: null,
        features: [
            "200+ Mobile Screens",
            "iOS & Android Variants",
            "Gesture Animations",
            "Component Variables",
            "Dark Mode Ready"
        ],
        highlights: ["Trending", "Editor's Pick"],
        whatIncluded: [
            "Figma & Sketch Files",
            "iOS Design Guidelines",
            "Android Material Design",
            "Icon Set",
            "Documentation"
        ],
        views: 8750,
        downloads: 654,
        sales: 421,
        rating: 4.7,
        reviewCount: 89,
        status: "published",
        isFeatured: true,
        isBestSeller: false,
        version: "1.5",
        publishedAt: new Date(),
    },
    {
        title: "E-commerce Starter Kit",
        slug: "ecommerce-starter-kit",
        description: "Everything you need to design a modern e-commerce platform. From product pages to checkout flows, this kit covers all aspects of online shopping experience.",
        shortDescription: "Complete e-commerce UI kit for online stores",
        type: "ecommerce",
        tags: ["ecommerce", "shop", "store", "product", "checkout"],
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        previewImages: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop"
        ],
        mainFile: { url: "https://files.example.com/ecommerce-kit.fig", size: 78, format: "fig" },
        software: ["figma", "xd"],
        screens: 80,
        components: 200,
        icons: 120,
        responsive: true,
        darkMode: false,
        price: 2499,
        salePrice: 1499,
        features: [
            "80+ Unique Screens",
            "Product Page Templates",
            "Checkout Flow Designs",
            "Cart & Wishlist Components",
            "Mobile Responsive"
        ],
        highlights: ["Sale", "Popular"],
        whatIncluded: [
            "Figma & XD Files",
            "E-commerce Components",
            "Checkout Templates",
            "Email Templates",
            "Support"
        ],
        views: 12300,
        downloads: 892,
        sales: 567,
        rating: 4.6,
        reviewCount: 76,
        status: "published",
        isFeatured: false,
        isBestSeller: true,
        version: "1.2",
        publishedAt: new Date(),
    },
    {
        title: "SaaS Landing Page Kit",
        slug: "saas-landing-page-kit",
        description: "High-converting landing page templates for SaaS products, startups, and tech companies. Includes pricing tables, feature sections, testimonials, and more.",
        shortDescription: "Landing page templates for SaaS & startups",
        type: "landing-page",
        tags: ["landing", "saas", "startup", "marketing", "conversion"],
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        previewImages: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop"
        ],
        mainFile: { url: "https://files.example.com/saas-landing.fig", size: 45, format: "fig" },
        software: ["figma"],
        screens: 25,
        components: 150,
        icons: 80,
        responsive: true,
        darkMode: true,
        price: 1999,
        salePrice: null,
        features: [
            "25+ Landing Page Layouts",
            "Pricing Section Templates",
            "Feature Showcases",
            "Testimonial Components",
            "CTA Sections"
        ],
        highlights: ["New", "Startup Friendly"],
        whatIncluded: [
            "Figma Source File",
            "Landing Page Templates",
            "Marketing Components",
            "Icon Pack",
            "Free Updates"
        ],
        views: 6890,
        downloads: 432,
        sales: 289,
        rating: 4.8,
        reviewCount: 54,
        status: "published",
        isFeatured: true,
        isBestSeller: false,
        version: "1.0",
        publishedAt: new Date(),
    }
];

async function seedUIKits() {
    try {
        const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/creativehub';
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(mongoUri);
        console.log('✅ Connected to MongoDB');

        // Get admin user for seller field
        const User = mongoose.model('User', new mongoose.Schema({ role: String }));
        const adminUser: any = await User.findOne({ role: 'admin' });
        const sellerId = adminUser?._id || new mongoose.Types.ObjectId();

        if (!adminUser) {
            console.log('⚠️ No admin user found, using placeholder ID');
        }

        // Get or create UI Kit category
        const Category = mongoose.model('Category', new mongoose.Schema({ name: String, type: String, slug: String }));
        let category: any = await Category.findOne({ type: 'ui-kit' });

        if (!category) {
            category = await Category.create({
                name: 'UI/UX Kits',
                type: 'ui-kit',
                slug: 'ui-ux-kits'
            });
            console.log('📁 Created UI Kit category');
        }

        // Add seller and category to sample data
        const kitsWithRefs = sampleUIKits.map(kit => ({
            ...kit,
            seller: sellerId,
            category: category._id
        }));

        // Clear existing and insert new
        await UIKit.deleteMany({});
        console.log('🗑️ Cleared existing UI Kits');

        const result = await UIKit.insertMany(kitsWithRefs);
        console.log(`✅ Inserted ${result.length} UI/UX Kits successfully!`);

        result.forEach((kit, i) => {
            console.log(`   ${i + 1}. ${kit.title} (${kit.slug})`);
        });

        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding UI Kits:', error);
        process.exit(1);
    }
}

seedUIKits();

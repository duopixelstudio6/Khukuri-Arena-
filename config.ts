/**
 * =========================================================================
 * KHUKURI ARENA - OFFICIAL CONFIGURATION FILE
 * =========================================================================
 * 
 * You can edit this file on GitHub or any text editor on your Android phone!
 * 
 * 1. APK_DOWNLOAD_URL: Paste your direct APK download link here.
 *    - When left empty (""), the website displays "Download link coming soon"
 *      and keeps the button disabled to prevent broken downloads.
 *    - Once you provide a valid URL, the button activates immediately.
 * 
 * 2. SITE_URL: Update this with your live custom domain or hosting link.
 * 
 * 3. CONTACT_CONFIG: Update your support email, WhatsApp, or community channels.
 */

// 1. APK DOWNLOAD LINK (Leave empty "" until your APK is uploaded)
export const APK_DOWNLOAD_URL: string = "";

// 2. OFFICIAL APP SPECIFICATIONS
export const APP_DETAILS = {
  name: "Khukuri Arena",
  tagline: "Your Arena. Your Victory.",
  shortDescription: "Join Free Fire tournaments, compete with players, and claim your victories with Khukuri Arena.",
  platform: "Android",
  packageType: "APK",
  version: "1.0",
  fileSize: "27.5 MB",
  releaseDate: "2026",
  developer: "Duo Pixel Studio",
  targetGame: "Garena Free Fire",
  country: "Nepal",
  paymentMethods: ["eSewa", "Khalti"],
} as const;

// 3. OFFICIAL CANONICAL DOMAIN
export const SITE_URL: string = "https://khukuriarena.com";

// 4. OFFICIAL CONTACT & DEVELOPER CHANNELS
export const CONTACT_CONFIG = {
  developerStudio: "Duo Pixel Studio",
  supportEmail: "duopixelstudio6@gmail.com",
  whatsappNumber: "+9779846711977",
  whatsappUrl: "https://wa.me/9779846711977",
  mailtoUrl: "mailto:duopixelstudio6@gmail.com",
  supportHours: "10:00 AM – 10:00 PM NPT (Nepal Standard Time)",
};

// 5. OFFICIAL BRAND ASSET PATHS
export const BRAND_ASSETS = {
  logo: "/Khukuri_Arena_Logo_512x512.png",
  logoSrc: "/Khukuri_Arena_Logo_512x512.png",
  favicon: "/favicon.png",
  ogImage: "/og-image.jpg",
};

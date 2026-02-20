export const siteConfig = {
    name: "Dhruvil Textiles",
    description: "Premium Textile Manufacturing and Export",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://dhruviltextiles.vercel.app",
    ogImage: "https://dhruviltextiles.vercel.app/og.jpg",
    links: {
        twitter: "https://twitter.com/dhruviltextiles",
        github: "https://github.com/dhruvilgundarwala",
    },
    contact: {
        email: "dhruviltextiles.owner@gmail.com",
        phone: "+91 XXXXXXXXXX",
        address: "Surat, Gujarat, India",
    },
};

export type SiteConfig = typeof siteConfig;

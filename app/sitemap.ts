import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://ballal-group.vercel.app";return ["/","/catalogue","/a-propos","/contact","/services/transaction","/services/gestion-locative","/services/conseil"].map(url=>({url:base+url,lastModified:new Date()}))}

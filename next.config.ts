import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@react-email/render", "@react-email/components", "nodemailer"],
};

export default nextConfig;

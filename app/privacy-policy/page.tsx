import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Unimart",
  description: "Privacy Policy for Unimart mobile application.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Privacy Policy for Unimart</h1>
        <p className="text-gray-500 text-lg mb-10"><strong>Last Updated:</strong> April 16, 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Introduction</h2>
            <p className="mb-4">
              Unimart ("we", "our", or "us") operates a mobile application that allows users to browse, purchase, and manage products online. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </p>
            <p>
              By using Unimart, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Information We Collect</h2>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-900">a) Personal Information</h3>
            <p className="mb-3">We may collect personally identifiable information, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Shipping and billing address</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-900">b) Payment Information</h3>
            <p className="mb-6">
              Payments made through Unimart are processed securely by third-party payment providers. We do not store or have direct access to your full card details.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-900">c) Device and Usage Information</h3>
            <p className="mb-3">We may automatically collect certain information when you use the app, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Device type and operating system</li>
              <li>App usage data and interactions</li>
              <li>IP address</li>
              <li>Log data</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-900">d) Advertising ID</h3>
            <p className="mb-3">Our application may use the Advertising ID provided by <strong>Google</strong> to:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Deliver relevant advertisements</li>
              <li>Measure ad performance</li>
              <li>Improve user experience</li>
            </ul>
            <p>
              Users can reset or disable their Advertising ID through their device settings.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage your account</li>
              <li>Process and fulfill orders</li>
              <li>Communicate with you (order updates, support)</li>
              <li>Improve our services and user experience</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Analyze app performance and usage trends</li>
              <li>Provide personalized content and advertisements (if applicable)</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Sharing Your Information</h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Payment processors (to complete transactions)</li>
              <li>Hosting and cloud service providers</li>
              <li>Analytics providers</li>
              <li>Delivery or logistics partners (where applicable)</li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Data Retention</h2>
            <p className="mb-3">We retain your personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">8. Children's Privacy</h2>
            <p>
              Unimart is not intended for use by children under the age of 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any significant changes by updating the "Last Updated" date.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">10. Contact Us</h2>
            <p className="mb-3">
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <p>
              Email: <a href="mailto:jilloerick6@gmail.com" className="text-emerald-600 hover:text-emerald-700 underline font-medium">jilloerick6@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

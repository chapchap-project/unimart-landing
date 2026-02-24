import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
  email?: string;
}

export const WaitlistEmail = ({ email }: WaitlistEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the Unimart Waitlist! 🚀</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Text style={logo}>Unimart</Text>
        </Section>
        <Heading style={h1}>You&apos;re officially on the list!</Heading>
        <Text style={text}>
          Hi {email?.split("@")[0] || "there"},
        </Text>
        <Text style={text}>
          Thanks for joining the Unimart waitlist. We&apos;re building the ultimate
          shopping experience for students, and we&apos;re so excited to have you with
          us.
        </Text>
        <Section style={featureSection}>
          <Text style={featureTitle}>What&apos;s next?</Text>
          <Text style={text}>
            We&apos;ll notify you as soon as we&apos;re ready for you to join. In the
            meantime, follow us for updates and early sneak peeks.
          </Text>
        </Section>
        <Text style={footer}>
          Unimart &copy; {new Date().getFullYear()} • The Student Marketplace
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WaitlistEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const logoContainer = {
  marginTop: "32px",
};

const logo = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#059669", // emerald-600
  textAlign: "center" as const,
  margin: "0",
};

const h1 = {
  color: "#1f2937", // gray-800
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const text = {
  color: "#4b5563", // gray-600
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "left" as const,
};

const featureSection = {
  backgroundColor: "#f0fdf4", // emerald-50
  padding: "20px",
  borderRadius: "12px",
  margin: "24px 0",
};

const featureTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#065f46", // emerald-800
  margin: "0 0 10px 0",
};

const footer = {
  color: "#9ca3af", // gray-400
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "48px",
};

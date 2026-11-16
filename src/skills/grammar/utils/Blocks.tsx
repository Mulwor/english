
import {
  Card,
  Typography,
  Divider,
  Row,
  Col,
  Alert,
  Space,
  Tooltip,
} from "antd";

const { Title, Text, Paragraph } = Typography;

export const Example = ({ en, ru }: { en: string; ru: string }) => (
  <div
    style={{
      padding: "11px 14px",
      background: "#f8fafc",
      borderRadius: 10,
      marginBottom: 8,
      border: "1px solid #edf0f5",
    }}
  >
    <Text strong style={{ display: "block", color: "#25324b" }}>
      {en} - <Text type="secondary">{ru}</Text>
    </Text>
  </div>
);

export const Syntax = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#f0f5ff",
      border: "1px solid #d6e4ff",
      borderRadius: 10,
      padding: "18px 16px",
      margin: "14px 0",
      textAlign: "center",
      lineHeight: 2.5,
    }}
  >
    {children}
  </div>
);

// SECTION TITLE
export const SectionTitle = ({
  number,
  title,
  subtitle,
  color,
  icon,
}: {
  number: string;
  title: string;
  subtitle?: string;
  color: string;
  icon: React.ReactNode;
}) => (
  <Space align="start" size={12}>
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 13,
        background: color,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: 19,
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <Text type="secondary" style={{ fontSize: 11, fontWeight: 700 }}>
        TYPE {number}
      </Text>
      <Title level={4} style={{ margin: "2px 0" }}>
        {title}
      </Title>
      <Text type="secondary">{subtitle}</Text>
    </div>
  </Space>
);

export const SectionCard = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <Card
    bordered={false}
    style={{
      borderRadius: 18,
      borderTop: `4px solid ${color}`,
      boxShadow: "0 5px 24px rgba(20, 40, 80, 0.05)",
      height: "100%",
    }}
    styles={{ body: { padding: 22 } }}
  >
    {children}
  </Card>
);
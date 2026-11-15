import React from "react";
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
import {
  HistoryOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  SwapOutlined,
  ToolOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// TOOLTIP TERMS
const TooltipTerm = ({
  term,
  description,
  color,
}: {
  term: string;
  description: string;
  color: string;
}) => (
  <Tooltip title={description} placement="top" mouseEnterDelay={0.2}>
    <Text
      strong
      style={{
        color,
        cursor: "help",
        borderBottom: `1px dashed ${color}`,
        paddingBottom: 2,
      }}
    >
      {term}
    </Text>
  </Tooltip>
);

// EXAMPLE
const Example = ({
  en,
  ru,
}: {
  en: string;
  ru: string;
}) => (
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

// SYNTAX CONTAINER
const Syntax = ({ children }: { children: React.ReactNode }) => (
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
const SectionTitle = ({
  number,
  title,
  subtitle,
  color,
  icon,
}: {
  number: string;
  title: string;
  subtitle: string;
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

// SECTION CARD
const SectionCard = ({
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

// MAIN COMPONENT
export const UsedToDo = () => {
  const sections = [
    { n: "01", name: "Used To + V1", ru: "прошлые привычки", color: "#1677ff", id: "used-to" },
    { n: "02", name: "Be Used To + V-ing", ru: "быть привычным", color: "#eb2f96", id: "be-used-to" },
    { n: "03", name: "Get Used To + V-ing", ru: "привыкать", color: "#722ed1", id: "get-used-to" },
    { n: "04", name: "Used To vs Be Used To", ru: "сравнение конструкций", color: "#08979c", id: "compare" },
    { n: "05", name: "Be Used To Do", ru: "используется для", color: "#13a8a8", id: "passive" },
    { n: "06", name: "Common Mistakes", ru: "частые ошибки", color: "#52c41a", id: "mistakes" },
  ];

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "0px 20px",
        background: "#f5f7fb",
        borderRadius: 20,
        color: "#25324b",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(120deg, #102a56, #2457a6)",
          borderRadius: 22,
          padding: "34px 28px",
          color: "#fff",
          marginBottom: 25,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Title level={3} style={{ color: "#fff", margin: "0px 0 8px" }}>
          Used To Do &amp; Be Used To Doing — Прошлые привычки и привычка к чему-то
        </Title>
        <Paragraph style={{ color: "#c5d6f3", marginTop: 16, marginBottom: 0, maxWidth: 720 }}>
          В английском есть несколько конструкций и указано на каком уровне изучается та или иная конструкция
        </Paragraph>
      </div>

      {/* OVERVIEW */}
      <Row gutter={[12, 12]} style={{ marginBottom: 28 }}>
        {sections.map((item) => (
          <Col xs={12} sm={8} key={item.n}>
            <Card
              hoverable
              bordered={false}
              onClick={() => scrollToSection(item.id)}
              style={{
                borderRadius: 14,
                textAlign: "center",
                boxShadow: "0 3px 14px rgba(0,0,0,0.035)",
                cursor: "pointer",
                height: "100%",
              }}
              styles={{ body: { padding: "18px 8px" } }}
            >
              <Title level={3} style={{ color: item.color, margin: 0 }}>{item.n}</Title>
              <Text strong>{item.name}</Text>
              <br />
              <Text type="secondary" style={{ fontSize: 12 }}>{item.ru}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 01 USED TO + V1 */}
      <div id="used-to" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#1677ff">
          <SectionTitle
            number="01"
            title="Used To + Infinitive"
            subtitle="Прошлые привычки и состояния"
            color="#1677ff"
            icon={<HistoryOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Конструкция <Text strong>used to + V1</Text> описывает регулярное действие
            или состояние в прошлом, которое <Text strong>больше не происходит</Text> сейчас.
            Используется <Text strong>только в прошедшем времени</Text>
          </Paragraph>
          <Syntax>
            <Text strong>Subject + used to + V1</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I used to live in London." ru="Раньше я жил в Лондоне (сейчас — нет)." />
              <Example en="She used to play tennis." ru="Раньше она играла в теннис." />
              <Example en="We used to be friends." ru="Когда-то мы были друзьями." />
              <Example en="He used to smoke." ru="Раньше он курил." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="They used to travel a lot." ru="Раньше они много путешествовали." />
              <Example en="I used to have long hair." ru="У меня раньше были длинные волосы." />
              <Example en="My grandfather used to tell stories." ru="Мой дедушка раньше рассказывал истории." />
              <Example en="There used to be a shop here." ru="Раньше здесь был магазин." />
            </Col>
          </Row>
        </SectionCard>
      </div>

      {/* 02 BE USED TO + V-ING */}
      <div id="be-used-to" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#eb2f96">
          <SectionTitle
            number="02"
            title="Be Used To + V-ing"
            subtitle="Быть привычным к чему-то"
            color="#eb2f96"
            icon={<CheckCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Be used to + V-ing / noun — «быть привычным к чему-либо». Здесь to — предлог, поэтому после него используется -ing форма или существительное. Обозначает состояние и употребляется в разных временах.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + am / is / are + used to + V-ing / noun</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I am used to getting up early." ru="Я привык рано вставать." />
              <Example en="She is used to hot weather." ru="Она привыкла к жаркой погоде." />
              <Example en="They are used to working late." ru="Они привыкли работать допоздна." />
              <Example en="He is used to the noise." ru="Он привык к шуму." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="I was used to living alone." ru="Я был привычен жить один." />
              <Example en="She will be used to the city soon." ru="Скоро она привыкнет к городу." />
              <Example en="We are used to this routine." ru="Мы привыкли к этому распорядку." />
              <Example en="He is not used to spicy food." ru="Он не привык к острой еде." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="warning"
            message="Важное правило"
            description="После be used to всегда идёт V-ing или существительное, потому что to — предлог. Нельзя сказать *I am used to get up early. Правильно: I am used to getting up early."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 03 GET USED TO + V-ING */}
      <div id="get-used-to" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#722ed1">
          <SectionTitle
            number="03"
            title="Get Used To + V-ing"
            subtitle="Привыкать к чему-то (процесс)"
            color="#722ed1"
            icon={<SyncOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            <Text strong>Get used to + V-ing / noun</Text> означает «привыкать», то есть
            показывает <Text strong>процесс</Text> становления привычки. Если{" "}
            <Text strong>be used to</Text> — это уже результат (быть привычным), то{" "}
            <Text strong>get used to</Text> — это путь к этому результату. Форма после{" "}
            <Text strong>to</Text> также <Text strong>-ing</Text> или существительное.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + am / is / are getting / got + used to + V-ing / noun</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I'm getting used to my new job." ru="Я привыкаю к своей новой работе." />
              <Example en="She got used to the cold weather." ru="Она привыкла к холодной погоде." />
              <Example en="They are getting used to the schedule." ru="Они привыкают к расписанию." />
              <Example en="He will get used to it." ru="Он к этому привыкнет." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="I'm slowly getting used to waking up early." ru="Я потихоньку привыкаю рано вставать." />
              <Example en="Did you get used to the food?" ru="Ты привык к еде?" />
              <Example en="It took me a month to get used to the accent." ru="Мне понадобился месяц, чтобы привыкнуть к акценту." />
              <Example en="She can't get used to the noise." ru="Она не может привыкнуть к шуму." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="info"
            message="Be vs Get"
            description="Be used to — уже привык (состояние). Get used to — привыкаю (процесс). Compare: I am used to the noise (я привык) → I am getting used to the noise (я привыкаю)."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 04 COMPARE */}
      <div id="compare" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#08979c">
          <SectionTitle
            number="04"
            title="Used To Do vs Be Used To Doing"
            subtitle="Ключевая разница между конструкциями"
            color="#08979c"
            icon={<SwapOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Это две совершенно разные конструкции, и их нельзя путать.{" "}
            <Text strong>Used to + V1</Text> — про <Text strong>прошлое</Text>, которого
            больше нет. <Text strong>Be used to + V-ing</Text> — про{" "}
            <Text strong>привычку</Text> в настоящем. Сравни пары предложений ниже.
          </Paragraph>
          <Divider />
          <Title level={5}>Used to + V1 — прошлая привычка (сейчас нет)</Title>
          <Example en="I used to drive to work." ru="Раньше я ездил на работу на машине. (сейчас уже нет)" />
          <Example en="She used to be a teacher." ru="Раньше она была учителем. (сейчас уже нет)" />
          <Divider />
          <Title level={5}>Be used to + V-ing — привычка (сейчас есть)</Title>
          <Example en="I am used to driving to work." ru="Я привык ездить на работу на машине." />
          <Example en="She is used to teaching children." ru="Она привыкла учить детей." />
          <Divider />
          <Title level={5}>Обе формы в одном контексте</Title>
          <Example en="I used to get up early." ru="Раньше я вставал рано. (привычка в прошлом)" />
          <Example en="I am used to getting up early." ru="Я привык рано вставать. (привычка в настоящем)" />
          <Alert
            showIcon
            type="success"
            message="Главный принцип"
            description="V1 после used to (без be) → про прошлое. V-ing после used to, если перед ним стоит am / is / are / get / got → про привычку в настоящем."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 05 BE USED TO DO (PASSIVE) */}
      <div id="passive" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#13a8a8">
          <SectionTitle
            number="05"
            title="Be Used To Do (Passive voice)"
            subtitle="«Используется, чтобы…»"
            color="#13a8a8"
            icon={<ToolOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Есть третья конструкция с тем же набором слов, но с другим смыслом. Здесь{" "}
            <Text strong>used</Text> — это причастие прошедшего времени от глагола{" "}
            <Text strong>use</Text> («использовать»), а не часть идиомы. Вся конструкция —{" "}
            <Text strong>пассив</Text>: «что-то используется, чтобы сделать что-то». Подлежащее
            — обычно не человек, а предмет или инструмент.
          </Paragraph>
          <Syntax>
            <Text strong>Subject (thing) + am / is / are + used + to + V1</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="A knife is used to cut bread." ru="Нож используется, чтобы резать хлеб." />
              <Example en="This room is used to store boxes." ru="Эта комната используется для хранения коробок." />
              <Example en="Computers are used to process data." ru="Компьютеры используются для обработки данных." />
              <Example en="A pen is used to write." ru="Ручка используется, чтобы писать." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="This app is used to learn English." ru="Это приложение используется для изучения английского." />
              <Example en="The key is used to open the door." ru="Ключ используется, чтобы открыть дверь." />
              <Example en="A thermometer is used to measure temperature." ru="Термометр используется для измерения температуры." />
              <Example en="These tools are used to repair cars." ru="Эти инструменты используются для ремонта машин." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="warning"
            message="Обрати внимание"
            description="После be used to в значении «быть привычным» идёт V-ing, а после be used to в значении «используется для» идёт V1 (инфинитив цели). Сравни: I am used to walking to work (привык) vs The app is used to track steps (используется для)."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 06 COMMON MISTAKES */}
      <div id="mistakes" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#52c41a">
          <SectionTitle
            number="06"
            title="Common Mistakes"
            subtitle="Частые ошибки и полезные подсказки"
            color="#52c41a"
            icon={<BulbOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Обрати внимание на типичные ошибки при использовании конструкций с{" "}
            <Text strong>used to</Text>.
          </Paragraph>
          <Title level={5}>Неправильно / Правильно</Title>
          <Example en="I am used to get up early. → I am used to getting up early." ru="Я привык рано вставать." />
          <Example en="I used to getting up early. → I used to get up early." ru="Раньше я рано вставал." />
          <Example en="I use to live in London. → I used to live in London." ru="Раньше я жил в Лондоне." />
          <Example en="Did you used to smoke? → Did you use to smoke?" ru="Ты раньше курил?" />
          <Example en="I didn't used to like coffee. → I didn't use to like coffee." ru="Раньше я не любил кофе." />
          <Example en="She is used to work late. → She is used to working late." ru="Она привыкла работать допоздна." />
          <Divider />
          <Alert
            showIcon
            type="warning"
            message="Важно помнить"
            description="В вопросах и отрицаниях с used to (прошлая привычка) пишется use to — без -d: Did you use to…? / I didn't use to… Окончание -d остаётся только в утвердительной форме: I used to…"
            style={{ borderRadius: 10, marginTop: 12 }}
          />
          <Alert
            showIcon
            type="info"
            message="Как быстро определить нужную конструкцию?"
            description="Задай себе два вопроса. 1) Речь о прошлой привычке, которой больше нет? → used to + V1. 2) Речь о том, что кто-то привык к чему-то? → be / get used to + V-ing. 3) Подлежащее — предмет, и речь о его назначении? → be used to + V1 (пассив)."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>
    </div>
  );
};
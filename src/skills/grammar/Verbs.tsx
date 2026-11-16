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
  ThunderboltOutlined,
  HeartOutlined,
  SwapOutlined,
  BulbOutlined,
  EyeOutlined,
  BookOutlined,
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
export const Verbs = () => {
  const sections = [
    { n: "01", name: "Action Verbs", ru: "действия и процессы", color: "#1677ff", id: "action" },
    { n: "02", name: "State Verbs", ru: "состояния и чувства", color: "#eb2f96", id: "state" },
    { n: "03", name: "Groups of State Verbs", ru: "основные группы", color: "#722ed1", id: "groups" },
    { n: "04", name: "Both Meanings", ru: "глаголы с двумя значениями", color: "#08979c", id: "both" },
    { n: "05", name: "Present Simple / Continuous", ru: "выбор времени", color: "#13a8a8", id: "tenses" },
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
          Action Verbs & State Verbs -  Глаголы действия и состояния
        </Title>
        <Paragraph style={{ color: "#c5d6f3", marginTop: 16, marginBottom: 0, maxWidth: 700 }}>
          В английском языке глаголы могут описывать действия и процессы или состояния,
          чувства, мысли и отношения. От этого часто зависит, можно ли использовать
          глагол во временах группы Continuous.
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

      {/* 01 ACTION VERBS */}
      <div id="action" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#1677ff">
          <SectionTitle
            number="01"
            title="Action Verbs"
            subtitle="Глаголы действия"
            color="#1677ff"
            icon={<ThunderboltOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            <Text strong>Action verbs</Text> описывают действия, которые кто-то или что-то
            выполняет. Это могут быть физические действия, например бег, приготовление еды
            или письмо, а также умственная деятельность, например изучение или обдумывание
            чего-либо. Такие глаголы обычно можно использовать в <Text strong>Present Continuous</Text>,
            если действие происходит прямо сейчас или находится в процессе.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + am / is / are + V-ing</Text>
            <br />
            <Text type="secondary">I am reading. / She is working.</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I am cooking dinner." ru="Я готовлю ужин (сейчас)." />
              <Example en="She is running in the park." ru="Она бегает в парке (сейчас)." />
              <Example en="They are watching a movie." ru="Они смотрят фильм." />
              <Example en="He is learning Spanish." ru="Он изучает испанский." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="The baby is sleeping." ru="Ребёнок спит." />
              <Example en="We are discussing the project." ru="Мы обсуждаем проект." />
              <Example en="I am writing an email." ru="Я пишу электронное письмо." />
              <Example en="She is thinking about the problem." ru="Она обдумывает проблему." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="info"
            message="Запомни"
            description="Action verbs часто отвечают на вопрос «Что делает?». Если действие происходит в момент речи, обычно используем Present Continuous. Если говорим о привычке или регулярном действии — Present Simple: I read every evening."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 02 STATE VERBS */}
      <div id="state" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#eb2f96">
          <SectionTitle
            number="02"
            title="State Verbs"
            subtitle="Глаголы состояния"
            color="#eb2f96"
            icon={<HeartOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            <Text strong>State verbs</Text> описывают не действие, а состояние: чувства,
            эмоции, мысли, мнение, владение, восприятие или отношения. Обычно они не
            используются в формах Continuous, потому что обозначают состояние, а не
            процесс, который развивается прямо сейчас.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + V1 / V-s</Text>
            <br />
            <Text type="secondary">I know the answer. / She likes music.</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I know the answer." ru="Я знаю ответ." />
              <Example en="She loves her family." ru="Она любит свою семью." />
              <Example en="He believes you." ru="Он верит тебе." />
              <Example en="This bag belongs to me." ru="Эта сумка принадлежит мне." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="I understand the question." ru="Я понимаю вопрос." />
              <Example en="They need more time." ru="Им нужно больше времени." />
              <Example en="This soup tastes delicious." ru="Этот суп очень вкусный." />
              <Example en="She seems tired." ru="Она кажется уставшей." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="warning"
            message="Важное правило"
            description="Обычно мы не говорим I am knowing, She is liking или They are believing. В стандартном значении правильно: I know, She likes, They believe."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 03 GROUPS OF STATE VERBS */}
      <div id="groups" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#722ed1">
          <SectionTitle
            number="03"
            title="Groups of State Verbs"
            subtitle="Основные группы глаголов состояния"
            color="#722ed1"
            icon={<BookOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Глаголы состояния удобно запоминать по смысловым группам. Это не закрытый список:
            один и тот же глагол в зависимости от значения может вести себя по-разному.
          </Paragraph>
          <Divider />
          <Title level={5}>1. Чувства и эмоции</Title>
          <Text type="secondary">love, like, hate, prefer, want, wish</Text>
          <Row gutter={12} style={{ marginTop: 10 }}>
            <Col xs={24} md={12}>
              <Example en="I prefer tea to coffee." ru="Я предпочитаю чай кофе." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="He wants a new phone." ru="Он хочет новый телефон." />
            </Col>
          </Row>
          <Divider />
          <Title level={5}>2. Мысли, знания и мнение</Title>
          <Text type="secondary">know, understand, believe, remember, forget, mean, agree</Text>
          <Row gutter={12} style={{ marginTop: 10 }}>
            <Col xs={24} md={12}>
              <Example en="I remember her name." ru="Я помню её имя." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="She agrees with you." ru="Она согласна с тобой." />
            </Col>
          </Row>
          <Divider />
          <Title level={5}>3. Владение и отношения</Title>
          <Text type="secondary">have (в значении «владеть»), own, belong, possess</Text>
          <Row gutter={12} style={{ marginTop: 10 }}>
            <Col xs={24} md={12}>
              <Example en="He owns a small house." ru="У него есть небольшой дом (он владеет им)." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="This key belongs to Anna." ru="Этот ключ принадлежит Анне." />
            </Col>
          </Row>
          <Divider />
          <Title level={5}>4. Восприятие и ощущения</Title>
          <Text type="secondary">see, hear, smell, taste, feel (в значении состояния)</Text>
          <Row gutter={12} style={{ marginTop: 10 }}>
            <Col xs={24} md={12}>
              <Example en="I hear music." ru="Я слышу музыку." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="The flowers smell wonderful." ru="Цветы чудесно пахнут." />
            </Col>
          </Row>
        </SectionCard>
      </div>

      {/* 04 VERBS WITH BOTH MEANINGS */}
      <div id="both" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#08979c">
          <SectionTitle
            number="04"
            title="Verbs with Both Meanings"
            subtitle="Глаголы, которые могут быть Action и State Verbs"
            color="#08979c"
            icon={<SwapOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Некоторые глаголы могут обозначать и состояние, и действие. В этом случае
            меняется значение глагола, а вместе с ним — возможность использовать Continuous.
            Важно смотреть не только на сам глагол, но и на смысл всего предложения.
          </Paragraph>
          <Divider />
          <Title level={5}>Think — думать / считать</Title>
          <Example en="I think you are right." ru="Я считаю, что ты прав. (мнение — State)" />
          <Example en="I am thinking about my future." ru="Я размышляю о своём будущем. (процесс — Action)" />
          <Divider />
          <Title level={5}>Have — владеть / проводить, принимать, переживать</Title>
          <Example en="She has a car." ru="У неё есть машина. (владение — State)" />
          <Example en="She is having lunch." ru="Она обедает. (действие — Action)" />
          <Divider />
          <Title level={5}>See — видеть / встречаться</Title>
          <Example en="I see a bird in the tree." ru="Я вижу птицу на дереве. (восприятие — State)" />
          <Example en="I am seeing my dentist tomorrow." ru="Завтра я встречаюсь со стоматологом. (запланированная встреча — Action)" />
          <Divider />
          <Title level={5}>Taste — иметь вкус / пробовать на вкус</Title>
          <Example en="The cake tastes sweet." ru="У торта сладкий вкус. (характеристика — State)" />
          <Example en="The chef is tasting the soup." ru="Повар пробует суп. (действие — Action)" />
          <Divider />
          <Title level={5}>Smell — пахнуть / нюхать</Title>
          <Example en="The coffee smells good." ru="Кофе хорошо пахнет. (характеристика — State)" />
          <Example en="She is smelling the flowers." ru="Она нюхает цветы. (действие — Action)" />
          <Divider />
          <Title level={5}>Look — выглядеть / смотреть</Title>
          <Example en="You look tired." ru="Ты выглядишь уставшим. (впечатление — State)" />
          <Example en="He is looking at the photo." ru="Он смотрит на фотографию. (действие — Action)" />
          <Alert
            showIcon
            type="success"
            message="Главный принцип"
            description="Если глагол описывает состояние или характеристику — обычно используем Simple. Если он обозначает намеренное действие или процесс — Continuous может быть уместен."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 05 TENSE CHOICE */}
      <div id="tenses" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#13a8a8">
          <SectionTitle
            number="05"
            title="Present Simple or Present Continuous?"
            subtitle="Как выбрать правильное время"
            color="#13a8a8"
            icon={<EyeOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Выбор времени зависит от того, что именно мы хотим сказать: описать привычку,
            факт или состояние либо показать действие в процессе.
          </Paragraph>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Card bordered={false} style={{ background: "#f0f5ff", borderRadius: 12, height: "100%" }}>
                <Title level={5} style={{ color: "#1677ff" }}>Present Simple</Title>
                <Text>Используем для:</Text>
                <ul>
                  <li>привычек и регулярных действий;</li>
                  <li>фактов и постоянных ситуаций;</li>
                  <li>глаголов состояния.</li>
                </ul>
                <Example en="I work every day." ru="Я работаю каждый день." />
                <Example en="I know the answer." ru="Я знаю ответ." />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card bordered={false} style={{ background: "#e6fffb", borderRadius: 12, height: "100%" }}>
                <Title level={5} style={{ color: "#08979c" }}>Present Continuous</Title>
                <Text>Используем для:</Text>
                <ul>
                  <li>действий прямо сейчас;</li>
                  <li>временных ситуаций;</li>
                  <li>процессов, происходящих в данный период.</li>
                </ul>
                <Example en="I am working now." ru="Я сейчас работаю." />
                <Example en="I am learning English this year." ru="В этом году я изучаю английский." />
              </Card>
            </Col>
          </Row>
          <Syntax>
            <Text strong>Present Simple:</Text> Subject + V1 / V-s
            <br />
            <Text strong>Present Continuous:</Text> Subject + am / is / are + V-ing
          </Syntax>
          <Alert
            showIcon
            type="info"
            message="Не путай форму и значение"
            description="Само по себе окончание -ing не делает глагол Action Verb. Сначала определяем значение глагола в предложении, а затем выбираем время."
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
            Обрати внимание на типичные ошибки при использовании глаголов состояния.
          </Paragraph>
          <Title level={5}>Неправильно / Правильно</Title>
          <Example en="I am knowing the answer. → I know the answer." ru="Я знаю ответ." />
          <Example en="She is liking this song. → She likes this song." ru="Ей нравится эта песня." />
          <Example en="He is having a car. → He has a car." ru="У него есть машина." />
          <Example en="I am believing you. → I believe you." ru="Я верю тебе." />
          <Divider />
          <Alert
            showIcon
            type="warning"
            message="Важно помнить"
            description="Правило «State Verbs не используются в Continuous» — полезное общее правило, но не абсолютное. Некоторые глаголы меняют значение и могут употребляться в Continuous: I am thinking, She is having lunch, He is seeing a doctor."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
          <Alert
            showIcon
            type="info"
            message="Как быстро определить тип глагола?"
            description="Спроси себя: глагол описывает состояние, чувство, мнение, знание или владение? Скорее всего, это State Verb. Он описывает действие или процесс? Скорее всего, это Action Verb. Если возможны оба значения, проверь контекст."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>
    </div>
  );
};
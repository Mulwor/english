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
  MessageOutlined,
  QuestionCircleOutlined,
  SwapOutlined,
  TagsOutlined,
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
  <Tooltip
    title={description}
    placement="top"
    mouseEnterDelay={0.2}
  >
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
    <Text
      strong
      style={{
        display: "block",
        color: "#25324b",
      }}
    >
      {en} - <Text type="secondary">{ru}</Text>
    </Text>
  </div>
);

// SYNTAX CONTAINER
const Syntax = ({
  children,
}: {
  children: React.ReactNode;
}) => (
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
      <Text
        type="secondary"
        style={{
          fontSize: 11,
          fontWeight: 700,
        }}
      >
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
    styles={{
      body: {
        padding: 22,
      },
    }}
  >
    {children}
  </Card>
);

// MAIN COMPONENT
export const ModalWindow = () => {
  const sections = [
    { n: "01", name: "Can / Could / Be able to", ru: "способность и возможность", color: "#1677ff", id: "ability" },
    { n: "02", name: "Must / Have to", ru: "обязанность и необходимость", color: "#eb2f96", id: "obligation" },
    { n: "03", name: "May / Might", ru: "вероятность и разрешение", color: "#722ed1", id: "possibility" },
    { n: "04", name: "Should", ru: "совет и рекомендация", color: "#08979c", id: "should" },
    { n: "05", name: "Would", ru: "вежливые просьбы и условные ситуации", color: "#13a8a8", id: "would" },
    { n: "06", name: "Need / Need to / Needn't", ru: "необходимость", color: "#52c41a", id: "need" },
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
          Modal Verbs
        </Title>
        <Paragraph style={{ color: "#c5d6f3", marginTop: 16, marginBottom: 0, maxWidth: 680 }}>
          Модальные глаголы выражают отношение говорящего к действию: способность,
          возможность, разрешение, обязанность, необходимость, совет или вероятность.
        </Paragraph>
      </div>

      {/* OVERVIEW */}
      <Row gutter={[12, 12]} style={{ marginBottom: 28 }}>
        {sections.map((item) => (
          <Col xs={12} sm={6} key={item.n}>
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

      {/* 01 CAN / COULD / BE ABLE TO */}
      <div id="ability" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#1677ff">
          <SectionTitle number="01" title="Can / Could / Be able to" subtitle="Способность, умение и возможность" color="#1677ff" icon={<BulbOutlined />} />
          <Paragraph style={{ marginTop: 20 }}>
            <Text strong>Can</Text> означает «мочь», «уметь» или «иметь возможность что-то сделать» используется в наст.времени, если нам нужно прошедшее время 
            мы используем Could, так же could можно использовать для вежливой формы - Could you help me? — Не могли бы вы мне помочь?. Что же касается can't - это как не мочь, так же и запрет на какое-то действия
            <br />
            <Text strong>Be able to</Text> означает «мочь», «быть способным что-то сделать». Похоже на CAN, но BE ABLE TO можно использовать в разных временах, например в будущем: I will be able to — «Я смогу». (Нельзя сказать I will can.)
          </Paragraph>
          <Syntax>
            <Text strong>Subject + can (not) / could (not) + V1</Text><br />
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I can swim." ru="Я умею плавать." />
              <Example en="She can speak English." ru="Она умеет говорить по-английски." />
              <Example en="She can't come today." ru="Она не может прийти сегодня." />
              <Example en="You can't park here." ru="Здесь нельзя парковаться." />
              <Example en="This can't be true." ru="Это не может быть правдой." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="Could you help me?" ru="Не могли бы вы мне помочь?" />
              <Example en="I can't drive." ru="Я не умею водить." />
              <Example en="We couldn't find the address." ru="Мы не смогли найти адрес." />
             <Example en="He could run very fast when he was young." ru="В молодости он мог очень быстро бегать." />
            </Col>
          </Row>
          <Divider />
          <Title level={5}>Be able to</Title>
          <Syntax>
            <Text strong>Subject + be (am / is / are / was / were / will be) + able to + V1</Text>
          </Syntax>
          <Example en="I am able to help you." ru="Я могу тебе помочь." />
          <Example en="She was able to finish the work." ru="Она смогла закончить работу." />
          <Example en="Will you be able to come tomorrow?" ru="Ты сможешь прийти завтра?" />
          <Alert showIcon type="info" message="Запомни" description="После can и could используется V1 без to: can swim, could work. В конструкции be able to частица to обязательна: am able to swim." style={{ borderRadius: 10, marginTop: 12 }} />
        </SectionCard>
      </div>

      {/* 02 MUST / HAVE TO */}
      <div id="obligation" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#eb2f96">
          <SectionTitle number="02" title="Must / Have to" subtitle="Обязанность и необходимость" color="#eb2f96" icon={<TagsOutlined />} />
          <Paragraph style={{ marginTop: 20 }}>
            <Text strong>Must</Text> означает «должен» (внутреннее решение, сильная необходимость), «обязан», «нужно». Используется, когда говорим о строгой необходимости, обязанности или важном правиле.
            <Text strong> Have to</Text> означает «должен» (внешние обстоятельства, правила), «приходится», «нужно что-то сделать». Если говорить про отличия, то в must ты сам считаешь что должен, а в have 
            to обстоятельства за тебя решают
          </Paragraph>
          <Syntax>
            <Text strong>Subject + must (not) or have / has (not) + V1</Text><br />
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I must study harder." ru="Я должен учиться усерднее." />
              <Example en="You must wear a seat belt." ru="Ты обязан пристёгиваться ремнём." />
              <Example en="She has to work every day." ru="Ей приходится работать каждый день." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="We have to get up early." ru="Нам нужно вставать рано." />
              <Example en="He doesn't have to cook." ru="Ему необязательно готовить." />
              <Example en="Do I have to do this now?" ru="Я должен сделать это сейчас?" />
            </Col>
          </Row>
          <Alert showIcon type="warning" message="Важное различие" description="Mustn't означает «нельзя, запрещено». Don't have to означает «необязательно, нет необходимости». Например: You mustn't smoke here — Здесь нельзя курить. You don't have to come early — Тебе необязательно приходить рано." style={{ borderRadius: 10, marginTop: 12 }} />
        </SectionCard>
      </div>

      {/* 04 MAY / MIGHT */}
      <div id="possibility" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#722ed1">
          <SectionTitle number="03" title="May / Might" subtitle="Вероятность и разрешение" color="#722ed1" icon={<QuestionCircleOutlined />} />
          <Paragraph style={{ marginTop: 20 }}>
May — используется для выражения вероятности («возможно») и вежливого разрешения («можно»). <br />
Might — используется для выражения возможности или предположения, часто с меньшей уверенностью («может быть»).
          Необходимо помнить, что разница в уверенности не строгая: иногда MAY и MIGHT взаимозаменяемы.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + may (not) / might (not) + V1</Text><br />
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="It may rain tomorrow." ru="Завтра, возможно, будет дождь." />
              <Example en="She may come later." ru="Возможно, она придёт позже." />
              <Example en="May I come in?" ru="Можно мне войти?" />
            </Col>
            <Col xs={24} md={12}>
              <Example en="He might be busy." ru="Возможно, он занят." />
              <Example en="They might not agree." ru="Возможно, они не согласятся." />
              <Example en="May I ask you a question?" ru="Можно задать вам вопрос?" />
            </Col>
          </Row>
        </SectionCard>
      </div>

      {/* 05 SHOULD */}
      <div id="should" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#08979c">
          <SectionTitle number="04" title="Should" subtitle="Совет, рекомендация и то, что правильно сделать" color="#08979c" icon={<BulbOutlined />} />
          <Paragraph style={{ marginTop: 20 }}>
             <Text>SHOULD</Text> означает «следует», «стоит», «надо бы». Используется, когда мы даём совет, рекомендацию или говорим о том, что правильно или желательно сделать.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + should (not) + V1</Text><br />
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="You should sleep more." ru="Тебе следует больше спать." />
              <Example en="She should study harder." ru="Ей стоит учиться усерднее." />
              <Example en="We should help each other." ru="Нам следует помогать друг другу." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="You shouldn't eat so much sugar." ru="Тебе не следует есть так много сахара." />
              <Example en="Should I call him?" ru="Мне стоит ему позвонить?" />
              <Example en="He should be more careful." ru="Ему следует быть осторожнее." />
            </Col>
          </Row>
          <Alert showIcon type="info" message="Should и Must — не одно и то же" description="Should обычно даёт совет или рекомендацию. Must выражает более сильную обязанность или необходимость." style={{ borderRadius: 10, marginTop: 12 }} />
        </SectionCard>
      </div>

      {/* 06 WOULD */}
      <div id="would" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#13a8a8">
          <SectionTitle number="05" title="Would" subtitle="Вежливые просьбы, желания и условные ситуации" color="#13a8a8" icon={<MessageOutlined />} />
          <Paragraph style={{ marginTop: 20 }}>
             WOULD — модальный глагол, который чаще всего означает «бы», «хотел бы». Используется для вежливых просьб, предложений и воображаемых ситуаций, а также для описания повторяющихся действий в прошлом.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + would (not) + V1</Text><br />
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I would like some tea." ru="Я бы хотел чаю." />
              <Example en="Would you help me?" ru="Не могли бы вы мне помочь?" />
              <Example en="Would you like some coffee?" ru="Хотите кофе?" />
            </Col>
            <Col xs={24} md={12}>
              <Example en="I would travel more if I had time." ru="Я бы больше путешествовал, если бы у меня было время." />
              <Example en="She wouldn't do that." ru="Она бы не стала этого делать." />
              <Example en="When I was a child, I would play outside." ru="В детстве я часто играл на улице." />
            </Col>
          </Row>
          <Alert showIcon type="info" message="Would like" description="Would like означает «хотел(а) бы» и звучит вежливее, чем want: I want a coffee — Я хочу кофе; I would like a coffee — Я бы хотел кофе." style={{ borderRadius: 10, marginTop: 12 }} />
        </SectionCard>
      </div>

      {/* 07 NEED */}
      <div id="need" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#52c41a">
          <SectionTitle number="06" title="Need / Need to / Needn't" subtitle="Необходимость и отсутствие необходимости" color="#52c41a" icon={<TagsOutlined />} />
          <Paragraph style={{ marginTop: 20 }}>
            <Text strong>Need</Text> означает «нужно», «необходимо», «нуждаться». Используется, когда говорим о необходимости что-то сделать или в чём-то нуждаемся.
          </Paragraph>
          <Syntax>
            <Text strong>Subject + need (not) + V1 (редко, формальный стиль)</Text><br />
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I need to study." ru="Мне нужно учиться." />
              <Example en="She needs to rest." ru="Ей нужно отдохнуть." />
              <Example en="We don't need to hurry." ru="Нам не нужно торопиться." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="You needn't worry." ru="Тебе не нужно беспокоиться." />
              <Example en="Need I say more?" ru="Нужно ли говорить больше?" />
              <Example en="He doesn't need to work today." ru="Ему не нужно работать сегодня." />
            </Col>
          </Row>
          <Alert showIcon type="warning" message="Запомни" description="Needn't + V1 и don't / doesn't need to + V1 часто имеют одинаковое значение: «нет необходимости». После модального needn't используется V1 без to, а в конструкции need to частица to обязательна." style={{ borderRadius: 10, marginTop: 12 }} />
        </SectionCard>
      </div>
    </div>
  );
};
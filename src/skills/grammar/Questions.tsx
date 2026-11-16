
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
export const Questions = () => {
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
        <Title
          level={3}
          style={{
            color: "#fff",
            margin: "0px 0 8px",
          }}
        >
          Word Order in Questions, Types of Questions
        </Title>

        <Paragraph
          style={{
            color: "#c5d6f3",
            marginTop: 16,
            marginBottom: 0,
            maxWidth: 620,
          }}
        >
          В английском языке выделяют 4 основных типа вопросов.
          Каждый из них имеет свою структуру и цель.
        </Paragraph>
      </div>


{/* OVERVIEW */}
<Row gutter={[14, 14]} style={{ marginBottom: 28 }}>
  {[
    {
      n: "01",
      name: "General",
      ru: "Общие",
      color: "#1677ff",
      id: "general",
    },
    {
      n: "02",
      name: "Special",
      ru: "Специальные",
      color: "#722ed1",
      id: "special",
    },
    {
      n: "03",
      name: "Alternative",
      ru: "Альтернативные",
      color: "#08979c",
      id: "alternative",
    },
    {
      n: "04",
      name: "Tag",
      ru: "Разделительные",
      color: "#d46b08",
      id: "tag",
    },
  ].map((item) => (
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
          transition: "all 0.25s ease",
        }}
        styles={{
          body: {
            padding: "18px 8px",
          },
        }}
      >
        <Title
          level={3}
          style={{
            color: item.color,
            margin: 0,
          }}
        >
          {item.n}
        </Title>

        <Text strong>{item.name}</Text>
        <br />

        <Text
          type="secondary"
          style={{ fontSize: 12 }}
        >
          {item.ru}
        </Text>
      </Card>
    </Col>
  ))}
</Row>


      {/* GENERAL QUESTIONS */}
      <div id="general" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#1677ff">
          <SectionTitle
            number="01"
            title="General Questions"
            subtitle="общие вопросы"
            color="#1677ff"
            icon={<MessageOutlined />}
          />

          <Paragraph style={{ marginTop: 20 }}>
            Вопросы, на которые можно ответить{" "}
            <Text strong type="success">Yes</Text> или{" "}
            <Text strong type="danger">No</Text>.
          </Paragraph>

          <Syntax>
            <TooltipTerm
              term="Auxiliary Verb"
              color="#1677ff"
              description="Вспомогательный глагол зависит от времени: Do/Does (Present Simple), Did (Past Simple), Will (Future Simple) и т. д."
            />
            {" + "}
            <TooltipTerm
              term="Subject"
              color="#722ed1"
              description="Подлежащее — тот, о ком или о чём говорится в предложении."
            />
            {" + "}
            <TooltipTerm
              term="Predicate"
              color="#08979c"
              description="Сказуемое — то, что говорится о подлежащем: действие, состояние или признак."
            />
            {" + "}
            <TooltipTerm
              term="Other words"
              color="#d46b08"
              description="Дополнительные слова: обстоятельства времени, места, образа действия и другие уточнения."
            />
          </Syntax>

          <Title level={5}>Примеры</Title>

          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example
                en="Do you speak English?"
                ru="Ты говоришь по-английски?"
              />
              <Example
                en="Does he play football?"
                ru="Он играет в футбол?"
              />
              <Example
                en="Does she work here?"
                ru="Она работает здесь?"
              />
              <Example
                en="Did he buy a new phone?"
                ru="Он купил новый телефон?"
              />
              <Example
                en="Will he come tomorrow?"
                ru="Он придёт завтра?"
              />
            </Col>

            <Col xs={24} md={12}>
              <Example
                en="Will she call you?"
                ru="Она тебе позвонит?"
              />
              <Example
                en="Are you watching TV?"
                ru="Ты смотришь телевизор сейчас?"
              />
              <Example
                en="Is he sleeping?"
                ru="Он спит?"
              />
              <Example
                en="Is she cooking dinner?"
                ru="Она готовит ужин?"
              />
            </Col>
          </Row>

          <Alert
            showIcon
            type="info"
            message="Запомни"
            description="После Do / Does / Did основной глагол всегда используется в первой форме (V1)."
            style={{
              borderRadius: 10,
              marginTop: 12,
            }}
          />
        </SectionCard>
      </div>

      {/* SPECIAL QUESTIONS */}
      <div id="special" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#722ed1">
          <SectionTitle
            number="02"
            title="Special Questions"
            subtitle="Специальные вопросы (Wh-Questions)"
            color="#722ed1"
            icon={<QuestionCircleOutlined />}
          />

          <Paragraph style={{ marginTop: 20 }}>
            Вопросы, которые задают, чтобы получить конкретную
            информацию, а не просто ответ «Да» или «Нет».
          </Paragraph>

          <Syntax>
            <TooltipTerm
              term="Question Word"
              color="#722ed1"
              description="Вопросительное слово: What, Where, When, Why, Who, Whose, Which, How. Определяет, какую информацию мы хотим получить."
            />
            {" + "}
            <TooltipTerm
              term="Auxiliary Verb"
              color="#1677ff"
              description="Вспомогательный глагол, который выбирается в зависимости от времени: Do/Does, Did, Will, Am/Is/Are и т. д."
            />
            {" + "}
            <TooltipTerm
              term="Subject"
              color="#722ed1"
              description="Подлежащее — тот, кто выполняет действие или о ком говорится."
            />
            {" + "}
            <TooltipTerm
              term="Main Verb"
              color="#08979c"
              description="Основной глагол, обозначающий действие или состояние."
            />
            {" + "}
            <TooltipTerm
              term="Other words"
              color="#d46b08"
              description="Дополнительные слова, уточняющие смысл предложения."
            />
            {" + ?"}
          </Syntax>

          <Title level={5}>Вопросительные слова</Title>

          <Row gutter={[8, 8]}>
            {[
              ["What", "Что? Какой?"],
              ["Where", "Где? Куда?"],
              ["When", "Когда?"],
              ["Why", "Почему?"],
              ["Who", "Кто?"],
              ["Whose", "Чей?"],
              ["Which", "Который?"],
              ["How", "Как?"],
            ].map(([word, meaning]) => (
              <Col xs={12} sm={6} key={word}>
                <div
                  style={{
                    background: "#f9f0ff",
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <Text
                    strong
                    style={{ color: "#722ed1" }}
                  >
                    {word} -{" "}
                    <Text
                      type="secondary"
                      style={{ fontSize: 12 }}
                    >
                      {meaning}
                    </Text>
                  </Text>
                  <br />
                </div>
              </Col>
            ))}
          </Row>

          <Divider />

          <Title level={5}>Примеры</Title>

          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example
                en="What do you like?"
                ru="Что тебе нравится?"
              />
              <Example
                en="Where do you live?"
                ru="Где ты живёшь?"
              />
              <Example
                en="When does he work?"
                ru="Когда он работает?"
              />
            </Col>

            <Col xs={24} md={12}>
              <Example
                en="Why are you sad?"
                ru="Почему ты грустишь?"
              />
              <Example
                en="How did you get here?"
                ru="Как ты сюда добрался?"
              />
              <Example
                en="Who called you?"
                ru="Кто тебе звонил?"
              />
            </Col>
          </Row>

          <Alert
            showIcon
            type="warning"
            message="Исключение: Who в роли подлежащего"
            description="Who called you? — Кто тебе звонил? В этом случае вспомогательный глагол не нужен."
            style={{
              borderRadius: 10,
              marginTop: 12,
            }}
          />
        </SectionCard>
      </div>

      {/* ALTERNATIVE QUESTIONS */}
      <div id="alternative" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#08979c">
          <SectionTitle
            number="03"
            title="Alternative Questions"
            subtitle="Альтернативные вопросы"
            color="#08979c"
            icon={<SwapOutlined />}
          />

          <Paragraph style={{ marginTop: 20 }}>
            Вопросы, которые предлагают выбрать один из двух
            или нескольких вариантов ответа. Обычно содержат
            союз{" "}
            <Text
              strong
              style={{ color: "#08979c" }}
            >
              or
            </Text>{" "}
            («или»).
          </Paragraph>

          <Syntax>
            <TooltipTerm
              term="(Question Word)"
              color="#722ed1"
              description="Вопросительное слово. Используется, если вопрос начинается с What, Which, Where и других вопросительных слов. Может отсутствовать."
            />
            {" + "}
            <TooltipTerm
              term="Auxiliary Verb"
              color="#1677ff"
              description="Вспомогательный глагол, который зависит от времени и конструкции вопроса."
            />
            {" + "}
            <TooltipTerm
              term="Subject"
              color="#722ed1"
              description="Подлежащее — тот, о ком говорится в предложении."
            />
            {" + "}
            <TooltipTerm
              term="Predicate"
              color="#08979c"
              description="Сказуемое — действие или состояние подлежащего."
            />
            {" + "}
            <TooltipTerm
              term="Option 1"
              color="#d46b08"
              description="Первый вариант выбора."
            />
            {" + "}
            <TooltipTerm
              term="or"
              color="#08979c"
              description="Союз «или», который соединяет варианты выбора."
            />
            {" + "}
            <TooltipTerm
              term="Option 2"
              color="#d46b08"
              description="Второй вариант выбора."
            />
            {" + ?"}
          </Syntax>

          <Title level={5}>Примеры</Title>

          <Example
            en="Do you like tea or coffee? -  I prefer tea."
            ru="Ты любишь чай или кофе? - Я предпочитаю чай"
          />

          <Example
            en="Does he play football or basketball?"
            ru="Он играет в футбол или баскетбол?"
          />

          <Example
            en="Are you watching TV or reading a book?"
            ru="Ты смотришь телевизор или читаешь книгу?"
          />

          <Example
            en="Did she buy a dress or a skirt?"
            ru="Она купила платье или юбку?"
          />

          <Example
            en="Will you go by bus or by car?"
            ru="Ты поедешь на автобусе или на машине?"
          />
        </SectionCard>
      </div>

      {/* TAG QUESTIONS */}
      <div id="tag" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#d46b08">
          <SectionTitle
            number="04"
            title="Tag Questions"
            subtitle="Разделительные вопросы"
            color="#d46b08"
            icon={<TagsOutlined />}
          />

          <Paragraph style={{ marginTop: 20 }}>
            Состоят из повествовательного предложения и краткого
            вопроса в конце. Используются для уточнения или
            подтверждения информации. Главное правило: если в начале утвердительное, 
            то в конце отрицательное предложение, а если в начале отрицательное,
             то в конце утвердительное предложение
          </Paragraph>

          <Syntax>
            <TooltipTerm
              term="Affirmative statement"
              color="#1677ff"
              description="Утвердительная часть предложения. Например: You are a student."
            />
            {" + "}
            <TooltipTerm
              term="Negative auxiliary verb"
              color="#d46b08"
              description="Отрицательная форма вспомогательного глагола: isn't, aren't, don't, doesn't, didn't, won't и т. д."
            />
            {" + "}
            <TooltipTerm
              term="Pronoun"
              color="#722ed1"
              description="Местоимение, которое заменяет подлежащее: you, he, she, it, we, they."
            />
            {" + ?"}
            <Divider style={{ margin: "12px 0" }} />
            <TooltipTerm
              term="Negative statement"
              color="#d46b08"
              description="Отрицательная часть предложения. Например: You aren't tired."
            />
            {" + "}
            <TooltipTerm
              term="Affirmative auxiliary verb"
              color="#1677ff"
              description="Утвердительная форма вспомогательного глагола: is, are, do, does, did, will и т. д."
            />
            {" + "}
            <TooltipTerm
              term="Pronoun"
              color="#722ed1"
              description="Местоимение, которое заменяет подлежащее."
            />
            {" + ?"}
          </Syntax>

          <Example
            en="You are a student, aren't you?"
            ru="Ты студент, не так ли?"
          />

          <Example
            en="She likes coffee, doesn't she?"
            ru="Она любит кофе, не так ли?"
          />

          <Example
            en="He can swim, can't he?"
            ru="Он умеет плавать, не так ли?"
          />

          <Example
            en="They will come, won't they?"
            ru="Они придут, не так ли?"
          />

          <Divider />
          
          <Example
            en="You aren't tired, are you?"
            ru="Ты не устал, правда?"
          />

          <Example
            en="She doesn't like tea, does she?"
            ru="Она не любит чай, правда?"
          />

          <Example
            en="They won't come, will they?"
            ru="Они не придут, правда?"
          />

          <Alert
            showIcon
            type="info"
            message="Особый случай"
            description="I'm late, aren't I? — Я опоздал, не так ли?"
            style={{
              borderRadius: 10,
              marginTop: 12,
            }}
          />
        </SectionCard>
      </div>
    </div>
  );
};

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
  CheckCircleOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined,
  SwapOutlined,
  ClockCircleOutlined,
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
const Example = ({ en, ru }: { en: string; ru: string }) => (
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
export const PresentContinuous = () => {
  const sections = [
    { n: "01", name: "Affirmative", ru: "am / is / are + V-ing", color: "#1677ff", id: "affirmative" },
    { n: "02", name: "Negative", ru: "am not / isn't / aren't", color: "#eb2f96", id: "negative" },
    { n: "03", name: "Questions", ru: "Am / Is / Are ...?", color: "#722ed1", id: "questions" },
    { n: "04", name: "-ing", ru: "правила написания", color: "#08979c", id: "suffix" },
    { n: "05", name: "Usage", ru: "когда использовать", color: "#52c41a", id: "usage" },
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
          Present Continuous
        </Title>
        <Paragraph
          style={{
            color: "#c5d6f3",
            marginTop: 16,
            marginBottom: 0,
            maxWidth: 680,
          }}
        >
          Present Continuous (настоящее длительное) используется для действий,
          которые происходят прямо сейчас, временных ситуаций и запланированных
          событий в будущем. Оно всегда образуется при помощи глагола to be
          и смыслового глагола с окончанием -ing.
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
              <Title level={3} style={{ color: item.color, margin: 0 }}>
                {item.n}
              </Title>
              <Text strong>{item.name}</Text>
              <br />
              <Text type="secondary" style={{ fontSize: 12 }}>
                {item.ru}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 01 AFFIRMATIVE */}
      <div id="affirmative" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#1677ff">
          <SectionTitle
            number="01"
            title="Affirmative"
            subtitle="Утвердительные предложения"
            color="#1677ff"
            icon={<CheckCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Present Continuous образуется при помощи вспомогательного глагола{" "}
            <TooltipTerm
              term="to be"
              description="В настоящем времени у глагола to be три формы: am (I), is (he / she / it), are (you / we / they)."
              color="#1677ff"
            />{" "}
            в нужной форме и смыслового глагола с окончанием <Text code>-ing</Text>.
            Форма to be выбирается по подлежащему.
          </Paragraph>
          <Syntax>
            <Text strong>I + am + V-ing</Text>
            <br />
            <Text strong>He / She / It + is + V-ing</Text>
            <br />
            <Text strong>You / We / They + are + V-ing</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I am reading a book." ru="Я читаю книгу." />
              <Example en="She is working now." ru="Она сейчас работает." />
              <Example en="We are studying English." ru="Мы изучаем английский." />
              <Example en="The sun is shining." ru="Солнце светит." />
              <Example en="Look! It is raining." ru="Смотри! Идёт дождь." />
              <Example en="The kids are sleeping." ru="Дети спят." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="They are playing football." ru="Они играют в футбол." />
              <Example en="He is talking on the phone." ru="Он говорит по телефону." />
              <Example en="My mother is cooking dinner." ru="Мама готовит ужин." />
              <Example en="The students are writing a test." ru="Студенты пишут тест." />
              <Example en="You are listening to music." ru="Ты слушаешь музыку." />
              <Example en="It is getting colder." ru="Становится холоднее." />
            </Col>
          </Row>
        </SectionCard>
      </div>

      {/* 02 NEGATIVE */}
      <div id="negative" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#eb2f96">
          <SectionTitle
            number="02"
            title="Negative"
            subtitle="Отрицательные предложения: am not / isn't / aren't"
            color="#eb2f96"
            icon={<CloseCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            В отрицании частица <Text strong>not</Text> ставится после формы
            глагола to be. Смысловой глагол остаётся в форме <Text code>V-ing</Text>{" "}
            — здесь, в отличие от Present Simple, никаких do / does не нужно.
            В разговорной речи: <Text code>isn't</Text> и <Text code>aren't</Text>.
          </Paragraph>
          <Syntax>
            <Text strong>I + am not + V-ing</Text> (I'm not)
            <br />
            <Text strong>He / She / It + is not + V-ing</Text> (isn't)
            <br />
            <Text strong>You / We / They + are not + V-ing</Text> (aren't)
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I am not sleeping." ru="Я не сплю." />
              <Example en="She isn't working today." ru="Она сегодня не работает." />
              <Example en="They aren't listening to music." ru="Они не слушают музыку." />
              <Example en="We aren't watching TV." ru="Мы не смотрим телевизор." />
              <Example en="It isn't raining." ru="Дождя нет." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="He isn't eating now." ru="Он не ест сейчас." />
              <Example en="You aren't paying attention." ru="Ты не слушаешь внимательно." />
              <Example en="The children aren't playing outside." ru="Дети не играют на улице." />
              <Example en="My brother isn't studying right now." ru="Мой брат сейчас не занимается." />
              <Example en="They aren't having lunch." ru="Они не обедают." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="warning"
            message="Важно!"
            description="В отрицании Present Continuous частица not ставится к to be, а не к смысловому глаголу: She isn't working (НЕ She doesn't working). И нельзя путать: don't / doesn't — это Present Simple, am not / isn't / aren't — Present Continuous."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 03 QUESTIONS */}
      <div id="questions" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#722ed1">
          <SectionTitle
            number="03"
            title="Questions"
            subtitle="Вопросительные предложения: Am / Is / Are ...?"
            color="#722ed1"
            icon={<QuestionCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            В вопросах форма глагола to be ставится в самое начало
            предложения — перед подлежащим. Смысловой глагол остаётся в форме{" "}
            <Text code>V-ing</Text>.
          </Paragraph>
          <Syntax>
            <Text strong>Am + I + V-ing?</Text>
            <br />
            <Text strong>Is + he / she / it + V-ing?</Text>
            <br />
            <Text strong>Are + you / we / they + V-ing?</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="Are you listening to me?" ru="Ты меня слушаешь?" />
              <Example en="Is she working now?" ru="Она сейчас работает?" />
              <Example en="Are they coming to the party?" ru="Они придут на вечеринку?" />
              <Example en="What are you doing?" ru="Что ты делаешь?" />
              <Example en="Where is he going?" ru="Куда он идёт?" />
            </Col>
            <Col xs={24} md={12}>
              <Example en="Am I doing this right?" ru="Я делаю это правильно?" />
              <Example en="Why are they laughing?" ru="Почему они смеются?" />
              <Example en="Who is playing the piano?" ru="Кто играет на пианино?" />
              <Example en="What is your sister reading?" ru="Что читает твоя сестра?" />
              <Example en="Is it snowing outside?" ru="На улице идёт снег?" />
            </Col>
          </Row>
          <Divider />
          <Title level={5}>Краткие ответы (Short answers)</Title>
          <Syntax>
            <Text strong>Yes, I am. / No, I'm not.</Text>
            <br />
            <Text strong>Yes, he / she / it is. / No, he / she / it isn't.</Text>
            <br />
            <Text strong>Yes, you / we / they are. / No, you / we / they aren't.</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="Are you busy? — Yes, I am." ru="Ты занят? — Да." />
              <Example en="Is he working? — No, he isn't." ru="Он работает? — Нет." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="Are they ready? — Yes, they are." ru="Они готовы? — Да." />
              <Example en="Is she sleeping? — No, she isn't." ru="Она спит? — Нет." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="info"
            message="Запомни"
            description="В кратких ответах используется только глагол to be — без смыслового глагола. Правильно: Yes, I am. / No, she isn't. Нельзя: Yes, I'm reading. — так отвечают, только если хотят добавить уточнение."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

      {/* 04 -ING */}
      <div id="suffix" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#08979c">
          <SectionTitle
            number="04"
            title="-ing"
            subtitle="Правила добавления окончания -ing"
            color="#08979c"
            icon={<SwapOutlined />}
          />

          {/* TABLE */}
          <div
            style={{
              marginTop: 20,
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid #d9f2f2",
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
                minWidth: 560,
              }}
            >
              <thead>
                <tr style={{ background: "#e6f7f7" }}>
                  <th
                    style={{
                      padding: "12px 14px",
                      textAlign: "center",
                      width: 50,
                      fontWeight: 600,
                      color: "#08979c",
                      borderBottom: "2px solid #b5e8e8",
                      fontSize: 13,
                    }}
                  >
                    №
                  </th>
                  <th
                    style={{
                      padding: "12px 14px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: "#08979c",
                      borderBottom: "2px solid #b5e8e8",
                      fontSize: 13,
                    }}
                  >
                    Случай
                  </th>
                  <th
                    style={{
                      padding: "12px 14px",
                      textAlign: "center",
                      width: 130,
                      fontWeight: 600,
                      color: "#08979c",
                      borderBottom: "2px solid #b5e8e8",
                      fontSize: 13,
                    }}
                  >
                    Правило
                  </th>
                  <th
                    style={{
                      padding: "12px 14px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: "#08979c",
                      borderBottom: "2px solid #b5e8e8",
                      fontSize: 13,
                    }}
                  >
                    Примеры
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    n: "1",
                    case: "Большинство глаголов",
                    rule: "+ ing",
                    examples: "work → working, read → reading, eat → eating",
                  },
                  {
                    n: "2",
                    case: "Немая -e в конце",
                    rule: "-e + ing",
                    examples: "make → making, write → writing, come → coming",
                  },
                  {
                    n: "3",
                    case: "Окончание -ie",
                    rule: "ie → y + ing",
                    examples: "lie → lying, die → dying, tie → tying",
                  },
                  {
                    n: "4",
                    case: "Один слог CVC или ударение на последнем слоге",
                    rule: "удвоение + ing",
                    examples: "run → running, sit → sitting, begin → beginning",
                  },
                  {
                    n: "5",
                    case: "Окончания -w, -x, -y",
                    rule: "+ ing",
                    examples: "play → playing, snow → snowing, fix → fixing",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.n}
                    style={{ background: i % 2 === 0 ? "#fff" : "#f7fcfc" }}
                  >
                    <td
                      style={{
                        padding: "12px 14px",
                        textAlign: "center",
                        borderBottom: "1px solid #f0f5f5",
                      }}
                    >
                      <Text strong style={{ color: "#08979c" }}>
                        {row.n}
                      </Text>
                    </td>
                    <td
                      style={{
                        padding: "12px 14px",
                        borderBottom: "1px solid #f0f5f5",
                      }}
                    >
                      <Text>{row.case}</Text>
                    </td>
                    <td
                      style={{
                        padding: "12px 14px",
                        textAlign: "center",
                        borderBottom: "1px solid #f0f5f5",
                      }}
                    >
                      <Text
                        strong
                        style={{
                          color: "#08979c",
                          fontFamily: "monospace",
                          fontSize: 13,
                        }}
                      >
                        {row.rule}
                      </Text>
                    </td>
                    <td
                      style={{
                        padding: "12px 14px",
                        borderBottom: "1px solid #f0f5f5",
                      }}
                    >
                      <Text style={{ fontFamily: "monospace", fontSize: 13 }}>
                        {row.examples}
                      </Text>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert
            showIcon
            type="warning"
            message="Внимание"
            description="Окончание -ing добавляется к смысловому глаголу ВСЕГДА — и в утверждении, и в отрицании, и в вопросе. Меняется только форма to be (am / is / are), а -ing остаётся на месте."
            style={{ borderRadius: 10, marginTop: 16 }}
          />
        </SectionCard>
      </div>

      {/* 05 USAGE */}
      <div id="usage" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
        <SectionCard color="#52c41a">
          <SectionTitle
            number="05"
            title="Usage"
            subtitle="Когда использовать Present Continuous"
            color="#52c41a"
            icon={<ClockCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Present Continuous нужен не только для «прямо сейчас». Вот основные
            ситуации, в которых он используется:
          </Paragraph>

          <Title level={5}>1. Действие происходит в момент речи</Title>
          <Paragraph type="secondary" style={{ marginTop: 0 }}>
            Маркеры: now, right now, at the moment, Look!, Listen!
          </Paragraph>
          <Example en="I am reading a book right now." ru="Я читаю книгу прямо сейчас." />
          <Example en="Look! It is raining." ru="Смотри! Идёт дождь." />
          <Example en="Listen! Somebody is singing." ru="Слушай! Кто-то поёт." />

          <Title level={5}>2. Временная ситуация (не постоянно)</Title>
          <Paragraph type="secondary" style={{ marginTop: 0 }}>
            Маркеры: this week, this month, these days, currently, today
          </Paragraph>
          <Example en="She is living with her parents this month." ru="В этом месяце она живёт с родителями." />
          <Example en="I am working on a new project these days." ru="В эти дни я работаю над новым проектом." />

          <Title level={5}>3. Запланированное будущее</Title>
          <Paragraph type="secondary" style={{ marginTop: 0 }}>
            Маркеры: tomorrow, next week, tonight, on Monday
          </Paragraph>
          <Example en="We are meeting John tomorrow." ru="Завтра мы встречаемся с Джоном." />
          <Example en="They are flying to London next week." ru="На следующей неделе они летят в Лондон." />

          <Title level={5}>4. С always — выражение раздражения</Title>
          <Example en="He is always losing his keys!" ru="Он вечно теряет свои ключи!" />
          <Example en="You are always coming late!" ru="Ты вечно приходишь поздно!" />

          <Divider />
          <Title level={5}>Сравни с Present Simple</Title>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I work in a bank." ru="Я работаю в банке. (постоянно — Present Simple)" />
              <Example en="I am working from home today." ru="Сегодня я работаю из дома. (временно — Present Continuous)" />
            </Col>
            <Col xs={24} md={12}>
              <Example en="She usually drinks tea." ru="Обычно она пьёт чай. (привычка — Present Simple)" />
              <Example en="She is drinking coffee now." ru="Сейчас она пьёт кофе. (в моменте — Present Continuous)" />
            </Col>
          </Row>
          <Alert
            showIcon
            type="warning"
            message="Stative verbs"
            description="Глаголы состояния (know, like, love, want, need, believe, understand, remember, seem и др.) обычно НЕ используются в Present Continuous. Правильно: I know the answer. — Неправильно: I am knowing the answer."
            style={{ borderRadius: 10, marginTop: 16 }}
          />
        </SectionCard>
      </div>
    </div>
  );
};
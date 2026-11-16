import {
  Card,
  Typography,
  Divider,
  Row,
  Col,
  Alert,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { scrollToSection } from "../utils/scrollToSection";
import { Example, SectionCard, SectionTitle, Syntax } from "../utils/Blocks";

const { Title, Text, Paragraph } = Typography;

export const PresentSimple = () => {
  const sections = [
    { n: "01", name: "Affirmative", ru: "утверждение", color: "#1677ff", id: "affirmative" },
    { n: "02", name: "Negative", ru: "отрицание: don't / doesn't", color: "#eb2f96", id: "negative" },
    { n: "03", name: "Questions", ru: "вопросы: Do / Does", color: "#722ed1", id: "questions" },
    { n: "04", name: "-s / -es", ru: "правила написания", color: "#08979c", id: "suffix" },
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
          Present Simple
        </Title>
        <Paragraph
          style={{
            color: "#c5d6f3",
            marginTop: 16,
            marginBottom: 0,
            maxWidth: 680,
          }}
        >
          Present Simple (настоящее простое) используется для регулярных действий,
          привычек, фактов и общеизвестных истин. Это одно из самых частых времён
          в английском языке.
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
            В Present Simple форма глагола зависит от подлежащего. Если подлежащее выражено местоимениями 
            he, she или it, к глаголу добавляется окончание -s или -es. Как понять, в каких случаях нужно 
            добавлять -s, а в каких — -es (см. пункт 4)?
          </Paragraph>
          <Syntax>
            <Text strong>I / You / We / They + V1</Text>
            <br />
            <Text strong>He / She / It + V1 + (s / es)</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I work every day." ru="Я работаю каждый день." />
              <Example en="They like coffee." ru="Они любят кофе." />
              <Example en="My parents live in a very small flat." ru="Мои родители живут в маленькой комнате" />
              <Example en="Bad driving causes many accidents" ru="Плохое вождение становится причиной многих аварий." />
              <Example en="The Olympic Games take place every four years" ru="Олимпийские игры (мн.ч) проводятся каждые четыре года." />
              <Example en="Alan says he's 80 years old, but nobody believes him" ru="Алан говорит, что ему 80 лет, но никто ему не верит." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="He works in a bank." ru="Он работает в банке." />
              <Example en="The sun rises in the east" ru="Солнце восходит на востоке" />
              <Example en="Bees make honey" ru="Пчелы делают мед" />
              <Example en="An interpreter translates from one language into another" ru="Переводчик переводит с одного языка на другой" />
              <Example en="Paul is never late. He always gets to work on time" ru="Пол никогда не опаздывает. Он всегда приходит на работу вовремя." />
              <Example en="The dinner smells good" ru="Этот обед приятно пахнет." />
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
            subtitle="Отрицательные предложения: don't / doesn't"
            color="#eb2f96"
            icon={<CloseCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            Для образования отрицания используется вспомогательный глагол{" "}
            <Text strong>do</Text> (для I / you / we / they) или{" "}
            <Text strong>does</Text> (для he / she / it) + частица{" "}
            <Text strong>not</Text>. В разговорной речи:{" "}
            <Text code>don't</Text> и <Text code>doesn't</Text>.
            Стоит отметить, что глагол (V1) при вопросах и отрицаниях не добавляет -s/-es в конце и остается таким какой был
          </Paragraph>
          <Syntax>
            <Text strong>I / You / We / They + don't + V1</Text>
            <br />
            <Text strong>He / She / It + doesn't + V1</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="I don't like coffee." ru="Я не люблю кофе." />
              <Example en="We don't work on Sunday." ru="Мы не работаем в воскресенье." />
              <Example en="I've go a car but i don't use it much" ru="У меня есть машина, но я редко ею пользуюсь" />
              <Example en="Liars are people who don't tell the truth" ru="Лжецы - люди, которые не говорят правду" />
              <Example en="These gloves do not fit me. They're too small" ru="Эти перчатки мне не подходят. Они слишком маленькие." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="He doesn't speak French." ru="Он не говорит по-французски." />
              <Example en="She doesn't eat meat." ru="Она не ест мясо." />
              <Example en="Vegetarians don't eat meat" ru="Вегетарианцы не едят мясо" />
              <Example en="An atheist doesn't believe in God" ru="Атеисты не верят в бога" />
              <Example en="I think you should sell your car. You don't use it very often" ru="Думаю, тебе стоит продать машину. Ты пользуешься ею не очень часто." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="warning"
            message="Важно!"
            description="После doesn't глагол всегда стоит в начальной форме (V1) без окончания -s: He doesn't work (НЕ works). Окончание -s уже «спрятано» в doesn't."
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
            subtitle="Вопросительные предложения: Do / Does"
            color="#722ed1"
            icon={<QuestionCircleOutlined />}
          />
          <Paragraph style={{ marginTop: 20 }}>
            В вопросах вспомогательный глагол{" "}
            <Text strong>Do</Text> или <Text strong>Does</Text> ставится в самое
            начало предложения — перед подлежащим. Смысловой глагол остаётся в
            начальной форме.
          </Paragraph>
          <Syntax>
            <Text strong>Do + I / you / we / they + V1?</Text>
            <br />
            <Text strong>Does + he / she / it + V1?</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="Do you like tea?" ru="Ты любишь чай?" />
              <Example en="Do they live here?" ru="Они здесь живут?" />
              <Example en="Do we need this?" ru="Нам это нужно?" />
              <Example en="What does your brother do?" ru="Чем занят твой брат / что делает твой брат" />
            </Col>
            <Col xs={24} md={12}>
              <Example en="Does she speak English?" ru="Она говорит по-английски?" />
              <Example en="Does it cost much?" ru="Это дорого стоит?" />
              <Example en="Does your sister play tennis?" ru="Твоя сестра играет в теннис?" />
              <Example en="What time do the banks close here?" ru="Во сколько здесь закрываются банки?" />
              <Example en="Who is that man? - What does he want?"  ru="Кто этот человек? — Чего он хочет?" />
            </Col>
          </Row>
          <Divider />
          <Title level={5}>Краткие ответы (Short answers)</Title>
          <Syntax>
            <Text strong>Yes, I / you / we / they do. / No, I don't.</Text>
            <br />
            <Text strong>Yes, he / she / it does. / No, he doesn't.</Text>
          </Syntax>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Example en="Do you like tea? — Yes, I do." ru="Ты любишь чай? — Да." />
              <Example en="Do they work here? — No, they don't." ru="Они здесь работают? — Нет." />
            </Col>
            <Col xs={24} md={12}>
              <Example en="Does he work here? — Yes, he does." ru="Он здесь работает? — Да." />
              <Example en="Does she speak English? — No, she doesn't." ru="Она говорит по-английски? — Нет." />
            </Col>
          </Row>
          <Alert
            showIcon
            type="info"
            message="Запомни"
            description="В вопросах после does глагол тоже без -s: Does he work? (НЕ Does he works?). А в кратких ответах используется только вспомогательный глагол — без смыслового."
            style={{ borderRadius: 10, marginTop: 12 }}
          />
        </SectionCard>
      </div>

<div id="suffix" style={{ marginBottom: 22, scrollMarginTop: 24 }}>
  <SectionCard color="#08979c">
    <SectionTitle
      number="04"
      title="-s / -es"
      subtitle="Правила добавления окончания в 3-м лице единственного числа"
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
              rule: "+ s",
              examples: "work → works, like → likes, live → lives",
            },
            {
              n: "2",
              case: "Глаголы оканчивающаяся на -s, -ss, -sh, -ch, -x, -o",
              rule: "+ es",
              examples:
                "pass → passes, watch → watches, go → goes, wash → washes, fix → fixes, do → does",
            },
            {
              n: "3",
              case: "Согласная + y",
              rule: "y → ies",
              examples: "study → studies, cry → cries, try → tries",
            },
            {
              n: "4",
              case: "Гласная + y",
              rule: "+ s",
              examples: "play → plays, stay → stays, buy → buys",
            },
            {
              n: "5",
              case: "Особый случай",
              rule: "have → has",
              examples: "have → has",
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
      description="Правило добавления -s / -es работает только в утвердительных предложениях. В вопросах и отрицаниях смысловой глагол стоит в начальной форме, а -s «переходит» на do / does."
      style={{ borderRadius: 10, marginTop: 16 }}
    />
  </SectionCard>
</div>
    </div>
  );
};
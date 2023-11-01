// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

// const answersSet = {
//   swimming: "Swimming",
//   bathing: "Bathing",
//   chatting: "Chatting",
//   noTime: "I don't like to spend time with it"
// };

function ItemsList({ list }) {
  return (
    <ul>
      {Object.keys(list).map((item, i) => (
        <li key={i}>{list[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({answerItem: {bestFeatures, colour, consistency, email, logo, review, timeSpent, username, worstBits}}, {key:i}) {


  console.log(logo)
  return (
    <li key={i}>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}

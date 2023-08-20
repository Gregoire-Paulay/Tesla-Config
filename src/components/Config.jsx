const Config = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <div>
        {props.choice !== 0 ? (
          <button
            onClick={() => {
              props.set(0);
            }}
          >
            {props.name1}
          </button>
        ) : (
          <button className="choice">{props.name1}</button>
        )}
        {props.choice === 0 ? (
          <button
            onClick={() => {
              props.set(1);
            }}
          >
            {props.name2}
          </button>
        ) : (
          <button className="choice">{props.name2}</button>
        )}
      </div>
    </section>
  );
};
export default Config;

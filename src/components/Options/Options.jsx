export default function Options({ updateFeedback, total, resetFeedback }) {
  return (
    <section>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total ? (
        <button type="button" onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

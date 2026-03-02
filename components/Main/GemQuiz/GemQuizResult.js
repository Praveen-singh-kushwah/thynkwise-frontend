// GemQuizResult.jsx
export default function GemQuizResult({ resultText, onRetake }) {
    return (
      <div className="card shadow p-4 py-5 rounded-2">
        <h2 className="card-title text-center fs-3 mb-4">Your GEM Personality Result</h2>
        <div
          className="mt-4 p-3 bg-light rounded"
          dangerouslySetInnerHTML={{ __html: resultText }}
        />
        <div className="text-center mt-4">
          <button className="btn btn-secondary" onClick={onRetake}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }
  
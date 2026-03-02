export default function Alert({ variant, message, className }) {
  return (
    <div
      className={"alert alert-" + [variant, className].join(" ")}
      role="alert"
    >
      {message}
    </div>
  );
}

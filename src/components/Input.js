export default function Input({ type, placeholder, event }) {
  return (
    <>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        id={type}
        name={type}
        required
        autoComplete="off"
        onChange={(e) => event(e.target.value)}
      />
    </>
  );
}

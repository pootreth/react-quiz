export default function Login({ onLogin }) {
  return (
    <form onSubmit={onLogin}>
      <div>
        <label for="email" className="form-label">
          Email:
        </label>
        <input id="email" className="form-control" type="email" required />
      </div>

      <div>
        <label for="password" className="form-label">
          Password:
        </label>
        <input
          id="password"
          className="form-control"
          type="password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

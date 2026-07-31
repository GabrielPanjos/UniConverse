import MainTemplate from "../templates/MainTemplate";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <section className="flex flex-col gap-4 max-w-150 bg-bg items-center p-4 rounded-xl2">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">React Tasks</h1>
      <p className="text-md text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        fugit doloremque molestias recusandae labore repellat amet dicta tempore
        necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
        quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
        ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
        officia accusantium vitae doloremque, molestias modi.
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;

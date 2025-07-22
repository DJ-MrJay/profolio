import ButtonLink from "../components/ButtonLink";

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="mt-4 text-lg">Let's get started</p>
      <ButtonLink href="/main" label="Welcome" />
    </main>
  );
}

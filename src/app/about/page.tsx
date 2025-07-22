import ButtonLink from "../../components/ButtonLink";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 max-w-xl">
        This is the about section where you can add more detailed content.
      </p>
      <ButtonLink href="/main" label="Back" />
    </main>
  );
}

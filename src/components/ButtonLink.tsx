import Link from "next/link";
import { Button } from "../components/ui/button";

export default function ButtonLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="flex justify-center mt-8">
      <Link href={href}>
        <Button>{label}</Button>
      </Link>
    </div>
  );
}

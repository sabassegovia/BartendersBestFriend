import { useRouter } from "next/router";

export default function nice() {
  const router = useRouter;
  const { id } = router().query;
  return <div>in nice folder</div>;
}

import { useRouter } from "next/router";

export default function useRedirect(url) {
  const router = useRouter();
  const handler = () => router.push(url);
  return handler;
}

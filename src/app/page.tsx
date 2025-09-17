import { redirect } from "next/navigation";
import { routes } from "./routes/routes";

export default function RedirectPage() {
  redirect(routes.choosePlayer);
}

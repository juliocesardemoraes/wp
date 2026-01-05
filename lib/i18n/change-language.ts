"use server";

import { cookies } from "next/headers";

export async function changeLanguage() {
  const cookieStore = await cookies();
  const current = cookieStore.get("locale")?.value ?? "en";

  const nextLocale = current === "en" ? "pt" : "en";

  cookieStore.set("locale", nextLocale, {
    path: "/",
  });

  return nextLocale;
}

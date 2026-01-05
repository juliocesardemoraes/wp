import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ReactQueryProvider } from "./react-query/query-client-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function Providers({ children }: { children: ReactNode }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

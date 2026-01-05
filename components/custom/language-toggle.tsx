"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { changeLanguage } from "../../lib/i18n/change-language";
import { Button } from "@/components/ui/button";
import { LanguagesIcon } from "lucide-react";

export default function LanguageToggle() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      await changeLanguage();
    });
  };

  return (
    <Button onClick={handleToggle} size="icon" disabled={isPending}>
      <LanguagesIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
    </Button>
  );
}

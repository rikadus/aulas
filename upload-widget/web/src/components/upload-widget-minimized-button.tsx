import * as Collapsible from "@radix-ui/react-collapsible";
import { Maximize2 } from "lucide-react";
import { UploadWidgetTitle } from "./upload-widget-title";

export function UploadWidgetMinimizedButton() {
  return (
    // Trigger do Collapsible para abrir (expandir) o widget
    <Collapsible.Trigger className="group w-full bg-white/2 py-3 px-5 flex items-center justify-between gap-5">
      {/* Título do Widget (estado minimizado) */}
      <UploadWidgetTitle />

      {/* Ícone de maximizar */}
      <Maximize2
        strokeWidth={1.5}
        className="size-4 text-zinc-400 group-hover:text-zinc-100"
      />
    </Collapsible.Trigger>
  );
}

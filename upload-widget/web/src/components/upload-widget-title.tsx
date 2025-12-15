import { UploadCloud } from "lucide-react";
import { usePendingUploads } from "../store/uploads";

export function UploadWidgetTitle() {
  // Obtém o estado global de uploads pendentes e o progresso
  const { globalPercentage, isThereAnyPendingUploads } = usePendingUploads();

  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud className="size-4 text-zinc-400" strokeWidth={1.5} />
      
      {/* Exibe o progresso de upload se houver arquivos pendentes, caso contrário exibe o título padrão */}
      {isThereAnyPendingUploads ? (
        <span className="flex items-baseline gap-1">
          Uploading{" "}
          <span className="text-xs text-zinc-400 tabular-nums">
            {globalPercentage}%
          </span>
        </span>
      ) : (
        <span>Upload files</span>
      )}
    </div>
  );
}

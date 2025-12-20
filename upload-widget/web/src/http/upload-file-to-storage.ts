import axios from "axios";

/**
 * Interface para os parâmetros da função de upload.
 * @param file O arquivo a ser enviado.
 * @param onProgress Callback para monitorar o progresso do upload em bytes.
 */
interface UploadFileToStorageParams {
  file: File;
  onProgress: (sizeInBytes: number) => void;
}

/**
 * Interface para opções adicionais do upload.
 * @param signal AbortSignal para permitir o cancelamento da requisição.
 */
interface uploadFileToStorageOpts {
  signal?: AbortSignal;
}

/**
 * Envia um arquivo para o armazenamento via API.
 * 
 * Esta função cria um FormData contendo o arquivo e envia via POST para a rota de uploads.
 * Monitora o progresso através do callback onProgress e suporta cancelamento via AbortSignal.
 * 
 * @param {UploadFileToStorageParams} params Parâmetros obrigatórios (arquivo e callback de progresso).
 * @param {uploadFileToStorageOpts} opts Opções opcionais (como sinal de cancelamento).
 * @returns Um objeto contendo a URL pública do arquivo enviado.
 */
export async function uploadFileToStorage(
  { file, onProgress }: UploadFileToStorageParams,
  opts?: uploadFileToStorageOpts
) {
  // Cria uma instância de FormData para enviar o arquivo como multipart/form-data
  const data = new FormData();

  // Adiciona o arquivo ao FormData com a chave "file"
  data.append("file", file);

  // Realiza a requisição POST para a API
  const response = await axios.post<{ url: string }>(
    // Utiliza a variável de ambiente VITE_API_URL ou um fallback para localhost (importante para desenvolvimento local)
    import.meta.env.VITE_API_URL || "http://localhost:3333/uploads",
    data,
    {
      // Passa o sinal de abortamento se fornecido
      signal: opts?.signal,
      // Configura o handler de progresso do Axios
      onUploadProgress(progressEvent) {
        // Chama a função onProgress informando quantos bytes já foram carregados
        onProgress(progressEvent.loaded);
      },
    }
  );

  // Retorna a URL do arquivo recebida da resposta da API
  return { url: response.data.url };
}

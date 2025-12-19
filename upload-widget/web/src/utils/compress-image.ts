interface CompressImageParams {
  file: File // O arquivo de imagem original a ser comprimido
  maxWidth?: number // Largura máxima permitida para a imagem redimensionada
  maxHeight?: number // Altura máxima permitida para a imagem redimensionada
  quality?: number // Qualidade da compressão (0 a 1), onde 1 é a melhor qualidade
}

// Função auxiliar para alterar a extensão do arquivo para .webp
function convertToWebp(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.')

  if (lastDotIndex === -1) {
    return `${filename}.webp`
  }

  return `${filename.substring(0, lastDotIndex)}.webp`
}

export function compressImage({
  file,
  maxWidth = Number.POSITIVE_INFINITY, // Padrão: sem limite de largura
  maxHeight = Number.POSITIVE_INFINITY, // Padrão: sem limite de altura
  quality = 1, // Padrão: qualidade máxima
}: CompressImageParams) {
  // Tipos de arquivo permitidos para compressão
  const allowedFileTypes = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/webp',
  ]

  // Verifica se o tipo do arquivo é suportado
  if (!allowedFileTypes.includes(file.type)) {
    throw new Error('Image format not supported')
  }

  return new Promise<File>((resolve, reject) => {
    const reader = new FileReader()

    // Quando o arquivo for lido com sucesso
    reader.onload = (event) => {
      const compressed = new Image()

      // Quando a imagem for carregada na memória
      compressed.onload = () => {
        const canvas = document.createElement('canvas')

        let width = compressed.width
        let height = compressed.height

        // Lógica de redimensionamento mantendo a proporção (aspect ratio)
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height
            height = maxHeight
          }
        }

        canvas.width = width
        canvas.height = height

        const context = canvas.getContext('2d')

        if (!context) {
          reject(new Error('Failed to get canvas context'))
          return
        }

        // Desenha a imagem redimensionada no canvas
        context.drawImage(compressed, 0, 0, width, height)

        // Converte o conteúdo do canvas para um Blob no formato WebP
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to compress image.'))
              return
            }

            // Cria um novo arquivo a partir do Blob comprimido
            const compressedFile = new File([blob], convertToWebp(file.name), {
              type: 'image/webp',
              lastModified: Date.now(),
            })

            resolve(compressedFile)
          },
          'image/webp',
          quality
        )
      }

      // Define a origem da imagem como o resultado da leitura do arquivo
      compressed.src = event.target?.result as string
    }

    // Lê o arquivo como uma URL de dados (base64)
    reader.readAsDataURL(file)
  })
}

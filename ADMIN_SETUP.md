# Painel administrativo SILENCER — modo de homologação

O painel fica disponível em `/admin` e usa a senha temporária `moly@2026`.

- A autenticação é mantida em `sessionStorage`.
- Os textos e links são mantidos em `localStorage`.
- As imagens permanecem fixas nos arquivos do projeto.
- As alterações aparecem somente no mesmo navegador e domínio.
- Os campos de vídeo aceitam um arquivo direto `.mp4`/`.webm` ou um link do
  Vimeo com incorporação liberada. Links de revisão do Vimeo abrem externamente
  porque a plataforma bloqueia esse tipo de página dentro de outros sites.

Este modo é indicado apenas para validar a experiência editorial. A senha está
no JavaScript entregue ao navegador e, portanto, não oferece segurança real.
Antes da publicação definitiva, a persistência e a autenticação devem voltar
para uma API com banco de dados.

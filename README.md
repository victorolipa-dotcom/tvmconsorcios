# Landing page — TVM Promotora

Site completo em HTML, CSS e JavaScript, preparado para um repositório no GitHub e publicação na Vercel. Não precisa de banco de dados, instalação de dependências, chave de API ou etapa de compilação.

## 1. Colocar no GitHub

1. Extraia o ZIP no computador. Não envie o ZIP fechado para o GitHub.
2. Crie um repositório no GitHub, por exemplo `tvm-consorcio-eua`. Ele pode ser público ou privado.
3. No repositório, use **Add file → Upload files**. Em um repositório vazio, use o link **uploading an existing file**.
4. Arraste a pasta **public** inteira e os arquivos **vercel.json**, **README.md** e **.gitignore** para o repositório. Se o Windows ocultar `.gitignore`, ele é opcional para a publicação; mantenha-o quando possível.
5. Clique em **Commit changes**.

A raiz do repositório deve ficar assim (sem uma pasta extra envolvendo tudo):

```text
README.md
vercel.json
.gitignore
public/
  index.html
  style.css
  app.js
  assets/
    casa-brasil.webp
    tvm.jpg
    itau.svg
    embracon.svg
    vw.svg
    hs.svg
```

## 2. Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com/) e entre com sua conta.
2. Escolha **Add New → Project** e conecte sua conta do GitHub, se necessário.
3. Importe o repositório que acabou de criar.
4. Confira as configurações abaixo. O arquivo `vercel.json` já declara os valores necessários.

| Configuração | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raiz do repositório (`./`) |
| Build Command | Vazio — sem compilação |
| Install Command | Vazio — sem instalação |
| Output Directory | `public` |
| Environment Variables | Nenhuma |

5. Clique em **Deploy**. Ao terminar, a Vercel mostrará o endereço do site.
6. Abra o endereço em uma janela anônima para conferir o acesso público, o formulário e as imagens. Se a Vercel solicitar autenticação para visitantes, confira a configuração de proteção do endereço de produção antes de usar nos anúncios.
7. Caso tenha um domínio próprio, adicione-o nas configurações do projeto, na seção **Domains**, e siga os registros de DNS informados pela Vercel.

As próximas alterações enviadas à branch de produção conectada do GitHub serão publicadas pela integração da Vercel.

Documentação oficial: [projetos com Git](https://vercel.com/docs/git), [configuração de build](https://vercel.com/docs/builds/configure-a-build) e [vercel.json](https://vercel.com/docs/project-configuration/vercel-json).

## O que está configurado

- Identidade visual da TVM em azul-marinho, azul e laranja.
- Layout adaptado a celular e computador.
- Seleção de veículos ou imóveis.
- Barra de R$ 0 a R$ 2 milhões, em passos de R$ 10 mil; exige valor maior que zero para continuar.
- Nome e WhatsApp com código do país.
- Redirecionamento ao WhatsApp **+55 31 7512-4983**, exatamente como informado pelo responsável, com mensagem pronta para o visitante revisar e enviar.
- Pixel da Meta **28976308445355243**, com eventos **PageView** (visita) e **Lead** (formulário válido avançando ao WhatsApp), e alternativa `noscript` para visitas.
- Aviso de privacidade com informação sobre o Pixel da Meta.

O formulário não grava os dados em um banco de dados. Nome, telefone e respostas não são incluídos nos eventos PageView e Lead configurados pela TVM. Não há integração com CRM nem API de Conversões nesta versão.

Depois da publicação no novo domínio, abra **Testar eventos**, no Gerenciador de Eventos da Meta, para conferir o recebimento. A configuração local do pixel está incluída; a confirmação na conta da Meta depende do acesso do responsável.

## Editar depois

| Arquivo | Conteúdo |
| --- | --- |
| `public/index.html` | Textos, formulário, pixel, perguntas frequentes e privacidade |
| `public/style.css` | Cores, fontes e layout |
| `public/app.js` | Barra de valor, validação e mensagem do WhatsApp |
| `public/assets/` | Imagens e logos |
| `vercel.json` | Configuração de publicação |

Para trocar o WhatsApp, altere o destino em `public/app.js` e o número apresentado no aviso de privacidade em `public/index.html`. Para trocar o pixel, atualize o ID na inicialização, na configuração `autoConfig` e na imagem `noscript` de `public/index.html`.

## Origem dos ativos

As imagens e a logo da TVM foram fornecidas pelo responsável. A imagem da casa é um recorte do material fornecido, usada de forma ilustrativa. Embracon, Consórcio Volkswagen e HS: arquivos obtidos nos sites oficiais. Itaú: cópia do vetor referenciado pelo Open Finance, com origem em `https://www.itau.com.br/media/dam/m/4ee2c952e1fa91a2/original/Novo_itau.svg`, disponibilizada pelo repositório público `rzmt/logos-bancos-br` porque o download direto estava bloqueado. As marcas pertencem aos respectivos titulares.

Este pacote não inclui credenciais, arquivos internos do Sites ou histórico Git. A publicação deste pacote na Vercel é independente da hospedagem anterior.


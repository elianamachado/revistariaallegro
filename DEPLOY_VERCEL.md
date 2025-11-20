# 🚀 Guia Completo de Deploy no Vercel - Revistaria Allegro

## ✅ Pré-requisitos
- Conta no GitHub com o repositório criado
- Conta no Vercel (pode criar com a conta do GitHub)

## 📋 Passo a Passo

### 1. Commit e Push para o GitHub
```bash
git add .
git commit -m "Configuração para deploy no Vercel"
git push origin main
```

### 2. Configuração no Vercel

#### 2.1 Importar Projeto
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Selecione seu repositório do GitHub
4. Clique em "Import"

#### 2.2 Configurações de Build (IMPORTANTE!)

**Root Directory:**
```
frontend
```

**Build Command:**
```
npm run build
```

**Output Directory:**
```
build
```

**Install Command:**
```
npm install --legacy-peer-deps
```

#### 2.3 Environment Variables
**NÃO ADICIONE** nenhuma variável de ambiente por enquanto.
O site funciona sem backend.

#### 2.4 Node.js Version (se perguntado)
```
16.x
```

### 3. Deploy
1. Clique em "Deploy"
2. Aguarde o build (pode levar 2-5 minutos)
3. ✅ Pronto! Seu site estará no ar

## 🔧 Se der erro de "ajv" ou dependências:

### Solução 1: Adicionar Environment Variable
No Vercel, adicione:
- **Key:** `NPM_FLAGS`
- **Value:** `--legacy-peer-deps`

### Solução 2: Verificar arquivos
Certifique-se que estes arquivos existem no repositório:
- ✅ `/vercel.json` (na raiz do projeto)
- ✅ `/.npmrc` (na raiz do projeto)
- ✅ `/frontend/.env.production`

## 🎯 Estrutura de Arquivos no GitHub

```
seu-repositorio/
├── .npmrc                          # ← Configuração npm
├── vercel.json                     # ← Configuração Vercel
├── backend/                        # (não será usado no Vercel)
└── frontend/                       # ← Root Directory
    ├── .env.production             # ← Sem backend
    ├── package.json                # ← Com resolutions
    ├── public/
    └── src/
        ├── App.js
        ├── App.css
        └── ...
```

## ⚠️ Erros Comuns e Soluções

### Erro: "No such file or directory: frontend"
**Solução:** Verifique se o Root Directory está configurado como `frontend`

### Erro: "Cannot find module 'ajv/dist/compile/codegen'"
**Solução:** 
1. Verifique se `.npmrc` existe com `legacy-peer-deps=true`
2. Adicione Environment Variable `NPM_FLAGS=--legacy-peer-deps`
3. No `package.json`, confirme que tem `resolutions` e `overrides`

### Erro: "Build Command failed"
**Solução:**
1. Certifique-se que o Build Command é apenas: `npm run build`
2. Install Command deve ser: `npm install --legacy-peer-deps`

## 🎉 Após Deploy Bem-Sucedido

1. Vercel vai gerar uma URL tipo: `https://seu-projeto.vercel.app`
2. Teste todas as funcionalidades:
   - ✅ Navegação entre seções
   - ✅ Link para WhatsApp
   - ✅ Link para Instagram
   - ✅ Link para Google Maps
3. Configure domínio customizado (opcional)

## 📱 Domínio Customizado (Opcional)

1. No painel do Vercel, vá em "Settings" → "Domains"
2. Adicione seu domínio (ex: `revistariaallegro.com.br`)
3. Configure os DNS conforme instruções do Vercel

## 🆘 Precisa de Ajuda?

Se mesmo após seguir estes passos você tiver problemas:
1. Copie o log completo do erro
2. Verifique se todos os arquivos estão no GitHub
3. Confirme as configurações no painel do Vercel

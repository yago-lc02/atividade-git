# Respostas da Lista de Exercícios: Git, GitHub e GitFlow

**Estudante:** Yago
**Disciplina:** Engenharia da Qualidade e Confiabilidade (ESW451)
**Professor:** Me. Sergio Souza Novak
**Data:** 11 de Junho de 2026

---

## Parte 1: Fundamentos do Git

### Questão 1: Inicializando o Repositório

#### a) Comandos executados no terminal:
```bash
mkdir lanchonete-web
cd lanchonete-web
git init
```
*Saída do terminal:*
`Initialized empty Git repository in C:/Users/Yago/OneDrive/Documentos/UNIRV/7° PERÍODO 01.2026/ESW451 - ENGENHARIA DA QUALIDADE E CONFIABILIDADE - SÉRGIO NOVAK/ATIVIDADES/N3/ATIVIDADE DO DIA 11-06/lanchonete-web/.git/`

#### b) Arquivos criados na pasta do projeto:
- `index.html`
- `style.css`
- `cardapio.js`
- `README.md`

#### c) Significado do status "Untracked files":
O status **"Untracked files"** (arquivos não monitorados / não rastreados) indica que o Git detectou a existência de novos arquivos no diretório de trabalho do projeto, porém eles ainda não foram adicionados à área de preparação (**Staging Area**). O Git não monitorará as alterações feitas nesses arquivos nem os incluirá nos commits futuros até que o comando `git add` seja utilizado para começar a rastreá-los.

---

### Questão 2: Primeiro Commit: Preparando e Salvando

#### a) Mudança após executar `git add README.md` e `git status`:
*Saída observada no status:* O arquivo `README.md` passou da seção *"Untracked files"* para a seção *"Changes to be committed"* como `new file: README.md`.
*Explicação:* A mudança indica que o arquivo foi adicionado com sucesso à **Staging Area** (área de preparação). Ele agora está sob o rastreamento do Git e preparado para ser incluído na próxima foto (commit) do repositório. Os demais arquivos (`index.html`, `style.css`, `cardapio.js`, `respostas.md`) permaneceram na seção *"Untracked files"*.

#### b) Comando para adicionar os demais arquivos:
```bash
git add .
```

#### c) Mensagem do commit inicial e hash curto obtido:
*Mensagem:* `feat: estrutura inicial do projeto`
*Hash curto exibido:* `21fc1eb`

#### d) Saída e descrição do comando `git log --oneline`:
*Saída do comando:*
`21fc1eb feat: estrutura inicial do projeto`
*Descrição:* O comando exibe o histórico de commits do repositório de forma compacta e linear. Cada linha representa um commit e mostra apenas o hash identificador curto (os primeiros 7 caracteres do SHA-1) e a mensagem descritiva do commit.

---

### Questão 3: Modificando e Rastreando Arquivos

#### a) Diferença entre arquivo "Untracked" e arquivo "Modified":
* **Untracked (Não rastreado):** É um arquivo novo que acabou de ser criado e que o Git nunca monitorou. Ele não possui nenhum registro histórico anterior no repositório.
* **Modified (Modificado):** É um arquivo que já foi incluído no repositório anteriormente (já foi comitado ou adicionado antes), mas que sofreu alterações de conteúdo no diretório de trabalho que ainda não foram enviadas para a Staging Area.

#### b) O que o comando `git diff` mostra:
O comando `git diff` exibe as diferenças exatas de conteúdo (linha a linha) entre as alterações atuais do Working Directory e a última versão que foi adicionada à Staging Area (ou do último commit). Ele serve para revisar o que foi de fato modificado (linhas removidas representadas por `-` e linhas adicionadas representadas por `+`) antes de preparar o arquivo para commit.

#### c) Comandos executados para commit:
```bash
git add index.html
git commit -m "feat: adiciona estrutura basica do HTML"
```
*Saída do terminal:*
`[main c016278] feat: adiciona estrutura basica do HTML`
`1 file changed, 67 insertions(+), 1 deletion(-)`

---

### Questão 4: Histórico de Versões com git log

#### a) Saída completa do `git log` para os commits recentes:

1. **Commit de Estilos CSS:**
   * **Hash completo:** `9683ce60f43c469196213542e193bc235fff40d5`
   * **Autor:** Yago Lemes da Cruz <yago.cruz123@gmail.com>
   * **Data:** Thu Jun 11 20:42:51 2026 -0300
   * **Mensagem:** `feat: adiciona estilos CSS basicos para a lanchonete`

2. **Commit do Script JS:**
   * **Hash completo:** `12dc0f3bde50eb5837fdd71dcf29ad3cfa34ccdd`
   * **Autor:** Yago Lemes da Cruz <yago.cruz123@gmail.com>
   * **Data:** Thu Jun 11 20:43:04 2026 -0300
   * **Mensagem:** `feat: adiciona interatividade e cliques nos botoes de pedido no JS`

#### b) Representação do símbolo `*` na saída do `git log --oneline --graph`:
O símbolo `*` representa um **commit (nó)** na linha do tempo ou histórico visual do repositório. O `--graph` desenha a estrutura do histórico mostrando branches e merges, e cada `*` indica que um commit foi gerado naquela posição específica da ramificação.

#### c) Importância de mensagens de commit claras e descritivas:
Mensagens de commit claras e descritivas são fundamentais em um projeto profissional pois:
1. **Facilitam a Colaboração:** Permitem que outros desenvolvedores da equipe entendam o propósito e o impacto de cada alteração sem precisar analisar todo o código modificado.
2. **Histórico Rastreável:** Ajudam a localizar rapidamente em qual commit uma funcionalidade foi inserida ou onde um determinado bug pode ter sido introduzido.
3. **Automatização e Auditoria:** Simplificam a geração automática de notas de lançamento (Release Notes) e auxiliam em auditorias de qualidade ou segurança do software.

---

### Questão 5: Trabalhando com Branches: Nova Funcionalidade

#### a) Comando para criar e trocar para a nova branch:
```bash
git checkout -b feature/pagina-promocoes
```

#### b) Arquivo criado e commitado na branch de feature:
O arquivo `promocoes.html` foi criado com a estrutura do wireframe e o commit foi executado com sucesso:
`[feature/pagina-promocoes d9a659b] feat: adiciona pagina de promocoes e estilos correspondentes`

#### c) Significado do asterisco (`*`) na saída do `git branch`:
O asterisco (`*`) exibido na cor verde indica qual é a **branch ativa/corrente** no momento (a ramificação sobre a qual você está trabalhando atualmente no diretório de trabalho). Qualquer novo commit realizado será adicionado a esta branch com o asterisco.

#### d) Comportamento do arquivo `promocoes.html` ao voltar para a branch `main`:
*O que aconteceu:* O arquivo `promocoes.html` desapareceu da pasta física do projeto local.
*Por quê:* Ao executar o comando `git checkout main`, o Git atualiza o diretório de trabalho do seu sistema operacional para corresponder exatamente ao último estado da branch `main`. Como o arquivo `promocoes.html` foi criado e comitado exclusivamente na branch `feature/pagina-promocoes`, ele ainda não existe no histórico da branch `main`, fazendo com que ele não apareça enquanto a `main` estiver ativa.

---

### Questão 6: Integrando Branches com git merge

#### a) Comando executado para o merge:
```bash
git merge feature/pagina-promocoes -m "merge: integra a pagina de promocoes na branch principal"
```

#### b) Saída do terminal e estratégia de merge identificada:
*Saída do terminal:*
```
Merge made by the 'ort' strategy.
 promocoes.html | 108 ++++++++++++++++++++++++++++++++++++++++++
 style.css      | 147 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 2 files changed, 255 insertions(+)
 create mode 100644 promocoes.html
```
*Estratégia utilizada:* O Git utilizou a estratégia **'ort'** (que significa *"Ostensibly Recursive's Twin"*, o algoritmo padrão moderno de merge de 3 vias a partir da versão 2.34 do Git). Ela é aplicada quando há divergência no histórico das branches mescladas (ambas possuíam commits novos após a ramificação).

#### c) Saída do `git log --oneline --graph` e descrição visual:
*Saída do comando:*
```
*   dc699db merge: integra a pagina de promocoes na branch principal
|\  
| * d9a659b feat: adiciona pagina de promocoes e estilos correspondentes
* | 1d5cae1 docs: respostas da questao 5
|/  
* 8e44c94 docs: respostas da questao 4
```
*Descrição visual:* O histórico mostra duas linhas de desenvolvimento paralelas que se iniciaram a partir do commit `8e44c94`. A linha da esquerda (com o commit `1d5cae1`) representa a branch `main` e a linha da direita (com o commit `d9a659b`) representa a branch `feature/pagina-promocoes`. No topo (`dc699db`), as duas linhas se convergem novamente no commit de merge, demonstrando a integração das ramificações.

#### d) Comando para deletar a branch de feature e motivo de ser uma boa prática:
*Comando executado:*
```bash
git branch -d feature/pagina-promocoes
```
*Por que é uma boa prática:* Deletar branches de funcionalidades concluídas é uma excelente prática para manter o repositório organizado, livre de ramificações obsoletas, facilitando a navegação de outros desenvolvedores e evitando commits acidentais em branches antigas que já foram integradas à linha principal.

---

### Questão 7: Desfazendo Erros com git revert

#### a) Alteração errada proposital e commit:
*Alteração no `style.css`:* Adicionado `background: pink;` ao body.
*Commit realizado:* `f2db83d feat: adiciona cor de fundo rosa no body`

#### b) Hash do commit indesejado identificado com `git log --oneline`:
*Hash curto:* `f2db83d`

#### c) Comando para reverter o commit e diferença técnica entre revert e reset:
*Comando executado:*
```bash
git revert f2db83d --no-edit
```
*Saída do terminal:*
`[main f321ff4] Revert "feat: adiciona cor de fundo rosa no body"`
`1 file changed, 1 deletion(-)`

*Diferença entre `git revert` e `git reset`:*
* **`git revert`:** Cria um **novo commit** no histórico que faz exatamente a alteração inversa do commit alvo, neutralizando seu efeito. Ele **preserva o histórico original** intacto, incluindo o commit com erro e o commit de correção. É a estratégia ideal e segura para repositórios compartilhados e ramificações públicas, pois não reescreve a história.
* **`git reset`:** Move o ponteiro da branch atual de volta para um commit específico do passado, **reescrevendo o histórico** (descartando os commits posteriores a esse ponto). É perigoso em repositórios remotos compartilhados, pois quebra a sincronia para outros desenvolvedores que já possuíam aqueles commits locais.

---

### Questão 8: Repositório Remoto com GitHub

#### a) URL do repositório remoto configurado:
`https://github.com/yago-lc02/atividade-git.git`

#### b) Comandos de conexão e push executados:
```bash
git remote add origin https://github.com/yago-lc02/atividade-git.git
git push -u origin main
```

#### c) O que significa a flag `-u` no `git push`:
A flag `-u` (ou `--set-upstream`) instrui o Git a salvar a associação de rastreamento entre a branch local `main` e a branch remota correspondente (`origin/main`). Dessa forma, nos futuros envios ou atualizações da branch, basta executar os comandos simplificados `git push` ou `git pull`, pois o Git já sabe para qual repositório remoto e branch a operação deve ser direcionada.

#### d) Alteração simulada do README e resultado do `git pull`:
*Comando executado:*
```bash
git pull
```
*Saída do terminal:*
```
From https://github.com/yago-lc02/atividade-git
   81aed90..e4df886  main       -> origin/main
Updating 81aed90..e4df886
Fast-forward
 README.md | 3 +++
 1 file changed, 3 insertions(+)
```
*O que o comando fez:* O `git pull` buscou as alterações mais recentes presentes no repositório remoto (com um `git fetch`) e, como não houve conflitos, as mesclou automaticamente no repositório local (com um `git merge`) na modalidade **Fast-forward**. O arquivo `README.md` local foi atualizado com a seção *"Como Executar"*, mantendo o código local sincronizado com a nuvem.

---

## Parte 2: GitFlow — Fluxo Profissional de Desenvolvimento

### Questão 9: Inicializando o GitFlow

#### a) Instalação do plugin GitFlow:
No Git for Windows (ambiente de execução local), o GitFlow já vem instalado de maneira integrada por padrão, não necessitando de nenhuma instalação adicional.

#### b) Comando de inicialização executado e saída:
```bash
git flow init -d
```
*Saída do terminal:*
```
Using default branch names.

Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] 
Branch name for "next release" development: [develop] 

How to name your supporting branch prefixes?
Feature branches? [feature/] 
Bugfix branches? [bugfix/] 
Release branches? [release/] 
Hotfix branches? [hotfix/] 
Support branches? [support/] 
Version tag prefix? [] 
Hooks and filters directory? [C:/Users/Yago/OneDrive/Documentos/UNIRV/7° PERÍODO 01.2026/ESW451 - ENGENHARIA DA QUALIDADE E CONFIABILIDADE - SÉRGIO NOVAK/ATIVIDADES/N3/ATIVIDADE DO DIA 11-06/lanchonete-web/.git/hooks]
```

#### c) Saída do `git branch` e função da branch `develop`:
*Saída observada:*
```
* develop
  main
```
*Função da branch `develop`:* É a branch principal de integração do desenvolvimento. Ela serve para consolidar todas as novas funcionalidades concluídas (features) que serão agregadas na próxima versão de lançamento (release) do produto. Ela reflete o estado mais recente de desenvolvimento ativo e serve como base de nascimento para novas ramificações de feature e release.

#### d) Comando para fazer push da branch develop:
```bash
git push -u origin develop
```
*Saída do terminal:*
`branch 'develop' set up to track 'origin/develop'.`
`To https://github.com/yago-lc02/atividade-git.git`
` * [new branch]      develop -> develop`

---

### Questão 10: Ciclo de Feature: Novo Cardápio Online

#### a) Comando para iniciar a feature e branch resultante:
*Comando executado:*
```bash
git flow feature start cardapio-interativo
```
*Branch resultante:* `feature/cardapio-interativo`

#### b) Commits descritivos efetuados durante a feature:
1. `39013b5 feat: adiciona array de itens do cardapio no JS`
2. `5f979e3 feat: implementa renderizacao dinamica do cardapio no DOM`

#### c) Ações automáticas do `git flow feature finish` e branch destino:
*Ações automáticas:*
1. Trocou a branch atual local de volta para a branch `develop`.
2. Mesclou a branch de feature `feature/cardapio-interativo` na branch `develop`.
3. Deletou a branch local de feature `feature/cardapio-interativo`.
*Branch destino:* A branch **`develop`**.

#### d) Saída do log e descrição do fluxo de branches:
*Saída do comando `git log --oneline --graph`:*
```
*   0d37542 Merge branch 'feature/cardapio-interativo' into develop
|\  
| * 5f979e3 feat: implementa renderizacao dinamica do cardapio no DOM
| * 39013b5 feat: adiciona array de itens do cardapio no JS
|/  
* b0f931b docs: respostas da questao 9
```
*Descrição do fluxo:* O histórico visual em grafo mostra que a partir da branch `develop` (no commit `b0f931b`) abriu-se uma ramificação de feature (à direita) contendo os commits de desenvolvimento `39013b5` e `5f979e3`. No commit `0d37542` (Merge commit), essa linha paralela foi reunida novamente com a branch `develop`, incorporando de forma segura as novas funcionalidades de cardápio ao fluxo de desenvolvimento contínuo.

---

### Questão 11: Ciclo de Release: Preparando a Versão 1.0

#### a) Comando para iniciar a release, branch criada e ramificação de origem:
*Comando executado:*
```bash
git flow release start 1.0.0
```
*Branch criada:* `release/1.0.0`
*Origem:* Ela nasce a partir da branch **`develop`**.

#### b) Commits e alterações feitas na branch de release:
O arquivo `README.md` foi atualizado adicionando a estrutura detalhada de arquivos do projeto e o footer de `index.html` foi ajustado para exibir o ano de 2026.
*Commit realizado:* `ffb73a8 chore: prepara release v1.0.0`

#### c) O que ocorreu com as branches "main" e "develop" ao finalizar a release:
*Comando executado:*
```bash
git flow release finish 1.0.0 -m "Release 1.0.0"
```
*Ações resultantes:*
1. O GitFlow mesclou o conteúdo da branch `release/1.0.0` na branch principal **`main`**.
2. Criou uma **tag** de versão chamada **`1.0.0`** associada a essa mesclagem na branch `main`.
3. Mesclou as alterações da release de volta na branch **`develop`** (back-merge), garantindo que os ajustes feitos na preparação do lançamento estejam integrados no desenvolvimento futuro.
4. **Deletou** a branch local `release/1.0.0`.
5. Retornou o desenvolvedor para a branch ativa **`develop`**.

#### d) Saída do `git tag` e função de uma tag no GitFlow:
*Saída do comando:* `1.0.0`
*Função de uma tag no GitFlow:* Uma tag é um marcador permanente e imutável que aponta para um commit específico do histórico (geralmente commits de merge na branch `main`). Sua função no GitFlow é registrar de forma definitiva os marcos de lançamento do software (releases), permitindo que qualquer desenvolvedor acesse a versão exata do software em produção no futuro de maneira simples e inequívoca, garantindo a rastreabilidade e auditoria da versão.

---

### Questão 12: Ciclo de Hotfix: Corrigindo Bug em Produção

#### a) Comando de inicialização e motivo de nascer da "main" e não da "develop":
*Comando executado:*
```bash
git flow hotfix start correcao-titulo
```
*Por que nasce da main:* O hotfix serve para corrigir um erro crítico que está ativo em produção (cujo código é representado pela branch `main`). Iniciar o hotfix a partir da branch `develop` seria incorreto porque estaríamos trazendo códigos inacabados, experimentais e instáveis de novas funcionalidades (que ainda estão em desenvolvimento na `develop`) diretamente para produção, podendo introduzir novos bugs.

#### b) Alterações efetuadas e commit de correção:
O título de `index.html` foi corrigido de *"Lanchonete do Bairro"* para *"Lanchonete do Bairro - Oficial"*.
*Commit realizado:* `fdcd4ce fix: corrige titulo da pagina principal`

#### c) Branches nas quais o hotfix foi mesclado após a finalização:
*Comando executado:*
```bash
git flow hotfix finish correcao-titulo -m "Hotfix 1.0.1"
```
*Branches que receberam o merge:* O hotfix foi integrado em duas ramificações:
1. Na branch **`main`** (para corrigir imediatamente o código de produção).
2. Na branch **`develop`** (back-merge para garantir que o bug não reapareça em futuros lançamentos).

#### d) Número de versão correto segundo o Semantic Versioning (SemVer) e justificativa:
*Número da versão:* **`1.0.1`**
*Justificativa:* De acordo com o SemVer (`MAIOR.MENOR.CORREÇÃO`), incrementa-se o número de **CORREÇÃO (Patch)** quando realizamos correções de bugs de forma retrocompatível (ou seja, que não quebram o sistema nem adicionam novas funções). Como o hotfix apenas corrigiu a digitação incorreta do título da página principal, sem alterar a API ou inserir novas funcionalidades, a versão evolui de `1.0.0` para `1.0.1`.

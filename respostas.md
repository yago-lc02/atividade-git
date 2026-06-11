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

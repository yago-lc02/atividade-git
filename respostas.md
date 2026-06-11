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

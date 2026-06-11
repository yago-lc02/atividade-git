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

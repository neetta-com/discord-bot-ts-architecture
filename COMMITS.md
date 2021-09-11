```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Type | Explicação | Exemplo
----- | ------- | --------
test | Indica qualquer tipo de criação ou alteração de códigos de teste. | Criação de testes unitários.
feat | Indica o desenvolvimento de uma nova feature ao projeto. | Acréscimo de um serviço, funcionalidade, endpoint, etc.
fix | Utilizado quando há correção de erros que estão gerando bugs no sistema. | Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
reafctor | Quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. | Mudanças de código após um code review
style | Empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma. | Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
chore | Indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento. | Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
docs | Usado quando há mudanças na documentação do projeto. | adicionar informações na documentação da API, mudar o README, etc.
build | Utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas. | Gulp, adicionar/remover dependências do npm, etc.
perf | Indica uma alteração que melhorou a performance do sistema. | alterar ForEach por while, melhorar a query ao banco, etc.
ci | Utilizada para mudanças nos arquivos de configuração de CI. | Circle, Travis, BrowserStack, etc.
revert | Indica a reverão de um commit anterior. | ...

[Medium Conventional Commits Pattern](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)
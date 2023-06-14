# nrgx-estrutura
Estrutura basica para a criação do gerenciamento de estado em typescript

Utilizei a extensao no visual studio:

Name: Project Templates
Id: cantonios.project-templates
Description: Create and apply custom projects templates
Version: 1.2.0
Publisher: cantonios
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=cantonios.project-templates

Com essa extensão eu consigo criar templates para o meu projeto, no meu caso eu criei um template para gerenciamento de estado com NGRX. Notei que essa extensao nao consegue adicionar um determinado trecho de codigo em um arquivo existente.

Como utilizar: 

Escolho qual pasta eu quero me basear como template, utilizei a pasta cadastro:
![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/53575262-38b2-4eec-9a68-6c5c83214081)

Com o botao direito do mouse em cima da pasta, é possivel visualizar e selecionar a opcao abaixo:
![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/895395b6-5a07-4a06-aa63-254bd4cb7aa0)

Por padrão ele vai salvar o templete nesse caminho: (PODE SER ALTERADA DENTRO DA EXTENSAO)

C:\Users\[USUARIO]\AppData\Roaming\Code\User\ProjectTemplates

Voce pode criar varias variaveis para serem modificados. No meu caso, Os nomes das pastas serem minusculas e a classe em Maiuscula
Para criar essas variaveis ela tem que seguir de um # seguido de uma {, adicione o nome da variavel e finaliza com }. ficando assim:  #{variavel}
o Nome da variavel pode ser MAISCULA , Minuscula ou a junção dos dois, mas não pode ter caracteres especiais como #{variavel-variavel}

![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/73ec9e5a-1d16-4cf0-9eb3-8b2f1f7b9058)

Utilizei 3 variaveis para esse modelo, lembrando que pode ser quantos quiserem.
#{nomeDaPasta}  = Nome da pasta
#{nomeDaClasseMaiusculo} = Classes
#{nomeDoArquivoMinusculo} = Nome dos arquivos e variaveis


UTILIZÇÃO DO TEMPLATE

Dentro do projeto, clique com o botão direito e selecione Create Project from template
![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/729ebeed-8e75-4bbd-96d2-2f4483ccfcc1)

Selecione qual o template que quer usar

![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/30c414c5-d898-4c77-b8fd-0cbb7ebb42c5)

defina o nome da pasta
![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/cc29f15f-6107-41fc-bdd9-dc0ed430ef68)

defina o nome da Classe no caso tem que colocar em Maiuscula
![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/48cdba7b-373b-498e-a73e-1a6ea97b47eb)

![image](https://github.com/crysleiferreira/nrgx-estrutura/assets/39660331/960967f6-1e13-4a20-b77c-561b5e660d32)



# To do List
Um "to do list" desenvolvido em ReactJS para prática de desenvolvimento de Hooks.

# Sobre o Hook
O hook foi desenvolvido de forma que o cabeçalho da requisição fosse configurável, podendo ser usado tanto para o método GET, como para o método POST.

Ao aplicar o processo de destructuring ao usar o hook, tem-se acsso aos estados isLoading e error e a função interna sendRequest.
- isLoading: permite saber se o processo de requisição está em andamento e se foi finalizado.
- error: permite saber se houve algum erro ao fazer uma requisição.
- sendRequest: dá acesso a função interna do hook de mesmo nome. Essa função recebe dois parâmetros. O primeiro parâmetro é para configuração para o cabeçalho da requisição e o segundo parâmetro é função manipular os dados (recebido por GET ou enviados por POST)

O envio de parâmetros através da função acessada por destructuring é intessante, pois permite usar o useCallback do ReactJS somente uma vez. 

O uso do hook do react é mandatório por causa do método GET. Em App.js,  a função é uma dependencia de useEffect e como sendRequest sempre recebe objetos, toda vez que ele é gerada - mesmo que o valor do objetos recebidos sejam os mesmo - por se tratarem de paramtros de tipos não primitivos é como se a função sempre fosse alterada, já que os objetos recebidos são gerados em uma area de memória diferente. Isso geraria um loop infinito dentro da aplicação. O uso useCallback evita que isso ocorra.  

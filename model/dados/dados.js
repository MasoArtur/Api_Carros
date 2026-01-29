/* Atribuindo um valor para a nossa variável que se chama 'dados'
   Toda vez que eu tiver uma lista de nomes, terei que utilizar os colchetes */
const dados = [
    {
        fotos: [
            "",
            "",
            "",
            ""
        ],
        titulo: "Porsche 911 Carrera",
        descrisao: "O Porsche 911 Carrera é o modelo icônico que define a marca. Com motor boxer de seis cilindros posicionado na traseira, oferece uma combinação perfeita de desempenho diário e emoção esportiva. Sua silhueta atemporal permanece reconhecível desde 1963.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_911",
        tags: "911, carrera, boxer, esportivo, icônico, traseira, alemão"
    },

    {
        fotos: [
            "",
            "",
            "",
            ""
        ],
        titulo: "Porsche 911 Turbo S",
        descrisao: "O 911 Turbo S é a versão mais potente da linha 911, equipado com motor biturbo de 3.8 litros que entrega mais de 640 cavalos. Com tração integral e tecnologia avançada, acelera de 0 a 100 km/h em menos de 3 segundos.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_911",
        tags: "911, turbo, biturbo, potente, tração integral, performance"
    },

    {

        titulo: "Porsche 911 GT3 RS",
        descrisao: "O GT3 RS é a versão mais radical e focada em pista da linha 911. Com motor aspirado de alta rotação, aerodinâmica extrema e peso reduzido, é o sonho de qualquer entusiasta de track days. Seu motor chega a 9.000 RPM.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_911_GT3",
        tags: "GT3, RS, pista, aspirado, aerodinâmica, racing, track"
    },

    {

        titulo: "Porsche 718 Cayman",
        descrisao: "O 718 Cayman é um cupê esportivo de motor central que oferece equilíbrio perfeito e manobrabilidade excepcional. Com design elegante e motor turbo de quatro cilindros, é ideal para quem busca pureza na condução.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_Cayman",
        tags: "cayman, 718, motor central, cupê, equilíbrio, turbo"
    },

    {

        titulo: "Porsche 718 Boxster",
        descrisao: "O 718 Boxster é a versão conversível do Cayman, oferecendo a mesma dinâmica de condução com a emoção adicional do teto aberto. Perfeito para estradas sinuosas e dias ensolarados, mantém a essência esportiva da Porsche.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_Boxster",
        tags: "boxster, 718, conversível, roadster, teto aberto, esportivo"
    },

    {

        titulo: "Porsche Taycan",
        descrisao: "O Taycan é o primeiro veículo totalmente elétrico da Porsche. Com tecnologia de 800 volts, oferece recarga ultrarrápida e desempenho impressionante, provando que carros elétricos podem ser emocionantes e verdadeiramente Porsche.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_Taycan",
        tags: "taycan, elétrico, 800v, sustentável, inovação, performance"
    },

    {

        titulo: "Porsche Panamera",
        descrisao: "O Panamera é o gran turismo de quatro portas da Porsche, combinando luxo, espaço e performance esportiva. Ideal para viagens longas, oferece conforto refinado sem abrir mão da essência esportiva da marca.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_Panamera",
        tags: "panamera, gran turismo, quatro portas, luxo, conforto"
    },

    {

        titulo: "Porsche Macan",
        descrisao: "O Macan é o SUV compacto esportivo da Porsche. Apesar de ser um utilitário, mantém a dinâmica de condução característica da marca, oferecendo praticidade sem sacrificar o prazer ao volante.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_Macan",
        tags: "macan, suv, compacto, prático, esportivo, utilitário"
    },

    {
        
        titulo: "Porsche Cayenne",
        descrisao: "O Cayenne é o SUV que salvou a Porsche financeiramente nos anos 2000. Grande, luxuoso e surpreendentemente esportivo, oferece capacidade off-road e espaço para a família sem perder o DNA esportivo.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_Cayenne",
        tags: "cayenne, suv, grande, off-road, família, luxuoso"
    },

    {

        titulo: "Porsche 918 Spyder",
        descrisao: "O 918 Spyder é um hipercarro híbrido plug-in que combina motor V8 com motores elétricos, produzindo quase 900 cavalos. É um dos carros mais rápidos já produzidos pela Porsche, com tecnologia de Fórmula 1.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Porsche_918",
        tags: "918, spyder, híbrido, hipercarro, v8, limitado"
    },

    {

        titulo: "Lamborghini Aventador",
        descrisao: "O Aventador é equipado com um motor V12 naturalmente aspirado de 6.5 litros que produz mais de 700 cavalos. Com design agressivo e portas tesoura icônicas, é o carro-chefe da Lamborghini, representando o máximo em exclusividade e performance.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Aventador",
        tags: "aventador, v12, portas tesoura, aspirado, potente, touro"
    },

    {

        titulo: "Lamborghini Huracán",
        descrisao: "O Huracán é o modelo 'de entrada' da Lamborghini, equipado com motor V10 de 5.2 litros. Mais acessível que o Aventador, ainda oferece performance brutal, design marcante e a emoção característica da marca italiana.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Hurac%C3%A1n",
        tags: "huracán, v10, entrada, performance, italiano, agressivo"
    },

    {

        titulo: "Lamborghini Urus",
        descrisao: "O Urus é o SUV supresportivo da Lamborghini. Com motor V8 biturbo de 650 cavalos, é o SUV de produção mais rápido do mundo, combinando praticidade familiar com a agressividade e performance da marca.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Urus",
        tags: "urus, suv, biturbo, v8, família, supresportivo"
    },

    {

        titulo: "Lamborghini Murciélago",
        descrisao: "O Murciélago foi produzido entre 2001 e 2010, sendo o antecessor do Aventador. Com motor V12 e design agressivo assinado por Luc Donckerwolke, tornou-se um ícone dos anos 2000 e apareceu em inúmeros filmes e games.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Murci%C3%A9lago",
        tags: "murciélago, v12, clássico, 2000s, icônico, lendário"
    },

    {

        titulo: "Lamborghini Gallardo",
        descrisao: "O Gallardo foi o Lamborghini mais vendido de todos os tempos. Produzido entre 2003 e 2013, democratizou o acesso à marca italiana com seu motor V10 e design mais compacto, sendo antecessor do Huracán.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Gallardo",
        tags: "gallardo, v10, best seller, compacto, sucesso, 2000s"
    },

    {

        titulo: "Lamborghini Countach",
        descrisao: "O Countach é um dos carros mais icônicos da história automotiva. Produzido entre 1974 e 1990, definiu o design de supercarro com suas linhas angulares e portas tesoura. É o Lamborghini mais emblemático de todos os tempos.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Countach",
        tags: "countach, clássico, lendário, anos 80, icônico, angular"
    },

    {

        titulo: "Lamborghini Diablo",
        descrisao: "O Diablo foi produzido entre 1990 e 2001, sucedendo o Countach. Com velocidade máxima superior a 320 km/h, foi um dos carros mais rápidos de sua época e manteve o legado de design agressivo da marca.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Diablo",
        tags: "diablo, anos 90, rápido, sucessor, v12, potente"
    },

    {

        titulo: "Lamborghini Reventón",
        descrisao: "O Reventón foi um modelo ultra limitado lançado em 2007, com apenas 20 unidades produzidas. Inspirado em aviões de combate F-22 Raptor, seu design angular e exclusividade extrema o tornam um dos Lamborghinis mais raros.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Revent%C3%B3n",
        tags: "reventón, limitado, raro, exclusivo, f22, angular"
    },

    {

        titulo: "Lamborghini Sián",
        descrisao: "O Sián é o primeiro Lamborghini híbrido, combinando motor V12 com um supercapacitor que armazena energia elétrica. Com 819 cavalos e produção limitada, representa o futuro da marca mantendo sua essência naturalmente aspirada.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Si%C3%A1n",
        tags: "sián, híbrido, supercapacitor, v12, futuro, limitado"
    },

    {

        titulo: "Lamborghini Miura",
        descrisao: "O Miura, produzido entre 1966 e 1973, é considerado o primeiro supercarro da história. Com motor V12 montado transversalmente atrás dos assentos, revolucionou o design automotivo e estabeleceu a Lamborghini como fabricante de supercarros.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Lamborghini_Miura",
        tags: "miura, clássico, primeiro supercarro, v12, revolucionário"
    },

    {

        titulo: "Fiat Uno",
        descrisao: "O Fiat Uno é um ícone brasileiro, sendo o carro mais vendido no país durante muitos anos. Lançado em 1984, conquistou o coração dos brasileiros pela economia, praticidade e versatilidade. O Uno Mille se tornou sinônimo de primeiro carro para muitas gerações.",
        pais: "itália",
        link: "https://pt.wikipedia.org/wiki/Fiat_Uno",
        tags: "uno, mille, popular, econômico, brasil, primeiro carro"
    },

    {
        
        titulo: "Volkswagen Gol",
        descrisao: "O Volkswagen Gol é o carro mais vendido da história do Brasil. Lançado em 1980, passou por várias gerações e se mantém como referência em custo-benefício. Robusto, econômico e confiável, o Gol é parte da cultura automotiva brasileira.",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Volkswagen_Gol",
        tags: "gol, brasil, best seller, econômico, confiável, popular"
    },

    {
        titulo: "Volkswagen Fusca",
        descrisao: "Fusquina é um carro incrível e amado pelos brasileiros, aos quais oferece um banco de couro e muito estilo para encantar a mulherad mais velha, com seu motor 1300, produzido de 1938 a 2003, uma maravilha icônica",
        pais: "alemanha",
        link: "https://pt.wikipedia.org/wiki/Volkswagen_Fusca",
        tags : "fusca, antigo, popular, brasileiro" 
    }
];
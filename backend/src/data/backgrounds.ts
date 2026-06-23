export interface BackgroundData {
    id: string;
    name: string;
    description: string;
    feature: {
        name: string;
        description: string;
    };
    skillProficiencies: string[];
    toolProficiencies: string[];
    languages?: number; // Number of extra languages
    equipment: string[]; // Simple string list for now, or could be complex objects
    personalityTraits: string[];
    ideals: { text: string; align: string }[];
    bonds: string[];
    flaws: string[];
}

export const BACKGROUNDS: BackgroundData[] = [
    {
        id: 'acolyte',
        name: 'Acólito',
        description: 'Você dedicou parte da vida a um templo, ordem ou tradição espiritual, aprendendo seus ritos e cuidando dos fiéis.',
        feature: {
            name: 'Acolhida nos Templos',
            description: 'Em templos e santuários da sua fé, você e seus aliados costumam conseguir abrigo, cura simples e apoio dos devotos.'
        },
        skillProficiencies: ['Intuição', 'Religião'],
        toolProficiencies: [],
        languages: 2,
        equipment: ['Símbolo de fé', 'Livro de orações', 'Incenso', 'Vestes cerimoniais', 'Roupas comuns', '15 po'],
        personalityTraits: [
            'Trago sempre uma lição ou parábola da minha fé para cada situação.',
            'Mantenho a calma e a esperança mesmo nos piores momentos.',
            'Procuro o bem até em quem parece irrecuperável.',
            'Sou meticuloso com rituais, horários e tradições.',
            'Falo pouco do mundo lá fora — passei a vida entre orações.'
        ],
        ideals: [
            { text: 'Compaixão. Ajudar quem sofre é meu maior dever.', align: 'Bom' },
            { text: 'Tradição. Os ritos antigos guardam sabedoria e devem ser honrados.', align: 'Leal' },
            { text: 'Renovação. A fé precisa evoluir com o tempo.', align: 'Caótico' },
            { text: 'Convicção. Minha crença guia cada passo que dou.', align: 'Leal' },
            { text: 'Mérito. Quero me provar digno daquilo em que acredito.', align: 'Qualquer' }
        ],
        bonds: [
            'Protejo uma relíquia sagrada com a minha própria vida.',
            'Devo tudo ao mentor que me acolheu quando eu não tinha nada.',
            'Minha missão é levar conforto a quem está perdido.',
            'Um templo me traiu, e busco justiça por isso.',
            'Guardo um texto antigo que outros querem destruir.'
        ],
        flaws: [
            'Sou duro demais ao julgar — comigo, ainda mais.',
            'Minha fé às vezes me cega para a verdade.',
            'Confio cegamente em quem tem autoridade.',
            'Custo a mudar de ideia, mesmo quando estou errado.',
            'Desconfio de estranhos por princípio.'
        ]
    },
    {
        id: 'criminal',
        name: 'Criminoso',
        description: 'Você viveu à margem da lei — golpes, furtos e acordos nas sombras moldaram quem você é.',
        feature: {
            name: 'Rede nas Sombras',
            description: 'Você conhece gente do submundo que pode passar recados, informações e pequenos favores — por um preço.'
        },
        skillProficiencies: ['Enganação', 'Furtividade'],
        toolProficiencies: ['Kit de jogo', 'Ferramentas de ladrão'],
        equipment: ['Pé de cabra', 'Capa escura com capuz', '15 po'],
        personalityTraits: [
            'Sempre tenho um plano B (e um C) engatilhado.',
            'Mantenho o sangue-frio quando tudo desaba ao redor.',
            'Reparo no que vale a pena assim que entro em qualquer lugar.',
            'Levo tempo para confiar em alguém.',
            'Um bom desafio me faz esquecer todos os riscos.'
        ],
        ideals: [
            { text: 'Código. Não passo a perna em quem é da minha laia.', align: 'Leal' },
            { text: 'Liberdade. Ninguém manda em mim.', align: 'Caótico' },
            { text: 'Justiça torta. Tiro dos poderosos para ajudar os esquecidos.', align: 'Bom' },
            { text: 'Cobiça. Faço o que for preciso por riqueza.', align: 'Mal' },
            { text: 'Lealdade. Sou fiel aos meus, não a ideais.', align: 'Neutro' }
        ],
        bonds: [
            'Devo um favor pesado a alguém perigoso.',
            'Tudo o que faço é para sustentar minha família.',
            'Roubaram algo meu, e vou recuperar.',
            'Quero deixar minha marca como uma lenda do crime.',
            'Carrego a culpa de um erro que custou caro a alguém.'
        ],
        flaws: [
            'Não resisto a um alvo fácil e valioso.',
            'Entre o dinheiro e um aliado, costumo escolher o dinheiro.',
            'Improviso tanto que ignoro os planos combinados.',
            'Fujo quando o couro começa a comer.',
            'Tenho um cacoete que me entrega quando minto.'
        ]
    },
    {
        id: 'folk_hero',
        name: 'Herói do Povo',
        description: 'Você nasceu humilde, mas um ato de coragem fez o povo enxergar em você algo maior.',
        feature: {
            name: 'Hospitalidade do Campo',
            description: 'Gente simples reconhece sua boa fama e oferece comida, descanso e até esconderijo quando você precisa.'
        },
        skillProficiencies: ['Adestrar Animais', 'Sobrevivência'],
        toolProficiencies: ['Ferramentas de artesão', 'Veículos terrestres'],
        equipment: ['Ferramentas de artesão', 'Pá', 'Panela de ferro', 'Roupas comuns', '10 po'],
        personalityTraits: [
            'Julgo as pessoas pelo que fazem, não pelo que falam.',
            'Quando vejo alguém em apuros, não consigo passar reto.',
            'Quando decido algo, vou até o fim.',
            'Prefiro agir a ficar matutando.',
            'Tenho um senso de justiça que não me deixa em paz.'
        ],
        ideals: [
            { text: 'Dignidade. Todo mundo merece respeito.', align: 'Bom' },
            { text: 'Justiça. Ninguém está acima do que é certo.', align: 'Leal' },
            { text: 'Liberdade. Tiranos não vão pisar no povo enquanto eu viver.', align: 'Caótico' },
            { text: 'Poder. Sendo forte, pego o que eu quiser.', align: 'Mal' },
            { text: 'Chamado. Nada me afasta do meu destino.', align: 'Qualquer' }
        ],
        bonds: [
            'Defendo a terra e a gente de onde vim.',
            'Protejo quem não consegue se proteger.',
            'Tenho contas a acertar com um nobre cruel.',
            'Minhas ferramentas lembram quem eu era antes de tudo isso.',
            'Perdi minha família e um dia vou reencontrá-la.'
        ],
        flaws: [
            'Tenho certeza absoluta do meu destino — até demais.',
            'Caio fácil nas tentações da cidade grande.',
            'Não recuso um desafio, mesmo contra quem é mais forte.',
            'Morro de medo de decepcionar quem confia em mim.',
            'Ajo antes de pensar nas consequências.'
        ]
    },
    {
        id: 'soldier',
        name: 'Soldado',
        description: 'A guerra foi sua vida por tanto tempo quanto você consegue se lembrar. Você treinou, marchou e sangrou ao lado de seus companheiros.',
        feature: { name: 'Patente Militar', description: 'Soldados leais ainda reconhecem sua autoridade e influência, e cedem a ela se forem de patente inferior.' },
        skillProficiencies: ['Atletismo', 'Intimidação'],
        toolProficiencies: ['Kit de jogo', 'Veículos terrestres'],
        equipment: ['Insígnia de patente', 'Troféu de um inimigo caído', 'Baralho de cartas', 'Roupas comuns', '10 po'],
        personalityTraits: [
            'Estou sempre pronto e disposto a enfrentar o perigo.',
            'Tenho uma frase de efeito para cada situação difícil.',
            'Sou inflexível diante do dever e da disciplina.',
            'Cuido dos meus aliados como uma família.'
        ],
        ideals: [
            { text: 'Maior Bem. Nosso dever é proteger e defender os outros.', align: 'Bom' },
            { text: 'Responsabilidade. Faço o que devo e obedeço à autoridade justa.', align: 'Leal' },
            { text: 'Independência. Lutei o bastante para seguir minhas próprias ordens.', align: 'Caótico' },
            { text: 'Força. Os fracos existem para servir aos fortes.', align: 'Mal' }
        ],
        bonds: [
            'Eu daria minha vida pelos meus antigos companheiros de batalha.',
            'Um inimigo de guerra jurou me caçar até o fim.',
            'Carrego comigo a lembrança de quem não sobreviveu.',
            'Luto por aqueles que não podem lutar por si.'
        ],
        flaws: [
            'O inimigo que derrotei ainda me assombra em pesadelos.',
            'Tenho pouco respeito por quem nunca viu uma batalha.',
            'Obedeço ordens mesmo quando elas são erradas.',
            'Congelo diante de um dilema moral.'
        ]
    },
    {
        id: 'sage',
        name: 'Sábio',
        description: 'Você passou anos aprendendo sobre o multiverso, vasculhando manuscritos e debatendo com mestres do conhecimento.',
        feature: { name: 'Pesquisador', description: 'Quando você tenta obter um conhecimento, geralmente sabe onde e de quem pode obter essa informação.' },
        skillProficiencies: ['Arcanismo', 'História'],
        toolProficiencies: [],
        languages: 2,
        equipment: ['Frasco de tinta', 'Pena de escrever', 'Faca pequena', 'Carta de um colega falecido', 'Roupas comuns', '10 po'],
        personalityTraits: [
            'Uso palavras longas para parecer mais culto.',
            'Já li tudo sobre o assunto — ou quase tudo.',
            'Fico absorto em meus pensamentos com facilidade.',
            'Não há nada que eu goste mais que um bom mistério.'
        ],
        ideals: [
            { text: 'Conhecimento. O caminho para o poder e a melhoria é o saber.', align: 'Neutro' },
            { text: 'Verdade. Busco a verdade, custe o que custar.', align: 'Leal' },
            { text: 'Sabedoria. Conhecimento sem prudência não vale nada.', align: 'Bom' },
            { text: 'Poder. O saber antigo me erguerá acima dos outros.', align: 'Mal' }
        ],
        bonds: [
            'Dedico minha vida a resolver um enigma de saber antigo.',
            'Protejo uma biblioteca de valor inestimável.',
            'Busco vingança contra quem destruiu meu trabalho.',
            'Meu conhecimento é tudo o que tenho.'
        ],
        flaws: [
            'Sou distraído e ignoro o mundo ao meu redor.',
            'Acredito cegamente em textos antigos.',
            'Não resisto a um segredo, mesmo perigoso.',
            'Desprezo quem não compartilha minha sede de saber.'
        ]
    },
    {
        id: 'noble',
        name: 'Nobre',
        description: 'Você nasceu em uma família de prestígio e riqueza, e o seu nome abre portas que ouro nenhum compraria.',
        feature: { name: 'Posição Privilegiada', description: 'As pessoas tendem a pensar o melhor de você, e você é bem-vindo na alta sociedade.' },
        skillProficiencies: ['História', 'Persuasão'],
        toolProficiencies: ['Kit de jogo'],
        languages: 1,
        equipment: ['Roupas finas', 'Anel de sinete', 'Pergaminho de linhagem', '25 po'],
        personalityTraits: [
            'Minha educação refinada transparece em cada gesto.',
            'Trato todos com cortesia — mesmo meus inimigos.',
            'Espero o melhor acomodamento aonde quer que eu vá.',
            'Não tolero ser desrespeitado.'
        ],
        ideals: [
            { text: 'Nobreza Obriga. Tenho o dever de cuidar de quem está abaixo de mim.', align: 'Bom' },
            { text: 'Tradição. As glórias do passado devem ser preservadas.', align: 'Leal' },
            { text: 'Liberdade. Ninguém deveria curvar-se a outro.', align: 'Caótico' },
            { text: 'Poder. Pretendo subir ao topo da hierarquia.', align: 'Mal' }
        ],
        bonds: [
            'Serei fiel à minha família acima de tudo.',
            'O povo das minhas terras depende de mim.',
            'Devo restaurar a honra perdida do meu nome.',
            'Alguém roubou meu legado e vou recuperá-lo.'
        ],
        flaws: [
            'Acho que todos abaixo de mim são descartáveis.',
            'Escondo um segredo que arruinaria minha família.',
            'Tenho dívidas impagáveis por luxos.',
            'Sou facilmente manipulado por bajulação.'
        ]
    },
    {
        id: 'outlander',
        name: 'Forasteiro',
        description: 'Você cresceu nas terras selvagens, longe da civilização e de seus confortos, conhecendo bem os perigos da natureza.',
        feature: { name: 'Andarilho', description: 'Você tem excelente memória para mapas e geografia, e sempre consegue encontrar comida e água na natureza.' },
        skillProficiencies: ['Atletismo', 'Sobrevivência'],
        toolProficiencies: ['Instrumento musical'],
        languages: 1,
        equipment: ['Cajado', 'Armadilha de caça', 'Troféu de um animal caçado', 'Roupas comuns', '10 po'],
        personalityTraits: [
            'Estou sempre atento a sinais de perigo.',
            'Falo pouco, mas minhas palavras têm peso.',
            'Sinto-me preso e inquieto dentro de cidades.',
            'Conheço uma história para cada estrela no céu.'
        ],
        ideals: [
            { text: 'Natureza. O mundo natural importa mais que as construções humanas.', align: 'Neutro' },
            { text: 'Vida. A vida é preciosa e deve ser preservada.', align: 'Bom' },
            { text: 'Honra. Se eu desonrar minha tribo, perco tudo.', align: 'Leal' },
            { text: 'Glória. Devo conquistar fama em feitos memoráveis.', align: 'Caótico' }
        ],
        bonds: [
            'Minha tribo é tudo para mim.',
            'Protejo um lugar selvagem sagrado.',
            'Sofro de uma sede de vingança contra um monstro.',
            'Recuperarei algo que perdi no ermo.'
        ],
        flaws: [
            'Resolvo problemas com violência primeiro.',
            'Não confio nos confortos da civilização.',
            'Sou lento para confiar em forasteiros.',
            'Guardo rancores por tempo demais.'
        ]
    },
    {
        id: 'charlatan',
        name: 'Charlatão',
        description: 'Você sempre teve um jeito com as pessoas — sabe o que elas querem e dá exatamente isso a elas, por um preço.',
        feature: { name: 'Identidade Falsa', description: 'Você criou uma segunda identidade convincente e sabe forjar documentos e imitar maneiras.' },
        skillProficiencies: ['Enganação', 'Prestidigitação'],
        toolProficiencies: ['Kit de disfarce', 'Kit de falsificação'],
        equipment: ['Roupas finas', 'Kit de disfarce', 'Ferramentas de trapaça', '15 po'],
        personalityTraits: [
            'Caio nas graças de qualquer um em minutos.',
            'Tenho sempre um golpe pronto na manga.',
            'Coleciono pequenas mentiras como troféus.',
            'Visto-me bem para impressionar.'
        ],
        ideals: [
            { text: 'Independência. Sou livre, e ninguém me dará ordens.', align: 'Caótico' },
            { text: 'Justiça. Engano apenas quem merece ser enganado.', align: 'Bom' },
            { text: 'Ganância. Farei o que for preciso por dinheiro.', align: 'Mal' },
            { text: 'Sociabilidade. As pessoas existem para serem persuadidas.', align: 'Neutro' }
        ],
        bonds: [
            'Devo dinheiro a pessoas muito perigosas.',
            'Uma vítima inocente do meu golpe merece reparação.',
            'Procuro o vigarista que me passou para trás.',
            'Tenho uma família secreta que sustento.'
        ],
        flaws: [
            'Não resisto a um alvo fácil.',
            'Minto até quando não preciso.',
            'Subestimo quem parece simples.',
            'Sempre tenho um plano de fuga — e abandono os outros.'
        ]
    },
    {
        id: 'sailor',
        name: 'Marinheiro',
        description: 'Você navegou por anos a fio, enfrentando tempestades e monstros marinhos, e o convés é mais lar do que a terra firme.',
        feature: { name: 'Passagem de Navio', description: 'Você consegue passagem gratuita em navios para você e seus companheiros, em troca de ajuda na tripulação.' },
        skillProficiencies: ['Atletismo', 'Percepção'],
        toolProficiencies: ['Instrumentos de navegação', 'Veículos aquáticos'],
        equipment: ['Marlinspike', 'Corda de seda (15m)', 'Amuleto da sorte', 'Roupas comuns', '10 po'],
        personalityTraits: [
            'Meu linguajar faria um nobre corar.',
            'Conto histórias do mar exageradas.',
            'Encaro qualquer desafio de frente, sem medo.',
            'Sou leal à minha tripulação acima de tudo.'
        ],
        ideals: [
            { text: 'Liberdade. O mar é liberdade — não há nada como o horizonte aberto.', align: 'Caótico' },
            { text: 'Camaradagem. Minha tripulação é minha família.', align: 'Bom' },
            { text: 'Domínio. Sou o senhor do meu próprio destino.', align: 'Leal' },
            { text: 'Avareza. Navego atrás de tesouros, e só.', align: 'Mal' }
        ],
        bonds: [
            'Esse navio é o lar mais próximo que conheço.',
            'Tenho contas a acertar com um capitão tirano.',
            'Salvarei a tripulação custe o que custar.',
            'Procuro uma ilha que vi uma única vez.'
        ],
        flaws: [
            'Brigo ao menor insulto à minha honra.',
            'Bebo demais quando em terra firme.',
            'Aposto mais do que posso perder.',
            'Obedeço cegamente ao meu capitão.'
        ]
    }
];

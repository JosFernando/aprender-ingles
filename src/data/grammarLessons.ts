import { Lesson } from '../types/grammar';

export const grammarLessons: Lesson[] = [
  {
    "id": "to-be-present",
    "title": "Verbo To Be (Presente)",
    "subtitle": "Ser e Estar: a base de toda a comunicação em inglês",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "VERBS",
    "categoryLabel": "Verbos Fundamentais",
    "icon": "Sparkles",
    "color": "from-blue-500 to-indigo-600",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "summary": "O verbo 'To Be' significa 'ser' ou 'estar'. Ele muda de forma de acordo com o sujeito: am, is ou are.",
    "rules": [
      {
        "title": "Conjugação e Concordância no Presente (Am, Is, Are)",
        "explanation": "O verbo 'To Be' é o mais irregular e fundamental da língua inglesa. Ele cumpre o papel de dois verbos em português: 'ser' e 'estar'. No Present Simple, ele assume três formas distintas dependendo do sujeito gramatical: AM (exclusivo para I), IS (para a terceira pessoa do singular: He, She, It) e ARE (para o plural e segunda pessoa: You, We, They).",
        "keyPoints": [
          "I concorda exclusivamente com AM (I am).",
          "He, She, It concordam sempre com IS (He is, She is, It is).",
          "You, We, They concordam sempre com ARE (You are, We are, They are).",
          "Substantivos no singular ou incontáveis usam IS (The water is cold). Substantivos no plural usam ARE (The students are here)."
        ],
        "formula": "Sujeito + am / is / are + Complemento / Predicativo",
        "affirmative": "I am a software engineer. / She is at the library. / They are very kind.",
        "negative": "I am not ready. / She is not (isn't) hungry. / We are not (aren't) tired.",
        "interrogative": "Are you a student? / Is he your brother? / Where are they now?"
      },
      {
        "title": "Contrações Formais vs. Informais e a Regra das Respostas Curtas",
        "explanation": "No inglês falado e na escrita informal, o verbo To Be é quase sempre contraído com o pronome sujeito. Contudo, existe uma regra gramatical rigorosa: NUNCA se pode usar contrações afirmativas no final de frases ou em respostas curtas.",
        "keyPoints": [
          "Formas afirmativas contraídas: I'm, You're, He's, She's, It's, We're, They're.",
          "Formas negativas contraídas: isn't (= is not) e aren't (= are not). Note que 'am not' NÃO tem contração padrão (I'm not).",
          "REGRA DE OURO: Em respostas curtas afirmativas, use sempre a forma completa ('Yes, I am' - NUNCA 'Yes, I'm'; 'Yes, she is' - NUNCA 'Yes, she's').",
          "Em respostas curtas negativas, a contração é permitida e natural ('No, I'm not' / 'No, he isn't')."
        ],
        "formula": "Resposta Curta: Yes + Sujeito + verbo completo | No + Sujeito + verbo contraído",
        "affirmative": "Are you ready? → Yes, I am. (Correto) | You're my best friend.",
        "negative": "Is she Brazilian? → No, she isn't. | They aren't at work today.",
        "interrogative": "Are they coming? → Yes, they are. / No, they aren't."
      },
      {
        "title": "Usos Especiais Obrigatórios: Idade, Clima, Sentimentos e Profissões",
        "explanation": "Muitos falantes de português cometem erros ao traduzir literalmente expressões que usam o verbo 'ter' em português, mas que em inglês exigem obrigatoriamente o verbo 'To Be'. Em inglês, nós 'somos' a nossa idade, o nosso estado físico e as nossas emoções temporárias.",
        "keyPoints": [
          "Idades: Em inglês diz-se 'I am 25 years old' (NUNCA 'I have 25 years').",
          "Sensações físicas: 'I am hungry' (estou com fome), 'I am thirsty' (estou com sede), 'I am cold' (estou com frio), 'I am hot' (estou com calor).",
          "Clima e Tempo: Sempre acompanhado do pronome impessoal 'It' ('It is sunny', 'It is raining', 'It is 4 o'clock').",
          "Profissões: Exigem obrigatoriamente o artigo indefinido 'a' ou 'an' ('He is a doctor', 'She is an architect')."
        ],
        "formula": "It is + clima/hora | Sujeito + To Be + a/an + Profissão",
        "affirmative": "I am 30 years old and she is a talented architect.",
        "negative": "It is not cold today. / I am not hungry yet.",
        "interrogative": "Are you afraid of dogs? / Is it hot outside?"
      },
      {
        "title": "A Estrutura Existencial: 'There is' e 'There are'",
        "explanation": "Para expressar a existência de algo ou alguém (equivalente a 'há' ou 'existe' em português), o inglês utiliza a construção 'There' combinada com o verbo To Be. Nunca use o verbo 'to have' para dizer 'tem uma maçã na mesa'.",
        "keyPoints": [
          "There is (+ singular / incontável): 'There is a book on the table' / 'There is some water'.",
          "There are (+ plural): 'There are two cars in the garage'.",
          "Na negativa: 'There isn't any milk' / 'There aren't any chairs'.",
          "Na interrogação, ocorre inversão: 'Is there a bank nearby?' / 'Are there any questions?'."
        ],
        "formula": "There + is (singular) / are (plural) + Substantivo",
        "affirmative": "There is a supermarket down the street. / There are five meetings today.",
        "negative": "There isn't any coffee left. / There aren't any tickets available.",
        "interrogative": "Is there WiFi here? / Are there any available seats?"
      }
    ],
    "examples": [
      {
        "english": "I am learning English right now.",
        "portuguese": "Eu estou a aprender inglês agora mesmo.",
        "note": "\"am\" com \"I\"",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "She is a very talented doctor.",
        "portuguese": "Ela é uma médica muito talentosa.",
        "note": "\"is\" com He/She/It",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "They are best friends since childhood.",
        "portuguese": "Eles são melhores amigos desde a infância.",
        "note": "\"are\" com You/We/They",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "It is a beautiful sunny morning.",
        "portuguese": "Está uma linda manhã ensolarada.",
        "note": "Use \"It is\" para clima.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "Is raining today.",
        "correct": "It is raining today.",
        "explanation": "Em inglês, use 'It is' para clima e tempo."
      },
      {
        "wrong": "I have 25 years old.",
        "correct": "I am 25 years old.",
        "explanation": "Idade usa o verbo TO BE (am/is/are), nunca have."
      }
    ],
    "exercises": [
      {
        "id": "tb-1",
        "type": "multiple-choice",
        "instruction": "Complete com o verbo To Be correto:",
        "question": "My brother and I _____ ready for the exam.",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "correctAnswer": "are",
        "explanation": "My brother and I = We (nós), usa-se ARE.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-2",
        "type": "multiple-choice",
        "instruction": "Complete a frase sobre profissão:",
        "question": "Dr. Smith _____ a well-known surgeon.",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "correctAnswer": "is",
        "explanation": "Dr. Smith = He, usa-se IS.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-3",
        "type": "multiple-choice",
        "instruction": "Como dizer idade corretamente:",
        "question": "I _____ twenty-five years old.",
        "options": [
          "have",
          "am",
          "is",
          "has"
        ],
        "correctAnswer": "am",
        "explanation": "Idade em inglês diz-se com 'am/is/are'.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-4",
        "type": "multiple-choice",
        "instruction": "Selecione a forma negativa:",
        "question": "They _____ at the office today.",
        "options": [
          "are not",
          "is not",
          "am not",
          "not are"
        ],
        "correctAnswer": "are not",
        "explanation": "Com They usa-se 'are not'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-5",
        "type": "multiple-choice",
        "instruction": "Pergunta com To Be:",
        "question": "_____ you ready to go out?",
        "options": [
          "Are",
          "Is",
          "Am",
          "Do"
        ],
        "correctAnswer": "Are",
        "explanation": "Pergunta com 'you' usa 'Are you...?'",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-6",
        "type": "multiple-choice",
        "instruction": "Clima e ambiente:",
        "question": "_____ very sunny outside.",
        "options": [
          "It is",
          "Is",
          "There have",
          "He is"
        ],
        "correctAnswer": "It is",
        "explanation": "Sempre use 'It is' para clima.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-7",
        "type": "multiple-choice",
        "instruction": "Contração de We are:",
        "question": "_____ glad to meet you.",
        "options": [
          "We're",
          "Were",
          "We'is",
          "We are't"
        ],
        "correctAnswer": "We're",
        "explanation": "A contração correta é We're.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-8",
        "type": "multiple-choice",
        "instruction": "Pronome para IS:",
        "question": "_____ is my favorite teacher.",
        "options": [
          "She",
          "They",
          "We",
          "You"
        ],
        "correctAnswer": "She",
        "explanation": "'is' combina com She/He/It.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-9",
        "type": "fill-blank",
        "instruction": "Escreva a forma de To Be (am, is, are):",
        "question": "I _____ excited for the new project.",
        "correctAnswer": "am",
        "explanation": "Com I usa-se sempre am.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-10",
        "type": "fill-blank",
        "instruction": "Preencha com o verbo To Be:",
        "question": "The car keys _____ on the desk.",
        "correctAnswer": "are",
        "explanation": "Keys (chaves) está no plural = are.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-11",
        "type": "fill-blank",
        "instruction": "Preencha a negativa com To Be:",
        "question": "He _____ not happy with the result.",
        "correctAnswer": "is",
        "explanation": "Com He usa-se is.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-12",
        "type": "fill-blank",
        "instruction": "Complete a pergunta:",
        "question": "Where _____ your parents living now?",
        "correctAnswer": "are",
        "explanation": "Parents = They (eles), logo are.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-13",
        "type": "fill-blank",
        "instruction": "Complete sobre o clima:",
        "question": "It _____ very cold this morning.",
        "correctAnswer": "is",
        "explanation": "It leva o verbo is.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-14",
        "type": "fill-blank",
        "instruction": "Preencha a forma correta:",
        "question": "You _____ my best teammate.",
        "correctAnswer": "are",
        "explanation": "Com You usa-se are.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-15",
        "type": "reorder",
        "instruction": "Ordene a pergunta:",
        "words": [
          "Are",
          "you",
          "ready",
          "now",
          "?"
        ],
        "correctAnswer": "Are you ready now ?",
        "explanation": "Em perguntas o verbo precede o sujeito: Are you...?"
      },
      {
        "id": "tb-16",
        "type": "reorder",
        "instruction": "Ordene a frase afirmativa:",
        "words": [
          "She",
          "is",
          "a",
          "great",
          "doctor"
        ],
        "correctAnswer": "She is a great doctor",
        "explanation": "Ordem: Sujeito + verbo + complemento."
      },
      {
        "id": "tb-17",
        "type": "reorder",
        "instruction": "Ordene a frase negativa:",
        "words": [
          "They",
          "are",
          "not",
          "at",
          "home"
        ],
        "correctAnswer": "They are not at home",
        "explanation": "Ordem: Sujeito + are + not + complemento."
      },
      {
        "id": "tb-18",
        "type": "speaking",
        "instruction": "Pratique a fala em voz alta:",
        "question": "Diga em inglês: 'Eu sou um estudante.'",
        "correctAnswer": "I am a student",
        "explanation": "Pronuncie: /aɪ æm ə ˈstjuːdnt/.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase afirmativa:",
        "question": "Diga em inglês: 'Ela é muito talentosa.'",
        "correctAnswer": "She is very talented",
        "explanation": "Pronúncia natural do 'is'.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-20",
        "type": "speaking",
        "instruction": "Pratique a pergunta em inglês:",
        "question": "Pergunte em inglês: 'Você está pronto?'",
        "correctAnswer": "Are you ready",
        "explanation": "Entonação interrogativa: Are you ready?",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "tb-21",
        "type": "speaking",
        "instruction": "Fale a frase com entonação clara:",
        "question": "Diga em inglês: 'Nós somos grandes amigos.'",
        "correctAnswer": "We are great friends",
        "explanation": "Ligação suave entre We e are.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Formalidade: Evite 'Ain't'",
        "category": "formal-informal",
        "categoryLabel": "Formal vs. Informal",
        "explanation": "'Ain't' é muito comum em músicas e gírias, mas é considerado gramaticalmente incorreto em entrevistas de emprego, e-mails de trabalho e exames oficiais.",
        "comparison": {
          "leftLabel": "Informal / Gíria",
          "leftText": "He ain't here today.",
          "rightLabel": "Padrão / Formal",
          "rightText": "He isn't (is not) here today."
        },
        "tip": "Em comunicações profissionais, use sempre 'is not / isn't' ou 'are not / aren't'."
      },
      {
        "title": "Etiqueta: Identificação ao Telefone",
        "category": "etiquette",
        "categoryLabel": "Boas Práticas de Comunicação",
        "explanation": "Ao atender o telefone em inglês, não diga 'I am John'. Falantes nativos dizem 'This is John speaking' ou 'It's John'.",
        "comparison": {
          "leftLabel": "Menos natural",
          "leftText": "Hello, I am John.",
          "rightLabel": "Nativo e Polido",
          "rightText": "Hello, this is John speaking."
        },
        "tip": "Para perguntar quem fala: 'Who is speaking, please?'"
      }
    ]
  },
  {
    "id": "present-simple",
    "title": "Present Simple & 3ª Pessoa",
    "subtitle": "Rotinas diárias, verdades universais e hábitos",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "Clock",
    "color": "from-emerald-500 to-teal-600",
    "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    "summary": "O Present Simple expressa hábitos e rotinas. Na 3ª pessoa do singular (He/She/It), adiciona-se -s, -es ou -ies ao verbo afirmativo!",
    "rules": [
      {
        "title": "Fatos Permanentes, Hábitos e Rotinas",
        "explanation": "O Present Simple é o tempo verbal usado para expressar verdades universais, fatos científicos, leis da natureza e ações que acontecem regularmente como parte de uma rotina. Não deve ser usado para descrever o que está a acontecer no exato momento da fala.",
        "keyPoints": [
          "Fatos científicos e leis naturais: 'Water boils at 100°C'.",
          "Rotinas e hábitos diários: 'I wake up at 7 AM every weekday'.",
          "Estados permanentes: 'She lives in London with her family'.",
          "Opiniões e preferências com verbos de estado: 'They like jazz music'."
        ],
        "formula": "Sujeito + Verbo na forma base (+ s/es para 3ª pessoa) + Complemento",
        "affirmative": "The sun rises in the east. / I drink coffee every morning.",
        "negative": "I do not (don't) drink tea. / They don't live in Madrid.",
        "interrogative": "Do you speak French? / Do they work on Saturdays?"
      },
      {
        "title": "A Regra de Ouro da 3ª Pessoa (He, She, It) e Ortografia",
        "explanation": "Nas frases afirmativas do Present Simple, os sujeitos de terceira pessoa do singular (He, She, It ou qualquer substantivo singular equivalente) exigem a adição de sufixo ao verbo principal. Existem três regras ortográficas fundamentais para essa terminação.",
        "keyPoints": [
          "Regra Geral: Adiciona-se apenas '-s' à maioria dos verbos (work → works, play → plays, read → reads).",
          "Terminações em -ch, -sh, -ss, -x, -z e -o: Adiciona-se '-es' (watch → watches, wash → washes, miss → misses, fix → fixes, go → goes, do → does).",
          "Consoante + Y: O 'y' cai e adiciona-se '-ies' (study → studies, fly → flies, try → tries). Atenção: vogal + y segue a regra geral (play → plays).",
          "Verbo irregular chave: 'have' transforma-se em 'has' (He has a car)."
        ],
        "formula": "He / She / It + Verbo(-s / -es / -ies) + Complemento",
        "affirmative": "He teaches English and she studies medicine at university.",
        "negative": "He doesn't watch TV in the morning. / She doesn't have a car.",
        "interrogative": "Does he study hard? / Does she go to the gym daily?"
      },
      {
        "title": "Auxiliares DO e DOES nas Negativas e Interrogativas",
        "explanation": "Diferente do português, onde basta acrescentar a palavra 'não' antes do verbo, o inglês exige o verbo auxiliar 'DO' ou 'DOES'. Nas negativas e perguntas, o auxiliar carrega a flexão, e o verbo principal volta OBRIGATORIAMENTE à sua forma base (infinitivo sem 'to').",
        "keyPoints": [
          "DO: Usado com I, You, We, They. Forma negativa: 'do not' ou 'don't'.",
          "DOES: Usado com He, She, It. Forma negativa: 'does not' ou 'doesn't'.",
          "REGRA CRÍTICA: Ao usar 'does' ou 'doesn't', o verbo principal PERDE o '-s' ('She doesn't work' - NUNCA 'She doesn't works').",
          "Na pergunta, o auxiliar abre a frase: 'Does he like sports?' (NUNCA 'Likes he sports?')."
        ],
        "formula": "Negativa: Sujeito + don't/doesn't + Verbo Base | Pergunta: Do/Does + Sujeito + Verbo Base?",
        "affirmative": "She speaks three languages fluently.",
        "negative": "She doesn't speak Japanese. / We don't need any assistance.",
        "interrogative": "Does your boss know about this? / Do you take the train to work?"
      },
      {
        "title": "Advérbios de Frequência e a Sua Posição Exata na Frase",
        "explanation": "Advérbios de frequência (always, usually, often, sometimes, rarely/seldom, never) indicam com que regularidade uma ação ocorre. A posição deles na frase em inglês obedece a uma regra estrita de sintaxe.",
        "keyPoints": [
          "Antes do verbo principal: Sujeito + ADVÉRBIO + Verbo ('I always arrive on time').",
          "Depois do verbo To Be: Sujeito + TO BE + ADVÉRBIO ('He is always late').",
          "Entre o auxiliar e o verbo principal: Sujeito + AUXILIAR + ADVÉRBIO + Verbo ('They don't usually eat meat').",
          "Palavras de sentido negativo como 'never' e 'rarely' já tornam a frase negativa; não use 'don't' com elas ('I never drink alcohol' - NUNCA 'I don't never')."
        ],
        "formula": "Sujeito + [Advérbio] + Verbo Comum | Sujeito + To Be + [Advérbio]",
        "affirmative": "I always drink water before sleeping. / He is often tired after lunch.",
        "negative": "They don't usually work on weekends.",
        "interrogative": "Do you often travel abroad? / Is he always this punctual?"
      }
    ],
    "examples": [
      {
        "english": "He drinks a cup of coffee every morning.",
        "portuguese": "Ele bebe uma chávena de café todas as manhãs.",
        "note": "drinks com -s para He",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "They work at a modern tech office downtown.",
        "portuguese": "Eles trabalham num escritório moderno no centro.",
        "note": "work sem -s para They",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She doesn't likes coffee.",
        "correct": "She doesn't like coffee.",
        "explanation": "Com o auxiliar doesn't, o verbo volta à forma base sem -s."
      },
      {
        "wrong": "He live in Lisbon.",
        "correct": "He lives in Lisbon.",
        "explanation": "Na afirmativa com He/She/It é obrigatório acrescentar o -s."
      }
    ],
    "exercises": [
      {
        "id": "ps-1",
        "type": "multiple-choice",
        "instruction": "Selecione a forma da 3ª pessoa:",
        "question": "Sarah usually _____ to work by train.",
        "options": [
          "goes",
          "go",
          "going",
          "is go"
        ],
        "correctAnswer": "goes",
        "explanation": "Sarah = She, verbos em -o ganham -es (goes).",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-2",
        "type": "multiple-choice",
        "instruction": "Rotina matinal diária:",
        "question": "He _____ breakfast at 7:30 AM every day.",
        "options": [
          "has",
          "have",
          "having",
          "is have"
        ],
        "correctAnswer": "has",
        "explanation": "He + has (forma irregular de have para 3ª pessoa).",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-3",
        "type": "multiple-choice",
        "instruction": "Auxiliar negativo para He:",
        "question": "David _____ drink alcohol at all.",
        "options": [
          "doesn't",
          "don't",
          "isn't",
          "not"
        ],
        "correctAnswer": "doesn't",
        "explanation": "Com He a negativa é doesn't + verbo base.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-4",
        "type": "multiple-choice",
        "instruction": "Pergunta no Present Simple:",
        "question": "_____ you live near the city center?",
        "options": [
          "Do",
          "Does",
          "Are",
          "Is"
        ],
        "correctAnswer": "Do",
        "explanation": "Com 'you' a pergunta no presente usa 'Do you...?'",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-5",
        "type": "multiple-choice",
        "instruction": "Pergunta com 3ª pessoa:",
        "question": "_____ she speak fluent English?",
        "options": [
          "Does",
          "Do",
          "Is",
          "Has"
        ],
        "correctAnswer": "Does",
        "explanation": "Com 'she' a pergunta usa 'Does she...?'",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-6",
        "type": "multiple-choice",
        "instruction": "Verbo com terminação -ch:",
        "question": "My father _____ the evening news on TV.",
        "options": [
          "watches",
          "watchs",
          "watch",
          "watching"
        ],
        "correctAnswer": "watches",
        "explanation": "Verbos em -ch ganham -es (watches).",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-7",
        "type": "multiple-choice",
        "instruction": "Hábito de fim de semana:",
        "question": "We _____ football in the park every Sunday.",
        "options": [
          "play",
          "plays",
          "playing",
          "are play"
        ],
        "correctAnswer": "play",
        "explanation": "Com 'We' o verbo não leva -s (play).",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-8",
        "type": "multiple-choice",
        "instruction": "Negativa plural:",
        "question": "My friends _____ like horror movies.",
        "options": [
          "don't",
          "doesn't",
          "aren't",
          "not"
        ],
        "correctAnswer": "don't",
        "explanation": "My friends = They, usa-se don't.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-9",
        "type": "fill-blank",
        "instruction": "Complete com o verbo em falta (like / likes):",
        "question": "She _____ reading books before sleep.",
        "correctAnswer": "likes",
        "explanation": "She leva o verbo com -s: likes.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-10",
        "type": "fill-blank",
        "instruction": "Preencha com o auxiliar negativo (don't / doesn't):",
        "question": "He _____ eat spicy food.",
        "correctAnswer": "doesn't",
        "explanation": "Com He usa-se doesn't.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-11",
        "type": "fill-blank",
        "instruction": "Escreva a forma da 3ª pessoa do verbo STUDY:",
        "question": "Maria _____ English every single night.",
        "correctAnswer": "studies",
        "explanation": "Consoante + y vira -ies: studies.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-12",
        "type": "fill-blank",
        "instruction": "Preencha com o auxiliar interrogativo (Do / Does):",
        "question": "_____ your brother play guitar?",
        "correctAnswer": "Does",
        "explanation": "Your brother = He, logo a pergunta é com Does.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-13",
        "type": "fill-blank",
        "instruction": "Complete com o verbo (work / works):",
        "question": "They _____ in an international bank.",
        "correctAnswer": "work",
        "explanation": "Com They o verbo fica na forma base: work.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-14",
        "type": "fill-blank",
        "instruction": "Preencha a negativa:",
        "question": "I _____ drink coffee at night.",
        "correctAnswer": "don't",
        "explanation": "Com I usa-se don't.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-15",
        "type": "reorder",
        "instruction": "Ordene a frase de rotina:",
        "words": [
          "He",
          "drinks",
          "coffee",
          "every",
          "morning"
        ],
        "correctAnswer": "He drinks coffee every morning",
        "explanation": "Sujeito + verbo com -s + objeto + frequência."
      },
      {
        "id": "ps-16",
        "type": "reorder",
        "instruction": "Ordene a pergunta no presente:",
        "words": [
          "Do",
          "you",
          "live",
          "in",
          "London",
          "?"
        ],
        "correctAnswer": "Do you live in London ?",
        "explanation": "Do + sujeito + verbo base + complemento?"
      },
      {
        "id": "ps-17",
        "type": "reorder",
        "instruction": "Ordene a negativa:",
        "words": [
          "She",
          "does",
          "not",
          "eat",
          "meat"
        ],
        "correctAnswer": "She does not eat meat",
        "explanation": "Sujeito + does + not + verbo base."
      },
      {
        "id": "ps-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu bebo café todas as manhãs.'",
        "correctAnswer": "I drink coffee every morning",
        "explanation": "Pronúncia natural de rotina.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase da 3ª pessoa:",
        "question": "Diga em inglês: 'Ela fala inglês muito bem.'",
        "correctAnswer": "She speaks English very well",
        "explanation": "Note o som do 's' em 'speaks'.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-20",
        "type": "speaking",
        "instruction": "Fale a pergunta com entonação correta:",
        "question": "Pergunte em inglês: 'Onde você mora?'",
        "correctAnswer": "Where do you live",
        "explanation": "Where do you live?",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ps-21",
        "type": "speaking",
        "instruction": "Pronuncie a rotina diária:",
        "question": "Diga em inglês: 'Ele trabalha muito duro.'",
        "correctAnswer": "He works very hard",
        "explanation": "Pronúncia do -s em 'works'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Britânico vs. Americano: Posse",
        "category": "uk-us",
        "categoryLabel": "UK vs. US",
        "explanation": "Para expressar posse no presente, o inglês britânico usa frequentemente 'have got', enquanto o americano prefere o simples 'have'. Ambos estão corretos.",
        "comparison": {
          "leftLabel": "Inglês Britânico (UK)",
          "leftText": "I've got a new car. Have you got time?",
          "rightLabel": "Inglês Americano (US)",
          "rightText": "I have a new car. Do you have time?"
        },
        "tip": "Em ambientes corporativos internacionais, 'Do you have...?' é universalmente compreendido."
      },
      {
        "title": "Nuance Essencial: Make vs. Do",
        "category": "nuance",
        "categoryLabel": "Diferença Chave",
        "explanation": "DO é usado para tarefas, obrigações e ações gerais (do homework, do business, do the dishes). MAKE é usado para criar, construir ou produzir algo novo (make coffee, make plans, make a mistake).",
        "comparison": {
          "leftLabel": "Expressões com DO",
          "leftText": "Do homework, do exercise, do your best",
          "rightLabel": "Expressões com MAKE",
          "rightText": "Make coffee, make a decision, make money"
        },
        "tip": "Dica de ouro: Nunca diga 'do a mistake', diga sempre 'make a mistake'!"
      }
    ]
  },
  {
    "id": "present-continuous",
    "title": "Present Continuous (-ING)",
    "subtitle": "Ações que estão a acontecer neste exato momento",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "Activity",
    "color": "from-cyan-500 to-blue-600",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "summary": "O Present Continuous descreve ações que estão a decorrer agora. Formado por To Be + Verbo com terminação -ing.",
    "rules": [
      {
        "title": "Ações no Momento da Fala (Now, At the Moment)",
        "explanation": "O Present Continuous (também chamado de Present Progressive) é usado para descrever ações que estão a decorrer no momento exato em que estamos a falar. A sua estrutura requer sempre o verbo auxiliar To Be conjugado no presente seguido do verbo principal com a terminação '-ing'.",
        "keyPoints": [
          "Marcadores temporais comuns: now, right now, at the moment, currently, at present, Listen!, Look!.",
          "Estrutura composta obrigatória: nunca omita o verbo To Be ('She is cooking' - NUNCA 'She cooking').",
          "Diferença do Present Simple: 'I teach' (é a minha profissão geral) vs. 'I am teaching right now' (é a atividade que estou a fazer neste instante)."
        ],
        "formula": "Sujeito + am / is / are + Verbo-ING + Complemento",
        "affirmative": "I am working on an important project right now. / Look! It is snowing.",
        "negative": "She is not listening to the lecture. / They aren't watching TV.",
        "interrogative": "Are you paying attention? / What is he doing right now?"
      },
      {
        "title": "Regras Ortográficas para Adicionar o Sufixo -ING",
        "explanation": "Embora a maioria dos verbos receba simplesmente o sufixo '-ing', existem regras ortográficas essenciais para evitar erros comuns de escrita.",
        "keyPoints": [
          "Regra CVC (Consoante + Vogal + Consoante em sílaba tônica): Dobra-se a consoante final antes de '-ing' (run → running, swim → swimming, sit → sitting, get → getting, begin → beginning).",
          "Verbos terminados em '-e' mudo: Corta-se o 'e' antes de adicionar '-ing' (make → making, write → writing, dance → dancing). Exceção: verbos com '-ee' mantêm ambos (see → seeing).",
          "Verbos terminados em '-ie': O '-ie' transforma-se em 'y' antes de '-ing' (die → dying, lie → lying, tie → tying).",
          "Terminações em '-y': O 'y' NUNCA é removido ao adicionar '-ing' (study → studying, play → playing)."
        ],
        "formula": "Verbo Base + Regra Ortográfica + ING",
        "affirmative": "He is running a marathon tomorrow. / She is writing a new book.",
        "negative": "He isn't lying to you. / We aren't sitting comfortably.",
        "interrogative": "Are you getting ready? / Why is the baby crying?"
      },
      {
        "title": "Situações Temporárias e Hábitos Irritantes com 'Always'",
        "explanation": "Além do momento imediato, o Present Continuous expressa situações temporárias na vida de uma pessoa que não representam a sua realidade permanente, bem como comportamentos repetitivos irritantes.",
        "keyPoints": [
          "Situações temporárias (estes dias, este mês): 'I am living with my cousin until I find an apartment' (situação provisória).",
          "Tendências e mudanças graduais: 'The climate is getting warmer every year'.",
          "Hábitos irritantes com 'always': Usado para criticar algo que alguém faz com frequência excessiva ('He is always losing his keys!')."
        ],
        "formula": "Sujeito + To Be + always + Verbo-ING (hábito incômodo)",
        "affirmative": "She is staying at a hotel this week. / You are always interrupting me!",
        "negative": "He isn't working this semester due to his health.",
        "interrogative": "Are you staying in London for long?"
      },
      {
        "title": "Stative Verbs (Verbos de Estado que NUNCA aceitam -ING)",
        "explanation": "Os 'Stative Verbs' descrevem estados, emoções, sentidos, possessão e processos mentais, e não ações físicas dinâmicas. Por essa razão, a gramática inglesa PROÍBE o uso destes verbos nos tempos contínuos (-ING), devendo ser usados no Present Simple mesmo que se refiram ao momento presente.",
        "keyPoints": [
          "Verbos de pensamento/opinião: know, understand, believe, think (opinar), remember, forget, mean.",
          "Verbos de emoção/desejo: like, love, hate, prefer, want, need, wish ('I want water' - NUNCA 'I am wanting water').",
          "Verbos de posse: have (possuir), own, belong, possess ('I have a car' - NUNCA 'I am having a car').",
          "Verbos de percepção sensorial: see, hear, smell, taste, seem, appear.",
          "Atenção aos verbos com duplo sentido: 'I think you are right' (opinião = stative) vs. 'I am thinking about my future' (processo mental ativo = dinâmico)."
        ],
        "formula": "Use Present Simple para Estados: Sujeito + Verbo de Estado (sem -ing)",
        "affirmative": "I understand your point completely. (Correto) | She loves classic literature.",
        "negative": "I don't know the answer. (NUNCA: I am not knowing).",
        "interrogative": "Do you need any help right now? (NUNCA: Are you needing?)."
      }
    ],
    "examples": [
      {
        "english": "The chef is cooking dinner right now.",
        "portuguese": "O chef está a cozinhar o jantar agora mesmo.",
        "note": "is + cooking",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "Listen! It is raining heavily outside.",
        "portuguese": "Ouve! Está a chover torrencialmente lá fora.",
        "note": "is + raining",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I reading a book now.",
        "correct": "I am reading a book now.",
        "explanation": "Falta o verbo auxiliar 'am'."
      }
    ],
    "exercises": [
      {
        "id": "pc-1",
        "type": "multiple-choice",
        "instruction": "Ação a decorrer agora:",
        "question": "Look outside! It _____ heavily.",
        "options": [
          "is raining",
          "rains",
          "raining",
          "are raining"
        ],
        "correctAnswer": "is raining",
        "explanation": "Com 'It' usa-se 'is raining'.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-2",
        "type": "multiple-choice",
        "instruction": "Ação na cozinha:",
        "question": "My mother _____ a delicious pasta right now.",
        "options": [
          "is cooking",
          "cooks",
          "cooking",
          "are cooking"
        ],
        "correctAnswer": "is cooking",
        "explanation": "Mother = She, logo 'is cooking'.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-3",
        "type": "multiple-choice",
        "instruction": "Ação em grupo agora:",
        "question": "They _____ at the library at the moment.",
        "options": [
          "are studying",
          "is studying",
          "studying",
          "study"
        ],
        "correctAnswer": "are studying",
        "explanation": "They exige 'are studying'.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-4",
        "type": "multiple-choice",
        "instruction": "Pergunta no momento:",
        "question": "What _____ you doing right now?",
        "options": [
          "are",
          "is",
          "do",
          "did"
        ],
        "correctAnswer": "are",
        "explanation": "Com 'you' a pergunta é 'What are you doing?'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-5",
        "type": "multiple-choice",
        "instruction": "Negativa contínua:",
        "question": "He _____ attention to the teacher.",
        "options": [
          "is not paying",
          "not paying",
          "does not paying",
          "isn't pay"
        ],
        "correctAnswer": "is not paying",
        "explanation": "Negativa: is + not + paying.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-6",
        "type": "multiple-choice",
        "instruction": "Verbo run com duplicação de consoante:",
        "question": "The dog _____ in the backyard.",
        "options": [
          "is running",
          "is runing",
          "runs",
          "are running"
        ],
        "correctAnswer": "is running",
        "explanation": "C-V-C: run vira running (com dois 'n').",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-7",
        "type": "multiple-choice",
        "instruction": "Música ao vivo:",
        "question": "Listen! Someone _____ the piano upstairs.",
        "options": [
          "is playing",
          "plays",
          "playing",
          "are playing"
        ],
        "correctAnswer": "is playing",
        "explanation": "Marcador 'Listen!' pede Present Continuous.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-8",
        "type": "multiple-choice",
        "instruction": "Viagem em curso:",
        "question": "We _____ to London at this moment.",
        "options": [
          "are flying",
          "is flying",
          "fly",
          "flying"
        ],
        "correctAnswer": "are flying",
        "explanation": "We exige 'are flying'.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-9",
        "type": "fill-blank",
        "instruction": "Escreva o verbo com -ing (read -> reading):",
        "question": "I am _____ an exciting novel.",
        "correctAnswer": "reading",
        "explanation": "read + ing = reading.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-10",
        "type": "fill-blank",
        "instruction": "Complete com a forma do verbo To Be:",
        "question": "She _____ working on her computer now.",
        "correctAnswer": "is",
        "explanation": "Com She usa-se is.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-11",
        "type": "fill-blank",
        "instruction": "Complete com To Be no plural:",
        "question": "The children _____ playing in the garden.",
        "correctAnswer": "are",
        "explanation": "Children = plural, usa-se are.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-12",
        "type": "fill-blank",
        "instruction": "Complete a ação:",
        "question": "The train is _____ into the station right now.",
        "correctAnswer": "coming",
        "explanation": "come perde o -e final: coming.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-13",
        "type": "fill-blank",
        "instruction": "Complete a pergunta:",
        "question": "Why _____ you wearing a heavy coat in summer?",
        "correctAnswer": "are",
        "explanation": "Com you usa-se are.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-14",
        "type": "fill-blank",
        "instruction": "Complete a negativa:",
        "question": "I am _____ sleeping, I am reading.",
        "correctAnswer": "not",
        "explanation": "Negativa: am not.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-15",
        "type": "reorder",
        "instruction": "Ordene a frase contínua:",
        "words": [
          "I",
          "am",
          "learning",
          "English",
          "now"
        ],
        "correctAnswer": "I am learning English now",
        "explanation": "Sujeito + am + verbo-ing + objeto + advérbio."
      },
      {
        "id": "pc-16",
        "type": "reorder",
        "instruction": "Ordene a pergunta contínua:",
        "words": [
          "What",
          "are",
          "you",
          "cooking",
          "?"
        ],
        "correctAnswer": "What are you cooking ?",
        "explanation": "What + are + sujeito + verbo-ing?"
      },
      {
        "id": "pc-17",
        "type": "reorder",
        "instruction": "Ordene a frase afirmativa:",
        "words": [
          "It",
          "is",
          "raining",
          "very",
          "hard"
        ],
        "correctAnswer": "It is raining very hard",
        "explanation": "It + is + raining + very hard."
      },
      {
        "id": "pc-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu estou a aprender inglês agora.'",
        "correctAnswer": "I am learning English now",
        "explanation": "Fale fluentemente: I am learning English now.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase da ação em curso:",
        "question": "Diga em inglês: 'Ela está a cozinhar o jantar.'",
        "correctAnswer": "She is cooking dinner",
        "explanation": "Pronúncia natural do -ing.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-20",
        "type": "speaking",
        "instruction": "Fale a pergunta com entonação clara:",
        "question": "Pergunte em inglês: 'O que você está fazendo?'",
        "correctAnswer": "What are you doing",
        "explanation": "Entonação: What are you doing?",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pc-21",
        "type": "speaking",
        "instruction": "Fale sobre o clima atual:",
        "question": "Diga em inglês: 'Está a chover lá fora.'",
        "correctAnswer": "It is raining outside",
        "explanation": "Pronúncia de 'raining outside'.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Verbos de Estado (Stative Verbs)",
        "category": "nuance",
        "categoryLabel": "Regra de Ouro",
        "explanation": "Verbos que expressam estados mentais, sentimentos ou posse (know, understand, believe, want, like, have) geralmente NÃO devem ser usados com -ing no inglês formal.",
        "comparison": {
          "leftLabel": "Incorreto / Evitar",
          "leftText": "I am understanding the lesson now.",
          "rightLabel": "Correto e Elegante",
          "rightText": "I understand the lesson now."
        },
        "tip": "Mesmo quando o entendimento acontece neste momento, use o Present Simple: 'Now I understand!'"
      },
      {
        "title": "Descrever Fotografias e Imagens",
        "category": "etiquette",
        "categoryLabel": "Boa Prática",
        "explanation": "Em apresentações e exames (IELTS, TOEFL, Cambridge), ao descrever uma imagem ou gráfico, use sempre o Present Continuous para descrever o que as pessoas estão a fazer.",
        "comparison": {
          "leftLabel": "Menos natural",
          "leftText": "In this picture, a boy reads a book.",
          "rightLabel": "Padrão de Exame",
          "rightText": "In this picture, a boy is reading a book."
        }
      }
    ]
  },
  {
    "id": "articles-quantifiers",
    "title": "Artigos & Quantificadores",
    "subtitle": "A, An, The, Some, Any, Much, Many: use sem hesitar",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "STRUCTURES",
    "categoryLabel": "Estruturas Gramaticais",
    "icon": "Sparkles",
    "color": "from-amber-500 to-orange-600",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "summary": "Aprenda a diferença entre 'A' e 'An' pelo som fonético, quando usar 'The', e como aplicar 'Much' (incontável) versus 'Many' (contável).",
    "rules": [
      {
        "title": "Artigos Indefinidos: A vs. AN (Regra do Som Fonético)",
        "explanation": "Os artigos indefinidos 'a' e 'an' significam 'um' ou 'uma' e aplicam-se apenas a substantivos contáveis no singular. A escolha entre 'a' e 'an' depende EXCLUSIVAMENTE do som inicial da palavra seguinte (som vocálico ou consonantal), e não da letra escrita.",
        "keyPoints": [
          "Use 'A' antes de som de consoante: a car, a dog, a house, a big apple.",
          "Use 'AN' antes de som de vogal: an apple, an elephant, an orange, an interesting book.",
          "O 'H' mudo leva AN: 'an hour', 'an honest man', 'an honour' (o 'h' não é pronunciado). Mas quando o 'h' é aspirado, usa-se A: 'a hotel', 'a hospital'.",
          "O som de 'U' /juː/ leva A: 'a university', 'a European country', 'a uniform', 'a useful tool' (o som inicial é semivogal consonantal /j/)."
        ],
        "formula": "A + [som de consoante] | AN + [som de vogal]",
        "affirmative": "She is an honest person who works at a European university.",
        "negative": "It wasn't a difficult decision. / We don't have an hour to spare.",
        "interrogative": "Is that a unicorn or a horse? / Can I have an orange, please?"
      },
      {
        "title": "O Artigo Definido THE e Quando Omiti-lo (Zero Article)",
        "explanation": "O artigo definido 'the' (o, a, os, as) é usado para se referir a itens específicos já conhecidos por ambos os interlocutores. O maior desafio para falantes de português é saber quando NÃO usar 'the' (a regra do artigo zero).",
        "keyPoints": [
          "USE 'THE' para: coisas únicas no universo (the sun, the moon, the earth), instrumentos musicais (play the guitar), superlativos (the best), e nomes de países plurais ou compostos (the USA, the UK, the Netherlands).",
          "NÃO USE 'THE' para: generalizações com plurais ('I love dogs' - e não 'I love the dogs'), refeições em geral ('Breakfast is ready'), desportos ('I play tennis'), nomes de países singulares ('Brazil', 'France', 'Spain'), e idiomas isolados ('English is useful')."
        ],
        "formula": "The + elemento específico | Zero Article (Ø) + conceito geral / plural",
        "affirmative": "The Earth orbits the Sun. / Children need love and education (geral).",
        "negative": "We don't like the noise coming from that apartment.",
        "interrogative": "Did you see the keys on the counter? / Do you play basketball?"
      },
      {
        "title": "Substantivos Contáveis vs. Incontáveis (Countable & Uncountable)",
        "explanation": "Compreender a diferença entre contáveis e incontáveis é o pilar para usar quantificadores corretamente em inglês. Substantivos incontáveis nunca têm forma plural e nunca recebem 'a' ou 'an'.",
        "keyPoints": [
          "Contáveis: Podem ser contados numericamente (one chair, two chairs; a pen, three pens). Têm singular e plural.",
          "Incontáveis: Representam massas, conceitos abstratos, líquidos ou coleções globais (water, bread, money, advice, information, furniture, luggage, weather, news).",
          "Substantivos 'armadilha' que são SEMPRE incontáveis em inglês: 'advice' (conselho), 'information', 'furniture' (móveis), 'luggage' (bagagem), 'news' (notícia - singular apesar do 's').",
          "Para quantificar um incontável, use unidades de medida: 'a piece of advice', 'a glass of water', 'a loaf of bread'."
        ],
        "formula": "Incontáveis: sempre no singular + sem 'a/an' direto",
        "affirmative": "Can you give me some advice? / The information was extremely helpful.",
        "negative": "He doesn't have much money left. / There isn't any luggage lost.",
        "interrogative": "Is there any bread left? / How much water do you drink daily?"
      },
      {
        "title": "Quantificadores: Much, Many, A lot of, Few, Little",
        "explanation": "Cada quantificador possui compatibilidade gramatical específica com substantivos contáveis ou incontáveis, além de conotações positivas ou negativas.",
        "keyPoints": [
          "MUCH (+ Incontável): Usado principalmente em negativas e perguntas ('I don't have much time', 'How much does it cost?').",
          "MANY (+ Contável Plural): Usado para grandes quantidades ('How many books do you have?', 'There aren't many cars').",
          "A LOT OF / LOTS OF: Coringa versátil para frases afirmativas, usado tanto com contáveis quanto com incontáveis ('a lot of friends', 'a lot of water').",
          "FEW vs. A FEW (+ Contável): 'Few' tem conotação negativa (poucos, quase nenhum); 'A few' tem conotação positiva (alguns, o suficiente).",
          "LITTLE vs. A LITTLE (+ Incontável): 'Little' tem conotação negativa (pouco, insuficiente); 'A little' tem conotação positiva (um pouco, o suficiente)."
        ],
        "formula": "Much / Little (+ incontável) | Many / Few (+ contável plural)",
        "affirmative": "I have a few close friends and a little free time today.",
        "negative": "We have little hope of succeeding. (quase nenhuma esperança)",
        "interrogative": "How many languages do you speak? / How much sugar do you want?"
      }
    ],
    "examples": [
      {
        "english": "He bought an umbrella and a book.",
        "portuguese": "Ele comprou um guarda-chuva e um livro.",
        "note": "an umbrella (som de vogal)",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "How much water do you drink every day?",
        "portuguese": "Quanta água bebes todos os dias?",
        "note": "much water (incontável)",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I have much friends.",
        "correct": "I have many friends.",
        "explanation": "Friends é contável plural, usa-se many."
      },
      {
        "wrong": "He is a honest man.",
        "correct": "He is an honest man.",
        "explanation": "Honest tem 'h' mudo, logo som de vogal (an)."
      }
    ],
    "exercises": [
      {
        "id": "art-1",
        "type": "multiple-choice",
        "instruction": "Artigo pelo som fonético:",
        "question": "We have been waiting for _____ hour.",
        "options": [
          "an",
          "a",
          "the",
          "no article"
        ],
        "correctAnswer": "an",
        "explanation": "'hour' tem som inicial de vogal (h mudo), usa-se an.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-2",
        "type": "multiple-choice",
        "instruction": "Artigo com universidade:",
        "question": "She studies at _____ European university.",
        "options": [
          "a",
          "an",
          "the",
          "no article"
        ],
        "correctAnswer": "a",
        "explanation": "'European' tem som de consoante semivogal /j/ (yu), usa-se a.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-3",
        "type": "multiple-choice",
        "instruction": "Incontável em pergunta:",
        "question": "How _____ money do you have in your wallet?",
        "options": [
          "much",
          "many",
          "few",
          "any"
        ],
        "correctAnswer": "much",
        "explanation": "Money é incontável, usa-se 'How much'.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-4",
        "type": "multiple-choice",
        "instruction": "Contável no plural:",
        "question": "How _____ languages can you speak fluently?",
        "options": [
          "many",
          "much",
          "lot",
          "little"
        ],
        "correctAnswer": "many",
        "explanation": "Languages é contável no plural = 'How many'.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-5",
        "type": "multiple-choice",
        "instruction": "Frase negativa com any:",
        "question": "I don't have _____ milk left in the fridge.",
        "options": [
          "any",
          "some",
          "many",
          "a"
        ],
        "correctAnswer": "any",
        "explanation": "Em frases negativas usamos 'any'.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-6",
        "type": "multiple-choice",
        "instruction": "Oferecimento educado com some:",
        "question": "Would you like _____ cup of hot tea?",
        "options": [
          "a",
          "an",
          "some",
          "any"
        ],
        "correctAnswer": "a",
        "explanation": "'cup' é contável singular com som de consoante = a.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-7",
        "type": "multiple-choice",
        "instruction": "Substantivo específico:",
        "question": "Can you please pass me _____ salt on the table?",
        "options": [
          "the",
          "a",
          "an",
          "some"
        ],
        "correctAnswer": "the",
        "explanation": "Sal específico sobre a mesa usa o artigo definido 'the'.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-8",
        "type": "multiple-choice",
        "instruction": "Frase afirmativa com some:",
        "question": "There are _____ apples on the dining table.",
        "options": [
          "some",
          "any",
          "much",
          "a"
        ],
        "correctAnswer": "some",
        "explanation": "Frases afirmativas com plurais usam 'some'.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-9",
        "type": "fill-blank",
        "instruction": "Preencha com 'a' ou 'an':",
        "question": "He is _____ honest person.",
        "correctAnswer": "an",
        "explanation": "'honest' tem h mudo, logo usa-se an.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-10",
        "type": "fill-blank",
        "instruction": "Preencha com 'much' ou 'many':",
        "question": "There isn't _____ time before the flight leaves.",
        "correctAnswer": "much",
        "explanation": "Time (tempo) é incontável, usa-se much.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-11",
        "type": "fill-blank",
        "instruction": "Preencha com 'much' ou 'many':",
        "question": "How _____ cups of coffee do you drink a day?",
        "correctAnswer": "many",
        "explanation": "Cups é contável plural, usa-se many.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-12",
        "type": "fill-blank",
        "instruction": "Preencha com 'some' ou 'any':",
        "question": "Do you have _____ questions about the lesson?",
        "correctAnswer": "any",
        "explanation": "Em perguntas usamos any.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-13",
        "type": "fill-blank",
        "instruction": "Preencha com 'a' ou 'an':",
        "question": "I saw _____ elephant at the zoo.",
        "correctAnswer": "an",
        "explanation": "Elephant começa com som de vogal: an elephant.",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-14",
        "type": "fill-blank",
        "instruction": "Preencha com 'some' ou 'any':",
        "question": "I bought _____ fresh vegetables at the market.",
        "correctAnswer": "some",
        "explanation": "Afirmativa no plural usa some.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-15",
        "type": "reorder",
        "instruction": "Ordene a pergunta de quantidade:",
        "words": [
          "How",
          "much",
          "water",
          "do",
          "you",
          "drink",
          "?"
        ],
        "correctAnswer": "How much water do you drink ?",
        "explanation": "How much + incontável + auxiliar + sujeito + verbo?"
      },
      {
        "id": "art-16",
        "type": "reorder",
        "instruction": "Ordene a frase com artigo:",
        "words": [
          "She",
          "is",
          "an",
          "honest",
          "doctor"
        ],
        "correctAnswer": "She is an honest doctor",
        "explanation": "Sujeito + verbo + an + honest + substantivo."
      },
      {
        "id": "art-17",
        "type": "reorder",
        "instruction": "Ordene a frase com any:",
        "words": [
          "We",
          "do",
          "not",
          "have",
          "any",
          "sugar"
        ],
        "correctAnswer": "We do not have any sugar",
        "explanation": "Sujeito + do not have + any + substantivo."
      },
      {
        "id": "art-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu preciso de um guarda-chuva.'",
        "correctAnswer": "I need an umbrella",
        "explanation": "Note a ligação: an umbrella.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-19",
        "type": "speaking",
        "instruction": "Pronuncie a pergunta de quantidade:",
        "question": "Pergunte em inglês: 'Quanto tempo nós temos?'",
        "correctAnswer": "How much time do we have",
        "explanation": "Pronuncie com clareza: How much time do we have?",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-20",
        "type": "speaking",
        "instruction": "Fale a frase com many:",
        "question": "Diga em inglês: 'Ela tem muitos amigos aqui.'",
        "correctAnswer": "She has many friends here",
        "explanation": "Pronúncia de 'many friends'.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "art-21",
        "type": "speaking",
        "instruction": "Fale a frase afirmativa:",
        "question": "Diga em inglês: 'Eu quero uma maçã, por favor.'",
        "correctAnswer": "I want an apple please",
        "explanation": "Ligação: an apple.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Omissão de Artigo: Hospital e Universidade",
        "category": "uk-us",
        "categoryLabel": "UK vs. US",
        "explanation": "No Reino Unido, quando alguém está doente ou a estudar, omite-se o 'the' (in hospital, at university). Nos EUA, o artigo 'the' é frequentemente mantido.",
        "comparison": {
          "leftLabel": "Inglês Britânico",
          "leftText": "She is in hospital. / He is at university.",
          "rightLabel": "Inglês Americano",
          "rightText": "She is in the hospital. / He is in college."
        }
      },
      {
        "title": "A Vírgula de Oxford (Oxford Comma)",
        "category": "etiquette",
        "categoryLabel": "Clareza na Escrita",
        "explanation": "A vírgula antes do 'and' final em uma lista de 3 ou mais itens evita ambiguidades e é padrão de excelência no jornalismo internacional e escrita técnica.",
        "comparison": {
          "leftLabel": "Sem vírgula de Oxford",
          "leftText": "I love my parents, Lady Gaga and Obama.",
          "rightLabel": "Com vírgula de Oxford",
          "rightText": "I love my parents, Lady Gaga, and Obama."
        },
        "tip": "Use a vírgula de Oxford em relatórios para garantir clareza jurídica e profissional."
      }
    ]
  },
  {
    "id": "comparatives-superlatives",
    "title": "Comparativos & Superlativos",
    "subtitle": "Mais rápido, o maior e irregularidades essenciais",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "STRUCTURES",
    "categoryLabel": "Estruturas Gramaticais",
    "icon": "Compass",
    "color": "from-indigo-500 to-purple-600",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "summary": "Compare pessoas e objetos: adjetivos curtos recebem -er / -est; adjetivos longos usam more / the most. Domine também os irregulares (better, best, worse, worst).",
    "rules": [
      {
        "title": "Comparativos de Superioridade: Curtos (-er) vs. Longos (more)",
        "explanation": "Para comparar dois elementos onde um possui maior grau de uma característica que o outro, a língua inglesa classifica os adjetivos de acordo com a sua extensão fonética (número de sílabas).",
        "keyPoints": [
          "Adjetivos curtos (1 sílaba): Adiciona-se o sufixo '-er' seguido da conjunção 'than' (tall → taller than, fast → faster than, cheap → cheaper than).",
          "Adjetivos com terminação CVC: Dobra-se a consoante final (big → bigger than, hot → hotter than).",
          "Adjetivos de 2 sílabas terminados em '-y': O 'y' transforma-se em 'i' + '-er' (happy → happier than, easy → easier than).",
          "Adjetivos longos (2 ou mais sílabas sem 'y'): Usa-se 'more' antes do adjetivo invariável seguido de 'than' (more expensive than, more beautiful than, more interesting than).",
          "NUNCA use 'more' junto com '-er' ('more taller' é um erro gravíssimo)."
        ],
        "formula": "Curto: Adjetivo-er + than | Longo: more + Adjetivo + than",
        "affirmative": "My new apartment is bigger and more modern than my previous one.",
        "negative": "This route is not faster than the highway.",
        "interrogative": "Is gold more valuable than platinum? / Are you taller than your father?"
      },
      {
        "title": "Superlativos: The -est vs. The most",
        "explanation": "Enquanto os comparativos comparam apenas dois elementos entre si, o superlativo destaca um elemento único dentro de um grupo inteiro de três ou mais. Exige obrigatoriamente o artigo 'the'.",
        "keyPoints": [
          "Adjetivos curtos: the + Adjetivo + '-est' (the tallest building, the fastest car, the oldest tree).",
          "Adjetivos longos: the most + Adjetivo (the most expensive watch, the most intelligent student).",
          "Terminações em '-y': the + Adjetivo + '-iest' (the easiest exam, the happiest day).",
          "Preposições complementares: Use 'IN' para lugares físicos ou grupos singulares ('the tallest in the city', 'in the world') e 'OF' para períodos de tempo ou plurais ('the hottest day of the year', 'of all the candidates')."
        ],
        "formula": "The + Adjetivo-est (curto) | The most + Adjetivo (longo)",
        "affirmative": "Mount Everest is the highest mountain in the world.",
        "negative": "This isn't the most difficult challenge we have faced.",
        "interrogative": "What is the best movie you have ever watched? / Who is the oldest of all?"
      },
      {
        "title": "Comparações de Igualdade e Inferioridade (As... as / Less... than)",
        "explanation": "Para afirmar que dois elementos possuem o mesmo nível de uma qualidade, ou que um possui menor grau que outro, usamos construções específicas que não alteram a forma do adjetivo.",
        "keyPoints": [
          "Igualdade Afirmativa: 'as + adjetivo na forma base + as' ('He is as tall as his brother').",
          "Igualdade Negativa: 'not as + adjetivo + as' ou 'not so + adjetivo + as' ('This phone is not as expensive as that one').",
          "Inferioridade: 'less + adjetivo + than' ('This chapter is less complicated than the first one').",
          "Note que no inglês do dia a dia, 'not as... as' é muito mais natural e frequente do que 'less... than'."
        ],
        "formula": "Igualdade: as + Adjetivo + as | Inferioridade: less + Adjetivo + than",
        "affirmative": "Tokyo is as fascinating as New York.",
        "negative": "London is not as warm as Lisbon during the winter.",
        "interrogative": "Is your current laptop as fast as your desktop computer?"
      },
      {
        "title": "Comparativos Irregulares e Modificadores de Grau",
        "explanation": "Alguns dos adjetivos mais comuns da língua possuem formas comparativas e superlativas totalmente irregulares que devem ser memorizadas, além de advérbios para calibrar a intensidade da comparação.",
        "keyPoints": [
          "Good → Better (than) → The Best.",
          "Bad → Worse (than) → The Worst.",
          "Far → Farther/Further (than) → The Farthest/Furthest (further também significa 'adicional' ou 'aprofundado': 'further information').",
          "Modificadores de intensidade para comparações: 'much / far / a lot' (muito mais: 'much taller'), 'slightly / a bit' (um pouco mais: 'slightly cheaper')."
        ],
        "formula": "much / slightly + Comparativo (better / worse / more expensive)",
        "affirmative": "Her second presentation was much better than her first attempt.",
        "negative": "The traffic today is far worse than usual.",
        "interrogative": "Do you need any further details before deciding?"
      }
    ],
    "examples": [
      {
        "english": "Mount Everest is the highest mountain on Earth.",
        "portuguese": "O Monte Evereste é a montanha mais alta da Terra.",
        "note": "high -> the highest",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "Travelling by plane is faster than by train.",
        "portuguese": "Viajar de avião é mais rápido do que de comboio.",
        "note": "fast -> faster than",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "His car is more good than mine.",
        "correct": "His car is better than mine.",
        "explanation": "O comparativo de good é better, nunca more good."
      },
      {
        "wrong": "She is more tall than her sister.",
        "correct": "She is taller than her sister.",
        "explanation": "Tall tem 1 sílaba, comparativo é taller."
      }
    ],
    "exercises": [
      {
        "id": "cmp-1",
        "type": "multiple-choice",
        "instruction": "Comparativo de adjetivo curto:",
        "question": "Travelling by plane is _____ than by bus.",
        "options": [
          "faster",
          "more fast",
          "fastest",
          "fastly"
        ],
        "correctAnswer": "faster",
        "explanation": "Fast tem 1 sílaba, comparativo é faster than.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-2",
        "type": "multiple-choice",
        "instruction": "Superlativo irregular de good:",
        "question": "Cristiano Ronaldo is one of the _____ players in history.",
        "options": [
          "best",
          "most good",
          "goodest",
          "better"
        ],
        "correctAnswer": "best",
        "explanation": "O superlativo de good é the best.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-3",
        "type": "multiple-choice",
        "instruction": "Comparativo de adjetivo longo:",
        "question": "This smartphone is _____ than my old phone.",
        "options": [
          "more modern",
          "moderner",
          "most modern",
          "modern"
        ],
        "correctAnswer": "more modern",
        "explanation": "Modern tem 2 sílabas, usa-se more modern.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-4",
        "type": "multiple-choice",
        "instruction": "Comparativo irregular de bad:",
        "question": "The weather today is _____ than yesterday.",
        "options": [
          "worse",
          "badder",
          "more bad",
          "worst"
        ],
        "correctAnswer": "worse",
        "explanation": "O comparativo de bad é worse than.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-5",
        "type": "multiple-choice",
        "instruction": "Superlativo em montanha:",
        "question": "Mount Everest is the _____ peak in the world.",
        "options": [
          "highest",
          "most high",
          "higher",
          "most highest"
        ],
        "correctAnswer": "highest",
        "explanation": "High é curto, superlativo é the highest.",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-6",
        "type": "multiple-choice",
        "instruction": "Comparação de inteligência:",
        "question": "Dolphins are _____ than sharks.",
        "options": [
          "more intelligent",
          "intelligenter",
          "most intelligent",
          "intelligent"
        ],
        "correctAnswer": "more intelligent",
        "explanation": "Intelligent tem 4 sílabas = more intelligent than.",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-7",
        "type": "multiple-choice",
        "instruction": "Superlativo de bad:",
        "question": "That was the _____ movie I have ever seen.",
        "options": [
          "worst",
          "worse",
          "baddest",
          "most bad"
        ],
        "correctAnswer": "worst",
        "explanation": "O superlativo de bad é the worst.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-8",
        "type": "multiple-choice",
        "instruction": "Comparativo com duplicação de consoante:",
        "question": "Elephants are _____ than horses.",
        "options": [
          "bigger",
          "biger",
          "more big",
          "biggest"
        ],
        "correctAnswer": "bigger",
        "explanation": "Big dobra a consoante: bigger.",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-9",
        "type": "fill-blank",
        "instruction": "Escreva o comparativo de TALL:",
        "question": "Peter is _____ than his older brother.",
        "correctAnswer": "taller",
        "explanation": "tall + er = taller.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-10",
        "type": "fill-blank",
        "instruction": "Escreva o comparativo irregular de GOOD:",
        "question": "This coffee tastes _____ than that one.",
        "correctAnswer": "better",
        "explanation": "O comparativo de good é better.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-11",
        "type": "fill-blank",
        "instruction": "Escreva o superlativo irregular de BAD:",
        "question": "That was the _____ mistake of my life.",
        "correctAnswer": "worst",
        "explanation": "O superlativo de bad é worst.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-12",
        "type": "fill-blank",
        "instruction": "Complete com a palavra comparativa:",
        "question": "London is more expensive _____ Lisbon.",
        "correctAnswer": "than",
        "explanation": "Após comparativos usa-se a palavra 'than'.",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-13",
        "type": "fill-blank",
        "instruction": "Escreva o comparativo de EASY (y vira ier):",
        "question": "English grammar is _____ than I thought.",
        "correctAnswer": "easier",
        "explanation": "easy vira easier.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-14",
        "type": "fill-blank",
        "instruction": "Escreva o superlativo de HAPPY:",
        "question": "She was the _____ person in the room.",
        "correctAnswer": "happiest",
        "explanation": "happy vira happiest.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-15",
        "type": "reorder",
        "instruction": "Ordene a comparação:",
        "words": [
          "A",
          "plane",
          "is",
          "faster",
          "than",
          "a",
          "car"
        ],
        "correctAnswer": "A plane is faster than a car",
        "explanation": "Sujeito + is + comparativo + than + objeto."
      },
      {
        "id": "cmp-16",
        "type": "reorder",
        "instruction": "Ordene o superlativo:",
        "words": [
          "Everest",
          "is",
          "the",
          "highest",
          "mountain"
        ],
        "correctAnswer": "Everest is the highest mountain",
        "explanation": "Sujeito + is + the highest + mountain."
      },
      {
        "id": "cmp-17",
        "type": "reorder",
        "instruction": "Ordene com irregular:",
        "words": [
          "This",
          "solution",
          "is",
          "better",
          "than",
          "that"
        ],
        "correctAnswer": "This solution is better than that",
        "explanation": "Sujeito + is + better + than + objeto."
      },
      {
        "id": "cmp-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Isto é melhor do que aquilo.'",
        "correctAnswer": "This is better than that",
        "explanation": "Pronuncie o 'better than' com fluidez.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-19",
        "type": "speaking",
        "instruction": "Pronuncie a comparação de velocidade:",
        "question": "Diga em inglês: 'Um avião é mais rápido que um comboio.'",
        "correctAnswer": "A plane is faster than a train",
        "explanation": "Pronúncia clara de 'faster than'.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-20",
        "type": "speaking",
        "instruction": "Fale o superlativo:",
        "question": "Diga em inglês: 'Ele é o melhor jogador.'",
        "correctAnswer": "He is the best player",
        "explanation": "Pronúncia de 'the best player'.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cmp-21",
        "type": "speaking",
        "instruction": "Fale a comparação de altura:",
        "question": "Diga em inglês: 'Ela é mais alta do que eu.'",
        "correctAnswer": "She is taller than me",
        "explanation": "Pronuncie: She is taller than me.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Nuance: Farther vs. Further",
        "category": "nuance",
        "categoryLabel": "Diferença Chave",
        "explanation": "Use 'farther' para distância física mensurável (quilómetros, metros). Use 'further' para grau metafórico, tempo ou informações adicionais.",
        "comparison": {
          "leftLabel": "Distância Física",
          "leftText": "My house is farther down the road.",
          "rightLabel": "Adicional / Extensão",
          "rightText": "For further information, contact us."
        },
        "tip": "Em e-mails profissionais escreva sempre: 'Should you have any further questions...'"
      },
      {
        "title": "Elder vs. Older em Família",
        "category": "uk-us",
        "categoryLabel": "Tradição vs. Uso Geral",
        "explanation": "'Elder' e 'eldest' são usados quase exclusivamente para membros da mesma família no inglês britânico formal (my elder brother), nunca acompanhados de 'than'.",
        "comparison": {
          "leftLabel": "Com 'than' (sempre older)",
          "leftText": "He is older than me.",
          "rightLabel": "Antes de substantivo de família",
          "rightText": "My elder sister lives in London."
        }
      }
    ]
  },
  {
    "id": "past-simple",
    "title": "Past Simple & Verbos Irregulares",
    "subtitle": "Ações terminadas no passado e a lista essencial",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "History",
    "color": "from-amber-500 to-rose-600",
    "image": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80",
    "summary": "O Past Simple expressa eventos concluídos no passado em tempo definido (yesterday, last year, in 2020). Atenção ao auxiliar DID!",
    "rules": [
      {
        "title": "Ações Concluídas no Passado Definido (Definite Past Time)",
        "explanation": "O Past Simple é o tempo narrativo por excelência em inglês. Ele é usado para relatar ações, eventos ou estados que começaram e terminaram completamente no passado, acompanhados explícita ou implicitamente de um momento temporal definido.",
        "keyPoints": [
          "Marcadores temporais definidos típicos: yesterday, last night, last week, last year, two days ago, in 2018, when I was a child.",
          "O tempo é encerrado: o período de tempo não tem mais conexão com o presente (diferente do Present Perfect).",
          "Sequência cronológica de eventos passados em narrativas: 'I woke up, brushed my teeth, and left the house'."
        ],
        "formula": "Sujeito + Verbo no Passado (V2) + Marcador Temporal",
        "affirmative": "I graduated from university in 2021 and moved to Dublin.",
        "negative": "She didn't receive your email yesterday morning.",
        "interrogative": "Did you watch the football match last night?"
      },
      {
        "title": "Verbos Regulares e as 3 Pronúncias do Sufixo -ED",
        "explanation": "Os verbos regulares formam o passado com a adição do sufixo '-ed' (ou '-d' se já terminar em 'e'). O maior segredo para soar como um nativo está nas três pronúncias fonéticas distintas do sufixo '-ed'.",
        "keyPoints": [
          "Som /ɪd/ (sílaba extra): pronunciado APENAS quando o verbo termina com som de 'T' ou 'D' (want → wanted, decide → decided, need → needed).",
          "Som /t/ (sem sílaba extra): após sons desvozeados como /p/, /k/, /f/, /s/, /ʃ/, /tʃ/ (help → helped, work → worked, laugh → laughed, kiss → kissed, watch → watched).",
          "Som /d/ (suave, sem sílaba extra): após sons vozeados e vogais (play → played, clean → cleaned, live → lived, open → opened).",
          "Regras ortográficas: consoante + y vira '-ied' (study → studied); regra CVC dobra consoante (stop → stopped)."
        ],
        "formula": "Verbo Regular + -ed (-d / -ied)",
        "affirmative": "We arrived at the airport early and waited for two hours.",
        "negative": "He didn't call his parents over the weekend.",
        "interrogative": "Did you study all the irregular verbs for the exam?"
      },
      {
        "title": "Verbos Irregulares Mais Importantes por Famílias Fonéticas",
        "explanation": "Os verbos irregulares não seguem a regra do '-ed' e possuem formas próprias que devem ser memorizadas. Agrupá-los por famílias de padrões sonoros facilita drasticamente a aprendizagem.",
        "keyPoints": [
          "Padrão -OUGHT / -AUGHT: buy → bought, bring → brought, catch → caught, think → thought, teach → taught.",
          "Padrão EW: know → knew, throw → threw, blow → blew, grow → grew, fly → flew.",
          "Verbos que NÃO mudam de forma (invariáveis): cut → cut, put → put, cost → cost, hit → hit, let → let, hurt → hurt.",
          "Pares de alta frequência: go → went, see → saw, have → had, make → made, take → took, give → gave, find → found, tell → told, say → said."
        ],
        "formula": "Sujeito + Verbo Irregular no Passado (2ª coluna da tabela)",
        "affirmative": "They went to Paris and bought wonderful souvenirs.",
        "negative": "I didn't think about the consequences at that moment.",
        "interrogative": "Where did you buy that beautiful leather jacket?"
      },
      {
        "title": "O Auxiliar DID: O 'Ladrão de -ED' em Perguntas e Negativas",
        "explanation": "Assim como o 'Do/Does' no presente, o Past Simple utiliza o auxiliar universal 'DID' (para todas as pessoas gramaticais: I, you, he, she, it, we, they) para formar frases negativas e interrogativas.",
        "keyPoints": [
          "DID é universal: não há diferença entre 3ª pessoa ou plural no passado; todos usam 'did'.",
          "REGRA DE OURO (O Ladrão de Passado): Quando 'did' ou 'didn't' entra na frase, o verbo principal VOLTA AO INFINITIVO BASE ('I didn't go' - NUNCA 'I didn't went'; 'Did you see?' - NUNCA 'Did you saw?').",
          "Exceção do Verbo To Be: O verbo To Be no passado (Was / Were) é autossuficiente e NUNCA usa o auxiliar 'did' ('Were you there?' e 'I wasn't ready')."
        ],
        "formula": "Negativa: Sujeito + didn't + Verbo Base | Pergunta: Did + Sujeito + Verbo Base?",
        "affirmative": "She found her passport under the bed.",
        "negative": "She didn't find her passport until this morning.",
        "interrogative": "Did you understand the instructions given by the manager?"
      }
    ],
    "examples": [
      {
        "english": "We visited the Colosseum in Rome last year.",
        "portuguese": "Nós visitámos o Coliseu em Roma no ano passado.",
        "note": "visit + ed = visited",
        "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "She bought fresh flowers at the market.",
        "portuguese": "Ela comprou flores frescas no mercado.",
        "note": "bought é passado de buy",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I didn't went to the party.",
        "correct": "I didn't go to the party.",
        "explanation": "Com o auxiliar didn't o verbo volta ao infinitivo (go)."
      },
      {
        "wrong": "Did you saw the match?",
        "correct": "Did you see the match?",
        "explanation": "Em perguntas com Did o verbo não vai para o passado."
      }
    ],
    "exercises": [
      {
        "id": "pst-1",
        "type": "multiple-choice",
        "instruction": "Pergunta no passado:",
        "question": "_____ you watch the championship final yesterday?",
        "options": [
          "Did",
          "Do",
          "Have",
          "Were"
        ],
        "correctAnswer": "Did",
        "explanation": "Perguntas no Past Simple usam o auxiliar Did.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-2",
        "type": "multiple-choice",
        "instruction": "Verbo irregular de GO:",
        "question": "Last summer, our family _____ to Italy on vacation.",
        "options": [
          "went",
          "goed",
          "gone",
          "was go"
        ],
        "correctAnswer": "went",
        "explanation": "O passado de go é went.",
        "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-3",
        "type": "multiple-choice",
        "instruction": "Negativa com auxiliar DID:",
        "question": "I _____ the email because my laptop was broken.",
        "options": [
          "didn't send",
          "didn't sent",
          "not sent",
          "wasn't send"
        ],
        "correctAnswer": "didn't send",
        "explanation": "didn't + verbo base (send).",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-4",
        "type": "multiple-choice",
        "instruction": "Verbo irregular de BUY:",
        "question": "Yesterday she _____ a new pair of running shoes.",
        "options": [
          "bought",
          "buyed",
          "buys",
          "was buy"
        ],
        "correctAnswer": "bought",
        "explanation": "O passado de buy é bought.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-5",
        "type": "multiple-choice",
        "instruction": "Verbo regular de PLAY:",
        "question": "The kids _____ tennis for two hours yesterday.",
        "options": [
          "played",
          "plaied",
          "playing",
          "plays"
        ],
        "correctAnswer": "played",
        "explanation": "Play é regular, ganha -ed: played.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-6",
        "type": "multiple-choice",
        "instruction": "Verbo irregular de SEE:",
        "question": "We _____ a great movie at the cinema last night.",
        "options": [
          "saw",
          "seed",
          "seen",
          "seeing"
        ],
        "correctAnswer": "saw",
        "explanation": "O passado de see é saw.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-7",
        "type": "multiple-choice",
        "instruction": "Verbo irregular de EAT:",
        "question": "He _____ a delicious pizza for dinner.",
        "options": [
          "ate",
          "eated",
          "eats",
          "eaten"
        ],
        "correctAnswer": "ate",
        "explanation": "O passado de eat é ate.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-8",
        "type": "multiple-choice",
        "instruction": "Pergunta com verbo no infinitivo:",
        "question": "Where did you _____ that vintage jacket?",
        "options": [
          "buy",
          "bought",
          "buying",
          "buys"
        ],
        "correctAnswer": "buy",
        "explanation": "Com Did a pergunta usa o verbo base buy.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-9",
        "type": "fill-blank",
        "instruction": "Escreva o passado de GO:",
        "question": "Last weekend I _____ to the beach.",
        "correctAnswer": "went",
        "explanation": "O passado de go é went.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-10",
        "type": "fill-blank",
        "instruction": "Escreva o passado de SEE:",
        "question": "I _____ my old friend at the train station.",
        "correctAnswer": "saw",
        "explanation": "O passado de see é saw.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-11",
        "type": "fill-blank",
        "instruction": "Escreva o passado de WRITE:",
        "question": "Shakespeare _____ many famous plays.",
        "correctAnswer": "wrote",
        "explanation": "O passado de write é wrote.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-12",
        "type": "fill-blank",
        "instruction": "Complete a negativa no passado:",
        "question": "She _____ not answer my phone call.",
        "correctAnswer": "did",
        "explanation": "did not answer = didn't answer.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-13",
        "type": "fill-blank",
        "instruction": "Escreva o passado de VISIT:",
        "question": "They _____ Paris two years ago.",
        "correctAnswer": "visited",
        "explanation": "visit + ed = visited.",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-14",
        "type": "fill-blank",
        "instruction": "Escreva o passado de HAVE:",
        "question": "We _____ a great meeting yesterday.",
        "correctAnswer": "had",
        "explanation": "O passado de have é had.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-15",
        "type": "reorder",
        "instruction": "Ordene a frase no passado:",
        "words": [
          "I",
          "bought",
          "a",
          "coffee",
          "yesterday"
        ],
        "correctAnswer": "I bought a coffee yesterday",
        "explanation": "Sujeito + verbo no passado + objeto + marcador temporal."
      },
      {
        "id": "pst-16",
        "type": "reorder",
        "instruction": "Ordene a pergunta com Did:",
        "words": [
          "Did",
          "you",
          "enjoy",
          "the",
          "movie",
          "?"
        ],
        "correctAnswer": "Did you enjoy the movie ?",
        "explanation": "Did + sujeito + verbo base + objeto?"
      },
      {
        "id": "pst-17",
        "type": "reorder",
        "instruction": "Ordene a negativa no passado:",
        "words": [
          "We",
          "did",
          "not",
          "go",
          "there"
        ],
        "correctAnswer": "We did not go there",
        "explanation": "Sujeito + did not + verbo base + complemento."
      },
      {
        "id": "pst-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu fui para Londres ano passado.'",
        "correctAnswer": "I went to London last year",
        "explanation": "Pronuncie com clareza: I went to London last year.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-19",
        "type": "speaking",
        "instruction": "Fale a pergunta no passado:",
        "question": "Pergunte em inglês: 'Você viu aquele filme?'",
        "correctAnswer": "Did you see that movie",
        "explanation": "Entonação: Did you see that movie?",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-20",
        "type": "speaking",
        "instruction": "Pronuncie a frase afirmativa no passado:",
        "question": "Diga em inglês: 'Nós visitámos Paris ontem.'",
        "correctAnswer": "We visited Paris yesterday",
        "explanation": "Pronúncia de 'visited Paris'.",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pst-21",
        "type": "speaking",
        "instruction": "Fale a frase negativa:",
        "question": "Diga em inglês: 'Eu não comprei o carro.'",
        "correctAnswer": "I did not buy the car",
        "explanation": "Pronúncia clara do did not buy.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Ortografia: -ed vs. -t no Passado",
        "category": "uk-us",
        "categoryLabel": "UK vs. US",
        "explanation": "Muitos verbos têm formas com terminação em '-t' no Reino Unido e regulares com '-ed' nos Estados Unidos. Ambos estão perfeitamente corretos.",
        "comparison": {
          "leftLabel": "Inglês Britânico",
          "leftText": "Learnt, dreamt, spelt, burnt",
          "rightLabel": "Inglês Americano",
          "rightText": "Learned, dreamed, spelled, burned"
        },
        "tip": "Mantenha a consistência: se escolher o estilo britânico ou americano, use o mesmo ao longo de todo o texto."
      },
      {
        "title": "Posição dos Marcadores de Tempo",
        "category": "etiquette",
        "categoryLabel": "Fluência Natural",
        "explanation": "Em português costumamos dizer 'Eu ontem fui ao cinema'. Em inglês, marcadores como yesterday, last night ou last year devem ir para o FIM da frase (ou para o início com vírgula).",
        "comparison": {
          "leftLabel": "Ordem não natural",
          "leftText": "I yesterday bought a new laptop.",
          "rightLabel": "Ordem Nativa",
          "rightText": "I bought a new laptop yesterday."
        }
      }
    ]
  },
  {
    "id": "future-forms",
    "title": "O Futuro: Will vs. Going To",
    "subtitle": "Decisões instantâneas vs. planos preestabelecidos",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "Compass",
    "color": "from-violet-500 to-purple-600",
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    "summary": "Use 'going to' para planos já decididos ou evidências visíveis. Use 'will' para decisões espontâneas, promessas e previsões gerais.",
    "rules": [
      {
        "title": "WILL: Decisões Espontâneas, Promessas e Previsões Pessoais",
        "explanation": "O modal 'WILL' é usado para ações futuras decididas no exato instante em que se fala (decisões sem planejamento prévio), promessas formais, ofertas voluntárias e previsões baseadas em intuição ou crença pessoal.",
        "keyPoints": [
          "Decisões espontâneas no momento da fala: 'The phone is ringing. I will answer it!'",
          "Promessas e ofertas de ajuda: 'I will always love you' / 'I will help you with those heavy bags'.",
          "Previsões sem evidência física imediata (com verbos de opinião: think, believe, hope, probably): 'I think it will rain tomorrow'.",
          "Forma negativa contraída: 'will not' vira 'WON'T' (pronúncia /woʊnt/).",
          "Contrações afirmativas: I'll, You'll, He'll, She'll, We'll, They'll."
        ],
        "formula": "Sujeito + will / won't + Verbo na forma base",
        "affirmative": "I'll have the grilled salmon, please. / Don't worry, I won't tell anyone.",
        "negative": "He won't pass the exam if he doesn't revise carefully.",
        "interrogative": "Will you open the door for me, please? / What will happen next?"
      },
      {
        "title": "BE GOING TO: Intenções Planejadas e Evidências Visuais Imediatas",
        "explanation": "A estrutura 'BE GOING TO' é usada para planos premeditados e intenções previamente decididas antes do momento da conversa, bem como para previsões baseadas em evidências visuais concretas que já estão a acontecer.",
        "keyPoints": [
          "Planos e intenções já decididas: 'I am going to study abroad next semester' (já pesquisei e decidi).",
          "Previsões com evidência visual presente: 'Look at those dark clouds! It is going to rain' (vejo as nuvens escuras agora).",
          "Estrutura: conjugue o verbo To Be (am / is / are) + going to + verbo principal no infinitivo.",
          "Na fala informal rápida americana, é comumente pronunciado como 'gonna' (apenas na fala, não na escrita formal)."
        ],
        "formula": "Sujeito + am/is/are + going to + Verbo Base",
        "affirmative": "Look at the score! They are going to win the championship.",
        "negative": "We aren't going to buy that house; it requires too much repair.",
        "interrogative": "Are you going to accept their job offer?"
      },
      {
        "title": "Present Continuous com Sentido de Futuro (Compromissos de Agenda)",
        "explanation": "Nativos usam frequentemente o Present Continuous (am/is/are + -ing) para falar sobre compromissos futuros fixos, com data, horário ou passagens já marcadas com outras pessoas (arrangements).",
        "keyPoints": [
          "Compromissos confirmados de agenda: consultas médicas, reuniões com clientes, voos comprados, jantares combinados com amigos.",
          "Diferença de nuance: 'I'm going to meet John' (é a minha intenção) vs. 'I am meeting John at 7 PM at the restaurant' (já ligamos, combinamos e a mesa está reservada).",
          "Exige quase sempre um marcador de tempo futuro para não se confundir com o presente imediato ('tomorrow', 'on Friday', 'next week')."
        ],
        "formula": "Sujeito + am/is/are + Verbo-ING + Marcador de Futuro",
        "affirmative": "I am flying to New York next Monday morning.",
        "negative": "She isn't attending the board meeting tomorrow.",
        "interrogative": "What are you doing this Friday evening?"
      },
      {
        "title": "Cláusulas Temporais de Futuro (Regra do Presente após When, As soon as, If)",
        "explanation": "Uma das armadilhas mais comuns para estudantes intermediários e avançados: em orações subordinadas de tempo ou condição no futuro (com when, as soon as, before, after, until, if), o inglês PROÍBE o uso de 'will', exigindo o Present Simple.",
        "keyPoints": [
          "Após conjunções temporais (when, as soon as, before, after, until, while): use o Present Simple, mesmo que o sentido seja 100% futuro.",
          "Fórmula padrão: Conjunção + Present Simple, Cláusula Principal com WILL.",
          "Exemplo clássico: 'I will call you when I arrive' (NUNCA: 'when I will arrive').",
          "'As soon as he arrives, we will start the meeting' (NUNCA: 'As soon as he will arrive')."
        ],
        "formula": "When / As soon as / If + Present Simple, Sujeito + WILL + Verbo",
        "affirmative": "I will send you the report as soon as I finish writing it.",
        "negative": "We won't leave until the rain stops.",
        "interrogative": "What will you do when you graduate?"
      }
    ],
    "examples": [
      {
        "english": "I am going to start university this September.",
        "portuguese": "Eu vou para a universidade em setembro.",
        "note": "plano prévio = going to",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "The phone is ringing. I will answer it!",
        "portuguese": "O telefone está a tocar. Eu atendo!",
        "note": "decisão espontânea = will",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I will to help you.",
        "correct": "I will help you.",
        "explanation": "Após will nunca se coloca 'to'."
      }
    ],
    "exercises": [
      {
        "id": "fut-1",
        "type": "multiple-choice",
        "instruction": "Decisão espontânea imediata:",
        "question": "The doorbell is ringing. I _____ it!",
        "options": [
          "will open",
          "am going to open",
          "open",
          "opened"
        ],
        "correctAnswer": "will open",
        "explanation": "Decisão no momento exige will.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-2",
        "type": "multiple-choice",
        "instruction": "Evidência visível no céu:",
        "question": "Look at those dark black clouds! It _____ rain.",
        "options": [
          "is going to",
          "will",
          "shall",
          "goes to"
        ],
        "correctAnswer": "is going to",
        "explanation": "Evidência presente clara pede going to.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-3",
        "type": "multiple-choice",
        "instruction": "Plano de férias decidido:",
        "question": "Next week, we _____ fly to Rome.",
        "options": [
          "are going to",
          "will to",
          "shall",
          "go to"
        ],
        "correctAnswer": "are going to",
        "explanation": "Plano com bilhetes já decididos usa going to.",
        "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-4",
        "type": "multiple-choice",
        "instruction": "Promessa sincera:",
        "question": "Don't worry, I _____ tell anyone your secret.",
        "options": [
          "won't",
          "am not going",
          "not will",
          "don't will"
        ],
        "correctAnswer": "won't",
        "explanation": "Promessas usam will / won't.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-5",
        "type": "multiple-choice",
        "instruction": "Oferecimento de ajuda na hora:",
        "question": "Those suitcases look heavy. I _____ carry them for you.",
        "options": [
          "will",
          "am going to",
          "shall to",
          "go to"
        ],
        "correctAnswer": "will",
        "explanation": "Oferecimento espontâneo usa will.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-6",
        "type": "multiple-choice",
        "instruction": "Previsão do futuro distante:",
        "question": "In 2050, people _____ travel to Mars.",
        "options": [
          "will",
          "are going",
          "going to",
          "shall to"
        ],
        "correctAnswer": "will",
        "explanation": "Previsões gerais de futuro usam will.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-7",
        "type": "multiple-choice",
        "instruction": "Intenção futura de estudo:",
        "question": "She _____ apply for a scholarship in London.",
        "options": [
          "is going to",
          "will to",
          "is will",
          "go to"
        ],
        "correctAnswer": "is going to",
        "explanation": "Intenção/plano pessoal usa going to.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-8",
        "type": "multiple-choice",
        "instruction": "Negativa de will:",
        "question": "I promise I _____ forget to lock the door.",
        "options": [
          "will not",
          "not will",
          "am not to",
          "won't to"
        ],
        "correctAnswer": "will not",
        "explanation": "Negativa: will not ou won't.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-9",
        "type": "fill-blank",
        "instruction": "Complete com 'will' ou 'going to':",
        "question": "I think robots _____ do most boring jobs in the future.",
        "correctAnswer": "will",
        "explanation": "Previsão geral com 'I think' usa will.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-10",
        "type": "fill-blank",
        "instruction": "Complete a estrutura com going to:",
        "question": "They are _____ to move to a new apartment.",
        "correctAnswer": "going",
        "explanation": "are going to.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-11",
        "type": "fill-blank",
        "instruction": "Escreva a contração de will not:",
        "question": "I _____ give up on my dreams.",
        "correctAnswer": "won't",
        "explanation": "A contração de will not é won't.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-12",
        "type": "fill-blank",
        "instruction": "Complete a decisão na hora:",
        "question": "I'm hungry. I _____ make a sandwich.",
        "correctAnswer": "will",
        "explanation": "Decisão no momento usa will.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-13",
        "type": "fill-blank",
        "instruction": "Complete com o verbo To Be:",
        "question": "She _____ going to visit her grandmother tomorrow.",
        "correctAnswer": "is",
        "explanation": "She is going to.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-14",
        "type": "fill-blank",
        "instruction": "Complete a promessa:",
        "question": "I _____ always support you.",
        "correctAnswer": "will",
        "explanation": "Promessa usa will.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-15",
        "type": "reorder",
        "instruction": "Ordene a decisão no momento:",
        "words": [
          "I",
          "will",
          "call",
          "you",
          "tomorrow"
        ],
        "correctAnswer": "I will call you tomorrow",
        "explanation": "Sujeito + will + verbo base + complemento."
      },
      {
        "id": "fut-16",
        "type": "reorder",
        "instruction": "Ordene o plano com going to:",
        "words": [
          "We",
          "are",
          "going",
          "to",
          "travel"
        ],
        "correctAnswer": "We are going to travel",
        "explanation": "Sujeito + are going to + verbo base."
      },
      {
        "id": "fut-17",
        "type": "reorder",
        "instruction": "Ordene a promessa negativa:",
        "words": [
          "I",
          "won't",
          "forget",
          "your",
          "birthday"
        ],
        "correctAnswer": "I won't forget your birthday",
        "explanation": "Sujeito + won't + verbo base + objeto."
      },
      {
        "id": "fut-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu vou ajudar-te.'",
        "correctAnswer": "I will help you",
        "explanation": "Pronuncie com confiança: I will help you.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-19",
        "type": "speaking",
        "instruction": "Pronuncie o plano pessoal:",
        "question": "Diga em inglês: 'Eu vou viajar no próximo mês.'",
        "correctAnswer": "I am going to travel next month",
        "explanation": "Pronúncia conectada de going to travel.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-20",
        "type": "speaking",
        "instruction": "Fale a promessa em inglês:",
        "question": "Diga em inglês: 'Eu ligo-te mais tarde.'",
        "correctAnswer": "I will call you later",
        "explanation": "Pronúncia natural: I will call you later.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "fut-21",
        "type": "speaking",
        "instruction": "Fale a previsão com evidência:",
        "question": "Diga em inglês: 'Vai chover em breve.'",
        "correctAnswer": "It is going to rain soon",
        "explanation": "Pronúncia: It is going to rain soon.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "O uso polido de 'Shall'",
        "category": "formal-informal",
        "categoryLabel": "Elegância & Cortesia",
        "explanation": "No inglês britânico tradicional, 'Shall I...?' ou 'Shall we...?' é a forma mais refinada de oferecer ajuda ou sugerir uma ação conjunta.",
        "comparison": {
          "leftLabel": "Comum / Direto",
          "leftText": "Do you want me to open the window?",
          "rightLabel": "Polido e Elegante",
          "rightText": "Shall I open the window for you?"
        },
        "tip": "Use 'Shall we start?' para abrir reuniões de negócios com elegância."
      },
      {
        "title": "Agendamentos Oficiais: Use Present Continuous",
        "category": "etiquette",
        "categoryLabel": "Inglês de Negócios",
        "explanation": "Para compromissos já marcados na agenda (voos, reuniões com clientes, consultas), nativos preferem usar o Present Continuous em vez de 'will'.",
        "comparison": {
          "leftLabel": "Menos formal",
          "leftText": "I will meet the CEO tomorrow.",
          "rightLabel": "Profissional e Preciso",
          "rightText": "I am meeting the CEO tomorrow at 10 AM."
        }
      }
    ]
  },
  {
    "id": "prepositions-in-on-at",
    "title": "Preposições: IN, ON e AT",
    "subtitle": "Tempo e Lugar sem nunca mais confundir",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "PREPOSITIONS",
    "categoryLabel": "Preposições",
    "icon": "MapPin",
    "color": "from-sky-500 to-indigo-600",
    "image": "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=800&q=80",
    "summary": "A pirâmide do geral ao específico: IN (geral: anos, países), ON (médio: dias, superfícies), AT (específico: horas exatas, morada precisa).",
    "rules": [
      {
        "title": "Preposições de TEMPO: A Pirâmide Invertida da Especificidade",
        "explanation": "Para dominar as preposições temporais IN, ON e AT, imagine uma pirâmide invertida: o topo largo representa o tempo mais geral e amplo (IN), o meio representa dias específicos (ON) e a base pontiaguda representa a máxima precisão horária (AT).",
        "keyPoints": [
          "IN (Geral e Longo): Séculos, décadas, anos, estações do ano, meses e partes do dia ('in the 21st century', 'in 2024', 'in summer', 'in July', 'in the morning/afternoon/evening').",
          "ON (Específico de 1 dia): Dias da semana, datas com dia e mês, feriados com a palavra 'day' ('on Monday', 'on October 15th', 'on Christmas Day', 'on my birthday').",
          "AT (Momento Exato e Pontual): Horas no relógio, momentos pontuais e períodos festivos inteiros sem a palavra 'day' ('at 5:30 PM', 'at midnight', 'at noon', 'at sunrise', 'at Christmas', 'at the weekend' no UK).",
          "Exceção diária importante: 'in the morning/afternoon/evening', MAS 'at night'."
        ],
        "formula": "IN (ano/mês) → ON (dia/data) → AT (hora exata)",
        "affirmative": "The conference starts AT 9 AM ON Monday, IN September.",
        "negative": "He doesn't like working at night or on Sundays.",
        "interrogative": "Were you born in 1998 or in 1999? / What are you doing at lunchtime?"
      },
      {
        "title": "Preposições de LUGAR: Do Geral ao Endereço Específico",
        "explanation": "A mesma lógica da pirâmide aplica-se aos espaços físicos e geográficos, partindo de grandes territórios contidos até pontos exatos no mapa.",
        "keyPoints": [
          "IN (Espaços fechados com volume 3D, cidades e países): 'in Portugal', 'in London', 'in the kitchen', 'in a box', 'in the car', 'in a building'.",
          "ON (Superfícies 2D e linhas/ruas sem número): 'on the table', 'on the wall', 'on the floor', 'on Oxford Street', 'on Fifth Avenue'.",
          "AT (Pontos de referência específicos e endereços completos com número): 'at 10 Downing Street', 'at the bus stop', 'at the front door', 'at the entrance', 'at the cinema'.",
          "Atenção crítica ao endereço: 'on Baker Street' (apenas rua = ON), MAS 'at 221B Baker Street' (rua com número = AT)."
        ],
        "formula": "IN (país/cidade) → ON (rua/superfície) → AT (número/ponto exato)",
        "affirmative": "She lives AT 45 Broadway, ON a quiet floor, IN New York City.",
        "negative": "He wasn't at the station when the train pulled in.",
        "interrogative": "Is your office located in the city center or on the outskirts?"
      },
      {
        "title": "Transportes: IN vs. ON (A Regra da Mobilidade Física)",
        "explanation": "Uma das maiores dúvidas dos estudantes é saber se dizem 'in the bus' ou 'on the bus'. Existe uma regra física simples e infalível para nunca mais errar.",
        "keyPoints": [
          "USE 'ON' para transportes onde é possível ficar de pé e caminhar dentro dele, ou onde você monta em cima: on a bus, on a train, on a plane, on a ship, on a bicycle, on a motorcycle, on a horse.",
          "USE 'IN' para veículos menores onde você precisa de se curvar para entrar e permanece sentado: in a car, in a taxi, in a helicopter, in a small boat.",
          "Entrar e sair: 'get on / get off the bus' vs. 'get into / get out of the car'."
        ],
        "formula": "ON + transporte público amplo / montaria | IN + carro / táxi pequeno",
        "affirmative": "I was reading a novel on the train while she was traveling in a taxi.",
        "negative": "Don't talk loudly on the plane. / He forgot his wallet in the car.",
        "interrogative": "Are you on the subway right now or in an Uber?"
      },
      {
        "title": "Expressões Fixas e Contrastes Diários Fundamentais",
        "explanation": "Certas construções com preposições são cristalizadas pelo uso nativo idiomático e não seguem apenas a geometria física.",
        "keyPoints": [
          "Instituições e Propósitos: 'at school' / 'at university' / 'at work' (para indicar atividade ou função de estudante/trabalhador).",
          "Casa: 'at home' (NUNCA 'in home' nem 'to home' com verbos de movimento: 'go home').",
          "Mídias e Telas: SEMPRE 'ON' ('on the internet', 'on Instagram', 'on TV', 'on the radio', 'on a website', 'on the phone').",
          "Livros e Impressos: 'IN a book', 'IN a newspaper', 'IN a magazine', 'IN a photo'."
        ],
        "formula": "on the internet / on TV | at work / at home | in a book",
        "affirmative": "I found this interesting tutorial on the internet while at home.",
        "negative": "She isn't at work today because she is feeling unwell.",
        "interrogative": "Did you see that fascinating documentary on television?"
      }
    ],
    "examples": [
      {
        "english": "We arrived at the airport at 6:30 AM on Sunday.",
        "portuguese": "Chegámos ao aeroporto às 6:30 no domingo.",
        "note": "at para hora, on para dia",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "The books are on the desk in the office.",
        "portuguese": "Os livros estão em cima da secretária no escritório.",
        "note": "on para superfície, in para espaço interior",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I will see you in Monday.",
        "correct": "I will see you on Monday.",
        "explanation": "Para dias da semana usa-se sempre ON."
      },
      {
        "wrong": "He arrives on 8 o'clock.",
        "correct": "He arrives at 8 o'clock.",
        "explanation": "Para horas precisas de relógio usa-se sempre AT."
      }
    ],
    "exercises": [
      {
        "id": "prp-1",
        "type": "multiple-choice",
        "instruction": "Hora exata de relógio:",
        "question": "The concert starts _____ 8:30 PM this evening.",
        "options": [
          "at",
          "in",
          "on",
          "by"
        ],
        "correctAnswer": "at",
        "explanation": "Para horas de relógio usa-se AT.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-2",
        "type": "multiple-choice",
        "instruction": "Dia da semana:",
        "question": "We always play tennis _____ Saturdays.",
        "options": [
          "on",
          "in",
          "at",
          "to"
        ],
        "correctAnswer": "on",
        "explanation": "Para dias da semana usa-se ON.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-3",
        "type": "multiple-choice",
        "instruction": "Estação do ano:",
        "question": "I love swimming in the sea _____ summer.",
        "options": [
          "in",
          "on",
          "at",
          "by"
        ],
        "correctAnswer": "in",
        "explanation": "Para estações do ano usa-se IN.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-4",
        "type": "multiple-choice",
        "instruction": "Ano específico:",
        "question": "He graduated from university _____ 2022.",
        "options": [
          "in",
          "on",
          "at",
          "since"
        ],
        "correctAnswer": "in",
        "explanation": "Para anos usa-se IN.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-5",
        "type": "multiple-choice",
        "instruction": "Superfície horizontal:",
        "question": "Leave your keys _____ the kitchen table.",
        "options": [
          "on",
          "in",
          "at",
          "under"
        ],
        "correctAnswer": "on",
        "explanation": "Para superfícies usa-se ON.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-6",
        "type": "multiple-choice",
        "instruction": "Cidade ou país:",
        "question": "My brother lives _____ London.",
        "options": [
          "in",
          "at",
          "on",
          "into"
        ],
        "correctAnswer": "in",
        "explanation": "Para cidades e países usa-se IN.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-7",
        "type": "multiple-choice",
        "instruction": "Ponto específico de encontro:",
        "question": "Let's meet _____ the bus stop at 5 PM.",
        "options": [
          "at",
          "in",
          "on",
          "by"
        ],
        "correctAnswer": "at",
        "explanation": "Para ponto específico usa-se AT.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-8",
        "type": "multiple-choice",
        "instruction": "Expressão de noite:",
        "question": "I usually read a book _____ night.",
        "options": [
          "at",
          "in",
          "on",
          "by"
        ],
        "correctAnswer": "at",
        "explanation": "Expressão fixa: AT night.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-9",
        "type": "fill-blank",
        "instruction": "Complete com in, on ou at:",
        "question": "The meeting is _____ Monday morning.",
        "correctAnswer": "on",
        "explanation": "Dia da semana usa ON.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-10",
        "type": "fill-blank",
        "instruction": "Complete com in, on ou at:",
        "question": "We arrived _____ the train station on time.",
        "correctAnswer": "at",
        "explanation": "Ponto de destino específico usa AT.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-11",
        "type": "fill-blank",
        "instruction": "Complete com in, on ou at:",
        "question": "She was born _____ 1998.",
        "correctAnswer": "in",
        "explanation": "Anos usam IN.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-12",
        "type": "fill-blank",
        "instruction": "Complete com in, on ou at:",
        "question": "The food is _____ the dining table.",
        "correctAnswer": "on",
        "explanation": "Superfície usa ON.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-13",
        "type": "fill-blank",
        "instruction": "Complete com in, on ou at:",
        "question": "I wake up _____ 7:00 AM every day.",
        "correctAnswer": "at",
        "explanation": "Hora exata usa AT.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-14",
        "type": "fill-blank",
        "instruction": "Complete com in, on ou at:",
        "question": "They love walking in the park _____ spring.",
        "correctAnswer": "in",
        "explanation": "Estações do ano usam IN.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-15",
        "type": "reorder",
        "instruction": "Ordene a frase com tempo:",
        "words": [
          "The",
          "class",
          "starts",
          "at",
          "nine"
        ],
        "correctAnswer": "The class starts at nine",
        "explanation": "Sujeito + verbo + at + hora."
      },
      {
        "id": "prp-16",
        "type": "reorder",
        "instruction": "Ordene a frase com dia:",
        "words": [
          "We",
          "meet",
          "friends",
          "on",
          "Sundays"
        ],
        "correctAnswer": "We meet friends on Sundays",
        "explanation": "Sujeito + verbo + objeto + on + dia."
      },
      {
        "id": "prp-17",
        "type": "reorder",
        "instruction": "Ordene a frase com lugar:",
        "words": [
          "She",
          "is",
          "waiting",
          "at",
          "home"
        ],
        "correctAnswer": "She is waiting at home",
        "explanation": "Sujeito + is + waiting + at home."
      },
      {
        "id": "prp-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Vejo-te na segunda-feira.'",
        "correctAnswer": "See you on Monday",
        "explanation": "Pronuncie o 'on Monday' com naturalidade.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase com hora:",
        "question": "Diga em inglês: 'O filme começa às oito horas.'",
        "correctAnswer": "The movie starts at eight",
        "explanation": "Pronúncia de 'at eight'.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-20",
        "type": "speaking",
        "instruction": "Fale a frase com lugar:",
        "question": "Diga em inglês: 'Eles estão em casa agora.'",
        "correctAnswer": "They are at home now",
        "explanation": "Pronuncie: They are at home now.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "prp-21",
        "type": "speaking",
        "instruction": "Fale a frase com ano:",
        "question": "Diga em inglês: 'Eu nasci em 2000.'",
        "correctAnswer": "I was born in 2000",
        "explanation": "Pronúncia: I was born in 2000.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Fim de Semana: At vs. On",
        "category": "uk-us",
        "categoryLabel": "UK vs. US",
        "explanation": "Uma das maiores diferenças práticas entre o inglês britânico e americano é a preposição usada com fim de semana.",
        "comparison": {
          "leftLabel": "Inglês Britânico (UK)",
          "leftText": "What are you doing at the weekend?",
          "rightLabel": "Inglês Americano (US)",
          "rightText": "What are you doing on the weekend?"
        },
        "tip": "Ambas são compreendidas em todo o mundo. Escolha uma e mantenha o padrão."
      },
      {
        "title": "E-mails: Datas e Horas no Padrão Internacional",
        "category": "etiquette",
        "categoryLabel": "Boas Práticas",
        "explanation": "Lembre-se sempre da fórmula tríplice para convites e reuniões: AT + hora, ON + dia, IN + mês/ano.",
        "comparison": {
          "leftLabel": "Confuso",
          "leftText": "The call is in 3 PM on October.",
          "rightLabel": "Perfeito",
          "rightText": "The call is AT 3 PM ON Monday, October 15th."
        }
      }
    ]
  },
  {
    "id": "false-friends",
    "title": "Falsos Cognatos (False Friends)",
    "subtitle": "Palavras parecidas com o português mas com significados diferentes",
    "level": "A1-A2",
    "levelLabel": "Iniciante (A1-A2)",
    "category": "STRUCTURES",
    "categoryLabel": "Vocabulário & Estruturas",
    "icon": "AlertTriangle",
    "color": "from-amber-600 to-red-600",
    "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    "summary": "Palavras traiçoeiras: Actually não é atualmente (é 'na verdade'), Pretend não é pretender (é 'fingir') e Parents são 'pais' (parentes são relatives)!",
    "rules": [
      {
        "title": "O Fenômeno dos Falsos Amigos (False Cognates)",
        "explanation": "Falsos amigos são palavras que possuem grafia ou sonoridade muito parecida entre o inglês e o português devido a raízes etimológicas latinas distantes, mas cujos significados reais divergiram ao longo dos séculos. Confundi-los gera desentendimentos graves no dia a dia e no trabalho.",
        "keyPoints": [
          "Nunca presuma o significado de uma palavra em inglês apenas pela sua semelhança gráfica com o português.",
          "Cerca de 60% do vocabulário formal do inglês tem origem latina ou francesa, mas muitos termos adquiriram conotações completamente distintas.",
          "O contexto é a principal ferramenta para confirmar o significado real de um termo ambíguo."
        ],
        "formula": "Semelhança Ortográfica ≠ Correspondência de Significado",
        "affirmative": "He pretended to be sick so he could stay at home. (fingiu, não pretendeu)",
        "negative": "Actually, I don't agree with your proposal. (na verdade, não atualmente)",
        "interrogative": "Did you realize that you made a calculation error? (percebeu, não realizou)"
      },
      {
        "title": "Os 5 Falsos Amigos Mais Perigosos do Cotidiano",
        "explanation": "Estes cinco pares de falsos cognatos são os maiores responsáveis por gafes em viagens e conversas casuais com nativos.",
        "keyPoints": [
          "ACTUALLY: Significa 'na verdade', 'realmente' (NUNCA significa 'atualmente'. Para 'atualmente', use 'currently' ou 'nowadays').",
          "PRETEND: Significa 'fingir' (NUNCA significa 'pretender'. Para 'pretender/ter intenção', use 'intend' ou 'plan to').",
          "PARENTS: Significa 'pai e mãe' (NUNCA significa 'parentes'. Para 'parentes em geral', use 'relatives').",
          "PUSH vs. PULL: Em portas, 'PUSH' significa 'empurrar' e 'PULL' significa 'puxar'. Memorize: 'Push' empurra para a frente.",
          "NOTICE: Significa 'notar', 'perceber' com os olhos ou 'aviso' (Para 'notícia', use 'news')."
        ],
        "formula": "Actually = Na verdade | Currently = Atualmente | Pretend = Fingir | Intend = Pretender",
        "affirmative": "I intend to visit my parents and all my relatives this Christmas.",
        "negative": "He didn't notice that the door said 'Pull' instead of 'Push'.",
        "interrogative": "Do you actually know how many people attended the conference?"
      },
      {
        "title": "Sensible vs. Sensitive e Pares Críticos de Personalidade",
        "explanation": "Na descrição de temperamento e caráter humano, a inversão de adjetivos pode transformar um elogio num comentário desajeitado ou ofensivo.",
        "keyPoints": [
          "SENSIBLE: Significa 'sensato', 'ajuizado', 'equilibrado', que tem bom senso (NUNCA sensível). Ex: 'a sensible decision'.",
          "SENSITIVE: Significa 'sensível', 'emotivo', ou delicado a toques e alergias. Ex: 'sensitive skin', 'a sensitive person'.",
          "SYMPATHETIC: Significa 'compreensivo', 'solidário', que demonstra compaixão pela dor alheia (NUNCA 'simpático'. Para 'simpático', use 'friendly', 'nice' ou 'pleasant').",
          "EDUCATED: Significa 'instruído', com formação escolar/acadêmica de alto nível (Para alguém 'educado com boas maneiras', use 'polite' ou 'well-mannered')."
        ],
        "formula": "Sensible = Sensato | Sensitive = Sensível | Sympathetic = Compreensivo | Polite = Educado",
        "affirmative": "Taking an umbrella was a sensible choice because of the forecast.",
        "negative": "She is not being overly sensitive; she has genuine concerns.",
        "interrogative": "Was your manager sympathetic when you explained your personal issue?"
      },
      {
        "title": "Falsos Amigos no Mundo Acadêmico e Profissional",
        "explanation": "No ambiente corporativo e universitário, a utilização errada destes termos pode arruinar candidaturas a empregos e reuniões com parceiros internacionais.",
        "keyPoints": [
          "RESUME: Significa 'currículo vitae' (pronunciado /rɛzəmeɪ/). O verbo 'resume' significa 'retomar'. Para 'resumo', use 'summary'.",
          "COLLEGE: Significa 'faculdade' ou 'ensino superior' (NUNCA 'colégio de crianças'. Para colégio infantil/médio, use 'school' ou 'high school').",
          "ATTEND: Significa 'assistir', 'comparecer', 'estar presente' em um evento ou aula (Para 'prestar atendimento', use 'serve', 'assist' ou 'help').",
          "POLICY: Significa 'apólice de seguro' ou 'política de diretrizes de uma empresa' (Para 'a política eleitoral do governo', use 'politics')."
        ],
        "formula": "Resume = Currículo | Summary = Resumo | Attend = Comparecer | Policy = Diretriz",
        "affirmative": "I attended Harvard College and updated my resume afterwards.",
        "negative": "The company policy does not permit outside software.",
        "interrogative": "Can you provide a brief summary of the financial report?"
      }
    ],
    "examples": [
      {
        "english": "He actually solved the difficult question in minutes.",
        "portuguese": "Ele na verdade resolveu a pergunta difícil em minutos.",
        "note": "actually = na verdade",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "The door sign says PUSH, not pull.",
        "portuguese": "A placa da porta diz EMPURRE, não puxe.",
        "note": "push = empurrar",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I pretend to travel to England.",
        "correct": "I intend to travel to England.",
        "explanation": "Pretend significa fingir. Para ter intenção de, use intend."
      }
    ],
    "exercises": [
      {
        "id": "ff-1",
        "type": "multiple-choice",
        "instruction": "Significado de ACTUALLY:",
        "question": "What is the true meaning of 'Actually'?",
        "options": [
          "Na verdade / De facto",
          "Atualmente hoje em dia",
          "Certamente",
          "Rapidamente"
        ],
        "correctAnswer": "Na verdade / De facto",
        "explanation": "Actually significa na verdade. Atualmente traduz-se por currently.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-2",
        "type": "multiple-choice",
        "instruction": "Significado de PRETEND:",
        "question": "The children were pretending to be astronauts.",
        "options": [
          "A fingir",
          "A pretender",
          "A planear",
          "A estudar"
        ],
        "correctAnswer": "A fingir",
        "explanation": "Pretend significa fingir.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-3",
        "type": "multiple-choice",
        "instruction": "Significado de PARENTS:",
        "question": "My parents are visiting us this weekend.",
        "options": [
          "Os meus pais",
          "Os meus parentes",
          "Os meus parceiros",
          "Os meus vizinhos"
        ],
        "correctAnswer": "Os meus pais",
        "explanation": "Parents significa pai e mãe. Parentes são relatives.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-4",
        "type": "multiple-choice",
        "instruction": "PUSH vs. PULL:",
        "question": "When a door says PUSH, you should:",
        "options": [
          "Empurrar a porta",
          "Puxar a porta",
          "Bater na porta",
          "Trancar a porta"
        ],
        "correctAnswer": "Empurrar a porta",
        "explanation": "Push = empurrar; Pull = puxar.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-5",
        "type": "multiple-choice",
        "instruction": "Como dizer 'atualmente' em inglês:",
        "question": "How do you say 'atualmente nos dias de hoje'?",
        "options": [
          "Currently",
          "Actually",
          "Eventual",
          "Presently"
        ],
        "correctAnswer": "Currently",
        "explanation": "Currently = atualmente.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-6",
        "type": "multiple-choice",
        "instruction": "Significado de REALISE:",
        "question": "He suddenly realised he lost his passport.",
        "options": [
          "Percebeu / Deu-se conta",
          "Realizou uma festa",
          "Fez um projeto",
          "Criou uma empresa"
        ],
        "correctAnswer": "Percebeu / Deu-se conta",
        "explanation": "Realise = aperceber-se / dar-se conta.",
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-7",
        "type": "multiple-choice",
        "instruction": "Significado de INTEND:",
        "question": "I intend to learn fluent English this year.",
        "options": [
          "Pretendo / Tenho intenção",
          "Finjo",
          "Entendo",
          "Gostaria"
        ],
        "correctAnswer": "Pretendo / Tenho intenção",
        "explanation": "Intend = pretender / ter a intenção.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-8",
        "type": "multiple-choice",
        "instruction": "Significado de LIBRARY:",
        "question": "She borrowed three books from the local library.",
        "options": [
          "Biblioteca pública",
          "Livraria comercial",
          "Sala de aula",
          "Escritório"
        ],
        "correctAnswer": "Biblioteca pública",
        "explanation": "Library = biblioteca. Livraria é bookshop.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-9",
        "type": "fill-blank",
        "instruction": "Complete com 'actually' ou 'currently':",
        "question": "I thought it was hard, but _____ it was easy.",
        "correctAnswer": "actually",
        "explanation": "actually = na verdade.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-10",
        "type": "fill-blank",
        "instruction": "Complete a frase sobre intenção:",
        "question": "I _____ to start my university studies soon.",
        "correctAnswer": "intend",
        "explanation": "intend = pretender.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-11",
        "type": "fill-blank",
        "instruction": "Traduza 'pais' para inglês:",
        "question": "Both of my _____ are doctors.",
        "correctAnswer": "parents",
        "explanation": "parents = pais.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-12",
        "type": "fill-blank",
        "instruction": "Complete a ação da porta:",
        "question": "Don't pull the handle, please _____ the door.",
        "correctAnswer": "push",
        "explanation": "push = empurrar.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-13",
        "type": "fill-blank",
        "instruction": "Escreva a palavra que significa 'atualmente':",
        "question": "He is _____ working on a new book.",
        "correctAnswer": "currently",
        "explanation": "currently = atualmente.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-14",
        "type": "fill-blank",
        "instruction": "Complete a frase:",
        "question": "He _____ to be asleep so he wouldn't do chores.",
        "correctAnswer": "pretended",
        "explanation": "pretended = fingiu.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-15",
        "type": "reorder",
        "instruction": "Ordene a frase com actually:",
        "words": [
          "I",
          "actually",
          "like",
          "this",
          "song"
        ],
        "correctAnswer": "I actually like this song",
        "explanation": "Sujeito + actually + verbo + objeto."
      },
      {
        "id": "ff-16",
        "type": "reorder",
        "instruction": "Ordene a frase com parents:",
        "words": [
          "My",
          "parents",
          "are",
          "very",
          "proud"
        ],
        "correctAnswer": "My parents are very proud",
        "explanation": "Sujeito + parents + verbo + predicativo."
      },
      {
        "id": "ff-17",
        "type": "reorder",
        "instruction": "Ordene a frase de empurrar:",
        "words": [
          "Please",
          "push",
          "the",
          "front",
          "door"
        ],
        "correctAnswer": "Please push the front door",
        "explanation": "Please + push + the front door."
      },
      {
        "id": "ff-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Na verdade, eu adoro café.'",
        "correctAnswer": "Actually I love coffee",
        "explanation": "Pronúncia de 'Actually': /ˈæktʃuəli/.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase sobre pais:",
        "question": "Diga em inglês: 'Os meus pais estão em casa.'",
        "correctAnswer": "My parents are at home",
        "explanation": "Pronúncia clara de 'parents'.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-20",
        "type": "speaking",
        "instruction": "Fale a instrução da porta:",
        "question": "Diga em inglês: 'Por favor, empurre a porta.'",
        "correctAnswer": "Please push the door",
        "explanation": "Pronuncie: Please push the door.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ff-21",
        "type": "speaking",
        "instruction": "Fale sobre a sua intenção:",
        "question": "Diga em inglês: 'Eu pretendo aprender inglês.'",
        "correctAnswer": "I intend to learn English",
        "explanation": "Pronúncia de 'intend to learn'.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Sensible vs. Sensitive",
        "category": "nuance",
        "categoryLabel": "Cuidado Crítico",
        "explanation": "Sensible significa 'sensato / equilibrado' (usa o bom senso). Sensitive significa 'sensível / delicado'.",
        "comparison": {
          "leftLabel": "Sensible = Sensato",
          "leftText": "It was a sensible decision.",
          "rightLabel": "Sensitive = Sensível",
          "rightText": "He has very sensitive skin."
        },
        "tip": "Elogie um colega pelo bom senso dizendo: 'You are very sensible!'"
      },
      {
        "title": "Currículo: CV vs. Resume",
        "category": "uk-us",
        "categoryLabel": "Candidaturas Internacionais",
        "explanation": "No Reino Unido e na União Europeia diz-se 'CV' (Curriculum Vitae). Nos Estados Unidos e Canadá a palavra padrão é 'Resume'.",
        "comparison": {
          "leftLabel": "UK / Europa",
          "leftText": "Please send your updated CV.",
          "rightLabel": "EUA / Canadá",
          "rightText": "Please send your updated resume."
        }
      }
    ]
  },
  {
    "id": "past-continuous",
    "title": "Past Continuous & Interrupções",
    "subtitle": "Ações contínuas no passado interrompidas por outro evento",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "Activity",
    "color": "from-blue-600 to-indigo-700",
    "image": "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
    "summary": "Descreva o que estava a acontecer quando outro evento ocorreu: 'I was cooking dinner when the phone rang.' Formado por WAS / WERE + verbo com -ing.",
    "rules": [
      {
        "title": "Ações em Andamento num Ponto Específico do Passado",
        "explanation": "O Past Continuous descreve ações que estavam em progresso, não finalizadas, num momento pontual e determinado no tempo pretérito. É formado pelo passado do verbo To Be (WAS com I, He, She, It; WERE com You, We, They) seguido do verbo principal com '-ing'.",
        "keyPoints": [
          "Momento pontual: 'At 8 PM yesterday, I was studying in the library' (a ação já havia começado antes das 8 e continuava a decorrer naquele minuto).",
          "WAS: Usado com I, He, She, It. Negativa: 'was not' ou 'wasn't'.",
          "WERE: Usado com You, We, They. Negativa: 'were not' ou 'weren't'.",
          "Diferença do Past Simple: 'I cooked dinner at 7 PM' (comecei a cozinhar às 7) vs. 'I was cooking dinner at 7 PM' (às 7 eu já estava no meio do preparo)."
        ],
        "formula": "Sujeito + was / were + Verbo-ING + Complemento",
        "affirmative": "They were sleeping when the alarm sounded at midnight.",
        "negative": "I wasn't paying attention when the professor mentioned the deadline.",
        "interrogative": "What were you doing yesterday at three o'clock in the afternoon?"
      },
      {
        "title": "A Combinação Clássica: While (Contínuo) vs. When (Interrupção)",
        "explanation": "A estrutura mais celebrada e útil do Past Continuous ocorre quando uma ação contínua longa que já estava a acontecer no passado é subitamente interrompida por uma ação curta e pontual no Past Simple.",
        "keyPoints": [
          "Ação longa de fundo (background): expressa com PAST CONTINUOUS e frequentemente introduzida por 'WHILE' ou 'AS'.",
          "Ação curta de interrupção: expressa com PAST SIMPLE e frequentemente introduzida por 'WHEN'.",
          "Fórmula clássica: WHILE + Past Continuous, Past Simple (interrupção).",
          "Exemplo: 'While I was showering, the doorbell rang' ou 'I was showering WHEN the doorbell rang'."
        ],
        "formula": "[Ação Longa: Past Continuous] + WHEN + [Interrupção: Past Simple]",
        "affirmative": "She was driving along the coast when her car suddenly broke down.",
        "negative": "He wasn't speeding when the police officer stopped him.",
        "interrogative": "Were you watching TV when the earthquake shook the ground?"
      },
      {
        "title": "Ações Paralelas Simultâneas no Passado",
        "explanation": "Quando duas ou mais ações contínuas estavam a ocorrer ao mesmo tempo em paralelo no passado, sem que uma interrompesse a outra, ambas são conjugadas no Past Continuous, geralmente conectadas por 'WHILE'.",
        "keyPoints": [
          "Duas ações simultâneas: Sujeito 1 + was/were -ing + WHILE + Sujeito 2 + was/were -ing.",
          "Cenários de rotina paralela: 'While my mother was cooking, my father was setting the table'.",
          "Evita a sensação de causa e efeito, enfatizando a coexistência temporal de dois eventos independentes."
        ],
        "formula": "Past Continuous + WHILE + Past Continuous",
        "affirmative": "While the students were writing the exam, the teacher was reading a paper.",
        "negative": "We weren't arguing; we were just discussing different viewpoints.",
        "interrogative": "Were they playing outside while it was raining?"
      },
      {
        "title": "Criação de Clima e Cenário de Fundo em Histórias (Setting the Scene)",
        "explanation": "Em romances, contos e anedotas narrativas, o Past Continuous é a ferramenta estilística de excelência para pintar o cenário inicial e descrever a atmosfera antes do desenrolar dos acontecimentos principais.",
        "keyPoints": [
          "O cenário usa Past Continuous: 'The birds were singing, the sun was shining, and people were walking in the park'.",
          "O evento dramático que quebra a paz entra no Past Simple: 'Suddenly, a loud scream echoed through the trees'.",
          "Dá profundidade e dinamismo cinematográfico à escrita em língua inglesa."
        ],
        "formula": "Cenário de Fundo (Past Continuous) → Ação Principal (Past Simple)",
        "affirmative": "The wind was howling and the rain was beating against the windows as we waited.",
        "negative": "Nobody was expecting any visitors on that stormy evening.",
        "interrogative": "Was everyone working normally before the power outage occurred?"
      }
    ],
    "examples": [
      {
        "english": "I was reading a book when the lights went out.",
        "portuguese": "Eu estava a ler um livro quando a luz se apagou.",
        "note": "ação em curso interrompida",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "While she was cooking, he was setting the table.",
        "portuguese": "Enquanto ela cozinhava, ele punha a mesa.",
        "note": "duas ações paralelas em curso",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "They was watching television.",
        "correct": "They were watching television.",
        "explanation": "Com They usa-se were, nunca was."
      }
    ],
    "exercises": [
      {
        "id": "pcnt-1",
        "type": "multiple-choice",
        "instruction": "Ação em curso interrompida:",
        "question": "We _____ along the beach when it suddenly started to rain.",
        "options": [
          "were walking",
          "was walking",
          "walked",
          "are walking"
        ],
        "correctAnswer": "were walking",
        "explanation": "We exige 'were walking'.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-2",
        "type": "multiple-choice",
        "instruction": "Interrupção telefónica:",
        "question": "I _____ a shower when the telephone rang.",
        "options": [
          "was taking",
          "took",
          "were taking",
          "am taking"
        ],
        "correctAnswer": "was taking",
        "explanation": "I exige 'was taking'.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-3",
        "type": "multiple-choice",
        "instruction": "Ações simultâneas com While:",
        "question": "While mom was cooking, dad _____ the dishes.",
        "options": [
          "was washing",
          "washed",
          "is washing",
          "were washing"
        ],
        "correctAnswer": "was washing",
        "explanation": "Dad = He, logo 'was washing'.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-4",
        "type": "multiple-choice",
        "instruction": "Pergunta no passado contínuo:",
        "question": "What _____ you doing at 9 PM yesterday evening?",
        "options": [
          "were",
          "was",
          "did",
          "are"
        ],
        "correctAnswer": "were",
        "explanation": "Com 'you' a pergunta é 'What were you doing?'.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-5",
        "type": "multiple-choice",
        "instruction": "Estudo interrompido:",
        "question": "Sarah was studying when her best friend _____ her.",
        "options": [
          "called",
          "was calling",
          "calls",
          "is calling"
        ],
        "correctAnswer": "called",
        "explanation": "A ação que interrompe fica no Past Simple (called).",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-6",
        "type": "multiple-choice",
        "instruction": "Negativa no passado contínuo:",
        "question": "He _____ attention when the accident happened.",
        "options": [
          "was not paying",
          "were not paying",
          "didn't paying",
          "not was paying"
        ],
        "correctAnswer": "was not paying",
        "explanation": "He exige 'was not paying'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-7",
        "type": "multiple-choice",
        "instruction": "Viagem em curso:",
        "question": "They _____ to London when the storm hit the airport.",
        "options": [
          "were flying",
          "was flying",
          "flew",
          "flying"
        ],
        "correctAnswer": "were flying",
        "explanation": "They exige 'were flying'.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-8",
        "type": "multiple-choice",
        "instruction": "Combinação com When:",
        "question": "I was sleeping when the alarm clock _____ off.",
        "options": [
          "went",
          "was going",
          "goes",
          "is going"
        ],
        "correctAnswer": "went",
        "explanation": "A interrupção pontual fica no Past Simple: went off.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-9",
        "type": "fill-blank",
        "instruction": "Complete com was ou were:",
        "question": "I _____ sleeping peacefully when you texted.",
        "correctAnswer": "was",
        "explanation": "Com I usa-se was.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-10",
        "type": "fill-blank",
        "instruction": "Complete com was ou were:",
        "question": "The students _____ listening carefully to the lecture.",
        "correctAnswer": "were",
        "explanation": "Students = plural, logo were.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-11",
        "type": "fill-blank",
        "instruction": "Complete o verbo no passado simples:",
        "question": "We were having dinner when the doorbell _____ (ring).",
        "correctAnswer": "rang",
        "explanation": "O passado de ring é rang.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-12",
        "type": "fill-blank",
        "instruction": "Complete com o verbo contínuo:",
        "question": "He was _____ (drive) home when it began to snow.",
        "correctAnswer": "driving",
        "explanation": "drive vira driving.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-13",
        "type": "fill-blank",
        "instruction": "Complete com when ou while:",
        "question": "I met my teacher _____ I was walking in the park.",
        "correctAnswer": "while",
        "explanation": "Ações contínuas usam while.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-14",
        "type": "fill-blank",
        "instruction": "Complete a negativa:",
        "question": "They _____ not working yesterday afternoon.",
        "correctAnswer": "were",
        "explanation": "They were not working.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-15",
        "type": "reorder",
        "instruction": "Ordene a frase contínua:",
        "words": [
          "I",
          "was",
          "reading",
          "a",
          "book"
        ],
        "correctAnswer": "I was reading a book",
        "explanation": "Sujeito + was + verbo-ing + objeto."
      },
      {
        "id": "pcnt-16",
        "type": "reorder",
        "instruction": "Ordene a frase com interrupção:",
        "words": [
          "She",
          "called",
          "while",
          "I",
          "was",
          "cooking"
        ],
        "correctAnswer": "She called while I was cooking",
        "explanation": "Oração principal + while + passado contínuo."
      },
      {
        "id": "pcnt-17",
        "type": "reorder",
        "instruction": "Ordene a pergunta no passado:",
        "words": [
          "What",
          "were",
          "you",
          "doing",
          "yesterday",
          "?"
        ],
        "correctAnswer": "What were you doing yesterday ?",
        "explanation": "What + were + you + doing + advérbio?"
      },
      {
        "id": "pcnt-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu estava a ler um livro.'",
        "correctAnswer": "I was reading a book",
        "explanation": "Pronuncie: I was reading a book.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase com interrupção:",
        "question": "Diga em inglês: 'Eu estava a cozinhar quando ligaste.'",
        "correctAnswer": "I was cooking when you called",
        "explanation": "Pronúncia fluida entre as duas orações.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-20",
        "type": "speaking",
        "instruction": "Fale a pergunta com entonação correta:",
        "question": "Pergunte em inglês: 'O que você estava fazendo?'",
        "correctAnswer": "What were you doing",
        "explanation": "Entonação: What were you doing?",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pcnt-21",
        "type": "speaking",
        "instruction": "Fale sobre a ação contínua:",
        "question": "Diga em inglês: 'Estava a chover ontem à noite.'",
        "correctAnswer": "It was raining last night",
        "explanation": "Pronúncia de 'was raining'.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Criar Atmosfera em Narrativas (Storytelling)",
        "category": "etiquette",
        "categoryLabel": "Expressão Escrita",
        "explanation": "Grandes escritores e oradores utilizam o Past Continuous para 'pintar o cenário' no início de histórias, antes do evento principal acontecer no Past Simple.",
        "comparison": {
          "leftLabel": "Cenário de Fundo (Past Continuous)",
          "leftText": "The rain was pouring and thunder was roaring...",
          "rightLabel": "Ação Pontual (Past Simple)",
          "rightText": "...when suddenly someone knocked on the door."
        }
      }
    ]
  },
  {
    "id": "present-perfect",
    "title": "Present Perfect Simple",
    "subtitle": "Experiências de vida, passado com impacto no presente",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "History",
    "color": "from-purple-500 to-indigo-600",
    "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    "summary": "Liga o passado ao presente! Usado para experiências de vida ('Have you ever been...?'), ações recentes com consequência imediata e tempo não especificado.",
    "rules": [
      {
        "title": "O Conceito Central: A Ligação entre Passado e Presente",
        "explanation": "O Present Perfect Simple é o tempo verbal mais incompreendido pelos lusófonos porque não existe um equivalente direto idêntico em português. Ele expressa uma ação que ocorreu no passado, mas cujo RESULTADO ou consequência é palpável e relevante no momento presente.",
        "keyPoints": [
          "Estrutura obrigatória: Sujeito + HAVE / HAS + Particípio Passado (3ª coluna: gone, seen, done, eaten, written).",
          "HAS: Exclusivo para He, She, It. HAVE: Para I, You, We, They.",
          "REGRA DE OURO ABSOLUTA: Se a frase contiver um marcador de tempo passado encerrado (yesterday, last year, in 2015, two hours ago), é PROIBIDO usar Present Perfect; use o Past Simple.",
          "Resultado no presente: 'I have lost my passport' (perdi no passado e a consequência agora é: estou sem passaporte nas mãos)."
        ],
        "formula": "Sujeito + have / has + Particípio Passado (V3)",
        "affirmative": "I have washed the dishes, so the kitchen is clean now.",
        "negative": "She has not (hasn't) finished the monthly financial report yet.",
        "interrogative": "Have you seen my glasses anywhere? I can't find them."
      },
      {
        "title": "Experiências de Vida com EVER e NEVER",
        "explanation": "Quando falamos sobre aquilo que já fizemos ou nunca fizemos ao longo de toda a nossa vida (sem especificar quando a experiência aconteceu), usamos o Present Perfect acompanhado de EVER ou NEVER.",
        "keyPoints": [
          "EVER: Significa 'alguma vez na vida'. Usado essencialmente em perguntas ('Have you ever been to Japan?').",
          "Posição do EVER: Entre o sujeito e o particípio passado ('Have you + EVER + visited...?').",
          "NEVER: Significa 'nunca na vida'. Já tem valor negativo intrínseco, dispensando o 'not' ('I have never eaten sushi').",
          "Atenção com GONE vs. BEEN: 'She has GONE to Paris' (foi e ainda está lá) vs. 'She has BEEN to Paris' (foi, visitou e já regressou)."
        ],
        "formula": "Have you EVER + Particípio? | I have NEVER + Particípio",
        "affirmative": "She has been to five continents during her career.",
        "negative": "I have never seen such a magnificent sunset in my life.",
        "interrogative": "Have you ever met someone famous in an airport?"
      },
      {
        "title": "FOR vs. SINCE: Duração e Ponto de Partida no Tempo",
        "explanation": "Para expressar ações e estados que começaram no passado e continuam verdadeiros e ativos hoje, o Present Perfect é acompanhado de duas preposições fundamentais de tempo.",
        "keyPoints": [
          "SINCE (Ponto de partida / Início no tempo): Indica o momento exato em que a ação começou ('since 2010', 'since yesterday', 'since Monday', 'since 9 AM', 'since I was a kid').",
          "FOR (Duração acumulada / Extensão temporal): Indica a contagem total de tempo decorrido ('for ten years', 'for three hours', 'for a long time', 'for ages', 'for two weeks').",
          "Equivalência lógica: 'I have lived here SINCE 2020' = 'I have lived here FOR 4 years'. Ambos significam que eu ainda moro aqui hoje."
        ],
        "formula": "Have/Has + V3 + SINCE [data de início] | FOR [duração de tempo]",
        "affirmative": "They have been married for twenty years and are still very happy.",
        "negative": "He hasn't called his brother since last Christmas.",
        "interrogative": "How long have you worked at this multinational company?"
      },
      {
        "title": "Os Marcadores de Tempo Presente: JUST, ALREADY e YET",
        "explanation": "Três advérbios determinam a cronologia precisa de ações recentes ou aguardadas no Present Perfect.",
        "keyPoints": [
          "JUST: Significa 'acabou de acontecer' há poucos segundos ou minutos. Posicionado entre have/has e o particípio ('I have just finished my lunch').",
          "ALREADY: Significa 'já', indicando que a ação ocorreu antes do esperado. Usado em frases afirmativas ('She has already sent the email').",
          "YET: Tem duplo papel e fica SEMPRE NO FINAL DA FRASE: Em frases negativas significa 'ainda não' ('I haven't called him yet'); em perguntas significa 'já' com expectativa ('Have you paid the bill yet?')."
        ],
        "formula": "have/has + JUST/ALREADY + V3 | have/has not + V3 ... + YET",
        "affirmative": "We have just landed in London and have already collected our bags.",
        "negative": "The parcel hasn't arrived yet; the courier is delayed.",
        "interrogative": "Have you completed the registration form yet?"
      }
    ],
    "examples": [
      {
        "english": "I have lost my house keys. I cannot open the door!",
        "portuguese": "Perdi as chaves de casa. Não consigo abrir a porta!",
        "note": "impacto direto no momento presente",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "Have you ever visited a foreign country?",
        "portuguese": "Já alguma vez visitaste um país estrangeiro?",
        "note": "experiência de vida",
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I have seen him yesterday.",
        "correct": "I saw him yesterday.",
        "explanation": "Se indicou 'yesterday', 'last year', use o Past Simple!"
      }
    ],
    "exercises": [
      {
        "id": "pp-1",
        "type": "multiple-choice",
        "instruction": "Pergunta sobre experiência de vida:",
        "question": "_____ you ever visited New York City?",
        "options": [
          "Have",
          "Did",
          "Were",
          "Are"
        ],
        "correctAnswer": "Have",
        "explanation": "Experiências de vida usam 'Have you ever + V3?'.",
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-2",
        "type": "multiple-choice",
        "instruction": "Consequência direta no presente:",
        "question": "I cannot enter my apartment because I _____ my keys.",
        "options": [
          "have lost",
          "lost",
          "had lost",
          "am losing"
        ],
        "correctAnswer": "have lost",
        "explanation": "Ação passada com impacto no agora usa Present Perfect.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-3",
        "type": "multiple-choice",
        "instruction": "Ação acabada de acontecer:",
        "question": "She has _____ finished cooking dinner.",
        "options": [
          "just",
          "yet",
          "ever",
          "since"
        ],
        "correctAnswer": "just",
        "explanation": "'just' expressa uma ação concluída há instantes.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-4",
        "type": "multiple-choice",
        "instruction": "Negativa com yet:",
        "question": "We haven't received the exam results _____.",
        "options": [
          "yet",
          "already",
          "just",
          "ever"
        ],
        "correctAnswer": "yet",
        "explanation": "'yet' usa-se no fim de frases negativas e interrogativas.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-5",
        "type": "multiple-choice",
        "instruction": "Duração com since:",
        "question": "He has lived in Lisbon _____ 2018.",
        "options": [
          "since",
          "for",
          "in",
          "during"
        ],
        "correctAnswer": "since",
        "explanation": "'since' indica o ponto de partida no tempo.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-6",
        "type": "multiple-choice",
        "instruction": "Duração com for:",
        "question": "They have studied English together _____ five years.",
        "options": [
          "for",
          "since",
          "during",
          "from"
        ],
        "correctAnswer": "for",
        "explanation": "'for' expressa a extensão total do período.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-7",
        "type": "multiple-choice",
        "instruction": "Afirmativa com already:",
        "question": "I have _____ seen that movie twice.",
        "options": [
          "already",
          "yet",
          "ever",
          "never"
        ],
        "correctAnswer": "already",
        "explanation": "'already' enfatiza que a ação já ocorreu antes do esperado.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-8",
        "type": "multiple-choice",
        "instruction": "Forma com 3ª pessoa:",
        "question": "She _____ worked at this company for a decade.",
        "options": [
          "has",
          "have",
          "is",
          "had"
        ],
        "correctAnswer": "has",
        "explanation": "Com She usa-se has.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-9",
        "type": "fill-blank",
        "instruction": "Complete com have ou has:",
        "question": "I _____ visited three different countries this year.",
        "correctAnswer": "have",
        "explanation": "Com I usa-se have.",
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-10",
        "type": "fill-blank",
        "instruction": "Complete com have ou has:",
        "question": "He _____ written four best-selling books.",
        "correctAnswer": "has",
        "explanation": "Com He usa-se has.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-11",
        "type": "fill-blank",
        "instruction": "Escreva o particípio de GO (go -> went -> _____):",
        "question": "They have _____ to the supermarket.",
        "correctAnswer": "gone",
        "explanation": "O particípio passado de go é gone.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-12",
        "type": "fill-blank",
        "instruction": "Complete com since ou for:",
        "question": "I have known him _____ ten years.",
        "correctAnswer": "for",
        "explanation": "Duração de tempo usa for.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-13",
        "type": "fill-blank",
        "instruction": "Complete com since ou for:",
        "question": "She has lived here _____ January.",
        "correctAnswer": "since",
        "explanation": "Ponto de partida temporal usa since.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-14",
        "type": "fill-blank",
        "instruction": "Complete com o marcador de 'nunca':",
        "question": "I have _____ tasted such delicious coffee.",
        "correctAnswer": "never",
        "explanation": "never indica nunca.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-15",
        "type": "reorder",
        "instruction": "Ordene a pergunta com ever:",
        "words": [
          "Have",
          "you",
          "ever",
          "been",
          "to",
          "Paris",
          "?"
        ],
        "correctAnswer": "Have you ever been to Paris ?",
        "explanation": "Have you ever been to + lugar?"
      },
      {
        "id": "pp-16",
        "type": "reorder",
        "instruction": "Ordene a frase com just:",
        "words": [
          "I",
          "have",
          "just",
          "finished",
          "my",
          "work"
        ],
        "correctAnswer": "I have just finished my work",
        "explanation": "Sujeito + have + just + V3 + objeto."
      },
      {
        "id": "pp-17",
        "type": "reorder",
        "instruction": "Ordene a frase com already:",
        "words": [
          "She",
          "has",
          "already",
          "left",
          "the",
          "office"
        ],
        "correctAnswer": "She has already left the office",
        "explanation": "Sujeito + has + already + V3 + complemento."
      },
      {
        "id": "pp-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Eu já estive em Londres.'",
        "correctAnswer": "I have been to London",
        "explanation": "Pronuncie com fluidez: I have been to London.",
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-19",
        "type": "speaking",
        "instruction": "Pronuncie a experiência de vida:",
        "question": "Pergunte em inglês: 'Já alguma vez foste a Paris?'",
        "correctAnswer": "Have you ever been to Paris",
        "explanation": "Entonação: Have you ever been to Paris?",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-20",
        "type": "speaking",
        "instruction": "Fale a frase de ação recente:",
        "question": "Diga em inglês: 'Eu acabei de chegar.'",
        "correctAnswer": "I have just arrived",
        "explanation": "Pronúncia de 'have just arrived'.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pp-21",
        "type": "speaking",
        "instruction": "Fale sobre a duração do estudo:",
        "question": "Diga em inglês: 'Eu vivo aqui há cinco anos.'",
        "correctAnswer": "I have lived here for five years",
        "explanation": "Pronúncia de 'for five years'.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Experiência Recente: UK vs. US",
        "category": "uk-us",
        "categoryLabel": "UK vs. US",
        "explanation": "Com palavras como 'just', 'already' e 'yet', falantes britânicos usam rigorosamente o Present Perfect. Nos Estados Unidos, o Past Simple é amplamente aceite no dia a dia.",
        "comparison": {
          "leftLabel": "Padrão Britânico",
          "leftText": "I have just eaten lunch.",
          "rightLabel": "Uso Coloquial Americano",
          "rightText": "I just ate lunch."
        },
        "tip": "Em exames e redações formais internacionais, use sempre a forma com Present Perfect: 'I have just eaten'."
      },
      {
        "title": "Gone to vs. Been to",
        "category": "nuance",
        "categoryLabel": "Diferença Vital",
        "explanation": "'Has gone to' significa que a pessoa foi e AINDA NÃO regressou. 'Has been to' significa que a pessoa visitou o local e JÁ voltou.",
        "comparison": {
          "leftLabel": "Ainda está lá (Gone)",
          "leftText": "Maria has gone to Paris (she is there now).",
          "rightLabel": "Já regressou (Been)",
          "rightText": "Maria has been to Paris twice in her life."
        }
      }
    ]
  },
  {
    "id": "past-perfect",
    "title": "Past Perfect (O Passado do Passado)",
    "subtitle": "Had + V3: acontecimentos que ocorreram antes de outro evento passado",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "TENSES",
    "categoryLabel": "Tempos Verbais",
    "icon": "History",
    "color": "from-teal-600 to-emerald-700",
    "image": "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80",
    "summary": "Quando falamos de dois eventos no passado e queremos deixar claro qual aconteceu PRIMEIRO, usamos o Past Perfect (had + particípio) para a ação mais antiga.",
    "rules": [
      {
        "title": "A Linha do Tempo: O 'Passado do Passado'",
        "explanation": "O Past Perfect Simple serve a um propósito crucial: ordenar dois acontecimentos que ocorreram no passado. Quando estamos a relatar uma história no pretérito e queremos referir algo que aconteceu ANTES daquele momento narrativo, usamos o Past Perfect.",
        "keyPoints": [
          "Se dois eventos ocorreram no passado, o PRIMEIRO evento cronológico usa Past Perfect (Had + V3) e o SEGUNDO evento usa Past Simple.",
          "Fórmula mental da linha do tempo: Passado Anterior (Past Perfect) → Passado Recente (Past Simple) → Presente.",
          "Exemplo clássico: 'When we arrived at the cinema, the film had already started' (O filme começou primeiro; nós chegámos depois)."
        ],
        "formula": "Had + Particípio Passado (V3) para o evento mais antigo",
        "affirmative": "She had already left the office when I called her desk phone.",
        "negative": "They hadn't eaten anything all day, so they were starving.",
        "interrogative": "Had you ever seen an opera before you visited Vienna?"
      },
      {
        "title": "Fórmula e Estrutura: HAD + Particípio Passado (V3)",
        "explanation": "A conjugação do Past Perfect é uma das mais simples da gramática inglesa, pois o auxiliar HAD é 100% universal para todas as pessoas gramaticais (I, you, he, she, it, we, they).",
        "keyPoints": [
          "Afirmativa: Sujeito + had + V3. Contração comum: 'd ('I'd seen', 'She'd left').",
          "Negativa: Sujeito + had not (hadn't) + V3.",
          "Interrogativa: Had + Sujeito + V3?",
          "Cuidado com o duplo 'HAD HAD': Em frases onde o verbo principal é 'have', a estrutura fica perfeitamente correta com 'had had' ('I had had a long day' = Eu tinha tido um longo dia)."
        ],
        "formula": "Sujeito + had (hadn't) + V3",
        "affirmative": "By the time he was thirty, he had written three best-selling novels.",
        "negative": "I hadn't heard about the new company policy until yesterday.",
        "interrogative": "Had the train already departed when you reached platform 4?"
      },
      {
        "title": "Conectivos Temporais Decisivos: By the time, Before, After",
        "explanation": "O Past Perfect quase sempre vem amarrado por conjunções que evidenciam a precedência temporal de uma ação sobre outra.",
        "keyPoints": [
          "BY THE TIME (+ Past Simple): Significa 'quando/no momento em que'. A cláusula subsequente usa Past Perfect ('By the time the police arrived, the thieves had escaped').",
          "BEFORE (+ Past Simple): A ação anterior ao 'before' usa Past Perfect ('I had turned off all the lights before I left').",
          "AFTER (+ Past Perfect): A ação imediata após o 'after' é a mais antiga e usa Past Perfect ('After she had passed her driving test, she bought a car')."
        ],
        "formula": "By the time + Past Simple, Sujeito + HAD + V3 | After + HAD + V3, Past Simple",
        "affirmative": "By the time the rescue team arrived, the hikers had found shelter.",
        "negative": "She hadn't locked the front door before she left for vacation.",
        "interrogative": "Had you checked your passport validity before you booked the flight?"
      },
      {
        "title": "Diferença Prática entre Past Simple e Past Perfect",
        "explanation": "Entender quando o Past Perfect é estritamente obrigatório e quando o Past Simple é suficiente para expressar fatos históricos ou sequenciais.",
        "keyPoints": [
          "Ações em sequência cronológica direta (1, 2, 3) usam Past Simple: 'I got up, had breakfast, and walked to work'. O Past Perfect não é necessário quando a ordem é óbvia.",
          "O Past Perfect torna-se OBRIGATÓRIO quando a narrativa volta atrás no tempo para justificar ou explicar uma condição passada: 'He failed the exam because he hadn't studied'.",
          "Expressões com 'wish' no passado (arrependimento): 'I wish I had studied harder' (quem me dera ter estudado mais)."
        ],
        "formula": "Justificativa / Condição Prévia = HAD + V3",
        "affirmative": "The streets were wet because it had rained heavily during the night.",
        "negative": "He couldn't access his account because he had forgotten his password.",
        "interrogative": "Why were you nervous? Had something bad happened earlier?"
      }
    ],
    "examples": [
      {
        "english": "When I reached the station, the train had already departed.",
        "portuguese": "Quando cheguei à estação, o comboio já tinha partido.",
        "note": "partida do comboio ocorreu antes da chegada",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "When I arrived, the film already started.",
        "correct": "When I arrived, the film had already started.",
        "explanation": "Para mostrar anterioridade no passado usa-se had + particípio."
      }
    ],
    "exercises": [
      {
        "id": "ppf-1",
        "type": "multiple-choice",
        "instruction": "Ação anterior no passado:",
        "question": "When we arrived at the cinema, the movie _____ already started.",
        "options": [
          "had",
          "has",
          "was",
          "did"
        ],
        "correctAnswer": "had",
        "explanation": "Ação anterior a 'arrived' usa HAD + V3.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-2",
        "type": "multiple-choice",
        "instruction": "Chegada à estação de comboios:",
        "question": "By the time I reached the platform, the train _____ left.",
        "options": [
          "had already",
          "has already",
          "already",
          "was"
        ],
        "correctAnswer": "had already",
        "explanation": "O comboio partiu antes da chegada: had already left.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-3",
        "type": "multiple-choice",
        "instruction": "Estudo prévio para o exame:",
        "question": "She felt confident because she _____ studied very hard.",
        "options": [
          "had",
          "has",
          "was",
          "is"
        ],
        "correctAnswer": "had",
        "explanation": "O estudo ocorreu antes da sensação de confiança.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-4",
        "type": "multiple-choice",
        "instruction": "Recuperação do paciente:",
        "question": "By the time the doctor arrived, the patient _____ recovered.",
        "options": [
          "had",
          "has",
          "was",
          "did"
        ],
        "correctAnswer": "had",
        "explanation": "Recuperou antes da chegada do médico.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-5",
        "type": "multiple-choice",
        "instruction": "Refeição anterior:",
        "question": "I wasn't hungry because I _____ just eaten lunch.",
        "options": [
          "had",
          "have",
          "was",
          "did"
        ],
        "correctAnswer": "had",
        "explanation": "Comeu antes de não estar com fome: had just eaten.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-6",
        "type": "multiple-choice",
        "instruction": "Experiência anterior a uma viagem:",
        "question": "He _____ never flown in a plane before that trip.",
        "options": [
          "had",
          "has",
          "was",
          "did"
        ],
        "correctAnswer": "had",
        "explanation": "Nunca tinha voado antes daquela viagem no passado.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-7",
        "type": "multiple-choice",
        "instruction": "Trabalho terminado:",
        "question": "They went out to celebrate because they _____ finished the project.",
        "options": [
          "had",
          "have",
          "were",
          "did"
        ],
        "correctAnswer": "had",
        "explanation": "Concluíram o projeto antes da celebração.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-8",
        "type": "multiple-choice",
        "instruction": "Negativa no Past Perfect:",
        "question": "She realized she _____ not locked the front door.",
        "options": [
          "had",
          "has",
          "was",
          "did"
        ],
        "correctAnswer": "had",
        "explanation": "Negativa: had not locked.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-9",
        "type": "fill-blank",
        "instruction": "Complete com o auxiliar do Past Perfect:",
        "question": "When I called him, he _____ already gone to sleep.",
        "correctAnswer": "had",
        "explanation": "Past Perfect usa had.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-10",
        "type": "fill-blank",
        "instruction": "Complete com o particípio de LEAVE (leave -> left -> _____):",
        "question": "The train had already _____ when we got there.",
        "correctAnswer": "left",
        "explanation": "Particípio de leave é left.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-11",
        "type": "fill-blank",
        "instruction": "Complete a frase:",
        "question": "She was nervous because she had never _____ in public before.",
        "correctAnswer": "spoken",
        "explanation": "speak vira spoken.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-12",
        "type": "fill-blank",
        "instruction": "Complete com had ou has:",
        "question": "Yesterday I realized I _____ forgotten my wallet at home.",
        "correctAnswer": "had",
        "explanation": "Narrativa no passado usa had.",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-13",
        "type": "fill-blank",
        "instruction": "Complete a contração de had not:",
        "question": "We _____ seen each other for five years before that day.",
        "correctAnswer": "hadn't",
        "explanation": "had not vira hadn't.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-14",
        "type": "fill-blank",
        "instruction": "Complete com o verbo no particípio:",
        "question": "He had _____ (eat) all the food before I arrived.",
        "correctAnswer": "eaten",
        "explanation": "eat vira eaten.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-15",
        "type": "reorder",
        "instruction": "Ordene a frase no Past Perfect:",
        "words": [
          "The",
          "train",
          "had",
          "already",
          "left"
        ],
        "correctAnswer": "The train had already left",
        "explanation": "Sujeito + had + already + V3."
      },
      {
        "id": "ppf-16",
        "type": "reorder",
        "instruction": "Ordene a oração com anterioridade:",
        "words": [
          "I",
          "had",
          "finished",
          "my",
          "homework"
        ],
        "correctAnswer": "I had finished my homework",
        "explanation": "Sujeito + had + V3 + objeto."
      },
      {
        "id": "ppf-17",
        "type": "reorder",
        "instruction": "Ordene com never:",
        "words": [
          "He",
          "had",
          "never",
          "seen",
          "the",
          "ocean"
        ],
        "correctAnswer": "He had never seen the ocean",
        "explanation": "Sujeito + had + never + V3 + objeto."
      },
      {
        "id": "ppf-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'O comboio já tinha partido.'",
        "correctAnswer": "The train had already left",
        "explanation": "Pronuncie: The train had already left.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase de anterioridade:",
        "question": "Diga em inglês: 'Eu já tinha terminado o trabalho.'",
        "correctAnswer": "I had already finished the work",
        "explanation": "Pronúncia de 'had already finished'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-20",
        "type": "speaking",
        "instruction": "Fale a frase de experiência prévia:",
        "question": "Diga em inglês: 'Eu nunca tinha visto aquilo antes.'",
        "correctAnswer": "I had never seen that before",
        "explanation": "Pronúncia com clareza: I had never seen that before.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ppf-21",
        "type": "speaking",
        "instruction": "Pronuncie a frase afirmativa:",
        "question": "Diga em inglês: 'Eles já tinham comido.'",
        "correctAnswer": "They had already eaten",
        "explanation": "Pronúncia de 'had already eaten'.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Evite a Sobrecarga do Past Perfect",
        "category": "nuance",
        "categoryLabel": "Dica de Estilo Nativo",
        "explanation": "Quando palavras como 'before' ou 'after' deixam a cronologia dos fatos 100% evidente, falantes nativos usam frequentemente o Past Simple simples para tornar a frase mais leve.",
        "comparison": {
          "leftLabel": "Totalmente Formal",
          "leftText": "He had brushed his teeth before he went to bed.",
          "rightLabel": "Natural e Fluido",
          "rightText": "He brushed his teeth before he went to bed."
        }
      }
    ]
  },
  {
    "id": "modal-verbs",
    "title": "Verbos Modais (Can, Must, Should)",
    "subtitle": "Capacidade, obrigações, conselhos e probabilidades",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "VERBS",
    "categoryLabel": "Verbos Especiais",
    "icon": "Zap",
    "color": "from-amber-500 to-orange-600",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "summary": "Os modais alteram o sentido do verbo principal. Nunca recebem '-s' na 3ª pessoa e são seguidos diretamente de infinitivo sem 'to' (exceto ought to).",
    "rules": [
      {
        "title": "As 3 Regras de Ouro de Todos os Verbos Modais",
        "explanation": "Os verbos modais (Can, Could, May, Might, Must, Shall, Should, Will, Would) são verbos auxiliares especiais que expressam capacidade, obrigação, probabilidade e permissão. Eles obedecem a três regras rígidas que os diferenciam de qualquer outro verbo.",
        "keyPoints": [
          "REGRA 1: NUNCA recebem '-s' na 3ª pessoa do singular ('He can speak' - NUNCA 'He cans'; 'She must go' - NUNCA 'She musts').",
          "REGRA 2: São seguidos diretamente por um verbo no INFINITIVO SEM TO ('I must study' - NUNCA 'I must to study'; 'You should sleep' - NUNCA 'You should to sleep'). Exceção única: ought to.",
          "REGRA 3: NUNCA usam auxiliares 'do/does/did' em perguntas ou negativas ('Can you come?' - NUNCA 'Do you can come?'; 'You shouldn't worry' - NUNCA 'You don't should')."
        ],
        "formula": "Sujeito + Modal + Verbo na Forma Base (sem 'to' e sem '-s')",
        "affirmative": "She can speak four languages and must submit her dissertation tomorrow.",
        "negative": "You should not (shouldn't) drink cold water if you have a sore throat.",
        "interrogative": "Could you please pass me the salt? / May I ask a question?"
      },
      {
        "title": "Habilidade e Pedidos: Can, Could e Be Able To",
        "explanation": "Para expressar capacidade física ou mental, talento aprendido ou pedidos de cortesia, usamos a família do CAN.",
        "keyPoints": [
          "CAN: Capacidade no presente ('I can swim') e pedidos informais ('Can I borrow your pen?').",
          "COULD: Capacidade no passado ('When I was young, I could run fast') e pedidos mais educados e polidos ('Could you help me with this box?').",
          "BE ABLE TO: Usado para tempos verbais que os modais não alcançam, especialmente o futuro e o Present Perfect ('I will be able to travel next year' / 'I haven't been able to sleep')."
        ],
        "formula": "Can/Could + Verbo Base | will be able to + Verbo Base",
        "affirmative": "After months of practice, he was able to pass his driving exam.",
        "negative": "I couldn't hear the speaker because of the background noise.",
        "interrogative": "Could you speak more slowly, please? I am still learning."
      },
      {
        "title": "Obrigação e Proibição: Must vs. Have to vs. Mustn't vs. Don't Have to",
        "explanation": "Este é o contraste mais cobrado em exames e na comunicação profissional. Confundir 'mustn't' com 'don't have to' altera completamente o significado entre proibição e opcionalidade.",
        "keyPoints": [
          "MUST: Obrigação pessoal, moral ou dever imposto pelo próprio falante ('I must exercise more').",
          "HAVE TO: Obrigação externa imposta por leis, regras da empresa ou circunstâncias ('I have to wear a helmet at the construction site').",
          "MUSTN'T (Must not): Significa PROIBIÇÃO ABSOLUTA ('You mustn't smoke here' = É estritamente proibido fumar).",
          "DON'T HAVE TO: Significa AUSÊNCIA DE OBRIGAÇÃO ('You don't have to come tomorrow' = Não precisas de vir, é opcional, podes vir se quiseres)."
        ],
        "formula": "Mustn't = Proibido | Don't have to = Não é necessário (opcional)",
        "affirmative": "Drivers must stop when the traffic light turns red.",
        "negative": "You mustn't touch that wire! / You don't have to wear a suit today.",
        "interrogative": "Do we have to submit the assignment before 5 PM?"
      },
      {
        "title": "Conselho, Dedução e Possibilidade: Should, Must, Might / May",
        "explanation": "Os modais também servem para modular o grau de certeza que o falante possui sobre um fato.",
        "keyPoints": [
          "SHOULD / OUGHT TO: Recomendações e conselhos ('You should drink more water' / 'You shouldn't work so late').",
          "MUST (Dedução Lógica de 95% de certeza): Quando tudo indica que algo é verdade ('His car is outside, he MUST be at home'). Negativa da dedução: CAN'T ('He CAN'T be 60, he looks 30!').",
          "MIGHT / MAY / COULD (Possibilidade incerta de 30-50%): Algo que pode acontecer, mas não há certeza ('Take an umbrella; it might rain later')."
        ],
        "formula": "Must be (quase certeza) | Might/May be (possibilidade) | Can't be (impossível)",
        "affirmative": "She has been working for 14 hours; she must be exhausted.",
        "negative": "That can't be true! He was in London yesterday.",
        "interrogative": "Should we reserve a table in advance? / Might they be delayed?"
      }
    ],
    "examples": [
      {
        "english": "You should see a doctor if your fever continues.",
        "portuguese": "Deverias consultar um médico se a febre continuar.",
        "note": "should = conselho",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "Drivers must stop at the red light.",
        "portuguese": "Os condutores têm de parar no sinal vermelho.",
        "note": "must = obrigação estrita",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She can to speak Italian.",
        "correct": "She can speak Italian.",
        "explanation": "Depois dos modais nunca se usa 'to'."
      }
    ],
    "exercises": [
      {
        "id": "mod-1",
        "type": "multiple-choice",
        "instruction": "Conselho de saúde:",
        "question": "You look exhausted. You _____ take a short rest.",
        "options": [
          "should",
          "must to",
          "should to",
          "can to"
        ],
        "correctAnswer": "should",
        "explanation": "Should expressa recomendação e não leva 'to'.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-2",
        "type": "multiple-choice",
        "instruction": "Obrigação legal estrita:",
        "question": "All drivers _____ wear seatbelts while driving.",
        "options": [
          "must",
          "can",
          "should to",
          "ought"
        ],
        "correctAnswer": "must",
        "explanation": "Must expressa obrigação legal formal.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-3",
        "type": "multiple-choice",
        "instruction": "Pedido educado em restaurante:",
        "question": "_____ you please pass me the salt?",
        "options": [
          "Could",
          "Must",
          "Should",
          "Shall"
        ],
        "correctAnswer": "Could",
        "explanation": "Could you please...? é a forma educada e polida.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-4",
        "type": "multiple-choice",
        "instruction": "Capacidade física:",
        "question": "She _____ speak four different languages fluently.",
        "options": [
          "can",
          "cans",
          "can to",
          "is can"
        ],
        "correctAnswer": "can",
        "explanation": "Can não recebe -s na 3ª pessoa.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-5",
        "type": "multiple-choice",
        "instruction": "Proibição estrita:",
        "question": "You _____ smoke inside the hospital.",
        "options": [
          "must not",
          "should",
          "can",
          "must"
        ],
        "correctAnswer": "must not",
        "explanation": "Must not (mustn't) expressa proibição absoluta.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-6",
        "type": "multiple-choice",
        "instruction": "Dedução lógica quase certa:",
        "question": "Look at the snow outside! It _____ be freezing.",
        "options": [
          "must",
          "can't",
          "should to",
          "would"
        ],
        "correctAnswer": "must",
        "explanation": "Must be = dedução de certeza lógica.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-7",
        "type": "multiple-choice",
        "instruction": "Falta de necessidade (não precisa):",
        "question": "Tomorrow is Sunday, so you _____ wake up early.",
        "options": [
          "don't have to",
          "must not",
          "can't to",
          "shouldn't to"
        ],
        "correctAnswer": "don't have to",
        "explanation": "Don't have to expressa ausência de obrigação.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-8",
        "type": "multiple-choice",
        "instruction": "Possibilidade futura moderada:",
        "question": "Take an umbrella with you; it _____ rain later.",
        "options": [
          "might",
          "must to",
          "can to",
          "should to"
        ],
        "correctAnswer": "might",
        "explanation": "Might expressa possibilidade.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-9",
        "type": "fill-blank",
        "instruction": "Complete com o modal de conselho (should):",
        "question": "You _____ drink at least two liters of water daily.",
        "correctAnswer": "should",
        "explanation": "should = conselho saudável.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-10",
        "type": "fill-blank",
        "instruction": "Complete com o modal de obrigação (must):",
        "question": "Students _____ be on time for the final examination.",
        "correctAnswer": "must",
        "explanation": "must = regra obrigatória.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-11",
        "type": "fill-blank",
        "instruction": "Complete com can ou could:",
        "question": "When I was young, I _____ run five kilometers easily.",
        "correctAnswer": "could",
        "explanation": "could = capacidade no passado.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-12",
        "type": "fill-blank",
        "instruction": "Complete a permissão educada:",
        "question": "_____ I borrow your pencil for a minute?",
        "correctAnswer": "May",
        "explanation": "May I...? ou Can I...? May para cortesia formal.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-13",
        "type": "fill-blank",
        "instruction": "Complete com o modal negativo de conselho:",
        "question": "You _____ eat too much junk food.",
        "correctAnswer": "shouldn't",
        "explanation": "shouldn't = não deverias.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-14",
        "type": "fill-blank",
        "instruction": "Complete a habilidade:",
        "question": "He _____ play the piano beautifully.",
        "correctAnswer": "can",
        "explanation": "can = capacidade/habilidade.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-15",
        "type": "reorder",
        "instruction": "Ordene o conselho com should:",
        "words": [
          "You",
          "should",
          "drink",
          "more",
          "water"
        ],
        "correctAnswer": "You should drink more water",
        "explanation": "Sujeito + should + verbo base + objeto."
      },
      {
        "id": "mod-16",
        "type": "reorder",
        "instruction": "Ordene a proibição com must not:",
        "words": [
          "You",
          "must",
          "not",
          "park",
          "here"
        ],
        "correctAnswer": "You must not park here",
        "explanation": "Sujeito + must not + verbo base + lugar."
      },
      {
        "id": "mod-17",
        "type": "reorder",
        "instruction": "Ordene o pedido educado:",
        "words": [
          "Could",
          "you",
          "help",
          "me",
          "please",
          "?"
        ],
        "correctAnswer": "Could you help me please ?",
        "explanation": "Could you + verbo base + complemento?"
      },
      {
        "id": "mod-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Tu deverias descansar agora.'",
        "correctAnswer": "You should rest now",
        "explanation": "Pronuncie: You should rest now.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-19",
        "type": "speaking",
        "instruction": "Pronuncie o pedido educado:",
        "question": "Pergunte em inglês: 'Podes ajudar-me, por favor?'",
        "correctAnswer": "Could you help me please",
        "explanation": "Entonação cortês: Could you help me please?",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-20",
        "type": "speaking",
        "instruction": "Fale a frase de capacidade:",
        "question": "Diga em inglês: 'Eu sei falar inglês.'",
        "correctAnswer": "I can speak English",
        "explanation": "Pronuncie com confiança: I can speak English.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mod-21",
        "type": "speaking",
        "instruction": "Pronuncie a obrigação formal:",
        "question": "Diga em inglês: 'Nós temos de parar aqui.'",
        "correctAnswer": "We must stop here",
        "explanation": "Pronúncia de 'We must stop here'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Níveis de Cortesia em Pedidos de Trabalho",
        "category": "formal-informal",
        "categoryLabel": "Etiqueta Profissional",
        "explanation": "A gradação de modais define o nível de respeito e polidez na língua inglesa.",
        "comparison": {
          "leftLabel": "Direto / Informal",
          "leftText": "Can you send me the report?",
          "rightLabel": "Profissional / Polido",
          "rightText": "Could you please forward the report when possible?"
        },
        "tip": "Em e-mails para clientes e gestores, use 'Could you...' ou 'Would you mind...'."
      },
      {
        "title": "Must vs. Have to: A Diferença Interna",
        "category": "nuance",
        "categoryLabel": "Diferença Sutil",
        "explanation": "'Must' reflete um dever pessoal ou convicção interna do falante ('I must lose weight'). 'Have to' reflete uma obrigação externa imposta por terceiros ou regras ('I have to wear a uniform at work').",
        "comparison": {
          "leftLabel": "Convicção Própria",
          "leftText": "I must call my mom today.",
          "rightLabel": "Regra Externa",
          "rightText": "I have to show my ID at the security gate."
        }
      }
    ]
  },
  {
    "id": "conditionals",
    "title": "As Condicionais (If Clauses)",
    "subtitle": "Zero, First, Second e Third Conditionals dominadas",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "STRUCTURES",
    "categoryLabel": "Estruturas Gramaticais",
    "icon": "Split",
    "color": "from-emerald-500 to-teal-600",
    "image": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
    "summary": "Estruturas de causa e efeito: Zero (fatos científicos), 1st (futuro provável), 2nd (hipóteses irreais do presente) e 3rd (arrependimentos do passado).",
    "rules": [
      {
        "title": "Zero Conditional: Fatos Científicos e Leis Naturais",
        "explanation": "A Condicional Zero é usada para descrever verdades universais, fatos científicos, causas e efeitos imediatos e hábitos invariáveis. Se a condição acontecer, o resultado é 100% certo de ocorrer.",
        "keyPoints": [
          "Estrutura: Ambas as orações utilizam obrigatoriamente o PRESENT SIMPLE.",
          "Fórmula: If + Present Simple, Present Simple.",
          "A palavra 'WHEN' pode substituir 'IF' sem qualquer alteração no significado ('When water boils, it turns into steam').",
          "A ordem das orações pode ser invertida sem alterar o sentido (se a oração com 'If' vier primeiro, usa-se vírgula; se vier depois, não se usa vírgula)."
        ],
        "formula": "If + Present Simple, Sujeito + Present Simple",
        "affirmative": "If you heat ice, it melts. / Plants die if they don't get enough sunlight.",
        "negative": "If you don't water flowers, they don't grow.",
        "interrogative": "What happens if you mix blue and yellow paint?"
      },
      {
        "title": "First Conditional: Planos Futuros Reais e Prováveis",
        "explanation": "A Primeira Condicional trata de situações futuras reais, possíveis e com alta probabilidade de se concretizarem caso a condição seja satisfeita.",
        "keyPoints": [
          "Estrutura: A oração com 'IF' usa o PRESENT SIMPLE; a oração principal usa o FUTURO COM WILL.",
          "REGRA DE OURO: NUNCA coloque 'will' logo após o 'if' ('If it rains, we will stay' - NUNCA 'If it will rain').",
          "Modais alternativos no resultado: Além de 'will', pode-se usar 'can', 'may' ou 'should' ('If you finish early, you can leave').",
          "UNLESS: Significa 'a menos que' ou 'se não' (Unless you study = If you don't study)."
        ],
        "formula": "If + Present Simple, Sujeito + WILL + Verbo Base",
        "affirmative": "If you practice every day, you will achieve fluency much faster.",
        "negative": "If he doesn't hurry up, he will miss the express train.",
        "interrogative": "Will you call me if you need any assistance with the project?"
      },
      {
        "title": "Second Conditional: Hipóteses e Sonhos no Presente (O uso de 'Were')",
        "explanation": "A Segunda Condicional é usada para situações hipotéticas, imaginárias ou improváveis no presente ou futuro (sonhos, conselhos e cenários irrealistas).",
        "keyPoints": [
          "Estrutura: A oração com 'IF' usa o PAST SIMPLE; a oração principal usa WOULD + Verbo na forma base.",
          "A REGRA DO 'WERE': Na gramática formal inglesa, o verbo To Be transforma-se em 'WERE' para TODAS as pessoas, inclusive I, He, She, It ('If I were you...', 'If she were here...').",
          "A expressão de conselho mais nobre em inglês: 'If I were you, I would accept the job' (Se eu fosse você...).",
          "Não se refere ao passado; trata-se de uma hipótese imaginária para o momento presente."
        ],
        "formula": "If + Past Simple (were), Sujeito + WOULD + Verbo Base",
        "affirmative": "If I won the lottery, I would travel around the world for a year.",
        "negative": "If she lived closer to the center, she wouldn't spend so much on transport.",
        "interrogative": "What would you do if you were the president of your country?"
      },
      {
        "title": "Third Conditional: Arrependimentos do Passado que não podem ser mudados",
        "explanation": "A Terceira Condicional lida exclusivamente com o passado. Trata de uma condição que NÃO aconteceu no passado e imagina como o resultado teria sido diferente. É a estrutura clássica dos arrependimentos ou do alívio retrospectivo.",
        "keyPoints": [
          "Estrutura: If + PAST PERFECT (had + V3), WOULD HAVE + Particípio Passado (V3).",
          "Ação impossível de alterar: O tempo já passou e a realidade foi consolidada.",
          "Pronúncia falada nativa: 'would have' é frequentemente pronunciado como 'would've' /wʊdəv/.",
          "Variações de modal: Pode-se usar 'could have' (teria sido capaz) ou 'might have' (talvez tivesse acontecido) no lugar de 'would have'."
        ],
        "formula": "If + had + V3, Sujeito + WOULD HAVE + V3",
        "affirmative": "If I had studied harder for the admission exam, I would have passed.",
        "negative": "If we hadn't taken the wrong exit, we wouldn't have arrived so late.",
        "interrogative": "Would you have taken the promotion if they had offered it to you?"
      }
    ],
    "examples": [
      {
        "english": "If it rains tomorrow, we will stay inside.",
        "portuguese": "Se chover amanhã, nós vamos ficar dentro de casa.",
        "note": "1ª condicional provável",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "If I won the lottery, I would buy a beach house.",
        "portuguese": "Se eu ganhasse a lotaria, compraria uma casa na praia.",
        "note": "2ª condicional hipotética",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "If it will rain, I will stay.",
        "correct": "If it rains, I will stay.",
        "explanation": "Na oração com IF nunca se usa will!"
      }
    ],
    "exercises": [
      {
        "id": "cnd-1",
        "type": "multiple-choice",
        "instruction": "Primeira condicional (futuro provável):",
        "question": "If you _____ hard, you will pass the exam.",
        "options": [
          "study",
          "will study",
          "studied",
          "studies"
        ],
        "correctAnswer": "study",
        "explanation": "Na oração do IF usa-se o Present Simple (study).",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-2",
        "type": "multiple-choice",
        "instruction": "Segunda condicional (hipótese presente):",
        "question": "If I had more free time, I _____ learn to play guitar.",
        "options": [
          "would",
          "will",
          "can",
          "shall"
        ],
        "correctAnswer": "would",
        "explanation": "Second conditional usa WOULD + verbo base.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-3",
        "type": "multiple-choice",
        "instruction": "Conselho famoso 'Se eu fosse você':",
        "question": "If I _____ you, I would accept that job offer.",
        "options": [
          "were",
          "was",
          "am",
          "be"
        ],
        "correctAnswer": "were",
        "explanation": "Em inglês formal da 2ª condicional usa-se 'If I were you'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-4",
        "type": "multiple-choice",
        "instruction": "Condição meteorológica:",
        "question": "If the weather is good tomorrow, we _____ go hiking.",
        "options": [
          "will",
          "would",
          "did",
          "are"
        ],
        "correctAnswer": "will",
        "explanation": "First conditional combina presente com will.",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-5",
        "type": "multiple-choice",
        "instruction": "Zero conditional (fato natural):",
        "question": "If you heat ice, it _____ .",
        "options": [
          "melts",
          "will melt",
          "melted",
          "melting"
        ],
        "correctAnswer": "melts",
        "explanation": "Fato universal usa Present Simple em ambas as partes.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-6",
        "type": "multiple-choice",
        "instruction": "Oração principal da 2ª condicional:",
        "question": "If she lived in London, she _____ English every day.",
        "options": [
          "would practice",
          "will practice",
          "practices",
          "practiced"
        ],
        "correctAnswer": "would practice",
        "explanation": "If + past -> would + verbo base.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-7",
        "type": "multiple-choice",
        "instruction": "Previsão negativa:",
        "question": "If you don't hurry up, you _____ the train.",
        "options": [
          "will miss",
          "would miss",
          "missed",
          "miss"
        ],
        "correctAnswer": "will miss",
        "explanation": "First conditional negativa: will miss.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-8",
        "type": "multiple-choice",
        "instruction": "Hipótese de riqueza:",
        "question": "What _____ you do if you won a million dollars?",
        "options": [
          "would",
          "will",
          "did",
          "can"
        ],
        "correctAnswer": "would",
        "explanation": "Pergunta hipotética na 2ª condicional usa would.",
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-9",
        "type": "fill-blank",
        "instruction": "Complete a 1ª condicional:",
        "question": "If it rains, we _____ (stay) at home.",
        "correctAnswer": "will stay",
        "explanation": "will + stay.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-10",
        "type": "fill-blank",
        "instruction": "Complete a 2ª condicional:",
        "question": "If I were you, I _____ (call) her right away.",
        "correctAnswer": "would call",
        "explanation": "would + call.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-11",
        "type": "fill-blank",
        "instruction": "Complete o verbo na oração com IF:",
        "question": "If you _____ (press) this red button, the alarm sounds.",
        "correctAnswer": "press",
        "explanation": "Zero conditional usa Present Simple.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-12",
        "type": "fill-blank",
        "instruction": "Complete a 1ª condicional com will:",
        "question": "If she arrives on time, we _____ start the meeting.",
        "correctAnswer": "will",
        "explanation": "will start.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-13",
        "type": "fill-blank",
        "instruction": "Complete a hipótese da 2ª condicional:",
        "question": "If I _____ (know) the answer, I would tell you.",
        "correctAnswer": "knew",
        "explanation": "O passado de know é knew.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-14",
        "type": "fill-blank",
        "instruction": "Complete com would:",
        "question": "They _____ travel more if flights were cheaper.",
        "correctAnswer": "would",
        "explanation": "would travel.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-15",
        "type": "reorder",
        "instruction": "Ordene a 1ª condicional:",
        "words": [
          "If",
          "it",
          "rains",
          "we",
          "will",
          "stay"
        ],
        "correctAnswer": "If it rains we will stay",
        "explanation": "If + condição + resultado com will."
      },
      {
        "id": "cnd-16",
        "type": "reorder",
        "instruction": "Ordene o conselho hipotético:",
        "words": [
          "If",
          "I",
          "were",
          "you",
          "I",
          "would",
          "go"
        ],
        "correctAnswer": "If I were you I would go",
        "explanation": "If I were you + I would go."
      },
      {
        "id": "cnd-17",
        "type": "reorder",
        "instruction": "Ordene a hipótese da 2ª condicional:",
        "words": [
          "I",
          "would",
          "buy",
          "a",
          "house",
          "if",
          "I",
          "were",
          "rich"
        ],
        "correctAnswer": "I would buy a house if I were rich",
        "explanation": "Oração principal com would + if + condição no passado."
      },
      {
        "id": "cnd-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Se chover, eu fico em casa.'",
        "correctAnswer": "If it rains I will stay home",
        "explanation": "Pronuncie com clareza: If it rains I will stay home.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-19",
        "type": "speaking",
        "instruction": "Pronuncie o conselho clássico:",
        "question": "Diga em inglês: 'Se eu fosse você, eu aceitava.'",
        "correctAnswer": "If I were you I would accept",
        "explanation": "Pronúncia de 'If I were you'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-20",
        "type": "speaking",
        "instruction": "Fale a hipótese imaginária:",
        "question": "Diga em inglês: 'Eu viajaria pelo mundo.'",
        "correctAnswer": "I would travel the world",
        "explanation": "Pronúncia de 'would travel the world'.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cnd-21",
        "type": "speaking",
        "instruction": "Fale a condição no presente:",
        "question": "Diga em inglês: 'Se você estudar, você vai passar.'",
        "correctAnswer": "If you study you will pass",
        "explanation": "Pronúncia de 'you will pass'.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Formalidade: 'Were' para todas as pessoas",
        "category": "formal-informal",
        "categoryLabel": "Gramática de Prestígio",
        "explanation": "Embora no dia a dia informal se ouça 'If I was you', no inglês culto, profissional e em exames internacionais deve usar-se SEMPRE 'were' para todas as pessoas gramaticais (If I were, If he were).",
        "comparison": {
          "leftLabel": "Informal / Coloquial",
          "leftText": "If he was here, he would help us.",
          "rightLabel": "Formal e Correto",
          "rightText": "If he were here, he would help us."
        },
        "tip": "A frase 'If I were you' é considerada uma das mais nobres do inglês para aconselhar alguém."
      },
      {
        "title": "A Palavra 'Unless' (A menos que)",
        "category": "nuance",
        "categoryLabel": "Simplificação Elegante",
        "explanation": "'Unless' equivale exatamente a 'If ... not'. Usá-la torna o seu inglês muito mais conciso e sofisticado.",
        "comparison": {
          "leftLabel": "Com If not",
          "leftText": "If you don't study, you won't pass.",
          "rightLabel": "Com Unless",
          "rightText": "Unless you study, you won't pass."
        }
      }
    ]
  },
  {
    "id": "passive-voice",
    "title": "Voz Passiva (Passive Voice)",
    "subtitle": "Quando a ação ou o objeto é mais importante que o autor",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "STRUCTURES",
    "categoryLabel": "Estruturas Gramaticais",
    "icon": "ShieldCheck",
    "color": "from-blue-600 to-indigo-700",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "summary": "A Voz Passiva é essencial no inglês formal, jornais e negócios. O foco sai de quem fez e vai para QUEM RECEBEU a ação: 'The bridge was built in 1890.'",
    "rules": [
      {
        "title": "Objetivo da Voz Passiva: Foco na Ação e no Objeto",
        "explanation": "Na voz ativa, o sujeito pratica a ação ('Shakespeare wrote Hamlet'). Na voz passiva, o foco muda para o objeto que recebe a ação ('Hamlet was written by Shakespeare'). Ela é amplamente utilizada em contextos acadêmicos, jornalísticos, científicos e corporativos para transmitir objetividade e imparcialidade.",
        "keyPoints": [
          "Use quando o autor da ação é desconhecido: 'My bicycle was stolen' (não sei quem roubou).",
          "Use quando o autor é óbvio ou irrelevante: 'The criminal was arrested' (obviamente pela polícia).",
          "Use para enfatizar o fato ou processo científico: 'Water is heated to 100°C'.",
          "Para evitar culpar alguém diretamente em relatórios corporativos: 'A mistake was made' em vez de 'John made a mistake'."
        ],
        "formula": "Objeto da Ativa vira Sujeito + Verbo TO BE (no tempo correto) + Particípio Passado (V3)",
        "affirmative": "Penicillin was discovered by Alexander Fleming in 1928.",
        "negative": "The confidential documents were not leaked to the press.",
        "interrogative": "Was this application developed using modern frameworks?"
      },
      {
        "title": "A Fórmula Universal: Sujeito + Verbo BE + Particípio Passado (V3)",
        "explanation": "A regra infalível para formar a voz passiva em qualquer tempo verbal é: o verbo auxiliar 'To Be' assume exatamente o tempo do verbo da frase ativa, e o verbo principal vai SEMPRE para o particípio passado (V3).",
        "keyPoints": [
          "Present Simple: am / is / are + V3 ('English is spoken worldwide').",
          "Past Simple: was / were + V3 ('The castle was built in 1540').",
          "Present Continuous: am / is / are + BEING + V3 ('The car is being repaired right now').",
          "Present Perfect: have / has + BEEN + V3 ('The email has been sent').",
          "Futuro com Will: will + BE + V3 ('The new stadium will be opened next month').",
          "Modais: Modal + BE + V3 ('Passwords must be changed regularly')."
        ],
        "formula": "Sujeito Passivo + [To Be conjugado] + Verbo no Particípio Passado (V3)",
        "affirmative": "The package has been delivered to your front door.",
        "negative": "The flight was not delayed by the stormy weather.",
        "interrogative": "Are these luxury cars manufactured in Germany?"
      },
      {
        "title": "O Agente da Passiva com BY e Quando Omiti-lo com Sucesso",
        "explanation": "O 'agente da passiva' é quem realmente executou a ação. Em inglês, ele é introduzido pela preposição 'BY', mas na grande maioria das frases passivas nativas ele é deliberadamente omitido.",
        "keyPoints": [
          "Inclua 'BY + Agente' apenas se a identidade da pessoa trouxer informação nova, relevante e crucial para o leitor ('Mona Lisa was painted BY Leonardo da Vinci').",
          "Omita o agente quando for óbvio, desconhecido ou redundante: 'He was elected president' (não precisa dizer 'by the voters').",
          "Atenção com a preposição: use 'BY' para a pessoa/autor e 'WITH' para o instrumento ou ferramenta utilizada ('He was struck WITH a heavy stick BY the burglar')."
        ],
        "formula": "Passiva + BY + Agente da ação (quando relevante)",
        "affirmative": "The novel was adapted for television by an acclaimed British director.",
        "negative": "The decision was not approved by the board of directors.",
        "interrogative": "Was the bridge designed by an Italian engineer?"
      },
      {
        "title": "Passiva Impessoal com Verbos de Opinião e Mídia (C1)",
        "explanation": "Em jornais conceituados (BBC, The Guardian, CNN) e artigos acadêmicos, utiliza-se a voz passiva impessoal para relatar boatos, pesquisas e crenças gerais sem assumir a responsabilidade direta pela afirmação.",
        "keyPoints": [
          "Estrutura com 'IT IS': It is believed that... / It is reported that... / It is claimed that... / It is estimated that...",
          "Estrutura com Sujeito Pessoal: 'He is thought to be living in Switzerland' (Acredita-se que ele esteja a morar na Suíça).",
          "Passado no infinitivo: 'The company is reported to have lost millions' (Relata-se que a empresa perdeu milhões)."
        ],
        "formula": "It is said / believed / reported that + oração completa",
        "affirmative": "It is widely believed that exercise improves cognitive longevity.",
        "negative": "The suspect is not thought to pose an immediate danger to the public.",
        "interrogative": "Is it expected that the central bank will lower interest rates?"
      }
    ],
    "examples": [
      {
        "english": "The Eiffel Tower was completed in 1889 by Gustave Eiffel.",
        "portuguese": "A Torre Eiffel foi concluída em 1889 por Gustave Eiffel.",
        "note": "was + completed (Past Simple passivo)",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "Millions of smartphones are sold worldwide every month.",
        "portuguese": "Milhões de smartphones são vendidos mundialmente todos os meses.",
        "note": "are + sold (Present Simple passivo)",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "The car was repair yesterday.",
        "correct": "The car was repaired yesterday.",
        "explanation": "O verbo principal deve estar SEMPRE no Particípio Passado (V3)."
      }
    ],
    "exercises": [
      {
        "id": "pas-1",
        "type": "multiple-choice",
        "instruction": "Passado histórico passivo:",
        "question": "The Eiffel Tower _____ completed in 1889.",
        "options": [
          "was",
          "is",
          "were",
          "has been"
        ],
        "correctAnswer": "was",
        "explanation": "A Torre Eiffel é singular no passado: was completed.",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-2",
        "type": "multiple-choice",
        "instruction": "Presente passivo habitual:",
        "question": "Millions of coffee cups _____ consumed every single day.",
        "options": [
          "are",
          "is",
          "were",
          "have"
        ],
        "correctAnswer": "are",
        "explanation": "Coffee cups é plural, logo 'are consumed'.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-3",
        "type": "multiple-choice",
        "instruction": "Autoria da ação com preposição:",
        "question": "This famous novel was written _____ George Orwell.",
        "options": [
          "by",
          "with",
          "from",
          "for"
        ],
        "correctAnswer": "by",
        "explanation": "O autor na voz passiva é introduzido por 'by'.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-4",
        "type": "multiple-choice",
        "instruction": "Presente Perfeito Passivo:",
        "question": "The missing files _____ found by the police.",
        "options": [
          "have been",
          "has been",
          "was",
          "are"
        ],
        "correctAnswer": "have been",
        "explanation": "Files = plural, logo have been found.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-5",
        "type": "multiple-choice",
        "instruction": "Futuro passivo com will:",
        "question": "The new international bridge _____ opened next year.",
        "options": [
          "will be",
          "will is",
          "is going",
          "would"
        ],
        "correctAnswer": "will be",
        "explanation": "Futuro passivo: will be + particípio.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-6",
        "type": "multiple-choice",
        "instruction": "Construção de carro:",
        "question": "These electric cars are _____ in Germany.",
        "options": [
          "manufactured",
          "manufacturing",
          "manufacture",
          "manufactures"
        ],
        "correctAnswer": "manufactured",
        "explanation": "Voz passiva exige o particípio passado (manufactured).",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-7",
        "type": "multiple-choice",
        "instruction": "Passado plural:",
        "question": "All the invitations _____ sent out last Friday.",
        "options": [
          "were",
          "was",
          "are",
          "have"
        ],
        "correctAnswer": "were",
        "explanation": "Invitations = plural no passado, logo were sent.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-8",
        "type": "multiple-choice",
        "instruction": "Descoberta de cura:",
        "question": "Penicillin was discovered _____ Alexander Fleming in 1928.",
        "options": [
          "by",
          "for",
          "with",
          "through"
        ],
        "correctAnswer": "by",
        "explanation": "O agente da passiva usa by.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-9",
        "type": "fill-blank",
        "instruction": "Complete com was ou were:",
        "question": "The Colosseum in Rome _____ built thousands of years ago.",
        "correctAnswer": "was",
        "explanation": "Colosseum é singular: was built.",
        "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-10",
        "type": "fill-blank",
        "instruction": "Complete com a preposição de autor:",
        "question": "Romeo and Juliet was written _____ William Shakespeare.",
        "correctAnswer": "by",
        "explanation": "Autor introduzido por by.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-11",
        "type": "fill-blank",
        "instruction": "Complete com o particípio de BUILD (build -> built -> _____):",
        "question": "This house was _____ in 1995.",
        "correctAnswer": "built",
        "explanation": "Particípio de build é built.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-12",
        "type": "fill-blank",
        "instruction": "Complete a forma presente:",
        "question": "English is _____ (speak) all over the world.",
        "correctAnswer": "spoken",
        "explanation": "speak vira spoken.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-13",
        "type": "fill-blank",
        "instruction": "Complete com was ou were:",
        "question": "The stolen diamonds _____ recovered by detectives.",
        "correctAnswer": "were",
        "explanation": "Diamonds = plural, logo were.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-14",
        "type": "fill-blank",
        "instruction": "Complete o futuro passivo:",
        "question": "The results will _____ announced tomorrow.",
        "correctAnswer": "be",
        "explanation": "will be announced.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-15",
        "type": "reorder",
        "instruction": "Ordene a frase passiva:",
        "words": [
          "The",
          "car",
          "was",
          "repaired",
          "yesterday"
        ],
        "correctAnswer": "The car was repaired yesterday",
        "explanation": "Sujeito passivo + was + particípio + marcador."
      },
      {
        "id": "pas-16",
        "type": "reorder",
        "instruction": "Ordene a frase com by:",
        "words": [
          "The",
          "book",
          "was",
          "written",
          "by",
          "him"
        ],
        "correctAnswer": "The book was written by him",
        "explanation": "Sujeito + was + written + by + agente."
      },
      {
        "id": "pas-17",
        "type": "reorder",
        "instruction": "Ordene a passiva no presente:",
        "words": [
          "English",
          "is",
          "spoken",
          "in",
          "many",
          "countries"
        ],
        "correctAnswer": "English is spoken in many countries",
        "explanation": "English + is + spoken + complemento de lugar."
      },
      {
        "id": "pas-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'O carro foi reparado ontem.'",
        "correctAnswer": "The car was repaired yesterday",
        "explanation": "Pronuncie: The car was repaired yesterday.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase de autoria:",
        "question": "Diga em inglês: 'Este livro foi escrito por mim.'",
        "correctAnswer": "This book was written by me",
        "explanation": "Pronúncia de 'written by me'.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-20",
        "type": "speaking",
        "instruction": "Fale a frase de uso global:",
        "question": "Diga em inglês: 'O inglês é falado no mundo inteiro.'",
        "correctAnswer": "English is spoken worldwide",
        "explanation": "Pronuncie: English is spoken worldwide.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pas-21",
        "type": "speaking",
        "instruction": "Fale a frase do futuro passivo:",
        "question": "Diga em inglês: 'O anúncio será feito amanhã.'",
        "correctAnswer": "It will be announced tomorrow",
        "explanation": "Pronúncia de 'will be announced'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Quando EVITAR a Voz Passiva",
        "category": "etiquette",
        "categoryLabel": "Escrita Clara (Plain English)",
        "explanation": "No jornalismo moderno e na comunicação corporativa de liderança, a voz ativa é preferida para demonstrar transparência e responsabilidade, evitando que frases fiquem impessoais demais.",
        "comparison": {
          "leftLabel": "Passiva Impessoal",
          "leftText": "A mistake was made during the release.",
          "rightLabel": "Ativa Transparente",
          "rightText": "Our team made a mistake during the release."
        }
      },
      {
        "title": "Estruturas Jornalísticas de Relato",
        "category": "formal-informal",
        "categoryLabel": "Inglês Jornalístico",
        "explanation": "Canais como BBC e CNN usam 'It is believed that...' ou 'He is thought to be...' para relatar notícias sem atribuir autoria definitiva.",
        "comparison": {
          "leftLabel": "Voz Passiva Padrão",
          "leftText": "The suspect is believed to have fled abroad.",
          "rightLabel": "Voz Ativa com Fonte",
          "rightText": "Police believe the suspect fled abroad."
        }
      }
    ]
  },
  {
    "id": "reported-speech",
    "title": "Discurso Indireto (Reported Speech)",
    "subtitle": "Como relatar o que alguém disse mudando tempos e pronomes",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "STRUCTURES",
    "categoryLabel": "Estruturas Gramaticais",
    "icon": "Sparkles",
    "color": "from-purple-600 to-indigo-800",
    "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
    "summary": "Aprenda o 'backshift' dos tempos verbais ao relatar o que alguém disse: Present vira Past, Will vira Would, e a diferença crucial entre SAY e TELL.",
    "rules": [
      {
        "title": "A Regra de Ouro do 'Recuo no Tempo' (Backshift of Tenses)",
        "explanation": "O Discurso Indireto (Reported Speech) é usado para reproduzir o que outra pessoa disse sem usar as palavras exatas entre aspas. Quando o verbo que introduz a fala está no passado (he said, she told me), todos os tempos verbais da frase original recuam um degrau no tempo pretérito.",
        "keyPoints": [
          "Present Simple recua para PAST SIMPLE: 'I like coffee' → She said she liked coffee.",
          "Present Continuous recua para PAST CONTINUOUS: 'I am leaving' → He said he was leaving.",
          "Past Simple recua para PAST PERFECT: 'I bought a car' → She said she had bought a car.",
          "Present Perfect recua para PAST PERFECT: 'I have seen it' → He said he had seen it.",
          "WILL recua para WOULD: 'I will help you' → She said she would help me.",
          "CAN recua para COULD: 'I can swim' → He said he could swim."
        ],
        "formula": "He said that + [Tempo verbal recuado um degrau no passado]",
        "affirmative": "\"I am tired\" → He said that he was tired.",
        "negative": "\"I don't know the answer\" → She said that she didn't know the answer.",
        "interrogative": "\"Will you come?\" → He asked if I would come."
      },
      {
        "title": "A Diferença Vital entre SAY e TELL",
        "explanation": "Um dos erros mais comuns de nível intermediário é trocar 'say' por 'tell'. A regra sintática que os diferencia é direta e inegociável.",
        "keyPoints": [
          "SAY: Não exige que se mencione a quem se está a falar ('He said that he was busy'). Se quiser mencionar a pessoa com 'say', é OBRIGATÓRIO usar a preposição 'to' ('He said to me that...').",
          "TELL: Exige OBRIGATORIAMENTE um pronome ou nome de pessoa como objeto logo a seguir, sem 'to' ('He told ME that he was busy' - NUNCA 'He told that' nem 'He told to me').",
          "Expressões fixas com TELL: tell the truth, tell a lie, tell a story, tell the time."
        ],
        "formula": "SAY (that) + oração | TELL + pessoa (me, him, her, us) + (that) + oração",
        "affirmative": "She told me that she had already booked the flights to Lisbon.",
        "negative": "He didn't tell anyone about his promotion until yesterday.",
        "interrogative": "Did he say what time the meeting would commence?"
      },
      {
        "title": "Ajuste de Pronomes Pessoais, Possessivos e Demonstrativos",
        "explanation": "Ao relatar uma fala de terceiros, os pronomes devem ser ajustados para refletir a nova perspectiva de quem está a contar a história.",
        "keyPoints": [
          "Pronomes pessoais: 'I' vira 'he' ou 'she'; 'we' vira 'they'; 'you' vira 'I' ou 'we'.",
          "Pronomes possessivos: 'my' vira 'his' ou 'her'; 'our' vira 'their'; 'your' vira 'my' ou 'our'.",
          "Demonstrativos e lugar: 'THIS' vira 'THAT' ('this book' → 'that book'); 'THESE' vira 'THOSE'; 'HERE' vira 'THERE'.",
          "Exemplo: \"I forgot my phone here\" → He said that he had forgotten his phone there."
        ],
        "formula": "Ajuste de Perspectiva: 1ª pessoa da fala original → 3ª pessoa do relato",
        "affirmative": "Maria said: \"This is my car\" → Maria said that that was her car.",
        "negative": "David said: \"I don't like my new job\" → David said he didn't like his new job.",
        "interrogative": "She asked: \"Is this your jacket?\" → She asked if that was my jacket."
      },
      {
        "title": "Mudança de Marcadores de Tempo e Perguntas Indiretas",
        "explanation": "Marcadores de tempo relativos ao momento da fala original devem ser convertidos para referências absolutas ou passadas correspondentes.",
        "keyPoints": [
          "NOW vira THEN ou AT THAT MOMENT.",
          "TODAY vira THAT DAY; TONIGHT vira THAT NIGHT.",
          "TOMORROW vira THE NEXT DAY ou THE FOLLOWING DAY.",
          "YESTERDAY vira THE DAY BEFORE ou THE PREVIOUS DAY.",
          "PERGUNTAS INDIRETAS com ASK: A ordem da frase volta a ser afirmativa (sujeito antes do verbo, sem 'do/does/did'). Perguntas de sim/não usam 'IF' ou 'WHETHER' ('He asked IF I liked music' - NUNCA 'He asked did I like')."
        ],
        "formula": "He asked if / whether + Sujeito + Verbo (sem inversão de pergunta)",
        "affirmative": "\"I will see you tomorrow\" → He said he would see me the following day.",
        "negative": "\"I didn't sleep well yesterday\" → She said she hadn't slept well the day before.",
        "interrogative": "\"Where do you live?\" → The officer asked where I lived."
      }
    ],
    "examples": [
      {
        "english": "Maria told me that she was moving to London.",
        "portuguese": "A Maria disse-me que se ia mudar para Londres.",
        "note": "told me (com destinatário)",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She said me she was tired.",
        "correct": "She told me she was tired.",
        "explanation": "Com destinatário (me, him, us) usa-se TELL/TOLD, não SAY."
      }
    ],
    "exercises": [
      {
        "id": "rep-1",
        "type": "multiple-choice",
        "instruction": "Say vs. Tell com destinatário:",
        "question": "David _____ us that he had already bought the flight tickets.",
        "options": [
          "told",
          "said",
          "spoke",
          "talked"
        ],
        "correctAnswer": "told",
        "explanation": "Há destinatário ('us'), logo usa-se told.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-2",
        "type": "multiple-choice",
        "instruction": "Say sem destinatário:",
        "question": "She _____ that she was too tired to go out tonight.",
        "options": [
          "said",
          "told",
          "spoke",
          "told to"
        ],
        "correctAnswer": "said",
        "explanation": "Sem destinatário usa-se said.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-3",
        "type": "multiple-choice",
        "instruction": "Backshift de will para would:",
        "question": "'I will help you tomorrow' -> He said that he _____ help me.",
        "options": [
          "would",
          "will",
          "can",
          "shall"
        ],
        "correctAnswer": "would",
        "explanation": "Will recua para would no discurso indireto.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-4",
        "type": "multiple-choice",
        "instruction": "Backshift de Present para Past:",
        "question": "'I live in Lisbon' -> She said she _____ in Lisbon.",
        "options": [
          "lived",
          "lives",
          "living",
          "will live"
        ],
        "correctAnswer": "lived",
        "explanation": "Present Simple (live) recua para Past Simple (lived).",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-5",
        "type": "multiple-choice",
        "instruction": "Backshift de can para could:",
        "question": "'I can speak Italian' -> He told me that he _____ speak Italian.",
        "options": [
          "could",
          "can",
          "can to",
          "could to"
        ],
        "correctAnswer": "could",
        "explanation": "Can recua para could no relato indireto.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-6",
        "type": "multiple-choice",
        "instruction": "Mudança de pronome possessivo:",
        "question": "'My car is new' -> She said that _____ car was new.",
        "options": [
          "her",
          "my",
          "his",
          "their"
        ],
        "correctAnswer": "her",
        "explanation": "Discurso indireto adapta os pronomes: my car vira her car.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-7",
        "type": "multiple-choice",
        "instruction": "Pergunta indireta:",
        "question": "He asked me where I _____ .",
        "options": [
          "lived",
          "did live",
          "do live",
          "living"
        ],
        "correctAnswer": "lived",
        "explanation": "Em perguntas indiretas a ordem volta a ser afirmativa (where I lived).",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-8",
        "type": "multiple-choice",
        "instruction": "Promessa relatada:",
        "question": "They told us they _____ arrive before noon.",
        "options": [
          "would",
          "will",
          "are",
          "shall"
        ],
        "correctAnswer": "would",
        "explanation": "Futuro relatado usa would.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-9",
        "type": "fill-blank",
        "instruction": "Complete com said ou told:",
        "question": "She _____ me that the exam was cancelled.",
        "correctAnswer": "told",
        "explanation": "Há destinatário ('me'), logo told.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-10",
        "type": "fill-blank",
        "instruction": "Complete com said ou told:",
        "question": "He _____ that he was very happy with his job.",
        "correctAnswer": "said",
        "explanation": "Sem destinatário usa-se said.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-11",
        "type": "fill-blank",
        "instruction": "Complete o backshift de 'I am ready':",
        "question": "She said that she _____ ready.",
        "correctAnswer": "was",
        "explanation": "am recua para was.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-12",
        "type": "fill-blank",
        "instruction": "Complete o backshift de 'I will call':",
        "question": "He told me he _____ call me later.",
        "correctAnswer": "would",
        "explanation": "will recua para would.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-13",
        "type": "fill-blank",
        "instruction": "Complete com said ou told:",
        "question": "The teacher _____ us to open the books.",
        "correctAnswer": "told",
        "explanation": "told us to.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-14",
        "type": "fill-blank",
        "instruction": "Complete o backshift de have:",
        "question": "They said they _____ already seen the film.",
        "correctAnswer": "had",
        "explanation": "have vira had.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-15",
        "type": "reorder",
        "instruction": "Ordene o discurso indireto:",
        "words": [
          "She",
          "told",
          "me",
          "she",
          "was",
          "happy"
        ],
        "correctAnswer": "She told me she was happy",
        "explanation": "Sujeito + told me + oração relatada."
      },
      {
        "id": "rep-16",
        "type": "reorder",
        "instruction": "Ordene com said that:",
        "words": [
          "He",
          "said",
          "that",
          "he",
          "was",
          "busy"
        ],
        "correctAnswer": "He said that he was busy",
        "explanation": "He + said that + he was busy."
      },
      {
        "id": "rep-17",
        "type": "reorder",
        "instruction": "Ordene a frase com would:",
        "words": [
          "They",
          "said",
          "they",
          "would",
          "come",
          "early"
        ],
        "correctAnswer": "They said they would come early",
        "explanation": "They said + they would come early."
      },
      {
        "id": "rep-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Ela disse-me que estava feliz.'",
        "correctAnswer": "She told me she was happy",
        "explanation": "Pronuncie: She told me she was happy.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-19",
        "type": "speaking",
        "instruction": "Pronuncie o relato com said that:",
        "question": "Diga em inglês: 'Ele disse que estava ocupado.'",
        "correctAnswer": "He said that he was busy",
        "explanation": "Pronúncia de 'He said that he was busy'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-20",
        "type": "speaking",
        "instruction": "Fale o relato com would:",
        "question": "Diga em inglês: 'Eles disseram que vinham.'",
        "correctAnswer": "They said they would come",
        "explanation": "Pronúncia de 'they would come'.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rep-21",
        "type": "speaking",
        "instruction": "Fale a promessa relatada:",
        "question": "Diga em inglês: 'Ele disse que me ajudaria.'",
        "correctAnswer": "He said he would help me",
        "explanation": "Pronuncie com naturalidade: He said he would help me.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Os 4 Verbos de Fala: Say, Tell, Speak, Talk",
        "category": "nuance",
        "categoryLabel": "Diferença Chave",
        "explanation": "Dominar estes 4 verbos elimina mais de 80% dos erros dos estudantes de nível intermédio.",
        "comparison": {
          "leftLabel": "SAY & TELL",
          "leftText": "SAY something (sem pessoa) | TELL someone something (com pessoa)",
          "rightLabel": "SPEAK & TALK",
          "rightText": "SPEAK a language / formally | TALK with friends informally"
        },
        "tip": "Lembre-se: 'Tell me a story' (precisa de me), mas 'Say hello' (não leva me direto)."
      }
    ]
  },
  {
    "id": "phrasal-verbs",
    "title": "Phrasal Verbs Mais Úteis",
    "subtitle": "Verbo + preposição: a chave para a fluência natural",
    "level": "B1-B2",
    "levelLabel": "Intermédio (B1-B2)",
    "category": "IDIOMS",
    "categoryLabel": "Expressões Idiomáticas",
    "icon": "Flame",
    "color": "from-rose-500 to-red-600",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "summary": "Phrasal verbs combinam um verbo comum com preposições, criando sentidos novos que falantes nativos usam a todo o momento.",
    "rules": [
      {
        "title": "O que é um Phrasal Verb: Verbo Base + Partícula Idiomática",
        "explanation": "Um Phrasal Verb é a combinação de um verbo comum com uma ou duas partículas preposicionais ou adverbiais (como up, off, out, in, on, away, down). Essa junção cria um significado completamente novo e metafórico que não pode ser traduzido palavra por palavra.",
        "keyPoints": [
          "Exemplo clássico: 'GIVE' significa dar. Mas 'GIVE UP' significa desistir de um esforço ou abandonar um hábito.",
          "Verbo 'LOOK' (olhar): 'look after' (cuidar de alguém), 'look for' (procurar), 'look forward to' (aguardar ansiosamente), 'look up to' (admirar como modelo).",
          "São elementos centrais do inglês falado natural; nativos usam phrasal verbs a cada duas ou três frases no dia a dia."
        ],
        "formula": "Verbo Base + Partícula(s) = Novo Significado Idiomático",
        "affirmative": "Don't give up on your dreams even when difficulties arise.",
        "negative": "He didn't turn down the job offer despite the low initial salary.",
        "interrogative": "Can you look after my cat while I am traveling abroad?"
      },
      {
        "title": "Separáveis vs. Inseparáveis: A Regra Absoluta do Pronome Objeto",
        "explanation": "Existem phrasal verbs que permitem separar o verbo da partícula colocando o objeto no meio, e outros que devem permanecer sempre juntos.",
        "keyPoints": [
          "Separáveis: Se o objeto for um substantivo, você pode colocá-lo depois da partícula ou entre o verbo e a partícula ('Turn on the light' OU 'Turn the light on').",
          "A REGRA DE OURO DO PRONOME: Se o objeto for um pronome (it, them, him, her, me), ele tem OBRIGATORIAMENTE de ficar no meio ('Turn it on' - NUNCA 'Turn on it'; 'Pick them up' - NUNCA 'Pick up them').",
          "Inseparáveis: A partícula e o verbo nunca se separam sob nenhuma hipótese ('Look after my dog' / 'Look after him' - NUNCA 'Look him after')."
        ],
        "formula": "Verbo + Pronome (it/them) + Partícula [Obrigatório no meio]",
        "affirmative": "I have an important document here; please look it over before signing.",
        "negative": "She didn't wake him up because he was sleeping so peacefully.",
        "interrogative": "Could you pick me up from the airport tomorrow evening?"
      },
      {
        "title": "O Significado Lógico das Principais Partículas (UP, DOWN, OUT, OFF)",
        "explanation": "Embora pareçam arbitrários, muitas partículas carregam uma lógica semântica recorrente que ajuda a deduzir o significado de phrasal verbs desconhecidos.",
        "keyPoints": [
          "UP (Completude, término total ou aumento): drink up (beber até a última gota), eat up (comer tudo), clean up (limpar completamente), turn up (aumentar o volume).",
          "DOWN (Diminuição, interrupção ou registro por escrito): turn down (abaixar o volume ou rejeitar), calm down (acalmar-se), write down (anotar no papel).",
          "OUT (Desaparecimento, revelação ou exterior): find out (descobrir a verdade), run out of (ficar sem estoque), blow out (apagar sopro).",
          "OFF (Desconexão, afastamento ou adiamento): turn off (desligar da tomada), put off (adiar para data posterior), call off (cancelar evento)."
        ],
        "formula": "Partícula = Sentido Lógico Direcionador",
        "affirmative": "We ran out of coffee, so we need to buy more at the grocery store.",
        "negative": "They decided not to put off the launch despite the minor bug.",
        "interrogative": "Did you write down the phone number she gave you?"
      },
      {
        "title": "Phrasal Verbs de Três Palavras (Inseparáveis e Frequentes)",
        "explanation": "Muitos dos phrasal verbs mais sofisticados da língua inglesa são compostos por três palavras: um verbo base seguido de duas partículas sucessivas. Eles são invariavelmente inseparáveis.",
        "keyPoints": [
          "LOOK FORWARD TO (+ substantivo ou verbo com -ING): Aguardar com muita alegria e expectativa ('I look forward to meeting you' - NUNCA 'to meet you').",
          "GET ALONG WITH: Ter um bom relacionamento interpessoal com alguém ('I get along well with my colleagues').",
          "RUN OUT OF: Esgotar o suprimento de algo ('We have run out of printer paper').",
          "CATCH UP WITH: Alcançar alguém que estava adiantado ou colocar o papo em dia com um amigo."
        ],
        "formula": "Verbo + Partícula 1 + Partícula 2 + Objeto (sempre inseparável)",
        "affirmative": "I really look forward to hearing from you soon.",
        "negative": "She doesn't get along with her supervisor due to contrasting styles.",
        "interrogative": "How do you put up with all that noise coming from upstairs?"
      }
    ],
    "examples": [
      {
        "english": "Never give up on your dreams, no matter what.",
        "portuguese": "Nunca desistas dos teus sonhos, aconteça o que acontecer.",
        "note": "give up = desistir",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I am looking my glasses.",
        "correct": "I am looking for my glasses.",
        "explanation": "Para dizer procurar deve usar-se 'look FOR'."
      }
    ],
    "exercises": [
      {
        "id": "pv-1",
        "type": "multiple-choice",
        "instruction": "Significado de ficar sem stock:",
        "question": "We cannot make coffee because we have _____ milk.",
        "options": [
          "run out of",
          "given up",
          "found out",
          "carried on"
        ],
        "correctAnswer": "run out of",
        "explanation": "Run out of = esgotar ou ficar sem algo.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-2",
        "type": "multiple-choice",
        "instruction": "Desistir de um objetivo:",
        "question": "No matter how difficult it gets, you must never _____ .",
        "options": [
          "give up",
          "look up",
          "carry out",
          "find out"
        ],
        "correctAnswer": "give up",
        "explanation": "Give up = desistir.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-3",
        "type": "multiple-choice",
        "instruction": "Descobrir uma verdade:",
        "question": "I need to _____ the truth about what happened.",
        "options": [
          "find out",
          "give up",
          "look for",
          "carry on"
        ],
        "correctAnswer": "find out",
        "explanation": "Find out = descobrir informação.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-4",
        "type": "multiple-choice",
        "instruction": "Procurar algo perdido:",
        "question": "I have been _____ my house keys for half an hour.",
        "options": [
          "looking for",
          "looking at",
          "looking after",
          "looking into"
        ],
        "correctAnswer": "looking for",
        "explanation": "Look for = procurar.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-5",
        "type": "multiple-choice",
        "instruction": "Continuar uma atividade:",
        "question": "Please _____ with your presentation.",
        "options": [
          "carry on",
          "give up",
          "run out",
          "look after"
        ],
        "correctAnswer": "carry on",
        "explanation": "Carry on = continuar.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-6",
        "type": "multiple-choice",
        "instruction": "Cuidar de alguém:",
        "question": "Can you please _____ my cat while I am on vacation?",
        "options": [
          "look after",
          "look for",
          "look up",
          "give up"
        ],
        "correctAnswer": "look after",
        "explanation": "Look after = cuidar / tomar conta.",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-7",
        "type": "multiple-choice",
        "instruction": "Aumentar volume:",
        "question": "I love this song! Please _____ the volume.",
        "options": [
          "turn up",
          "turn down",
          "turn off",
          "turn into"
        ],
        "correctAnswer": "turn up",
        "explanation": "Turn up = aumentar o volume.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-8",
        "type": "multiple-choice",
        "instruction": "Descobrir no dicionário:",
        "question": "If you don't know the word, you can _____ in the dictionary.",
        "options": [
          "look it up",
          "look it for",
          "give it up",
          "find it out"
        ],
        "correctAnswer": "look it up",
        "explanation": "Look up = consultar no dicionário.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-9",
        "type": "fill-blank",
        "instruction": "Complete a preposição de desistir (give _____):",
        "question": "Never give _____ on what you love doing.",
        "correctAnswer": "up",
        "explanation": "give up = desistir.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-10",
        "type": "fill-blank",
        "instruction": "Complete a preposição de procurar (look _____):",
        "question": "What are you looking _____ in that drawer?",
        "correctAnswer": "for",
        "explanation": "look for = procurar.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-11",
        "type": "fill-blank",
        "instruction": "Complete o phrasal verb de descobrir:",
        "question": "Did you find _____ what time the train arrives?",
        "correctAnswer": "out",
        "explanation": "find out = descobrir.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-12",
        "type": "fill-blank",
        "instruction": "Complete a preposição de esgotar:",
        "question": "We ran _____ of petrol on the highway.",
        "correctAnswer": "out",
        "explanation": "run out of = ficar sem.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-13",
        "type": "fill-blank",
        "instruction": "Complete a preposição de cuidar:",
        "question": "She looks _____ her little brother after school.",
        "correctAnswer": "after",
        "explanation": "look after = cuidar.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-14",
        "type": "fill-blank",
        "instruction": "Complete a preposição de continuar:",
        "question": "Carry _____ working until the bell rings.",
        "correctAnswer": "on",
        "explanation": "carry on = continuar.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-15",
        "type": "reorder",
        "instruction": "Ordene o conselho inspirador:",
        "words": [
          "Never",
          "give",
          "up",
          "on",
          "your",
          "dreams"
        ],
        "correctAnswer": "Never give up on your dreams",
        "explanation": "Never give up on your dreams."
      },
      {
        "id": "pv-16",
        "type": "reorder",
        "instruction": "Ordene a frase de procura:",
        "words": [
          "I",
          "am",
          "looking",
          "for",
          "my",
          "keys"
        ],
        "correctAnswer": "I am looking for my keys",
        "explanation": "Sujeito + am looking for + objeto."
      },
      {
        "id": "pv-17",
        "type": "reorder",
        "instruction": "Ordene a frase com run out of:",
        "words": [
          "We",
          "ran",
          "out",
          "of",
          "coffee"
        ],
        "correctAnswer": "We ran out of coffee",
        "explanation": "Sujeito + ran out of + objeto."
      },
      {
        "id": "pv-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Nunca desistas dos teus sonhos.'",
        "correctAnswer": "Never give up on your dreams",
        "explanation": "Pronuncie com emoção: Never give up on your dreams.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-19",
        "type": "speaking",
        "instruction": "Pronuncie a frase de procura:",
        "question": "Diga em inglês: 'Estou à procura das minhas chaves.'",
        "correctAnswer": "I am looking for my keys",
        "explanation": "Pronúncia de 'looking for my keys'.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-20",
        "type": "speaking",
        "instruction": "Fale sobre a escassez:",
        "question": "Diga em inglês: 'Ficámos sem café.'",
        "correctAnswer": "We ran out of coffee",
        "explanation": "Pronúncia conectada de 'ran out of coffee'.",
        "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pv-21",
        "type": "speaking",
        "instruction": "Fale a instrução de continuar:",
        "question": "Diga em inglês: 'Continua a trabalhar.'",
        "correctAnswer": "Carry on working",
        "explanation": "Pronuncie: Carry on working.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Equivalentes Formais de Phrasal Verbs",
        "category": "formal-informal",
        "categoryLabel": "E-mails Profissionais",
        "explanation": "Em conversas use phrasal verbs naturais. Em relatórios e e-mails para diretores ou clientes formais, prefira verbos latinos mais precisos.",
        "comparison": {
          "leftLabel": "Phrasal Verb (Conversa)",
          "leftText": "Put off, look into, find out",
          "rightLabel": "Verbo Latino (Formal)",
          "rightText": "Postpone, investigate, discover"
        }
      }
    ]
  },
  {
    "id": "inversion-emphatic",
    "title": "Inversão Gramatical Enfática (C1)",
    "subtitle": "Hardly, Seldom, Rarely, Under no circumstances",
    "level": "ADVANCED",
    "levelLabel": "Avançado (C1-C2)",
    "category": "STRUCTURES",
    "categoryLabel": "Gramática Avançada",
    "icon": "Sparkles",
    "color": "from-purple-700 to-indigo-900",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    "summary": "A inversão com palavras negativas no início confere elegância, ênfase dramática e sofisticação acadêmica / profissional ao inglês.",
    "rules": [
      {
        "title": "O Propósito da Inversão Enfática: Impacto, Retórica e Nível C1/C2",
        "explanation": "A inversão gramatical enfática é uma estrutura avançada que altera a ordem sintática natural da frase para fins de ênfase dramática, suspense literário e elegância formal em discursos públicos e ensaios acadêmicos. É um dos critérios de maior pontuação em exames de proficiência como Cambridge C1 Advanced (CAE) e IELTS Academic Writing.",
        "keyPoints": [
          "Na ordem direta: Sujeito + Verbo auxiliar + Verbo principal ('I have rarely heard such eloquence').",
          "Na ordem invertida: O advérbio negativo/restritivo é puxado para a primeiríssima posição da frase para criar choque e impacto.",
          "Efeito de estilo: Soa muito mais poderoso, refinado e formal do que a estrutura cotidiana padrão.",
          "Uso recomendado: Redações de exames, relatórios institucionais e oratórias formais (evite em mensagens informais de texto)."
        ],
        "formula": "Advérbio Negativo Inicial + Auxiliar + Sujeito + Verbo Principal",
        "affirmative": "Rarely have I witnessed such profound dedication to excellence.",
        "negative": "Under no circumstances should you share your banking credentials.",
        "interrogative": "Is inversion used primarily in written or spoken English?"
      },
      {
        "title": "Advérbios Negativos e Restritivos Iniciais (Never, Rarely, Seldom)",
        "explanation": "Quando uma frase se inicia com uma palavra ou expressão de sentido negativo ou fortemente restritivo, a ordem da oração seguinte deve OBRIGATORIAMENTE ser invertida.",
        "keyPoints": [
          "NEVER: 'Never before had she seen such breathtaking mountains'.",
          "RARELY / SELDOM: 'Rarely do we encounter individuals with such integrity'.",
          "HARDLY / SCARCELY (+ when): 'Hardly had I arrived home when the power cut occurred'.",
          "NO SOONER (+ than): 'No sooner had they closed the deal than the market crashed'.",
          "AT NO TIME: 'At no time did the prime minister consider resigning'."
        ],
        "formula": "Never / Rarely / Seldom + [Auxiliar] + [Sujeito] + [Verbo]",
        "affirmative": "Seldom has a scientific discovery had such an immediate global impact.",
        "negative": "At no point during the audit did the accountants find any discrepancies.",
        "interrogative": "Why does the auxiliary verb move before the subject in these sentences?"
      },
      {
        "title": "A Fórmula da Pergunta em Frase Afirmativa",
        "explanation": "O mecanismo estrutural da inversão é exatamente o mesmo utilizado para fazer uma pergunta comum em inglês, mesmo que a frase seja declarativa e termine com ponto final.",
        "keyPoints": [
          "No Present Simple: Use DO ou DOES ('Rarely DOES he complain about the workload').",
          "No Past Simple: Use DID e volte o verbo ao infinitivo ('Little DID she know about the upcoming surprise').",
          "Com Verbo To Be: O próprio verbo To Be vai para a frente do sujeito ('Nowhere IS this contrast more visible than in modern cities').",
          "Com Tempos Compostos: O primeiro auxiliar move-se para a frente ('Never HAD we experienced such cold weather')."
        ],
        "formula": "Advérbio + do/does/did/have/had/modal + Sujeito + Verbo Base.",
        "affirmative": "Little did the explorers realise that great danger lay directly ahead.",
        "negative": "Not once did he apologise for his unacceptable behaviour.",
        "interrogative": "Can inversion be applied to modal verbs like should and could?"
      },
      {
        "title": "Inversão com 'Only when/after' e 'Not only... but also...'",
        "explanation": "Outras duas famílias fundamentais de inversão exigem muita atenção na identificação de qual cláusula deve ser invertida.",
        "keyPoints": [
          "ONLY AFTER / ONLY WHEN: A inversão NÃO ocorre na oração temporal imediata, mas sim na oração principal seguinte ('Only when the sun set DID we notice the drop in temperature').",
          "ONLY BY: 'Only by working together can we overcome these climate challenges'.",
          "NOT ONLY... BUT ALSO...: A primeira oração recebe inversão completa ('Not only DID she win first prize, BUT she ALSO broke the national record').",
          "UNDER NO CIRCUMSTANCES / ON NO ACCOUNT: Usadas em normas de segurança estritas ('Under no circumstances are visitors permitted in the laboratory')."
        ],
        "formula": "Not only + Auxiliar + Sujeito + Verbo..., but also...",
        "affirmative": "Not only did he complete the marathon, but he also achieved a personal best.",
        "negative": "Under no circumstances should flammable materials be stored near heat sources.",
        "interrogative": "Where does the inversion happen when using 'Only after'?"
      }
    ],
    "examples": [
      {
        "english": "Rarely have I seen such a breathtaking performance on stage.",
        "portuguese": "Raramente vi uma atuação tão deslumbrante no palco.",
        "note": "Rarely + have (auxiliar) + I (sujeito) + seen",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "Under no circumstances should you share your password.",
        "portuguese": "Sob nenhuma circunstância deves partilhar a tua palavra-passe.",
        "note": "Under no circumstances + should + you",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "Rarely I have seen such courage.",
        "correct": "Rarely have I seen such courage.",
        "explanation": "Após Rarely no início da frase, inverte-se o auxiliar com o sujeito (have I)."
      }
    ],
    "exercises": [
      {
        "id": "inv-1",
        "type": "multiple-choice",
        "instruction": "Inversão com Hardly:",
        "question": "Hardly _____ the airport when the heavy storm began.",
        "options": [
          "had we reached",
          "we had reached",
          "we reached",
          "did we reached"
        ],
        "correctAnswer": "had we reached",
        "explanation": "Hardly + had + we + V3 (inversão clássica).",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-2",
        "type": "multiple-choice",
        "instruction": "Inversão com Rarely:",
        "question": "Rarely _____ such extraordinary musical talent in young students.",
        "options": [
          "have I encountered",
          "I have encountered",
          "encountered I",
          "did I encountered"
        ],
        "correctAnswer": "have I encountered",
        "explanation": "Rarely + have + I + encountered.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-3",
        "type": "multiple-choice",
        "instruction": "Inversão com Under no circumstances:",
        "question": "Under no circumstances _____ this confidential file be shared.",
        "options": [
          "should",
          "this should",
          "must to",
          "can to"
        ],
        "correctAnswer": "should",
        "explanation": "Under no circumstances + should + sujeito.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-4",
        "type": "multiple-choice",
        "instruction": "Inversão com Seldom no presente:",
        "question": "Seldom _____ such dedication in modern corporate environments.",
        "options": [
          "do we see",
          "we see",
          "we do see",
          "are we see"
        ],
        "correctAnswer": "do we see",
        "explanation": "Seldom + do + we + see (auxiliar do presente).",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-5",
        "type": "multiple-choice",
        "instruction": "Inversão com Not only:",
        "question": "Not only _____ fluent Spanish, but she also speaks Japanese.",
        "options": [
          "does she speak",
          "she speaks",
          "speaks she",
          "is she speak"
        ],
        "correctAnswer": "does she speak",
        "explanation": "Not only + does + she + speak.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-6",
        "type": "multiple-choice",
        "instruction": "Inversão com Never:",
        "question": "Never in my entire life _____ such an astonishing view.",
        "options": [
          "have I witnessed",
          "I have witnessed",
          "witnessed I",
          "did I witnessed"
        ],
        "correctAnswer": "have I witnessed",
        "explanation": "Never + have + I + witnessed.",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-7",
        "type": "multiple-choice",
        "instruction": "Inversão com No sooner... than:",
        "question": "No sooner had the plane landed _____ the passengers applauded.",
        "options": [
          "than",
          "when",
          "that",
          "then"
        ],
        "correctAnswer": "than",
        "explanation": "No sooner combina obrigatoriamente com THAN.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-8",
        "type": "multiple-choice",
        "instruction": "Inversão com Little:",
        "question": "Little _____ that the surprise party was waiting for him.",
        "options": [
          "did he suspect",
          "he suspected",
          "suspected he",
          "does he suspect"
        ],
        "correctAnswer": "did he suspect",
        "explanation": "Little + did + he + suspect.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-9",
        "type": "fill-blank",
        "instruction": "Complete a ordem invertida com have:",
        "question": "Rarely _____ I seen such dedication.",
        "correctAnswer": "have",
        "explanation": "Rarely have I seen.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-10",
        "type": "fill-blank",
        "instruction": "Complete a inversão com do:",
        "question": "Seldom _____ we witness such extraordinary events.",
        "correctAnswer": "do",
        "explanation": "Seldom do we witness.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-11",
        "type": "fill-blank",
        "instruction": "Complete a inversão com had:",
        "question": "Hardly _____ she closed her eyes when the phone rang.",
        "correctAnswer": "had",
        "explanation": "Hardly had she closed.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-12",
        "type": "fill-blank",
        "instruction": "Complete a estrutura com than:",
        "question": "No sooner had we arrived _____ the rain started.",
        "correctAnswer": "than",
        "explanation": "No sooner... than.",
        "image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-13",
        "type": "fill-blank",
        "instruction": "Complete a inversão com did:",
        "question": "Only then _____ I understand the full significance of his words.",
        "correctAnswer": "did",
        "explanation": "Only then did I understand.",
        "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-14",
        "type": "fill-blank",
        "instruction": "Complete a inversão com should:",
        "question": "Under no circumstances _____ you open this door.",
        "correctAnswer": "should",
        "explanation": "should you open.",
        "image": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-15",
        "type": "reorder",
        "instruction": "Ordene a inversão formal:",
        "words": [
          "Never",
          "have",
          "I",
          "seen",
          "such",
          "courage"
        ],
        "correctAnswer": "Never have I seen such courage",
        "explanation": "Never + have + I + seen + such courage."
      },
      {
        "id": "inv-16",
        "type": "reorder",
        "instruction": "Ordene a inversão com Hardly:",
        "words": [
          "Hardly",
          "had",
          "we",
          "arrived",
          "when",
          "it",
          "rained"
        ],
        "correctAnswer": "Hardly had we arrived when it rained",
        "explanation": "Hardly had we arrived when it rained."
      },
      {
        "id": "inv-17",
        "type": "reorder",
        "instruction": "Ordene com Not only:",
        "words": [
          "Not",
          "only",
          "did",
          "he",
          "win",
          "he",
          "broke",
          "the",
          "record"
        ],
        "correctAnswer": "Not only did he win he broke the record",
        "explanation": "Not only did he win + complemento."
      },
      {
        "id": "inv-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês com ênfase: 'Raramente vi tal beleza.'",
        "correctAnswer": "Rarely have I seen such beauty",
        "explanation": "Pronúncia de prestígio: Rarely have I seen such beauty.",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-19",
        "type": "speaking",
        "instruction": "Pronuncie a inversão dramática:",
        "question": "Diga em inglês: 'Nunca ouvi tal coisa.'",
        "correctAnswer": "Never have I heard such a thing",
        "explanation": "Pronúncia clara: Never have I heard such a thing.",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-20",
        "type": "speaking",
        "instruction": "Fale a regra de segurança formal:",
        "question": "Diga em inglês: 'Sob nenhuma circunstância partilhe a senha.'",
        "correctAnswer": "Under no circumstances should you share it",
        "explanation": "Pronúncia firme: Under no circumstances should you share it.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "inv-21",
        "type": "speaking",
        "instruction": "Pronuncie a frase com Hardly:",
        "question": "Diga em inglês: 'Mal tínhamos chegado quando começou.'",
        "correctAnswer": "Hardly had we arrived when it started",
        "explanation": "Pronúncia de 'Hardly had we arrived'.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Onde e Como Usar a Inversão com Sucesso",
        "category": "etiquette",
        "categoryLabel": "Dica C1 / C2",
        "explanation": "A inversão é uma das estruturas mais pontuadas em exames Cambridge (CAE, CPE) e no IELTS Writing. Contudo, deve ser reservada para discursos e redações formais, soando exagerada em conversas informais de WhatsApp.",
        "comparison": {
          "leftLabel": "Ordem Normal",
          "leftText": "I have rarely seen such dedication.",
          "rightLabel": "Inversão de Prestígio (C1)",
          "rightText": "Rarely have I seen such dedication."
        },
        "tip": "Use uma inversão bem colocada na introdução ou conclusão de um ensaio acadêmico."
      }
    ]
  },
  {
    "id": "mixed-conditionals-subjunctive",
    "title": "Mixed Conditionals & Subjuntivo (C1)",
    "subtitle": "Hipóteses no passado com impacto no presente e o subjuntivo formal",
    "level": "ADVANCED",
    "levelLabel": "Avançado (C1-C2)",
    "category": "STRUCTURES",
    "categoryLabel": "Gramática Avançada",
    "icon": "Split",
    "color": "from-violet-800 to-purple-950",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "summary": "Misture tempos em hipóteses complexas (ação no passado afetando o presente agora) e use o subjuntivo formal mandatório ('I demand that he be present').",
    "rules": [
      {
        "title": "Condicional Mista: Causa Passada com Efeito no Presente (Past → Present)",
        "explanation": "As Condicionais Mistas (Mixed Conditionals) combinam tempos verbais de diferentes tipos condicionais para retratar a vida real, onde acontecimentos passados moldam a nossa condição presente.",
        "keyPoints": [
          "Cenário: Uma ação ou escolha no passado que não aconteceu, e que produz uma consequência viva hoje.",
          "Estrutura: Condição no passado com IF + PAST PERFECT (had + V3), Resultado no presente com WOULD + VERBO BASE (da 2ª condicional).",
          "Exemplo: 'If I had taken that flight yesterday, I would be in London right now' (Não peguei o voo no passado; como consequência, não estou em Londres hoje).",
          "Contraste: Se fosse 3ª condicional pura, o resultado seria 'would have been' (no passado). Como o efeito é AGORA ('right now'), usa-se 'would be'."
        ],
        "formula": "If + had + V3 [Passado], Sujeito + WOULD + Verbo Base [Presente]",
        "affirmative": "If she had accepted that job last year, she would be a director today.",
        "negative": "If I hadn't spent all my savings on vacation, I wouldn't be broke now.",
        "interrogative": "Where would you be living today if your family hadn't emigrated?"
      },
      {
        "title": "Condicional Mista: Condição Permanente com Impacto no Passado (Present → Past)",
        "explanation": "O segundo tipo de condicional mista trata de uma característica pessoal ou estado permanente do presente que influenciou um resultado que já ocorreu no passado.",
        "keyPoints": [
          "Cenário: Um traço de personalidade ou fato geral duradouro no presente impediu ou provocou uma ação no passado.",
          "Estrutura: Condição geral com IF + PAST SIMPLE (were / V2), Resultado passado com WOULD HAVE + PARTICÍPIO (da 3ª condicional).",
          "Exemplo: 'If I were more organised, I wouldn't have missed the project deadline yesterday' (Eu sou uma pessoa desorganizada hoje em geral; por isso perdi o prazo ontem).",
          "O 'were' reflete a condição geral contínua do indivíduo no presente da sua vida."
        ],
        "formula": "If + Past Simple [Condição Geral], Sujeito + WOULD HAVE + V3 [Resultado Passado]",
        "affirmative": "If he spoke fluent French, he would have secured the ambassadorial post.",
        "negative": "If I weren't so afraid of heights, I would have gone skydiving with you.",
        "interrogative": "Would you have agreed to the transfer if you didn't have family here?"
      },
      {
        "title": "O Modo Subjuntivo Mandatório em Inglês (The Present Subjunctive)",
        "explanation": "No inglês formal (extremamente valorizado em contratos jurídicos, relatórios corporativos e no padrão dos EUA), usa-se o Modo Subjuntivo para expressar exigências, pedidos formais, ordens e recomendações de alta prioridade.",
        "keyPoints": [
          "Verbos gatilho: demand, insist, recommend, suggest, require, propose, advise, urge.",
          "Estrutura da Cláusula com 'THAT': O verbo seguinte permanece OBRIGATORIAMENTE na FORMA BASE pura (infinitivo sem 'to'), SEM '-S' na 3ª pessoa e com 'BE' no lugar de am/is/are.",
          "Exemplo emblemático: 'I insist that he BE present' (NUNCA 'he is' nem 'he was').",
          "Exemplo com verbo comum: 'The doctor recommended that she TAKE a week off' (NUNCA 'takes').",
          "Negativa do subjuntivo: Coloca-se simplesmente 'NOT' antes do verbo base, sem 'doesn't' ('I demand that he NOT leave the room')."
        ],
        "formula": "Verbo de Demanda + that + Sujeito + VERBO NA FORMA BASE (sem -s)",
        "affirmative": "The committee proposed that the CEO resign immediately from his position.",
        "negative": "The judge ordered that the defendant not leave the national territory.",
        "interrogative": "Did the physician insist that the patient be kept under observation?"
      },
      {
        "title": "Condicionais Invertidas Formais sem a Palavra 'IF'",
        "explanation": "No registro mais elevado e refinado da língua inglesa (discursos de estadistas, artigos diplomáticos e contratos internacionais), a conjunção 'IF' pode ser totalmente eliminada, provocando uma inversão do sujeito com o verbo auxiliar.",
        "keyPoints": [
          "Inversão na 1ª Condicional com SHOULD: 'If you need help' vira 'SHOULD you need any help, please contact us'.",
          "Inversão na 2ª Condicional com WERE: 'If I were in your position' vira 'WERE I in your position, I would decline'.",
          "Inversão na 3ª Condicional com HAD: 'If we had known about the risks' vira 'HAD WE KNOWN about the risks, we would have acted differently'.",
          "Estas formas transmitem sofisticação suprema e autoridade intelectual instantânea."
        ],
        "formula": "Should you... | Were I... | Had we known...",
        "affirmative": "Had I received the briefing earlier, I would have intervened in time.",
        "negative": "Should you not receive confirmation within 24 hours, notify our office.",
        "interrogative": "Were you to accept the overseas posting, would your spouse relocate?"
      }
    ],
    "examples": [
      {
        "english": "If I had studied medicine, I would be a doctor today.",
        "portuguese": "Se eu tivesse estudado medicina, seria médico hoje.",
        "note": "decisão passada com reflexo hoje",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "english": "The doctor insisted that the patient rest for three days.",
        "portuguese": "O médico insistiu que o paciente descansasse três dias.",
        "note": "subjuntivo: rest sem -s",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "The judge insisted that he pays the fine.",
        "correct": "The judge insisted that he pay the fine.",
        "explanation": "No subjuntivo formal usa-se a forma base do verbo (pay, não pays)."
      }
    ],
    "exercises": [
      {
        "id": "mxd-1",
        "type": "multiple-choice",
        "instruction": "Mixed Conditional de passado para presente:",
        "question": "If I _____ that job offer in London, I would live in the UK today.",
        "options": [
          "had accepted",
          "accepted",
          "would accept",
          "accept"
        ],
        "correctAnswer": "had accepted",
        "explanation": "Condição no passado usa Past Perfect (had accepted).",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-2",
        "type": "multiple-choice",
        "instruction": "Subjuntivo formal mandatório:",
        "question": "The committee recommends that the new regulation _____ approved immediately.",
        "options": [
          "be",
          "is",
          "was",
          "being"
        ],
        "correctAnswer": "be",
        "explanation": "Subjuntivo formal usa a forma base 'be'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-3",
        "type": "multiple-choice",
        "instruction": "Subjuntivo na 3ª pessoa:",
        "question": "The doctor insisted that the patient _____ in bed for a week.",
        "options": [
          "rest",
          "rests",
          "rested",
          "resting"
        ],
        "correctAnswer": "rest",
        "explanation": "Subjuntivo em inglês não leva -s na 3ª pessoa: rest.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-4",
        "type": "multiple-choice",
        "instruction": "Impacto presente de causa passada:",
        "question": "If we had left earlier, we _____ caught in this awful traffic jam right now.",
        "options": [
          "wouldn't be",
          "won't be",
          "weren't",
          "hadn't been"
        ],
        "correctAnswer": "wouldn't be",
        "explanation": "Resultado no presente agora: wouldn't be.",
        "image": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-5",
        "type": "multiple-choice",
        "instruction": "Subjuntivo com suggest:",
        "question": "I suggest that she _____ to the meeting in person.",
        "options": [
          "come",
          "comes",
          "came",
          "is coming"
        ],
        "correctAnswer": "come",
        "explanation": "Suggest that + forma base: come.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-6",
        "type": "multiple-choice",
        "instruction": "Estrutura vital:",
        "question": "It is essential that every student _____ the safety rules.",
        "options": [
          "follow",
          "follows",
          "followed",
          "is following"
        ],
        "correctAnswer": "follow",
        "explanation": "Essential that + forma base: follow.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-7",
        "type": "multiple-choice",
        "instruction": "Mixed conditional com fluência:",
        "question": "If she had practiced more English, she _____ fluent now.",
        "options": [
          "would be",
          "will be",
          "had been",
          "is"
        ],
        "correctAnswer": "would be",
        "explanation": "Resultado hoje: would be fluent now.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-8",
        "type": "multiple-choice",
        "instruction": "Subjuntivo com demand:",
        "question": "The workers demanded that the manager _____ immediately.",
        "options": [
          "resign",
          "resigns",
          "resigned",
          "to resign"
        ],
        "correctAnswer": "resign",
        "explanation": "Demand that + base: resign.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-9",
        "type": "fill-blank",
        "instruction": "Complete o subjuntivo do verbo To Be:",
        "question": "It is crucial that he _____ (be) present at the negotiation.",
        "correctAnswer": "be",
        "explanation": "Subjuntivo formal de To Be é 'be'.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-10",
        "type": "fill-blank",
        "instruction": "Complete o verbo no subjuntivo (sem -s!):",
        "question": "The doctor recommended that she _____ (take) a week off.",
        "correctAnswer": "take",
        "explanation": "take na forma base.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-11",
        "type": "fill-blank",
        "instruction": "Complete a mixed conditional:",
        "question": "If I had won the lottery, I _____ (be) rich right now.",
        "correctAnswer": "would be",
        "explanation": "would be.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-12",
        "type": "fill-blank",
        "instruction": "Complete a condição no passado:",
        "question": "If we had _____ (take) the highway, we would be home already.",
        "correctAnswer": "taken",
        "explanation": "had taken.",
        "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-13",
        "type": "fill-blank",
        "instruction": "Complete o subjuntivo formal:",
        "question": "The judge ordered that the prisoner _____ (remain) in custody.",
        "correctAnswer": "remain",
        "explanation": "remain na forma base.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-14",
        "type": "fill-blank",
        "instruction": "Complete com would:",
        "question": "If he had trained harder, he _____ be the champion today.",
        "correctAnswer": "would",
        "explanation": "would be.",
        "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-15",
        "type": "reorder",
        "instruction": "Ordene o subjuntivo formal:",
        "words": [
          "I",
          "demand",
          "that",
          "he",
          "be",
          "present"
        ],
        "correctAnswer": "I demand that he be present",
        "explanation": "I demand that he be present."
      },
      {
        "id": "mxd-16",
        "type": "reorder",
        "instruction": "Ordene a mixed conditional:",
        "words": [
          "If",
          "I",
          "had",
          "studied",
          "I",
          "would",
          "be",
          "ready"
        ],
        "correctAnswer": "If I had studied I would be ready",
        "explanation": "If I had studied I would be ready."
      },
      {
        "id": "mxd-17",
        "type": "reorder",
        "instruction": "Ordene com recommend:",
        "words": [
          "We",
          "recommend",
          "that",
          "she",
          "accept",
          "the",
          "offer"
        ],
        "correctAnswer": "We recommend that she accept the offer",
        "explanation": "We recommend that she accept the offer."
      },
      {
        "id": "mxd-18",
        "type": "speaking",
        "instruction": "Pratique a fala em inglês:",
        "question": "Diga em inglês: 'Se eu tivesse estudado, eu seria médico hoje.'",
        "correctAnswer": "If I had studied I would be a doctor now",
        "explanation": "Pronuncie: If I had studied I would be a doctor now.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-19",
        "type": "speaking",
        "instruction": "Pronuncie o subjuntivo formal:",
        "question": "Diga em inglês: 'Exijo que ele esteja presente.'",
        "correctAnswer": "I demand that he be present",
        "explanation": "Pronúncia precisa: I demand that he be present.",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-20",
        "type": "speaking",
        "instruction": "Fale a recomendação médica:",
        "question": "Diga em inglês: 'O médico recomendou que ele descansasse.'",
        "correctAnswer": "The doctor recommended that he rest",
        "explanation": "Note o 'rest' sem -s.",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mxd-21",
        "type": "speaking",
        "instruction": "Fale a hipótese mista:",
        "question": "Diga em inglês: 'Se tivéssemos saído mais cedo, estaríamos em casa.'",
        "correctAnswer": "If we had left earlier we would be home",
        "explanation": "Pronúncia de 'If we had left earlier we would be home'.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "bestPractices": [
      {
        "title": "Subjuntivo nos EUA vs. UK",
        "category": "uk-us",
        "categoryLabel": "UK vs. US",
        "explanation": "O subjuntivo mandatório ('I recommend that he be present') é extremamente vivo e obrigatório nos EUA. No Reino Unido, é muito frequente o uso de 'should' como alternativa natural.",
        "comparison": {
          "leftLabel": "Padrão Americano (Subjuntivo)",
          "leftText": "I insist that she leave now.",
          "rightLabel": "Alternativa Britânica",
          "rightText": "I insist that she should leave now."
        }
      }
    ]
  }
];

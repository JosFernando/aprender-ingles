# 🇬🇧 Inglês & Gramática - Aplicação Mobile Android & Web

Aplicação mobile interativa para aprender língua inglesa e regras gramaticais, com explicações didáticas em português, pronúncia de áudio nativo (TTS), banco de exercícios com correção imediata e ambiente de visualização Web em tempo real com simulador Android.

---

## 🚀 Como Executar e Visualizar na Web

Para iniciar o servidor de desenvolvimento e testar a aplicação no seu navegador:

```bash
npm run dev
```

Abra o seu navegador em:
- **Computador (Local):** [http://localhost:5173](http://localhost:5173)
- **Telemóvel (Mesma rede Wi-Fi):** `http://[SEU-IP-LOCAL]:5173` (o Vite exibe o endereço exato no terminal ao iniciar)

### 📱 Ferramentas de Desenvolvimento Web:
- No topo da aplicação na Web, encontra o botão **"Modo Mobile" / "Web Cheio"**.
- O **Modo Mobile** renderiza uma moldura autêntica de smartphone Android com entalhe de câmara, barra de status, dimensões nativas e toque fluido, permitindo testar a experiência mobile real sem precisar de emuladores pesados.

---

## 📚 Conteúdos & Regras Gramaticais Incluídas

1. **Iniciante (A1-A2):**
   - **Verbo To Be (Presente):** Regras de *Am*, *Is*, *Are*, contrações e o erro comum de idades.
   - **Present Simple & 3ª Pessoa:** Hábitos, a regra do *-s / -es* com *He/She/It* e os auxiliares *Do / Does*.
   - **Present Continuous (-ING):** Ações em curso agora, regra CVC (*running*, *swimming*) e verbos de estado.
   - **Past Simple & Verbos Irregulares:** O passado simples com terminação *-ed*, verbos irregulares e o auxiliar *Did*.
   - **O Futuro (Will vs. Going To):** Decisões instantâneas vs. planos já agendados e evidências.
   - **Preposições IN, ON e AT:** A regra da pirâmide invertida aplicada ao tempo e ao espaço.

2. **Intermédio (B1-B2):**
   - **Present Perfect Simple:** A ponte entre passado e presente (*Have/Has + Particípio*), palavras-chave (*Ever, Never, Already, Yet, For, Since*).
   - **Verbos Modais:** *Can, Could, Must, Should* (habilidade, permissão, obrigação e conselhos).
   - **Condicionais (If Clauses):** *Zero*, *1st*, *2nd* condicional e o subjuntivo *"If I were you..."*.

3. **Avançado & Expressões Úteis:**
   - **Phrasal Verbs Mais Utilizados:** *Give up, Figure out, Run out of, Call off, Look for*.
   - **Falsos Cognatos (False Friends):** *Actually, Pretend, Parents, Push vs. Pull, Attend, Lunch*.

---

## 🎯 Funcionalidades da Aplicação

- **🔊 Pronúncia em Áudio Nativo (Text-To-Speech):** Qualquer regra, exemplo ou resposta pode ser ouvida com a pronúncia correta em inglês através da síntese de voz nativa.
- **✍️ 3 Modos de Exercícios:**
  1. *Múltipla Escolha:* Escolha da opção correta com justificativa pedagógica.
  2. *Preenchimento de Lacunas:* Digitação da palavra correta.
  3. *Ordenação de Palavras:* Clique nos blocos de palavras para formar a frase gramatical perfeita.
- **⚡ Feedback Imediato:** Explicação didática do porquê de cada resposta estar certa ou errada.
- **🔥 Gamificação & Progresso:** Sistema de Streak diário, ganho de XP, cálculo de precisão (%) e efeito de confetis ao terminar sessões.

---

## 🤖 Como Gerar a Aplicação Android (APK / Android Studio)

A aplicação foi preparada com **Capacitor** para ser compilada nativamente para Android:

1. **Gere a build de produção dos ficheiros web:**
   ```bash
   npm run build
   ```

2. **Adicione a plataforma Android (apenas na 1ª vez):**
   ```bash
   npx cap add android
   ```

3. **Sincronize os ficheiros compilados com o projeto Android:**
   ```bash
   npx cap sync android
   ```

4. **Abra o projeto no Android Studio:**
   ```bash
   npx cap open android
   ```
   *No Android Studio, basta clicar em **Run** no seu dispositivo/emulador Android ou em **Build > Build Bundle(s) / APK(s) > Build APK(s)**.*


# Como usar o sistema de envio de e-mails em massa

1. Faça upload do seu arquivo *CSV*, que possui os dados dos seus contatos, para o Google Drive (**caso não possua um** basta criar uma nova planilha no Google Sheets, inserir os dados dos contatos nela e seguir no passo 5.);
2. Abra o Google Sheets e importe o arquivo CSV (**Arquivo** > **Importar** > **Upload**);
3. Selecione o arquivo no Google Drive e clique em **Inserir**;
4. Agora clique em **Importar Dados** mantendo as configurações padrão em *Importar local* e *Tipo de separador*;
5. Após a última coluna de dados, insira uma coluna chamada *Status* (com essa grafia exata de maiúsculas e minúsculas);
6. Acesse o Gmail e clique em "Escrever" para iniciar um novo email;
7. Escreva o assunto e o corpo do email que deseja enviar;
8. Utilize marcadores de posição para personalizar o email. Por exemplo, se sua planilha tiver uma coluna chamada "Nome", insira {{Nome}} no corpo do email onde deseja que o nome apareça;
9. **Não preencha o campo "Para"**, sim, deixe ele vazio, pois o mesmo será preenchido pela automação;
10. Feche o rascunho para salvá-lo;
11. Agora, volte para a planilha do Google Sheets, vá em "**Extensões**" > "**Apps Script**";
12. No editor que se abre, apague qualquer código existente e cole o script de [email](https://github.com/cfprocha/codigos/tree/main/VBA).
13. Clique no ícone de disquete (💾) e dê um nome ao projeto, por exemplo, "Mala Direta";
14. Vá em "Executar" > "sendEmails";
15. Uma janela de autorização aparecerá. Clique em "Revisar permissões";
16. Escolha sua conta do Google;
17. Pode aparecer um aviso dizendo que o aplicativo não é verificado. Clique em "Avançado" e depois em "Ir para Mala Direta (não seguro)";
18. Clique em "Permitir" para conceder as permissões necessárias;
19. Após a autorização, execute novamente a função sendEmails;
20. O script começará a enviar os emails personalizados;
21. Acesse sua conta do Gmail e verifique a pasta "Enviados" para confirmar que os emails foram enviados (na planilha, também estará escrito "Enviado" na coluna de Status, para os contatos que foram enviados).

# Notas importantes

- Contas gratuitas do Gmail podem enviar até 500 emails por dia (contas novas, até 100);
- Contas do Google Workspace podem enviar até 2.000 emails por dia;
- É recomendável fazer um teste enviando para seu próprio email antes de enviar para todos os destinatários, assim você confere se o texto ficou bom.

**Faça bom uso e espero que goste!**

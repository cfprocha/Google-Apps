// Função de validação de email
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function sendEmails() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var startRow = 2; // Linha onde os dados começam (assumindo que a primeira linha é o cabeçalho)
    var numRows = sheet.getLastRow() - 1; // Número de linhas com dados
    var dataRange = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn());
    var data = dataRange.getValues();
    
    // Obter o rascunho do email
    var drafts = GmailApp.getDrafts();
    var draft = drafts[0]; // Usa o primeiro rascunho como modelo
    var message = draft.getMessage();
    var subject = message.getSubject();
    var body = message.getBody();
    
    // Obter os cabeçalhos das colunas
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
    // Encontrar o índice da coluna "Status"
    var statusColIndex = headers.indexOf("Status");
  
    // **Variável para contar os emails enviados**
    var emailsEnviados = 0;
  
    for (var i = 0; i < data.length; ++i) {
      var row = data[i];
      var emailAddress = row[7]; // Substitua pelo índice correto
      var status = row[statusColIndex]; // Obter o status atual da linha
      // Se o status for "Enviado", pular para a próxima linha
      if (status === "Enviado") {
        continue;
      }
  
      // Validar o email antes de enviar
      if (!validarEmail(emailAddress)) {
        Logger.log("Email inválido encontrado: " + emailAddress);
        sheet.getRange(startRow + i, statusColIndex + 1).setValue("Email inválido"); // Atualiza a planilha com "Email inválido"
        continue; // Pular para a próxima linha se o email for inválido
      }
          
      var personalizedBody = body;
      
      // Substituir marcadores de posição pelos dados da planilha
      for (var j = 0; j < headers.length; ++j) {
        var header = headers[j];
        var value = row[j];
        var placeholder = '{{' + header + '}}';
        personalizedBody = personalizedBody.replace(new RegExp(placeholder, 'g'), value);
      }
      
      // Enviar o email
      MailApp.sendEmail({
        to: emailAddress,
        subject: subject,
        htmlBody: personalizedBody,
        attachments: message.getAttachments() // Inclui os anexos do rascunho
      });
  
      // Atualizar o status na planilha para "Enviado"
      sheet.getRange(startRow + i, statusColIndex + 1).setValue("Enviado");
  
      // **Incrementar a contagem de emails enviados**
      emailsEnviados++;
    }
  
    // **Registrar o número total de emails enviados**
    Logger.log('Total de emails enviados: ' + emailsEnviados);
  
  }
  
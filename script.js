// copiar código
    const codeText = document.getElementById('codeBlock').innerText.trim();
    document.getElementById('copyBtn').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeText);
        alert('Código copiado para a área de transferência!');
      } catch (e) {
        alert('Não foi possível copiar automaticamente. Selecione e copie manualmente.');
      }
    });

    // baixar .ino simples
    document.getElementById('downloadBtn').addEventListener('click', () => {
      const blob = new Blob([codeText], {type: 'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'projeto_tinkercad.ino';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
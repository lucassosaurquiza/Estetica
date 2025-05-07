document.getElementById('form-turno').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
  
    const mensaje = `¡Gracias ${nombre}! Tu turno fue reservado para el ${fecha} a las ${hora}.`;
    document.getElementById('mensaje').textContent = mensaje;
  
    // Acá podrías enviar la info a un backend o guardarla localmente
  });
  
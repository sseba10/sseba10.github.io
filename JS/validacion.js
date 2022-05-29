function confirmacion(form)
{
enviar = window.confirm('Se enviarán todos los datos del formulario');
(enviar)?form.submit():'return false';
}

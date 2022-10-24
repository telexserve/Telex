window.onload = function() {
  Swal.fire({
    title: 'Registro Exitoso!',
    icon: 'success',
    confirmButtonText: 'Iniciar Sesion',
    confirmButtonColor: "#149ddd"
  }).then((result) => {
    if (result.value) {
      window.location.href = '/login'
    }
  }); 
};
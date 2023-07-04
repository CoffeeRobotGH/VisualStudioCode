using System.Collections;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPIAutores.Validaciones;

namespace WebAPIAutores.Entidades
{
    public class Autor
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public int Id { get; set; }
        [StringLength(maximumLength: 120, ErrorMessage = "El campo {0} no debe de tener más de {1} carácteres")]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
    }    
}
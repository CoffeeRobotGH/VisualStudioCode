using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIAutores.DTOs
{
    public class LibroDTO
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public List<AutorDTO> Autores { get; set; }
        // public List<ComentarioDTO> Comentarios { get; set; }
    }
}
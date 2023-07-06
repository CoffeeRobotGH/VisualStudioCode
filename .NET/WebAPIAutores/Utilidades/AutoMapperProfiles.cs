using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPIAutores.DTOs;
using WebAPIAutores.Entidades;

namespace WebAPIAutores.Utilidades
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AutorCreacionDTO, Autor>();
            CreateMap<Autor, AutorDTO>();
            CreateMap<LibroCreacionDTO, Libro>();
            CreateMap<Libro, LibroDTO>();
        }
    }
}
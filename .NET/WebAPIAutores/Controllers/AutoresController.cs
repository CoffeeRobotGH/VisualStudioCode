using System.Runtime.InteropServices;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;
using System.Globalization;
using System.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPIAutores.Entidades;
using WebAPIAutores.Servicios;
using Microsoft.AspNetCore.Authorization;
using WebAPIAutores.Filtros;

namespace WebAPIAutores.Controllers
{
    [ApiController]
    [Route("api/autores")]
    // [Authorize]
    public class AutoresController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IServicio servicio;
        private readonly ServicioScoped servicioScoped;
        private readonly ServicioSingleton servicioSingleton;
        private readonly ServicioTransient servicioTransient;
        private readonly ILogger<AutoresController> logger;

        public AutoresController(ApplicationDbContext context, 
            IServicio servicio,
                ServicioScoped servicioScoped, 
                    ServicioSingleton servicioSingleton, 
                        ServicioTransient servicioTransient,
                            ILogger<AutoresController> logger)
        {
            this.context = context;
            this.servicio = servicio;
            this.servicioScoped = servicioScoped;
            this.servicioSingleton = servicioSingleton;
            this.servicioTransient = servicioTransient;
            this.logger = logger;
        }

        [HttpGet("GUID")]
        // [ResponseCache(Duration = 10)]
        [ServiceFilter(typeof(MiFiltroDeAccion))]
        public ActionResult ObtenerGuids()
        {
            return Ok( new {
                AutoresController_Scoped = servicioScoped.Guid,
                ServicioA_Scoped = servicio.ObtenerScoped(),
                AutoresController_Singleton = servicioSingleton.Guid,
                ServicioA_Singleton = servicio.ObtenerSingleton(),
                AutoresController_Transient = servicioTransient.Guid,
                ServicioA_Transient = servicio.ObtenerTransient()
            });
        }

        [HttpGet("/listado")] // listado
        public async Task<List<Autor>> Get()
        {
            // throw new NotImplementedException();
            logger.LogInformation("Estamos obteniendo los autores");
            servicio.RealizarTarea();
            return await context.Autores.Include(x => x.Libros).ToListAsync();
        }

        [HttpGet("primero")] // api/autores/primero?nombre=emanuel&apellido=paredes
        public async Task<ActionResult<Autor>> PrimerAutor([FromHeader] int miValor, [FromQuery] string nombre)
        {
            return await context.Autores.FirstOrDefaultAsync();
        }

        [HttpGet("primero2")] // api/autores/primero2
        public ActionResult<Autor> PrimerAutor2()
        {
            return new Autor() { Nombre = "Inventado" };
        }

        [HttpGet("{id:int}/{param2=persona}")]
        public async Task<ActionResult<Autor>> Get (int id, string param2)
        {
            var autor = await context.Autores.FirstOrDefaultAsync(x => x.Id == id);

            if (autor == null)
            {
                return NotFound();
            }

            return autor;
        }

        [HttpGet("{nombre}")]
        public async Task<ActionResult<Autor>> Get ([FromRoute] string nombre)
        {
            var autor = await context.Autores.FirstOrDefaultAsync(x => x.Nombre.Contains(nombre));

            if (autor == null)
            {
                return NotFound();
            }

            return autor;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Autor autor)
        {
            var existeAutorConElMismoNombre = await context.Autores.AnyAsync(x => x.Nombre == autor.Nombre);

            if (existeAutorConElMismoNombre)
            {
                return BadRequest($"Ya existe un autor con el nombre {autor.Nombre}");
            }

            context.Add(autor);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")] // api/autores/1
        public async Task<ActionResult> Put(Autor autor, int id)
        {
            if (autor.Id != id)
            {
                return BadRequest("El id del autor no coincide con el id de la URL");
            }
            
            var existe = await context.Autores.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Update(autor);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")] // api/autores/2
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Autores.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Autor() { Id = id });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class ApplicationDbContext : DbContext
        {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
            {
            }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<PeliculasActores>()
                    .HasKey(x => new { x.ActorId, x.PeliculaId });

                modelBuilder.Entity<PeliculasGeneros>()
                    .HasKey(x => new { x.GeneroId, x.PeliculaId });

                modelBuilder.Entity<PeliculasSalasDeCine>()
                    .HasKey(x => new { x.PeliculaId, x.SalaDeCineId });

                base.OnModelCreating(modelBuilder);
            }
            
            public DbSet<Genero> Generos { get; set; }
            public DbSet<Actor> Actores { get; set; }
            public DbSet<Pelicula> Peliculas { get; set; }
            public DbSet<PeliculasActores> PeliculasActores { get; set; }
            public DbSet<PeliculasGeneros> PeliculasGeneros { get; set; }
            public DbSet<SalaDeCine> SalaDeCine { get; set; }
            public DbSet<PeliculasSalasDeCine> PeliculasSalasDeCine { get; set; }
        }
}

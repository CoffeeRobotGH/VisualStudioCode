using System.Collections.Immutable;
using System.Text;
using System.Net.Mime;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading;
using WebAPIAutores;
using WebAPIAutores.Controllers;
using WebAPIAutores.Middlewares;
using WebAPIAutores.Filtros;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using WebAPIAutores.Servicios;
using WebAPIAutores.Utilidades;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;

[assembly: ApiConventionType(typeof(DefaultApiConventions))]
namespace WebApiAutores
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers(opciones => 
            {
                opciones.Filters.Add(typeof(FiltroDeExcepcion));
                opciones.Conventions.Add(new SwaggerAgruparPorVersiones());
            }).AddJsonOptions(x => 
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles).AddNewtonsoftJson();

            services.AddDbContext<ApplicationDbContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("defaultConnection")));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opciones => opciones.TokenValidationParameters = new TokenValidationParameters {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(Configuration["llavejwt"])),
                    ClockSkew = TimeSpan.Zero
                });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { 
                    Title = "WebAPIAutores", 
                    Version = "v1",
                    Description = "Este es un web api para trabajar con autores y libros",
                    Contact = new OpenApiContact
                    {
                        Email = "example@hotmail.com",
                        Name = "Emanuel Paredes",
                        Url = new Uri("https://coffeetraducciones.wixsite.com/coffeetraducciones")
                    },
                    License = new OpenApiLicense
                    {
                        Name = "MIT"
                    }
                });
                c.SwaggerDoc("v2", new OpenApiInfo { Title = "WebAPIAutores", Version = "v2" });
                c.OperationFilter<AgregarParametroHATEOAS>();
                c.OperationFilter<AgregarParametroXVersion>();

                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[]{}
                    }
                });

                var archivoXML = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var rutaXML = Path.Combine(AppContext.BaseDirectory, archivoXML);
                c.IncludeXmlComments(rutaXML);
            });

            services.AddAutoMapper(typeof(Startup));

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthorization(opciones =>
            {
                opciones.AddPolicy("EsAdmin", politica => politica.RequireClaim("esAdmin"));
            });

            services.AddDataProtection();
            services.AddTransient<HashService>();

            services.AddCors(opciones => 
            {
                opciones.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("https://apirequest.io").AllowAnyMethod().AllowAnyHeader()
                        .WithExposedHeaders(new string[] { "cantidadTotalRegistros" });
                });
            });

            services.AddTransient<GeneradorEnlaces>();
            services.AddTransient<HATEOASAutorFilterAttribute>();
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
        {

            app.UseLoguearRespuestaHTTP();


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPIAutores v1");
                    c.SwaggerEndpoint("/swagger/v2/swagger.json", "WebAPIAutores v2");
                });
            }
            
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();
            
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIAutores.Servicios
{
    public interface IServicio
    {
        Guid ObtenerScoped();
        Guid ObtenerSingleton();
        Guid ObtenerTransient();
        void RealizarTarea();
    }

    public class ServicioA : IServicio
    {
        private readonly ILogger<ServicioA> logger;
        private readonly ServicioScoped servicioScoped;
        private readonly ServicioSingleton servicioSingleton;
        private readonly ServicioTransient servicioTransient;

        public ServicioA(ILogger<ServicioA> logger, 
            ServicioScoped servicioScoped, 
                ServicioSingleton servicioSingleton, 
                    ServicioTransient servicioTransient)
        {
            this.logger = logger;
            this.servicioScoped = servicioScoped;
            this.servicioSingleton = servicioSingleton;
            this.servicioTransient = servicioTransient;
        }

        public Guid ObtenerScoped() { return servicioScoped.Guid; }
        public Guid ObtenerSingleton() { return servicioSingleton.Guid; }
        public Guid ObtenerTransient() { return servicioTransient.Guid; }

        public void RealizarTarea()
        {
            throw new NotImplementedException();
        }
    }
    public class ServicioB : IServicio
    {
        public Guid ObtenerScoped()
        {
            throw new NotImplementedException();
        }

        public Guid ObtenerSingleton()
        {
            throw new NotImplementedException();
        }

        public Guid ObtenerTransient()
        {
            throw new NotImplementedException();
        }

        public void RealizarTarea()
        {
            throw new NotImplementedException();
        }
    }

    public class ServicioScoped
    {
        public Guid Guid = Guid.NewGuid();
    }

    public class ServicioSingleton
    {
        public Guid Guid = Guid.NewGuid();
    }

    public class ServicioTransient
    {
        public Guid Guid = Guid.NewGuid();
    }

}
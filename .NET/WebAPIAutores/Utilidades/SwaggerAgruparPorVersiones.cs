using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIAutores.Utilidades
{
    public class SwaggerAgruparPorVersiones : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            var namespaceControlador = controller.ControllerType.Namespace; // Controller.V1
            var versionApi = namespaceControlador.Split('.').Last().ToLower(); // v1
            controller.ApiExplorer.GroupName = versionApi;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiService.Controllers
{
    public class ProductController : ApiController
    {
        // GET: api/Product
        public IHttpActionResult Get()
        {
            return Ok(GetProductInfo()); 
        }

        // GET: api/Product/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Product
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Product/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
        }

        private List<Product> GetProductInfo()
        {
            var lst = new List<Product>();

            //First Product
            var p1 = new Product();
            p1.ProductId = 100;
            p1.ProductName = "Xeema Tubes";
            p1.Manufacturers = new List<Manufacturer>()
            {
                new Manufacturer {Id="BX345", Name="Coranbo Toys" },
                new Manufacturer {Id="X102", Name="Bara Tubes" },
                new Manufacturer {Id="UI-9000", Name="Nara neckles" }
            };

            //Second Product
            var p2 = new Product();
            p2.ProductId = 101;
            p2.ProductName = "Nanaco Tubes";
            p2.Manufacturers = new List<Manufacturer>()
            {
                new Manufacturer {Id="BX345", Name="Zeppee Colors" },
                new Manufacturer {Id="X102", Name="Tube we do" }
            };

            lst.Add(p1);
            lst.Add(p2);

            return lst; 
        }
    }

    
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public List<Manufacturer> Manufacturers { get; set; }
    }

    public class Manufacturer
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}

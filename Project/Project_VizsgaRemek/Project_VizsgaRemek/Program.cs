using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_VizsgaRemek
{
    internal class Program
    {
        static void Main(string[] args)
        {

            var users = new Felhasznalok("Adatok/felhasznalo.txt");
            users.Beolvas();

            // SQL exportálás
            users.ExportSQL("../../../../SQL/DML.sql");

            Console.WriteLine("SQL fájl elkészült.");
        }
    }
}

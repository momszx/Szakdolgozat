using System;
using System.Collections.Generic;

namespace Szakdolgozat.Classes
{
    public class Faculty : BaseClass
    {
        private string name;

        public Faculty(int id, string uID,string name) : base(id, uID)
        {
            Name = name;
        }

        public string Name { get => name; set => name = value; }
    }
}

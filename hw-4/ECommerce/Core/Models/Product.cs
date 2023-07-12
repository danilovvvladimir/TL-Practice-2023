﻿using System.Data.SqlTypes;

namespace Core.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public SqlMoney Price { get; set; }
        public int Quantity { get; set; }

        public override string ToString()
        {
            return $"{Name} - {Price} rub - {Quantity}";
        }

    }
}

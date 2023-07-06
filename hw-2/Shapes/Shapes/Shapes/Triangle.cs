using Shapes.Shapes;

namespace Shapes
{
    public class Triangle : IShape
    {
        private double _side1;
        private double _side2;
        private double _side3;

        public double Side1
        {
            get => _side1;
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Side1 must be a positive number.");
                }

                _side1 = value;
            }
        }

        public double Side2
        {
            get => _side2;
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Side2 must be a positive number.");
                }

                _side2 = value;
            }
        }

        public double Side3
        {
            get => _side3;
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Side3 must be a positive number.");
                }

                _side3 = value;
            }
        }

        public Triangle(double side1, double side2, double side3)
        {
            Side1 = side1;
            Side2 = side2;
            Side3 = side3;

            if (!IsValid())
            {
                throw new Exception("Triangle with these sides can not exist.");
            }
        }

        public double CalculateArea()
        {
            double halfPerimeter = CalculatePerimeter() / 2;

            return Math.Sqrt(halfPerimeter * (halfPerimeter - Side1) *
                (halfPerimeter - Side2) * (halfPerimeter - Side3));
        }

        public double CalculatePerimeter()
        {
            return Side1 + Side2 + Side3;
        }

        private bool IsValid()
        {
            return (Side1 + Side2 > Side3) &&
                (Side1 + Side3 > Side2) &&
                (Side2 + Side3 > Side1);
        }
    }
}

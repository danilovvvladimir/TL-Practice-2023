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

                double previousValue = _side1;

                _side1 = value;

                if (!IsValid())
                {
                    _side1 = previousValue;
                    throw new Exception("Triangle with these sides can not exist.");
                }
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

                double previousValue = _side2;

                _side2 = value;

                if (!IsValid())
                {
                    _side2 = previousValue;
                    throw new Exception("Triangle with these sides can not exist.");
                }
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

                double previousValue = _side3;

                _side3 = value;

                if (!IsValid())
                {
                    _side3 = previousValue;
                    throw new Exception("Triangle with these sides can not exist.");
                }
            }
        }

        public Triangle(double side1, double side2, double side3)
        {
            _side1 = side1;
            _side2 = side2;
            _side3 = side3;

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

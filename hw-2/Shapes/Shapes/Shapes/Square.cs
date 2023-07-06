using Shapes.Shapes;

namespace Shapes
{
    public class Square : IShape
    {
        private double _sideLength;

        public double SideLength
        {
            get => _sideLength;
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Length of square's side must be a positive number");
                }

                _sideLength = value;
            }
        }

        public Square(double sideLength)
        {
            SideLength = sideLength;
        }

        public double CalculateArea()
        {
            return SideLength * SideLength;
        }

        public double CalculatePerimeter()
        {
            return SideLength * 4;
        }
    }
}

namespace Shapes
{
    public class Square : IShape
    {
        private double _sideLength;
        public Square(double sideLength)
        {
            if (sideLength < 0)
            {
                throw new ArgumentException("Length of square's side must be a positive number");
            }

            _sideLength = sideLength;
        }

        public double GetSideLength()
        {
            return _sideLength;
        }

        public void SetRadius(double newSideLength)
        {
            if (newSideLength < 0)
            {
                throw new ArgumentException("Length of square's side must be a positive number");
            }

            _sideLength = newSideLength;
        }

        public double CalculateArea()
        {
            return _sideLength * _sideLength;
        }

        public double CalculatePerimeter()
        {
            return _sideLength * 4;
        }
    }
}

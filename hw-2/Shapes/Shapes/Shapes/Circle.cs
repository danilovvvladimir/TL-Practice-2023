namespace Shapes
{
    public class Circle : IShape
    {
        private double _radius;
        public Circle(double radius)
        {
            if (radius < 0)
            {
                throw new ArgumentException("Radius must be a positive number");
            }

            _radius = radius;
        }

        public double GetRadius()
        {
            return _radius;
        }

        public void SetRadius(double newRadius)
        {
            if (newRadius < 0)
            {
                throw new ArgumentException("Radius must be a positive number");
            }

            _radius = newRadius;
        }

        public double CalculateArea()
        {
            return Math.PI * _radius * _radius;
        }

        public double CalculatePerimeter()
        {
            return 2 * Math.PI * _radius;
        }
    }
}

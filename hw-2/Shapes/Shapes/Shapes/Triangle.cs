namespace Shapes
{
    public class Triangle : IShape
    {
        private Point _vertex1;
        private Point _vertex2;
        private Point _vertex3;

        public Triangle(double point1X, double point1Y, double point2X, double point2Y, double point3X, double point3Y)
        {
            _vertex1 = new Point(point1X, point1Y);
            _vertex2 = new Point(point2X, point2Y);
            _vertex3 = new Point(point3X, point3Y);
        }

        public Triangle(Point point1, Point point2, Point point3)
        {
            _vertex1 = point1;
            _vertex2 = point2;
            _vertex3 = point3;
        }

        public double CalculatePerimeter()
        {
            (double distanceVertex12, double distanceVertex13, double distanceVertex23) = GetDistances();

            double trianglePerimeter = distanceVertex12 + distanceVertex13 + distanceVertex23;
            return trianglePerimeter;
        }

        public double CalculateArea()
        {
            double halfPerimeter = CalculatePerimeter() / 2;

            (double distanceVertex12, double distanceVertex13, double distanceVertex23) = GetDistances();


            double triangleArea = Math.Sqrt(halfPerimeter * (halfPerimeter - distanceVertex12) * (halfPerimeter - distanceVertex13) * (halfPerimeter - distanceVertex23));
            return triangleArea;
        }

        public (double, double, double) GetDistances()
        {
            double distanceVertex12 = Point.GetDistance(_vertex1, _vertex2);
            double distanceVertex13 = Point.GetDistance(_vertex1, _vertex3);
            double distanceVertex23 = Point.GetDistance(_vertex2, _vertex3);

            return (distanceVertex12, distanceVertex13, distanceVertex23);
        }

    }
}

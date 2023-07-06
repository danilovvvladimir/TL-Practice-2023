using Shapes.Shapes;

namespace Shapes
{
    public class Triangle : IShape
    {
        private Point _vertex1;
        private Point _vertex2;
        private Point _vertex3;

        public Triangle(double point1X, double point1Y, double point2X, double point2Y, double point3X, double point3Y)
        {
            Point vertex1 = new Point(point1X, point1Y);
            Point vertex2 = new Point(point2X, point2Y);
            Point vertex3 = new Point(point3X, point3Y);

            if (!IsValidVertexes(vertex1, vertex2, vertex3))
            {
                throw new Exception("Вершины не должны образовывать прямую линию или накладываться друг на друга.");
            }

            _vertex1 = vertex1;
            _vertex2 = vertex2;
            _vertex3 = vertex3;
        }

        public Triangle(Point vertex1, Point vertex2, Point vertex3)
        {
            if (!IsValidVertexes(vertex1, vertex2, vertex3))
            {
                throw new Exception("Вершины не должны образовывать прямую линию или накладываться друг на друга.");
            }

            _vertex1 = vertex1;
            _vertex2 = vertex2;
            _vertex3 = vertex3;
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

            double triangleArea = Math.Sqrt(
                halfPerimeter * (halfPerimeter - distanceVertex12) *
                (halfPerimeter - distanceVertex13) *
                (halfPerimeter - distanceVertex23)
                );

            return triangleArea;
        }

        private (double, double, double) GetDistances()
        {
            double distanceVertex12 = Point.GetDistance(_vertex1, _vertex2);
            double distanceVertex13 = Point.GetDistance(_vertex1, _vertex3);
            double distanceVertex23 = Point.GetDistance(_vertex2, _vertex3);

            return (distanceVertex12, distanceVertex13, distanceVertex23);
        }

        private bool IsValidVertexes(Point vertex1, Point vertex2, Point vertex3)
        {
            // Если все точки параллельны друг другу, значит не треугольник, а прямая линия.
            if ((vertex2.GetY() - vertex1.GetY()) * (vertex3.GetX() - vertex1.GetX()) ==
                (vertex3.GetY() - vertex1.GetY()) * (vertex2.GetX() - vertex1.GetX()))
            {
                return false;
            }

            // Если хоть две лежат в одной и той же точке, то тоже получается прямая линия.
            if (vertex1 == vertex2 || vertex2 == vertex3 || vertex3 == vertex1)
            {
                return false;
            }

            return true;
        }

    }
}

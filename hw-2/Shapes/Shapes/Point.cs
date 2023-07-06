namespace Shapes
{
    public class Point
    {
        private readonly double _x;
        private readonly double _y;

        public Point(double x, double y)
        {
            _x = x;
            _y = y;
        }

        public static double GetDistance(Point point1, Point point2)
        {
            return Math.Sqrt(Math.Pow((point2._x - point1._x), 2) + (Math.Pow((point2._y - point1._y), 2)));
        }
    }
}

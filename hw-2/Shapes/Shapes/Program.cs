namespace Shapes
{
    internal class Program
    {
        public static void Main()
        {
            Triangle triangle = new(new Point(0, 0), new Point(3, 0), new Point(3, 3));
            Console.WriteLine("Triangle");
            Console.WriteLine(triangle.CalculateArea());
            Console.WriteLine(triangle.CalculatePerimeter());
            Console.WriteLine();

            Circle circle = new Circle(50);
            Console.WriteLine("Circle");
            Console.WriteLine(circle.CalculateArea());
            Console.WriteLine(circle.CalculatePerimeter());
            Console.WriteLine();

            Square square = new Square(50);
            Console.WriteLine("Square");
            Console.WriteLine(square.CalculateArea());
            Console.WriteLine(square.CalculatePerimeter());
            Console.WriteLine();
        }
    }
}

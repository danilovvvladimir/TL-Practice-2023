namespace Shapes
{
    public class Program
    {
        public static void Main()
        {
            Triangle triangle = new(3, 4, 5);
            Console.WriteLine("Triangle");
            Console.WriteLine(triangle.CalculateArea());
            Console.WriteLine(triangle.CalculatePerimeter());
            Console.WriteLine();

            try
            {
                Console.WriteLine("Change side:");
                triangle.Side1 = 12345;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine();
            }

            Console.WriteLine($"Current Sides: Side1= {triangle.Side1}; Side2= {triangle.Side2}; Side3= {triangle.Side3}");

            Console.WriteLine("Triangle");
            Console.WriteLine(triangle.CalculateArea());
            Console.WriteLine(triangle.CalculatePerimeter());
            Console.WriteLine();

            //Circle circle = new Circle(50);
            //Console.WriteLine("Circle");
            //Console.WriteLine(circle.CalculateArea());
            //Console.WriteLine(circle.CalculatePerimeter());
            //Console.WriteLine();

            //Square square = new Square(50);
            //Console.WriteLine("Square");
            //Console.WriteLine(square.CalculateArea());
            //Console.WriteLine(square.CalculatePerimeter());
            //Console.WriteLine();
        }
    }
}

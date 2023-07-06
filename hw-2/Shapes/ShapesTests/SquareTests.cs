
namespace ShapesTests
{
    public class SquareTests
    {
        [Test]
        public void Constructor_ValidArgument()
        {
            double sideLength = 10;

            Square square = new Square(sideLength);

            Assert.AreEqual(sideLength, square.SideLength);
        }

        [Test]
        public void Constructor_InvalidArgument()
        {
            double sideLength = 0;

            Assert.Throws<ArgumentException>(() => new Square(sideLength));
        }

        [Test]
        public void CalculatePerimeter_ValidArgument()
        {
            double sideLength = 10;
            double correctPerimeter = sideLength * sideLength;

            Square square = new Square(sideLength);
            double actualPerimeter = square.CalculateArea();

            Assert.AreEqual(correctPerimeter, actualPerimeter);
        }

        [Test]
        public void CalculateArea_ValidArgument()
        {
            double sideLength = 10;
            double correctArea = sideLength * sideLength;

            Square square = new Square(sideLength);
            double actualArea = square.CalculateArea();

            Assert.AreEqual(correctArea, actualArea);
        }

    }
}
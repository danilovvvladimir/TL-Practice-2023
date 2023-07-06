
namespace ShapesTests
{
    public class TriangleTests
    {
        [Test]
        public void Constructor_ValidArgument()
        {
            double side1 = 10;
            double side2 = 12;
            double side3 = 12;

            Triangle triangle = new Triangle(side1, side2, side3);

            Assert.AreEqual(side1, triangle.Side1);
            Assert.AreEqual(side2, triangle.Side2);
            Assert.AreEqual(side3, triangle.Side3);
        }

        [Test]
        public void Constructor_InvalidArgument()
        {
            double side1 = 1000;
            double side2 = 12;
            double side3 = 12;

            Assert.Throws<Exception>(() => new Triangle(side1, side2, side3));
        }

        [Test]
        public void CalculatePerimeter_ValidArgument()
        {
            double side1 = 10;
            double side2 = 12;
            double side3 = 12;

            Triangle triangle = new Triangle(side1, side2, side3);

            double correctPerimeter = triangle.Side1 + triangle.Side2 + triangle.Side3;

            double actualPerimeter = triangle.CalculatePerimeter();

            Assert.AreEqual(correctPerimeter, actualPerimeter);
        }

        [Test]
        public void CalculateArea_ValidArgument()
        {
            double side1 = 10;
            double side2 = 12;
            double side3 = 12;

            Triangle triangle = new Triangle(side1, side2, side3);

            double halfPerimeter = triangle.CalculatePerimeter() / 2;
            double correctArea = Math.Sqrt(halfPerimeter * (halfPerimeter - triangle.Side1) *
                (halfPerimeter - triangle.Side2) * (halfPerimeter - triangle.Side3));

            double actualArea = triangle.CalculateArea();

            Assert.AreEqual(correctArea, actualArea);
        }
    }
}
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Calculator.Pages
{
    public class ResultModel : PageModel
    {
        public double FirstNumber { get; set; }
        public double SecondNumber { get; set; }
        public string Operation { get; set; }
        public double Result { get; set; }

        public void OnGet(double firstNumber, double secondNumber, string operation, double result)
        {
            FirstNumber = firstNumber;
            SecondNumber = secondNumber;
            Operation = operation;
            Result = result;
        }
    }
}
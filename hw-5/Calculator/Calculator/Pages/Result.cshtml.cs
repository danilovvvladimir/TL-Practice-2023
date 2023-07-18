using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Calculator.Pages
{
    public class ResultModel : PageModel
    {
        // From Query:
        public int FirstNumber { get; set; }
        public int SecondNumber { get; set; }
        public string Operation { get; set; }

        // Calculations:
        public bool IsMinus { get; set; }
        public int Result { get; set; }
        public List<int> FirstNumberDigits { get; set; }
        public List<int> SecondNumberDigits { get; set; }
        public List<int> ResultDigits { get; set; }

        public void OnGet(int firstNumber, int secondNumber, string operation)
        {
            Operation = operation;

            //if (Operation == "-")
            //{
            //    FirstNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
            //    SecondNumber = secondNumber < firstNumber ? secondNumber : firstNumber;
            //    Result = CalculateResult(FirstNumber, SecondNumber, Operation);
            //    IsMinus = true;
            //}
            //else
            //{
            //    FirstNumber = firstNumber;
            //    SecondNumber = secondNumber;
            //    Result = CalculateResult(FirstNumber, SecondNumber, Operation);
            //}

            FirstNumber = firstNumber;
            SecondNumber = secondNumber;
            Result = CalculateResult(FirstNumber, SecondNumber, Operation);

            if (Result < 0)
            {
                IsMinus = true;
                Result *= -1;
            }

            FirstNumberDigits = GetDigits(FirstNumber);
            SecondNumberDigits = GetDigits(SecondNumber);
            ResultDigits = GetDigits(Result);

        }

        private int CalculateResult(int firstNumber, int secondNumber, string operation)
        {
            switch (operation)
            {
                case "+":
                    return firstNumber + secondNumber;
                case "-":
                    return firstNumber - secondNumber;
                case "*":
                    return firstNumber * secondNumber;
                case "/":
                    return firstNumber / secondNumber;
                default:
                    return 0;
            }
        }

        public List<int> GetDigits(int number)
        {
            List<int> digits = new List<int>();
            while (number != 0)
            {
                digits.Add(number % 10);
                number /= 10;
            }
            digits.Reverse();
            return digits;
        }


    }
}
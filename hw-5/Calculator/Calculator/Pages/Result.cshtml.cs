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
        public int Result { get; set; }
        public List<int> FirstNumberDigits { get; set; }
        public List<int> SecondNumberDigits { get; set; }
        public List<int> ResultDigits { get; set; }
        public bool IsMinus { get; set; } = false;

        // +
        public List<int> PlusIndexes { get; set; }

        // -
        public List<int> DotsIndexes { get; set; }
        public List<int> TensIndexes { get; set; }

        public void OnGet(int firstNumber, int secondNumber, string operation)
        {
            Operation = operation;

            if (Operation == "-" && (firstNumber < secondNumber))
            {
                FirstNumber = secondNumber;
                SecondNumber = firstNumber;
                IsMinus = true;

                Result = -1 * CalculateResult(SecondNumber, FirstNumber, Operation);

            }
            else
            {
                FirstNumber = firstNumber;
                SecondNumber = secondNumber;
                Result = CalculateResult(FirstNumber, SecondNumber, Operation);
            }

            FirstNumberDigits = GetDigits(FirstNumber);
            SecondNumberDigits = GetDigits(SecondNumber);
            ResultDigits = GetDigits(Result);

            if (Operation == "+")
            {
                PlusIndexes = GetPlusIndexes();
            }

            if (Operation == "-")
            {
                (DotsIndexes, TensIndexes) = GetMinusIndexes();
            }

        }

        private int CalculateResult(int firstNumber, int secondNumber, string operation)
        {
            switch (operation)
            {
                case "+":
                    return firstNumber + secondNumber;
                case "-":
                    return firstNumber - secondNumber;
                //case "*":
                //    return firstNumber * secondNumber;
                //case "/":
                //    return firstNumber / secondNumber;
                default:
                    return 0;
            }
        }

        public List<int> GetDigits(int number)
        {
            List<int> digits = new List<int>();

            if (number == 0)
            {
                digits.Add(number);
            }

            while (number != 0)
            {
                digits.Add(number % 10);
                number /= 10;
            }

            digits.Reverse();
            return digits;
        }

        public List<int> GetPlusIndexes()
        {
            List<int> indexes = new List<int>();

            List<int> biggestDigitsReversed = new List<int>(FirstNumberDigits.Count > SecondNumberDigits.Count ? FirstNumberDigits : SecondNumberDigits);
            biggestDigitsReversed.Reverse();

            List<int> smallestDigitsReversed = new List<int>(FirstNumberDigits.Count < SecondNumberDigits.Count ? FirstNumberDigits : SecondNumberDigits);
            smallestDigitsReversed.Reverse();

            int maxSize = biggestDigitsReversed.Count;
            int minSize = smallestDigitsReversed.Count;

            for (int i = 0; i < biggestDigitsReversed.Count; i++)
            {
                if (i < minSize)
                {
                    if (biggestDigitsReversed[i] + smallestDigitsReversed[i] >= 10 ||
                        indexes.Count != 0 && (indexes[indexes.Count - 1] == maxSize - i - 1))
                    {
                        indexes.Add(maxSize - 2 - i);
                    }
                }
                else
                {
                    if (indexes.Count != 0 && (indexes[indexes.Count - 1] == maxSize - i - 1))
                    {
                        if (biggestDigitsReversed[i] + 1 >= 10)
                        {
                            indexes.Add(maxSize - 2 - i);
                        }
                    }
                }
            }

            return indexes;
        }

        public (List<int>, List<int>) GetMinusIndexes()
        {
            List<int> dotsIndexes = new List<int>();
            List<int> tensIndexes = new List<int>();

            List<int> firstNumberDigitsReversed = new List<int>(FirstNumberDigits);
            firstNumberDigitsReversed.Reverse();

            List<int> secondNumberDigitsReversed = new List<int>(SecondNumberDigits);
            secondNumberDigitsReversed.Reverse();

            int maxSize = Math.Max(FirstNumberDigits.Count, SecondNumberDigits.Count);
            int minSize = Math.Min(FirstNumberDigits.Count, SecondNumberDigits.Count);

            for (int i = 0; i < maxSize; i++)
            {
                if (i < minSize)
                {
                    if (firstNumberDigitsReversed[i] - secondNumberDigitsReversed[i] < 0)
                    {
                        DotsIndexes.Add(maxSize - 2 - i);
                        TensIndexes.Add(maxSize - 1 - i);
                    }
                }
                else
                {
                    if (dotsIndexes.Count != 0 && (dotsIndexes[dotsIndexes.Count - 1] == maxSize - i - 1))
                    {
                        if (firstNumberDigitsReversed[i] - 1 < 0)
                        {
                            DotsIndexes.Add(maxSize - 2 - i);
                            TensIndexes.Add(maxSize - 1 - i);
                        }
                    }
                }
            }

            return (dotsIndexes, tensIndexes);
        }
    }
}
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

            List<int> BiggestDigitsReversed = new List<int>(FirstNumberDigits.Count > SecondNumberDigits.Count ? FirstNumberDigits : SecondNumberDigits);
            BiggestDigitsReversed.Reverse();

            List<int> SmallestDigitsReversed = new List<int>(FirstNumberDigits.Count < SecondNumberDigits.Count ? FirstNumberDigits : SecondNumberDigits);
            SmallestDigitsReversed.Reverse();

            int maxSize = BiggestDigitsReversed.Count;
            int minSize = SmallestDigitsReversed.Count;

            for (int i = 0; i < BiggestDigitsReversed.Count; i++)
            {
                if (i < minSize)
                {
                    if (BiggestDigitsReversed[i] + SmallestDigitsReversed[i] >= 10 ||
                        indexes.Count != 0 && (indexes[indexes.Count - 1] == maxSize - i - 1))
                    {
                        indexes.Add(maxSize - 2 - i);
                    }
                }
                else
                {
                    if (indexes.Count != 0 && (indexes[indexes.Count - 1] == maxSize - i - 1))
                    {
                        if (BiggestDigitsReversed[i] + 1 >= 10)
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
            List<int> DotsIndexes = new List<int>();
            List<int> TensIndexes = new List<int>();

            List<int> FirstNumberDigitsReversed = new List<int>(FirstNumberDigits);
            FirstNumberDigitsReversed.Reverse();

            List<int> SecondNumberDigitsReversed = new List<int>(SecondNumberDigits);
            SecondNumberDigitsReversed.Reverse();

            int maxSize = Math.Max(FirstNumberDigits.Count, SecondNumberDigits.Count);
            int minSize = Math.Min(FirstNumberDigits.Count, SecondNumberDigits.Count);

            for (int i = 0; i < maxSize; i++)
            {
                if (i < minSize)
                {
                    if (FirstNumberDigitsReversed[i] - SecondNumberDigitsReversed[i] < 0)
                    {
                        DotsIndexes.Add(maxSize - 2 - i);
                        TensIndexes.Add(maxSize - 1 - i);
                    }
                }
                else
                {
                    if (DotsIndexes.Count != 0 && (DotsIndexes[DotsIndexes.Count - 1] == maxSize - i - 1))
                    {
                        if (FirstNumberDigitsReversed[i] - 1 < 0)
                        {
                            DotsIndexes.Add(maxSize - 2 - i);
                            TensIndexes.Add(maxSize - 1 - i);
                        }
                    }
                }
            }

            return (DotsIndexes, TensIndexes);
        }
    }
}
class Program
{
    public static void BubbleSort(List<int> lst)
    {
        int listSize = lst.Count;
        bool isAlreadySorted;

        for (int i = 0; i < listSize - 1; i++)
        {
            isAlreadySorted = true;

            for (int j = 0; j < listSize - i - 1; j++)
            {
                if (lst[j] > lst[j + 1])
                {
                    int temp = lst[j];

                    lst[j] = lst[j + 1];
                    lst[j + 1] = temp;

                    isAlreadySorted = false;
                }
            }
            if (isAlreadySorted)
            {
                break;
            }
        }
    }

    static void Main(string[] args)
    {
        List<int> randomCase = new List<int>()
        {
            1, 50, 25,0, -24, 75, 100, 110
        };

        List<int> worstCase = new List<int>()
        {
            110, 100, 75, 50, 25, 1, 0, -24
        };

        List<int> bestCase = new List<int>()
        {
            -24, 0, 1, 25, 50, 75, 100, 110
        };


        BubbleSort(randomCase);

        randomCase.ForEach(number => Console.WriteLine(number));
    }
}


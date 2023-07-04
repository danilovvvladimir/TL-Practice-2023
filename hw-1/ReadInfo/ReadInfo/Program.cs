using System.Text.RegularExpressions;

class Program
{
    static bool IsEmail(string email)
    {
        Regex emailRegex = new Regex(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        return email is null ? false : emailRegex.IsMatch(email);
    }
    static bool IsGithubURL(string github)
    {
        Regex githubRegex = new Regex(@"^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-_]");
        return github is null ? false : githubRegex.IsMatch(github);
    }

    static void Main(string[] args)
    {
        // === FIO ===
        Console.WriteLine("1. Получение имени.");
        Console.Write("- Введите фамилию: ");
        string lastName = Console.ReadLine();
        Console.Write("- Введите имя: ");
        string firstName = Console.ReadLine();
        Console.Write("- Введите отчество: ");
        string middleName = Console.ReadLine();
        Console.WriteLine();


        // === AGE ===
        Console.WriteLine("2. Получение возраста.");
        int age = 0;
        bool isNumber = false;

        while (!isNumber)
        {
            Console.Write("Введите число: ");
            string rowAgeString = Console.ReadLine();

            isNumber = int.TryParse(rowAgeString, out age);

            if (!isNumber)
            {
                Console.WriteLine("Ошибка. Возраст должен быть числом. Попробуйте ещё раз.");
            }
        }
        Console.WriteLine();


        // === EMAIL ===
        Console.WriteLine("3. Получение email.");
        string email = string.Empty;
        bool isValidEmail = false;

        while (!isValidEmail)
        {
            Console.Write("Введите email: ");
            email = Console.ReadLine();

            isValidEmail = IsEmail(email);

            if (!isValidEmail)
            {
                Console.WriteLine("Ошибка. Невалидный email. Попробуйте ещё раз.");
            }
        }
        Console.WriteLine();

        // === GITHUB ===
        Console.WriteLine("4. Получение Github.");
        string github = string.Empty;
        bool isValidGithubURL = false;

        while (!isValidGithubURL)
        {
            Console.Write("Введите ссылку на github (https://github.com/<your name>): ");
            github = Console.ReadLine();

            isValidGithubURL = IsGithubURL(github);

            if (!isValidEmail)
            {
                Console.WriteLine("Ошибка. Невалидная ссылка на github. Попробуйте ещё раз.");
            }
        }
        Console.WriteLine();

        // === OUTPUT ===
        Console.WriteLine("===== INFO =====");
        Console.WriteLine($"ФИО: \t\t{lastName} {firstName} {middleName}");
        Console.WriteLine($"Возраст: \t{age}");
        Console.WriteLine($"Email: \t\t{email}");
        Console.WriteLine($"Github: \t{github}");
    }
}

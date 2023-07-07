using System.Text.RegularExpressions;

namespace ReadInfo
{
    public class Program
    {
        public static bool IsEmail(string email)
        {
            Regex emailRegex = new Regex(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
            return email is null ? false : emailRegex.IsMatch(email);
        }

        public static bool IsGithubURL(string github)
        {
            Regex githubRegex = new Regex(@"^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-_]");
            return github is null ? false : githubRegex.IsMatch(github);
        }

        public static (string, string, string) ReadFIO()
        {
            Console.WriteLine("1. Получение имени.");

            Console.Write("- Введите фамилию: ");
            string lastName = Console.ReadLine();

            Console.Write("- Введите имя: ");
            string firstName = Console.ReadLine();

            Console.Write("- Введите отчество: ");
            string middleName = Console.ReadLine();

            Console.WriteLine();

            return (lastName, firstName, middleName);
        }

        public static int ReadAge()
        {
            Console.WriteLine("2. Получение возраста.");

            int age = 0;
            bool isAgeValidNumber = false;

            while (!isAgeValidNumber)
            {
                Console.Write("Введите число: ");
                string rowAgeString = Console.ReadLine();

                isAgeValidNumber = int.TryParse(rowAgeString, out age);

                if (!isAgeValidNumber)
                {
                    Console.WriteLine("Ошибка. Возраст должен быть числом. Попробуйте ещё раз.");
                }

                if (age < 0 || age > 150)
                {
                    Console.WriteLine("Ошибка. Возраст не может быть меньше 0 или больше 150.");
                    isAgeValidNumber = false;
                }
            }

            Console.WriteLine();

            return age;
        }

        public static string ReadEmail()
        {
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

            return email;
        }

        public static string ReadGithubURL()
        {
            Console.WriteLine("4. Получение Github.");
            string github = string.Empty;
            bool isValidGithubURL = false;

            while (!isValidGithubURL)
            {
                Console.Write("Введите ссылку на github (https://github.com/<your name>): ");
                github = Console.ReadLine();

                isValidGithubURL = IsGithubURL(github);

                if (!isValidGithubURL)
                {
                    Console.WriteLine("Ошибка. Невалидная ссылка на github. Попробуйте ещё раз.");
                }
            }

            Console.WriteLine();

            return github;
        }

        public static void Main(string[] args)
        {
            (string lastName, string firstName, string middleName) = ReadFIO();
            int age = ReadAge();
            string email = ReadEmail();
            string github = ReadGithubURL();

            Console.WriteLine("===== INFO =====");
            Console.WriteLine($"ФИО: \t\t{lastName} {firstName} {middleName}");
            Console.WriteLine($"Возраст: \t{age}");
            Console.WriteLine($"Email: \t\t{email}");
            Console.WriteLine($"Github: \t{github}");
        }
    }
}
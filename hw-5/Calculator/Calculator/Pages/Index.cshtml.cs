using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Calculator.Pages
{
    public class IndexModel : PageModel
    {
        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                double firstNumber = double.Parse(Request.Form["firstNumber"]);
                double secondNumber = double.Parse(Request.Form["secondNumber"]);
                string operation = Request.Form["operation"];

                return RedirectToPage("/Result", new { FirstNumber = firstNumber, SecondNumber = secondNumber, Operation = operation });
            }
            return Page();
        }
    }
}
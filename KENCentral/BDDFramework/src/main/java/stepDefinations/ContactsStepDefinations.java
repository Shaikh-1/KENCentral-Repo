package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactsStepDefinations {

	WebDriver driver;
	
	@Given("^User is already on the Login Page$")
	public void userInLoginPage() {
		
		System.setProperty("webdriver.chrome.driver",  "C:/Users/shaikh/Desktop\\Chrome Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		driver.manage().window().maximize();
	}
		
		@When("^Title of the Login Page is #1 Free CRM software in the cloud for sales and service$")
	public void title_of_login_page() {
			
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
			
		}
		
		 @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" for contact page$")
		 public void gets_Login(String username, String password){
		 driver.findElement(By.name("username")).sendKeys(username);
		 driver.findElement(By.name("password")).sendKeys(password);
		 }
		
	
		
		@Then("^Click on the Login Button3$")
		public void click_loginButton() {
			 WebElement loginBtn =
					 driver.findElement(By.xpath("//input[@type='submit']"));
					 JavascriptExecutor js = (JavascriptExecutor)driver;
					 js.executeScript("arguments[0].click();", loginBtn);
		}
		@Then("^User is on Home Page3$")
		public void user_in_HomePage() {
			String title = driver.getTitle();
			System.out.println(title);
			Assert.assertEquals("CRMPRO", title);
		}
		
		@Then("^User moves to New Contact Page$")
		public void user_moves_to_new_contact_page() {
			driver.switchTo().frame("mainpanel");
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
			
			}
		
		 @Then("^User enters Contact Details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
		 public void user_enters_contacts_details(String firstname, String lastname, String position){
			 driver.findElement(By.id("first_name")).sendKeys(firstname);
			 driver.findElement(By.id("surname")).sendKeys(lastname);
			 driver.findElement(By.id("company_position")).sendKeys(position);
			 driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		 }
		
		
		@Then("^Close the Browser3$")
		public void close_Browser(){
			driver.close();
			
		}
	
}

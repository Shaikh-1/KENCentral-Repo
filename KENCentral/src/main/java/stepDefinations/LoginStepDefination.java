package stepDefinations;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {

	WebDriver driver;
	
	@Given("^User is in the Login page$")
	public void user_is_in_the_Login_page() {
	    // Write code here that turns the phrase above into concrete actions
	    
	    System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Jyotiprava\\Desktop\\Selenium&Java\\chromedriver_win32 (1)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://kencloudecosysadmin.azurewebsites.net");
		driver.manage().window().maximize();
	}
	
	
	    
		
	

	@When("^Title of the Login page is Login$")
	public void title_of_the_Login_page_is_Login() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(driver.getTitle());
		String actualTitle = driver.getTitle();
		Assert.assertEquals("Title not matched","Login", actualTitle);
	}

	@Then("^User enters the \"([^\"]*)\" in the Email Address field$")
	public void enterUserIdField(String Email)  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("signInName")).sendKeys(Email);
	}

	@Then("^User enters the \\\"([^\\\"]*)\\\" in the Password field$")
	public void userEntersPassword(String Password)  {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.id("password")).sendKeys(Password);
	    
	}

	@Then("^Click on the SignIn Button")
	public void userClicksSignInButton() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("next")).click();
	}
	
	
	
}

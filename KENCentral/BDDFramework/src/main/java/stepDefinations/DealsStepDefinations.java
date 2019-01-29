package stepDefinations;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.google.common.base.Strings;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepDefinations {
	
	WebDriver driver;
	
			
		 @Given("^User is already at the Login Page$")
		 public void user_already_on_login_page(){
			 System.setProperty("webdriver.chrome.driver",  "C:/Users/shaikh/Desktop\\Chrome Driver\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("https://www.freecrm.com/index.html");
		 }
		 
		 @When("^Titles of the Login Page is #1 Free CRM software in the cloud for sales and service")
		 public void title_of_login_page_is_free_CRM(){
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
		 }
		 
		 @Then("^User enters New username and password for Deals page$")
		 public void user_enters_username_and_password(DataTable credentials){
			 
			 List<List<String>> data = credentials.raw();
			
		 driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		 driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
		 }
		
		
		 @Then("^Click on the Login Button1$")
		 public void user_clicks_on_login_button() {
		 WebElement loginBtn =
		 driver.findElement(By.xpath("//input[@type='submit']"));
		 JavascriptExecutor js = (JavascriptExecutor)driver;
		 js.executeScript("arguments[0].click();", loginBtn);
		 }
		 
		 @Then("^User is on Home Page1$")
		 public void user_is_on_hopme_page(){
		 String title = driver.getTitle();
		 System.out.println("Home Page title ::"+ title);
		 Assert.assertEquals("CRMPRO", title);
		 }
		 
		 
		 @Then("^User moves to New Deal Page$")
		 public void user_moves_to_new_contact_page() {
			driver.switchTo().frame("mainpanel");
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
			
			}
		 
		 @Then("^User enters Deal Details$")
		 public void user_enters_contacts_details(DataTable dealData){
			 List<List<String>> dealValues =  dealData.raw();
			 driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
			 driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
			 driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
			 driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
		 }
		 
		 @Then("^Close the Browser1$")
		 public void close_the_browser(){
			 driver.quit();
		 }

}

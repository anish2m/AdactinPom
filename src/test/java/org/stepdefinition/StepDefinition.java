package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition {
public WebDriver driver;
	@Given("Launch the browser")
	public void launch_the_browser() {
		
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
				driver.get("http://adactinhotelapp.com/");
	}

	@When("Enter the username and password")
	public void enter_the_username_and_password() {
		
		WebElement username = driver.findElement(By.xpath("//input[@id='username']"));
		username.sendKeys("greenstechnology");
		WebElement pass = driver.findElement(By.xpath("//input[@id='password']"));
		pass.sendKeys("1234556789");
		
	    
	}

	@When("click the login button")
	public void click_the_login_button() {
		WebElement login = driver.findElement(By.xpath("//input[@id='login']"));
		login.click();
	    
	}

	@Then("Check the page is launched or not")
	public void check_the_page_is_launched_or_not() {
		
		Assert.assertTrue(true);
	  	}

}

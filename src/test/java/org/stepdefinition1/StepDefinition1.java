package org.stepdefinition1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition1 extends AdactinDetails{
	@Given("Launch the website")
	public void launch_the_website() {
		ConfigBrowser();
		maximize();
		openBrowser("http://adactinhotelapp.com/index.php");
		
	}

	@When("Login with {string} and {string}")
	public void login_with_and(String user, String password) throws InterruptedException {
		WebElement username = driver.findElement(By.xpath("//input[@id='username']"));
		fill(username, user);
		
		WebElement pass = driver.findElement(By.id("password"));
		fill(pass, password);
		
		WebElement login = driver.findElement(By.xpath("//input[@id='login']"));
		enter(login);
		
		driver.manage().timeouts().implicitlyWait(4000,TimeUnit.SECONDS);
		
	}

	@When("Validate search hotel page {string} , {string}, {string}, {string}, {string}, {string}")
	public void validate_search_hotel_page(String string, String string2, String string3, String string4, String string5, String string6) throws InterruptedException {
		WebElement location = driver.findElement(By.xpath("//select[@id='location']"));
		dropDown(location, string);
		
		WebElement hotels = driver.findElement(By.xpath("//select[@id='hotels']"));
		dropDown(hotels, string2);
		
		WebElement roomtype = driver.findElement(By.xpath("//select[@id='room_type']"));
		dropDown(roomtype, string3);
		
		WebElement roomNos = driver.findElement(By.xpath("//select[@id='room_nos']"));
		dropDown(roomNos, string4);
		
		WebElement checkin = driver.findElement(By.xpath("//input[@id='datepick_in']"));
		fill(checkin, string5);
		
		WebElement checkout = driver.findElement(By.xpath("//input[@id='datepick_out']"));
		fill(checkout, string6);
		
		WebElement submit = driver.findElement(By.xpath("//input[@id='Submit']"));
		enter(submit);
		
		driver.manage().timeouts().implicitlyWait(7000,TimeUnit.SECONDS);
		
	}

	@When("Hotel confirmation page")
	public void hotel_confirmation_page() throws InterruptedException {
		
		WebElement selection = driver.findElement(By.xpath("//input[@id='radiobutton_0']"));
		enter(selection);
		
		WebElement nextstep = driver.findElement(By.xpath("//input[@id='continue']"));
		enter(nextstep);
		
		driver.manage().timeouts().implicitlyWait(7000,TimeUnit.SECONDS);
		
	}

	@When("Book the hotel {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
	public void book_the_hotel(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) throws InterruptedException {

		WebElement firstname = driver.findElement(By.xpath("//input[@id='first_name']"));
		fill(firstname, string);
		
		WebElement lastname = driver.findElement(By.xpath("//input[@id='last_name']"));
		fill(lastname, string2);
		
		WebElement address = driver.findElement(By.xpath("//textarea[@id='address']"));
		fill(address, string3);
		
		WebElement creditcard = driver.findElement(By.xpath("//input[@id='cc_num']"));
		fill(creditcard, string4);
		
		WebElement cctype = driver.findElement(By.xpath("//Select[@id='cc_type']"));
		dropDown(cctype, string5);
		
		WebElement expmonth = driver.findElement(By.xpath("//Select[@id='cc_exp_month']"));
		dropDown(expmonth, string6);
		
		WebElement expyear = driver.findElement(By.xpath("//Select[@id='cc_exp_year']"));
		dropDown(expyear, string7);
		
		WebElement ccv = driver.findElement(By.xpath("//input[@id='cc_cvv']"));
		fill(ccv, string8);
		
		WebElement booknow = driver.findElement(By.xpath("//input[@id='book_now']"));
		enter(booknow);
		
		driver.manage().timeouts().implicitlyWait(7000,TimeUnit.SECONDS);
		
	}

	@Then("print the booking order")
	public void print_the_booking_order() {
		
		WebElement orderno = driver.findElement(By.xpath("//input[@id='order_no']"));
		String text = orderno.getAttribute("value");
		System.out.println(text);

	}

	
	}

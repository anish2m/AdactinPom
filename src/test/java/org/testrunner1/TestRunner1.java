package org.testrunner1;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Adactin", glue="org.stepdefinition1",monochrome=true, plugin ={ "json:C:\\Users\\91908\\eclipse1\\Cucumber1\\Reports\\json.json"})
public class TestRunner1 {
	
	@AfterClass
	public static void afterClass() {
		JvmReport.generateReport("C:\\\\Users\\\\91908\\\\eclipse1\\\\Cucumber1\\\\Reports\\\\jvm.json");
	}
	
	

}

package org.testrunner1;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	
	public static void generateReport(String json) {
		
		File f = new File("C:\\Users\\91908\\eclipse1\\Cucumber1\\Reports\\jvm");
		Configuration config = new Configuration(f, "Adactin Details");
		
		config.addClassifications("Platform", "Windows 10");
		config.addClassifications("Browser", "Chrome");
		config.addClassifications("Environment", "QA Environment");
		config.addClassifications("Sprint", "20");
		
		List<String> l = new ArrayList<>();
		l.add(json);
		
		ReportBuilder report = new ReportBuilder(l,config);
		report.generateReports();
		
	}

}

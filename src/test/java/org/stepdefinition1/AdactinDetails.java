package org.stepdefinition1;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class AdactinDetails {
	
	public static WebDriver driver;
	
public static void ConfigBrowser() {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\91908\\eclipse1\\ProjectData\\driver\\chromedriver.exe");
		
		 driver = new ChromeDriver();
	}
	
	public static void maximize() {
		
		driver.manage().window().maximize();
	}
	
	public static void openBrowser(String url) {
		
		driver.get(url);
	}
public static void fill(WebElement element, String value) {
		
		element.sendKeys(value);
	}
	
	public static void enter(WebElement element) {
		
		element.click();
	}
	
	public static String excelRead(String sheet, int row, int cell) throws IOException {
		
		String value ="";
		
		File f = new File("C:\\Users\\91908\\eclipse1\\AdactinHotel\\excel\\Adactin Hotel Details.xlsx");
		FileInputStream fin = new FileInputStream(f);
		Workbook w = new XSSFWorkbook(fin);
		Sheet s = w.getSheet(sheet);
		Row r = s.getRow(row);
		Cell c = r.getCell(cell);
		int celltype = c.getCellType();
		
		if(celltype==1) {
			
			value = c.getStringCellValue();
			
		}
		else if(celltype==0) {
			
			if(DateUtil.isCellDateFormatted(c)) {
				
				Date date = c.getDateCellValue();
				SimpleDateFormat sim = new SimpleDateFormat("MM-dd-yyyy");
				value = sim.format(date);
			}
			else {
				
			 double d = c.getNumericCellValue();
				long l = (long)d;
				value = String.valueOf(l);
				
			}
		}
		return value;
	}
	public static void dropDown(WebElement element, String value) {
		
		Select s = new Select(element);
		s.selectByValue(value);
	}
	
	public static void excelWrite(String sheet,int row, int cell, String setcellvalue ) throws IOException {
		
		File f = new File("C:\\Users\\91908\\eclipse1\\AdactinHotel\\excelwrite\\NewDatas.xlsx");
		Workbook w = new XSSFWorkbook();
		Sheet s = w.createSheet(sheet);
		Row r = s.createRow(row);
		Cell c = r.createCell(row);
		c.setCellValue(setcellvalue);
		FileOutputStream fout = new FileOutputStream(f);
		w.write(fout);
		
	}
	
}

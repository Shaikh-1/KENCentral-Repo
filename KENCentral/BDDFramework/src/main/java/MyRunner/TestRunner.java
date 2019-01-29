package MyRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features= "C:\\Users\\shaikh\\git\\BDD-Project\\BDDFramework\\src\\main\\java\\features"
		,glue= {"stepDefinations"},
		format= {"pretty", "html: test-output", "junit:junit_xml/cucumber.xml"},
		monochrome = true,
		dryRun = false
		)

		

public class TestRunner {
 
	
	
	
}

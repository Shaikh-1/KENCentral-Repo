package myRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features= "C:\\Users\\shaikh\\eclipse-workspace\\KENCentral\\src\\main\\java\\features"
		,glue= {"stepDefinations"},format= {"pretty", "html: test-output", "junit:junit_xml/cucumber.xml"}
,dryRun= false,
monochrome = true

		)

public class TestRunner {

}

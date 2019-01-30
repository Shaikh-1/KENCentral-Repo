package myRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features= "C:\\Users\\Jyotiprava\\Desktop\\Selenium&Java\\selenium-java-3.141.59\\KENCentral-Repo.git\\KENCentral\\src\\main\\java\\features"
		,glue= {"stepDefinations"},format= {"pretty", "html: test-output", "junit:junit_xml/cucumber.xml"}
,dryRun= false,
monochrome = true

		)

public class TestRunner {

}

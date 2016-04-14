//
//  GPA_CalculatorUITests.swift
//  GPA CalculatorUITests
//
//  Created by Kyle Huber on 4/11/16.
//  Tests the interface on the two different pages.
//

import XCTest

class GPA_CalculatorUITests: XCTestCase {

    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        XCUIApplication().launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func NavBar() {
        
        let app = XCUIApplication()
        app.otherElements["navigation"].childrenMatchingType(.Button).element.tap()
        app.staticTexts["Calculate Semester GPA"].tap()
        app.otherElements["navigation"].childrenMatchingType(.Button).element.tap()
        app.staticTexts["Calculate Desired GPA"].tap()
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
    
    func CalculateDesiredGPA() {
        XCUIDevice.sharedDevice().orientation = .Portrait
        
        let app = XCUIApplication()
        let gpaCalculationsElement = app.otherElements["GPA Calculations"]
        gpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(0).tap()
        gpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(1).tap()
        app.links[" Taking Replacement Credits"].tap()
        
        let textField = gpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(2)
        textField.tap()
        gpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(3).tap()
        gpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(4).tap()
        gpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(5).tap()
        app.buttons["Add another semester"].tap()
        textField.tap()
        
        let element3 = app.childrenMatchingType(.Window).elementBoundByIndex(0).childrenMatchingType(.Other).element.childrenMatchingType(.Other).element.childrenMatchingType(.Other).element
        let element = element3.childrenMatchingType(.Other).element
        element.tap()
        element3.childrenMatchingType(.Other).elementBoundByIndex(0).tap()
        app.buttons["Calculate GPA"].tap()
        element.tap()
        app.buttons["Calculate Semester GPA"].tap()
        
        let element2 = gpaCalculationsElement.childrenMatchingType(.Other).elementBoundByIndex(15)
        element2.childrenMatchingType(.TextField).elementBoundByIndex(0).tap()
        element2.childrenMatchingType(.TextField).elementBoundByIndex(1).tap()
        
        let addAnotherClassButton = app.buttons["Add Another Class"]
        addAnotherClassButton.tap()
        addAnotherClassButton.tap()
        element2.childrenMatchingType(.Other).elementBoundByIndex(10).buttons["Calculate GPA"].tap()
        element2.childrenMatchingType(.TextField).elementBoundByIndex(5).swipeUp()
        app.buttons["Close"].tap()
        
    }
    
    func calcSemesterGPA() {
        
        let app = XCUIApplication()
        let button = app.otherElements["navigation"].childrenMatchingType(.Button).element
        button.tap()
        button.tap()
        button.tap()
        app.staticTexts["Calculate Semester GPA"].tap()
        
        let semesterGpaCalculationsElement = app.otherElements["Semester GPA Calculations"]
        semesterGpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(0).tap()
        semesterGpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(1).tap()
        app.buttons["Calculate GPA"].tap()
        
        let addAnotherClassButton = app.buttons["Add Another Class"]
        addAnotherClassButton.tap()
        addAnotherClassButton.tap()
        addAnotherClassButton.tap()
        semesterGpaCalculationsElement.childrenMatchingType(.TextField).elementBoundByIndex(7).tap()
        
    }
    
}

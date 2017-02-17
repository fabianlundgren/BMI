describe("BMICalculator", function() {
  var calculator;
  var person;

beforeEach(function() {
  person = new Person({weight: 90, height: 186, pounds: 150, feet: 5, inches: 10});
  calculator = new BMICalculator();
});

it("calculates BMI for a person using the metric method", function() {
calculator.metric_bmi(person);
expect(person.bmiValue).toEqual(26.01);
});

it("calculates BMI for a person using the imperial method", function() {
  calculator.imperial_bmi(person);
  expect(person.bmiValue).toEqual(21.52);
  });
});

  describe ("Person", function() {
  var person;

  beforeEach(function() {
  person = new Person({weight: 90, height: 186, pounds: 150, feet: 5, inches: 10});
  });

  it("should have a weight of 90", function() {
  expect(person.weight).toEqual(90);
  });

  it("should have a height of 186", function() {
  expect(person.height).toEqual(186);
  });

  it("should weigh 150 pounds", function() {
  expect(person.pounds).toEqual(150);
  });

  it("should be 5 feet tall", function() {
  expect(person.feet).toEqual(5);
  });

  it("should be 10 inches tall", function() {
  expect(person.inches).toEqual(10);
  });

  it("should calculate BMI value", function() {
  person.calculate_bmi();
  expect(person.bmiValue).toEqual(26.01);
  });

  it("should have a BMI message", function() {
  person.calculate_bmi();
  expect(person.bmiMessage).toEqual("Overweight");
  });
});

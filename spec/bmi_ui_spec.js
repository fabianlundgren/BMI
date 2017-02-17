  describe('BMI_UI - index.html', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate_bmi').trigger('click');
    });

    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe("Your BMI is 26.01");
    });

    it("displays BMI message", function() {
      expect($('#display_message').text()).toBe("and you are Overweight");
    });
});

describe('BMI UI imperial', function() {

    $('#pounds').val('150');
    $('#feet').val('5');
    $('#inches').val('10');
    $('#calculate_imperial').trigger('click');

    it("displays BMI message", function() {
      expect($('#display_message').text()).toBe("and you are Overweight");
    });
});

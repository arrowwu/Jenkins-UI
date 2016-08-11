'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('JobCat Application', function() {

  it('should redirect `index.html` to `index.html#!/jobs', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/jobs');
  });

  describe('View: Job list', function() {

    beforeEach(function() {
      browser.get('index.html#!/jobs');
    });

    it('should filter the job list as a user types into the search box', function() {
      var jobList = element.all(by.repeater('job in $ctrl.jobs'));
      var query = element(by.model('$ctrl.query'));

      expect(jobList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(jobList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(jobList.count()).toBe(8);
    });

    it('should be possible to control job order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var jobNameColumn = element.all(by.repeater('job in $ctrl.jobs').column('job.name'));

      function getNames() {
        return jobNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render job specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.jobs li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/jobs/nexus-s');
    });

  });

  describe('View: Job detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/jobs/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.job.name')).getText()).toBe('Nexus S');
    });

    it('should display the first job image as the main job image', function() {
      var mainImage = element(by.css('img.job.selected'));

      expect(mainImage.getAttribute('src')).toMatch(/img\/jobs\/nexus-s.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
      var mainImage = element(by.css('img.job.selected'));
      var thumbnails = element.all(by.css('.job-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/jobs\/nexus-s.2.jpg/);

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/jobs\/nexus-s.0.jpg/);
    });

  });

});

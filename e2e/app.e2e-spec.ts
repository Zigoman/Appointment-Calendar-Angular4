import { AppointmentCalendarAngular4Page } from './app.po';

describe('appointment-calendar-angular4 App', () => {
  let page: AppointmentCalendarAngular4Page;

  beforeEach(() => {
    page = new AppointmentCalendarAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});


import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentDate: Date = new Date(2021, 7, 23);
  public newViewMode: View = 'Month';

  public eventData: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Subject: 'Board Meeting',
      StartTime: new Date(2021, 7, 13, 9, 0),
      EndTime: new Date(2021, 7, 13, 11, 0)
    },
    {
      Id: 2,
      Subject: 'Training session on JSP',
      StartTime: new Date(2021, 7, 15, 15, 0),
      EndTime: new Date(2021, 7, 15, 17, 0)
    },
    {
      Id: 3,
      Subject: 'Sprint Planning with Team members',
      StartTime: new Date(2021, 7, 25, 9, 30),
      EndTime: new Date(2021, 7, 25, 11, 0)
    }]

  }
}


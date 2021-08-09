
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    ScheduleModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService],
})
export class AppModule { }


import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentTopComponent} from './content-top.component';
import {LoggerService} from "../../../@core/services/logger.service";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";

describe('ContentTopComponent', () => {
  let component: ContentTopComponent;
  let fixture: ComponentFixture<ContentTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [ContentTopComponent],
      providers: [LoggerService, {
        provide: APP_BASE_HREF,
        useValue: "/"
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

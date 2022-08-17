import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';
import {LoggerService} from "../../../@core/services/logger.service";
import {ApiService} from "../../../@core/services/api.service";
import {Observable, of} from "rxjs";
import {HttpClientModule} from "@angular/common/http";

class MockApiService extends ApiService {
  getApiVersion(): Observable<string> {
    return of("0.1.0");
  }
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ LoggerService ],
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      FooterComponent,
      {
        set: {
          providers: [{provide: ApiService, useClass: MockApiService}]
        }
      }
    );
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.username).toEqual("inconnu");
    expect(component.apiVersion).toEqual("0.1.0");
    expect(component.uiVersion).toEqual(require('../../../../../package.json').version + "-dev")
  });
});

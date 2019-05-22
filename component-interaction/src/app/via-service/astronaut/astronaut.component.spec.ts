import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { MissionService } from '../service/mission.service';

import { AstronautComponent } from './astronaut.component';

import { AppModule } from '../../app.module';


let missionService: MissionService;
let component: AstronautComponent;
let fixture: ComponentFixture<AstronautComponent>;
let page: Page;

fdescribe('AstronautComponent',() => {
  beforeEach(()=>{
    missionService = new MissionService();
  });
  describe('with AppModule setup', appModuleSetup)
})

function appModuleSetup(){
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule],
      providers:[
        { provide: MissionService, useValue: missionService }
      ]
    }).compileComponents();
  }));
  describe('when mission announced', () => {
    beforeEach(async(() => {
      
      createComponent()
    }));

    it('should contain the Fly to the moon announcement',() => {
      //arrange
      let announcement: String;
      missionService.missionAnnounced$.subscribe( a => {
        announcement = a;
      })

      //act
      missionService.announceMission('Fly to the moon!');
      //assert
      expect(component.mission).toBe('Fly to the moon!');
    });

  })
}

function createComponent(){
  fixture = TestBed.createComponent(AstronautComponent);
  component = fixture.componentInstance;
  page = new Page(fixture);

  // 1st change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    // 2nd change detection displays the async-fetched hero
    fixture.detectChanges();
  });
}

class Page {
  // getter properties wait to query the DOM until called.
  get buttons()     { return this.queryAll<HTMLButtonElement>('button'); }
  get confirmButton()     { return this.buttons[0]; }
  get mission() { return this.query<HTMLElement>('strong'); }
  get astronautName()   { return this.query<HTMLElement>('span'); }

  constructor(fixture: ComponentFixture<AstronautComponent>) {
    component = fixture.componentInstance;
  }

  //// query helpers ////
  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}
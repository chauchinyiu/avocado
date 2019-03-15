 
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {JokeService} from './joke.service';
import {inject, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
 
describe('JokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));


});


 


describe('Joke Service', () => {

  describe('tested by HttpClientTestingModule', () => {

    let service: JokeService;
    let httpMock: HttpTestingController;

    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }));

    beforeEach(inject([JokeService, HttpTestingController], (s: JokeService, h: HttpTestingController) => {
      service = s;
      httpMock = h;
    }));

    it('should be created', () => {
      const service: JokeService = TestBed.get(JokeService);
      expect(service).toBeTruthy();
    });

    it('calls http testing controller', () => {
      service.fetchJoke().subscribe((value: {}) => expect(value).toEqual("this is a test"));

      const req = httpMock.expectOne('http://api.icndb.com/jokes/random');
      expect(req.request.method).toEqual('GET');
      req.flush({value: {joke: "this is a test"}});
      httpMock.verify();
    });

    it('calls http testing controller with parametner ', () => {
      service.fetchJokeWithName('flo','joe').subscribe((value: {}) => expect(value).toEqual("this is a test"));

      const req = httpMock.expectOne('http://api.icndb.com/jokes/random?firstName=flo&lastName=joe');
 
      expect(req.request.method).toEqual('GET');
      req.flush({value: {joke: "this is a test"}});
      httpMock.verify();
    });

  });

  describe('tested by service spy', () => {

    it('calls httpClients get', () => {
      const httpClientSpy = jasmine.createSpyObj('httpClientSpy', ['get']);
      httpClientSpy.get.and.returnValue(of({ "type": "success", "value": { "id": 343, "joke": "Chuck Norris doesn't chew gum. Chuck Norris chews tin foil.", "categories": [] } }));
      let service = new JokeService(httpClientSpy);
      service.fetchJoke().subscribe((value: {}) => expect(value).toEqual("Chuck Norris doesn't chew gum. Chuck Norris chews tin foil."));
      expect(httpClientSpy.get).toHaveBeenCalledWith('http://api.icndb.com/jokes/random');
    });

  });
});

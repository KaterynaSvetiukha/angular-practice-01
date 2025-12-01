import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from './data';
describe('Data', () => {
  let service: Data;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // подключаем HttpClientTestingModule, который делает фейковый HTTP-клиент
      providers: [Data], // регестрируем сервис Data
    });
    service = TestBed.inject(Data); // на каждом тесте создаем новый экземпляр сервера
    httpMock = TestBed.inject(HttpTestingController); // на каждом тесте контролируем HTTP-запросы
  });
  afterEach(() => {
    httpMock.verify(); // проверяем, что все HTTP-запросы завершены
  });
  it('should fetch projects', () => {
    const mockProjects = [
      {
        id: '1',
        title: 'Landing Page',
        description:
          'Сучасний лендінг для IT-компанії. Цей проєкт — це приклад стильного, адаптивного та технологічного лендінгу для IT-компанії, який поєднує мінімалістичний дизайн, зручну навігацію та чітке позиціонування бренду. Основна мета — презентувати компанію як надійного технологічного партнера, який створює інноваційні рішення для бізнесу.',
        tools: ['Figma', 'Photoshop'],
        imageUrl:
          'https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png',
        special: true,
        short_sub:
          'Курс присвячений створенню стильного, адаптивного та технологічного лендінгу для IT-компанії. Учасники навчаться поєднувати мінімалістичний дизайн, чітку візуальну ієрархію та сучасні UI-патерни для формування сильної онлайн-присутності бренду.',
        price: '3000 UAN',
      },
    ];

    service.getItems();

    service.itemSubject.subscribe((projects) => {
      expect(projects).toEqual(mockProjects);
    });
      
    const req = httpMock.expectOne('http://localhost:3000/projects');
    expect(req.request.method).toBe('GET');
    req.flush(mockProjects);
  });
});

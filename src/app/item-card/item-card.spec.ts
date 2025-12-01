import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCard } from './item-card';
import { DesignProject } from '../shared/models/design-project.model';
import { By } from '@angular/platform-browser';
import { ShortPipe } from '../pipes/short-pipe';
import { HoverStyle } from '../directives/hover-style';
import { RouterTestingModule } from '@angular/router/testing';
describe('ItemCard', () => {
  let component: ItemCard;
  let fixture: ComponentFixture<ItemCard>;
  const mockProject: DesignProject = {
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
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCard, RouterTestingModule], // standalone компонент
      providers: [],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemCard);
    component = fixture.componentInstance;
    component.project = mockProject; // прокидываем данные
    fixture.detectChanges();
  });
  it('should display project title and price', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(mockProject.title);
    expect(compiled.textContent).toContain(mockProject.price);
  });
  it('should emit selectProject event when onSelect is called', () => {
    spyOn(component.selectProject, 'emit');
    component.onSelect();
    expect(component.selectProject.emit).toHaveBeenCalledWith(mockProject);
  });
  it('should emit event on click', () => {
    spyOn(component.selectProject, 'emit');
    const cardElement = fixture.debugElement.query(By.css('.card')); // предположим, что у тебя в html есть class="card"
    cardElement.triggerEventHandler('click', null);
    expect(component.selectProject.emit).toHaveBeenCalledWith(mockProject);
  });
});

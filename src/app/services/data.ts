import { Injectable } from '@angular/core';
import { DesignProject } from '../shared/models/design-project.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private designProjects: DesignProject[] = [
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
    {
      id: '2',
      title: 'Mobile App',
      description:
        'Дизайн мобільного додатку для замовлення їжі. Цей проєкт демонструє сучасний, зручний та інтуїтивно зрозумілий інтерфейс мобільного додатку, який дозволяє користувачам швидко та комфортно замовляти їжу онлайн.Основна мета — створити інтуїтивну навігацію, мінімальну кількість кроків для замовлення та приємний візуальний досвід, щоб підвищити лояльність користувачів.',
      tools: ['Figma', 'Illustrator'],
      imageUrl:
        'https://cdn.dribbble.com/userupload/11409983/file/original-dbef02bf6421b78a8f1dbf5c7ebe0af9.png?resize=752x&vertical=center',
      special: false,
      short_sub:
        'Цей курс демонструє процес створення зручного, сучасного та інтуїтивного інтерфейсу мобільного застосунку для замовлення їжі онлайн. Студенти дізнаються, як проєктувати UX-флоу для швидкого оформлення замовлення, оптимізувати кількість кроків користувача та використовувати кольори й типографіку для емоційного залучення.',
      price: '4000 UAN',
    },
    {
      id: '3',
      title: 'E-commerce Website',
      description:
        'Інтуїтивно зрозумілий дизайн для інтернет-магазину. Цей проєкт демонструє сучасний підхід до UI/UX-дизайну e-commerce платформи, створений для зручності користувача та підвищення конверсії. Основна мета — зробити процес покупок максимально простим, швидким і приємним, з акцентом на логічну навігацію, зрозумілу структуру та привабливу візуальну подачу товарів.',
      tools: ['Sketch', 'Photoshop'],
      imageUrl: 'https://horoshop.ua/content/uploads/images/vzhual-1.jpg',
      special: false,
      short_sub:
        'Курс присвячений розробці сучасного та зручного UI/UX-дизайну e-commerce платформи. Учасники опанують принципи побудови ефективної архітектури сторінок, структури каталогу товарів, адаптивного дизайну та візуального балансу між естетикою й функціональністю.',
      price: '5000 UAN',
    },
    {
      id: '4',
      title: 'Brand Identity',
      description:
        'Повний брендинг для кав’ярні з унікальним логотипом і стилем. Цей проєкт представляє комплексний підхід до створення корпоративного стилю для кав’ярні, включаючи логотип, фірмові кольори, шрифти та елементи візуальної ідентичності. Мета — сформувати впізнаваний бренд, який відображає атмосферу закладу та приваблює клієнтів через естетичний та послідовний дизайн.',
      tools: ['Illustrator', 'Photoshop'],
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c80c05166220105.641458fe523dc.jpg',
      special: false,
      short_sub:
        'Цей курс охоплює повний цикл створення фірмового стилю для кав’ярні — від розробки логотипу до побудови цілісної візуальної ідентичності. Учасники навчаться працювати з кольоровими палітрами, типографікою, формами та композицією для створення бренду, який передає атмосферу затишку, тепла й ароматної кави. Мета:',
      price: '6000 UAN',
    },
  ];

  private itemSubject: BehaviorSubject<DesignProject[]> = new BehaviorSubject<DesignProject[]>(
    this.designProjects
  );
  designProjects$: Observable<DesignProject[]> = this.itemSubject.asObservable();

  constructor() {}

  getItems(): Observable<DesignProject[]> {
    return of(this.designProjects);
  }

  updateItems(newProjects: DesignProject[]): void {
    this.itemSubject.next(newProjects);
  }

  getFilteredProject(searchText: string): void {
    const text = searchText.toLowerCase();

    const filtered = this.designProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(text) ||
        project.description.toLowerCase().includes(text)
    );

    this.updateItems(filtered);
  }

  addItem(newProject: any) {
    this.designProjects.push({id: Date.now(), ...newProject });
  }
}

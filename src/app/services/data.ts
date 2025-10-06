import { Injectable } from '@angular/core';
import { DesignProject } from '../shared/models/design-project.model';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private designProjects: DesignProject[] = [
    {
      id: '1',
      title: 'Landing Page',
      description: 'Сучасний лендінг для IT-компанії',
      tools: ['Figma', 'Photoshop'],
      imageUrl:
        'https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png',
      special: true,
    },
    {
      id: '2',
      title: 'Mobile App',
      description: 'Дизайн мобільного додатку для замовлення їжі',
      tools: ['Figma', 'Illustrator'],
      imageUrl:
        'https://cdn.dribbble.com/userupload/11409983/file/original-dbef02bf6421b78a8f1dbf5c7ebe0af9.png?resize=752x&vertical=center',
      special: false,
    },
    {
      id: '3',
      title: 'E-commerce Website',
      description: 'Інтуїтивно зрозумілий дизайн для інтернет-магазину',
      tools: ['Sketch', 'Photoshop'],
      imageUrl: 'https://horoshop.ua/content/uploads/images/vzhual-1.jpg',
      special: false,
    },
    {
      id: '4',
      title: 'Brand Identity',
      description: 'Повний брендинг для кав’ярні з унікальним логотипом і стилем',
      tools: ['Illustrator', 'Photoshop'],
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c80c05166220105.641458fe523dc.jpg',
      special: false,
    }
  ];

  getItems():DesignProject[] {
    return this.designProjects;
  }
}

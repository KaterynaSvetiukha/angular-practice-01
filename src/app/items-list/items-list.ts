import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { DesignProject } from '../shared/models/design-project.model';

@Component({
  selector: 'app-items-list',
  imports: [NgFor, ItemCard],
  standalone: true,
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {
  designProjects: DesignProject[] = [
    {
      id: '1', title: 'landing Page', description: 'Сучасний лендінг для IT-компанії',
      tools: ['Figma', 'Photoshop'],
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6c73c4194070583.Y3JvcCwyMjY0LDE3NzEsMTE3LDA.png'
    }, 
    {
      id: '2', title: 'Mobile App', description: 'Дизайн мобільного додатку для замовлення їжі',
      tools: ['Figma', 'Illustrator'],
      imageUrl: 'https://cdn.dribbble.com/userupload/11409983/file/original-dbef02bf6421b78a8f1dbf5c7ebe0af9.png?resize=752x&vertical=center'
    },
    {
      id: '3', title: 'E-commerce Website', description: 'Інтуїтивно зрозумілий дизайн для інтернет-магазину',
      tools: ['Sketch', 'Photoshop'],
      imageUrl: 'https://horoshop.ua/content/uploads/images/vzhual-1.jpg'
    }
  ];
}

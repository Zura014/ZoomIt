import { Component } from '@angular/core';
import { Card } from '../shared/types/card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  exampleCard: Card[] = [
    {
      id: '1',
      mainImageUrl: 'assets/pfps/5baa9751-66d1-4940-8f73-84fdd2152fe2.png',
      title: 'სკოლა',
      subjects: ['მათემატიკა', 'ინგლისური'],
      sessions: [
        { duration: 45, price: 16.0 },
        { duration: 90, price: 25.0 },
      ],
      tutor: {
        name: 'ლია ბუწაშვილი',
        profileImageUrl: 'assets/pfps/5baa9751-66d1-4940-8f73-84fdd2152fe2.png',
      },
      rating: {
        average: 4.5,
        reviewsCount: 10,
      },
    },
    {
      id: '2',
      mainImageUrl: 'assets/pfps/088a7826-57fe-4734-9331-24877754f166.jpeg',
      title: 'საბავშვო სტუდია',
      subjects: ['დაწყებითი', 'ინგლისური'],
      sessions: [
        { duration: 30, price: 12.0 },
        { duration: 60, price: 20.0 },
      ],
      tutor: {
        name: 'ნინო გუგუნაშვილი',
        profileImageUrl:
          'assets/pfps/088a7826-57fe-4734-9331-24877754f166.jpeg',
      },
      rating: {
        average: 4.8,
        reviewsCount: 8,
      },
    },
    {
      id: '3',
      mainImageUrl: 'assets/pfps/839be32d-2eeb-4081-831d-0b845c117c9e.jpg',
      title: 'უნივერსიტეტი',
      subjects: ['ფიზიკა', 'მათემატიკა'],
      sessions: [
        { duration: 60, price: 22.5 },
        { duration: 120, price: 40.0 },
      ],
      tutor: {
        name: 'გიორგი ქავთარაძე',
        profileImageUrl: 'assets/pfps/839be32d-2eeb-4081-831d-0b845c117c9e.jpg',
      },
      rating: {
        average: 4.9,
        reviewsCount: 15,
      },
    },
    {
      id: '4',
      mainImageUrl: 'assets/pfps/12c84f98-3e9b-4f91-9bd3-77b63f6d8b71.jpg',
      title: 'ლიტერატურის კურსი',
      subjects: ['ლიტერატურა', 'ენა და კულტურა'],
      sessions: [
        { duration: 45, price: 18.0 },
        { duration: 90, price: 30.0 },
      ],
      tutor: {
        name: 'მარიამ კვაჭანტირაძე',
        profileImageUrl: 'assets/pfps/12c84f98-3e9b-4f91-9bd3-77b63f6d8b71.jpg',
      },
      rating: {
        average: 4.3,
        reviewsCount: 20,
      },
    },
    {
      id: '5',
      mainImageUrl: 'assets/pfps/78de72b4-4ae7-4d5f-9452-5648f9c8b356.jpg',
      title: 'ბიზნესის აკადემია',
      subjects: ['ბიზნესი', 'ფინანსები'],
      sessions: [
        { duration: 50, price: 25.0 },
        { duration: 100, price: 45.0 },
      ],
      tutor: {
        name: 'თემო არჯევანიძე',
        profileImageUrl: 'assets/pfps/78de72b4-4ae7-4d5f-9452-5648f9c8b356.jpg',
      },
      rating: {
        average: 4.6,
        reviewsCount: 18,
      },
    },
  ];
  example2Cards: Card[] = [
    {
      id: '6',
      mainImageUrl: 'assets/pfps/9f12345e-33d2-47f6-9fb1-84fdd2423fd1.jpg',
      title: 'არქიტექტურის სკოლა',
      subjects: ['არქიტექტურა', 'დიზაინი'],
      sessions: [
        { duration: 60, price: 30.0 },
        { duration: 120, price: 50.0 },
      ],
      tutor: {
        name: 'ანა შაქარაშვილი',
        profileImageUrl: 'assets/pfps/9f12345e-33d2-47f6-9fb1-84fdd2423fd1.jpg',
      },
      rating: {
        average: 4.7,
        reviewsCount: 25,
      },
    },
    {
      id: '7',
      mainImageUrl: 'assets/pfps/a8712fda-46a1-412d-90cd-72df42e0f3b2.png',
      title: 'კომპიუტერული მეცნიერება',
      subjects: ['პროგრამირება', 'ალგორითმები'],
      sessions: [
        { duration: 45, price: 20.0 },
        { duration: 90, price: 35.0 },
      ],
      tutor: {
        name: 'დავით კვარაცხელია',
        profileImageUrl: 'assets/pfps/a8712fda-46a1-412d-90cd-72df42e0f3b2.png',
      },
      rating: {
        average: 4.9,
        reviewsCount: 30,
      },
    },
    {
      id: '8',
      mainImageUrl: 'assets/pfps/b9f34db2-11d3-4b7c-b79e-1e0d9e2e8a3e.jpg',
      title: 'სამზარეულოს აკადემია',
      subjects: ['კულინარია', 'დასალომბარდება'],
      sessions: [
        { duration: 60, price: 18.0 },
        { duration: 120, price: 32.0 },
      ],
      tutor: {
        name: 'ლელა მამალაძე',
        profileImageUrl: 'assets/pfps/b9f34db2-11d3-4b7c-b79e-1e0d9e2e8a3e.jpg',
      },
      rating: {
        average: 4.2,
        reviewsCount: 16,
      },
    },
    {
      id: '9',
      mainImageUrl: 'assets/pfps/5edfa34e-c5ed-4d5a-a1f5-2387ab254678.jpg',
      title: 'ფოტოგრაფიის სტუდია',
      subjects: ['ფოტოგრაფია', 'ვიზუალური ხელოვნება'],
      sessions: [
        { duration: 45, price: 15.0 },
        { duration: 90, price: 28.0 },
      ],
      tutor: {
        name: 'ნოდარ გელაშვილი',
        profileImageUrl: 'assets/pfps/5edfa34e-c5ed-4d5a-a1f5-2387ab254678.jpg',
      },
      rating: {
        average: 4.8,
        reviewsCount: 22,
      },
    },
    {
      id: '10',
      mainImageUrl: 'assets/pfps/dfc874b1-a87f-4b94-bd6c-8fdf5a33e123.jpg',
      title: 'მუსიკის სკოლა',
      subjects: ['ვიოლინო', 'პიანინო'],
      sessions: [
        { duration: 50, price: 20.0 },
        { duration: 100, price: 38.0 },
      ],
      tutor: {
        name: 'მარიამ ცერცვაძე',
        profileImageUrl: 'assets/pfps/dfc874b1-a87f-4b94-bd6c-8fdf5a33e123.jpg',
      },
      rating: {
        average: 4.4,
        reviewsCount: 10,
      },
    },
    {
      id: '11',
      mainImageUrl: 'assets/pfps/e345feda-93e3-4cb2-b7fc-d1f3c5c2c1a1.jpg',
      title: 'კინოს სკოლა',
      subjects: ['კინო', 'სცენარის წერა'],
      sessions: [
        { duration: 45, price: 25.0 },
        { duration: 90, price: 45.0 },
      ],
      tutor: {
        name: 'ბესო გოგიჩაიშვილი',
        profileImageUrl: 'assets/pfps/e345feda-93e3-4cb2-b7fc-d1f3c5c2c1a1.jpg',
      },
      rating: {
        average: 4.1,
        reviewsCount: 13,
      },
    },
    {
      id: '12',
      mainImageUrl: 'assets/pfps/f0017a8d-7c58-4d63-91cf-2c6e4c2cba01.jpg',
      title: 'ცეკვის აკადემია',
      subjects: ['ბალეტი', 'თანამედროვე ცეკვა'],
      sessions: [
        { duration: 60, price: 22.0 },
        { duration: 120, price: 40.0 },
      ],
      tutor: {
        name: 'ნუცა მაისურაძე',
        profileImageUrl: 'assets/pfps/f0017a8d-7c58-4d63-91cf-2c6e4c2cba01.jpg',
      },
      rating: {
        average: 4.6,
        reviewsCount: 18,
      },
    },
    {
      id: '13',
      mainImageUrl: 'assets/pfps/7db45f0e-4b12-4321-985e-1c1f2e0b3ed4.jpg',
      title: 'მხატვრის სტუდია',
      subjects: ['მხატვრობა', 'გრაფიკა'],
      sessions: [
        { duration: 60, price: 25.0 },
        { duration: 120, price: 45.0 },
      ],
      tutor: {
        name: 'სალომე კინწურაშვილი',
        profileImageUrl: 'assets/pfps/7db45f0e-4b12-4321-985e-1c1f2e0b3ed4.jpg',
      },
      rating: {
        average: 4.3,
        reviewsCount: 11,
      },
    },
    {
      id: '14',
      mainImageUrl: 'assets/pfps/cd8945f3-ae9b-4b56-8c9c-7b1dfb3d8a1c.jpg',
      title: 'ფილოსოფიის სკოლა',
      subjects: ['ფილოსოფია', 'ლოგიკა'],
      sessions: [
        { duration: 50, price: 15.0 },
        { duration: 100, price: 30.0 },
      ],
      tutor: {
        name: 'მიხეილ ბერიძე',
        profileImageUrl: 'assets/pfps/cd8945f3-ae9b-4b56-8c9c-7b1dfb3d8a1c.jpg',
      },
      rating: {
        average: 4.5,
        reviewsCount: 14,
      },
    },
    {
      id: '15',
      mainImageUrl: 'assets/pfps/2e4b9e7a-9b4a-4fb8-8c3e-f3c9b3a0e7e2.jpg',
      title: 'ბიზნესის სკოლა',
      subjects: ['მარკეტინგი', 'მენეჯმენტი'],
      sessions: [
        { duration: 60, price: 28.0 },
        { duration: 120, price: 50.0 },
      ],
      tutor: {
        name: 'ელენე ჟღენტი',
        profileImageUrl: 'assets/pfps/2e4b9e7a-9b4a-4fb8-8c3e-f3c9b3a0e7e2.jpg',
      },
      rating: {
        average: 4.9,
        reviewsCount: 20,
      },
    },
  ];
}

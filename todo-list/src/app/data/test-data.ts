import { Category } from "../model/category";
import { Priority } from "../model/priority";
import { Task } from "../model/task";


export class TestData {
   static categories: Category[] = [
      { id: 1, title: 'Work' },
      { id: 2, title: 'Family' },
      { id: 3, title: 'Education' },
      { id: 4, title: 'Rest' },
      { id: 5, title: 'Sport' },
      { id: 6, title: 'Food' },
      { id: 7, title: 'Finance' },
      { id: 8, title: 'Gadgets' },
      { id: 9, title: 'Health' },
      { id: 10, title: 'Vehicles' },
      { id: 11, title: 'Repair' }
   ];

   static priorities: Priority[] = [
      { id: 1, title: 'Low', color: '	#00ff00' },
      { id: 2, title: 'Medium', color: '#ffff00' },
      { id: 3, title: 'High', color: '#ffa500' },
      { id: 4, title: 'Very High', color: '#ff0000' }
   ]

   static tasks: Task[] = [
      {
         id: 1,
         title: 'Learn Angular',
         category: TestData.categories[2],
         priority: TestData.priorities[3],
         completed: false,
         date: new Date(1, 1, 2024)
      },
      {
         id: 2,
         title: 'Prepare the dinner',
         category: TestData.categories[5],
         priority: TestData.priorities[1],
         completed: false,
         date: new Date(1, 1, 2024)
      },
      {
         id: 3,
         title: 'Prepare the lunch',
         category: TestData.categories[5],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 4,
         title: 'Learn UI/UX',
         category: TestData.categories[2],
         priority: TestData.priorities[3],
         completed: false,
         date: new Date(1, 1, 2024)
      },
      {
         id: 5,
         title: 'Prepare to interview',
         category: TestData.categories[0],
         priority: TestData.priorities[1],
         completed: false,
      },
      {
         id: 6,
         title: 'Order gifts',
         category: TestData.categories[1],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 7,
         title: 'Read a "Witcher" book',
         category: TestData.categories[3],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 8,
         title: 'Prepare the lunch',
         category: TestData.categories[5],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 9,
         title: 'Reach an athletic body composition',
         category: TestData.categories[4],
         priority: TestData.priorities[3],
         completed: false,
      },
      {
         id: 10,
         title: 'Find a girlfriend',
         category: TestData.categories[1],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 11,
         title: 'Start a pet project',
         category: TestData.categories[2],
         priority: TestData.priorities[3],
         completed: false,
      },
      {
         id: 12,
         title: 'Pull-ups for 15 reps',
         category: TestData.categories[4],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 13,
         title: 'Push-ups for 30 reps',
         category: TestData.categories[4],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 14,
         title: 'Deeps for 20 reps',
         category: TestData.categories[4],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 15,
         title: 'Bench press 75 kg for 10 reps',
         category: TestData.categories[4],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 16,
         title: 'Find a job',
         category: TestData.categories[6],
         priority: TestData.priorities[3],
         completed: false,
      },
      {
         id: 17,
         title: 'Earn money to buy new phone',
         category: TestData.categories[7],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 18,
         title: 'Order necessary pills',
         category: TestData.categories[8],
         priority: TestData.priorities[2],
         completed: false,
      },
      {
         id: 19,
         title: 'Clean the bike',
         category: TestData.categories[9],
         priority: TestData.priorities[0],
         completed: false,
      },
      {
         id: 20,
         title: 'Repair bicycle gears',
         category: TestData.categories[10],
         priority: TestData.priorities[1],
         completed: false,
      }


   ];
}

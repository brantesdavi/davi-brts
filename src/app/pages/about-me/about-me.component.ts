import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  experienceList = [
    {
      'ocupation': 'Front-end Developer',
      'company': 'eKaizen Digital',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Typescript', 'Angular', 'NodeJs', 'Javascript', 'UX/UI', 'Figma', 'GIT']
    },
    {
      'ocupation': 'Full-stack Developer',
      'company': '2Clix',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Jquery',  'Javascript', '.NET Core', 'C#', 'Azure Devops', 'GIT', "SQL"]
    },
    {
      'ocupation': 'Full-stack Developer',
      'company': '2Clix',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Jquery',  'Javascript', '.NET Core', 'C#', 'Azure Devops', 'GIT', "SQL"]
    },
    {
      'ocupation': 'Full-stack Developer',
      'company': '2Clix',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Jquery',  'Javascript', '.NET Core', 'C#', 'Azure Devops', 'GIT', "SQL"]
    },
    {
      'ocupation': 'Full-stack Developer',
      'company': '2Clix',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Jquery',  'Javascript', '.NET Core', 'C#', 'Azure Devops', 'GIT', "SQL"]
    }
  ]

}

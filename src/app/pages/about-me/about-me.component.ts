import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  showAllJobs: boolean = false;
  showAllEducation: boolean = false;
  maxJobs: number = 2;
  maxEducation: number = 2;
  btnText: string = "Show more";

  experienceList = [
    {
      'ocupation': 'Front-end Developer',
      'company': 'eKaizen Digital',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Angular', 'NodeJs', 'UX/UI']
    },
    {
      'ocupation': 'Full-stack Developer',
      'company': '2Clix',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Jquery', '.NET Core', 'Azure']
    },
    {
      'ocupation': 'Full-stack Developer Intern',
      'company': 'Intrum',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Angular', 'C#', "SQL"]
    },
    {
      'ocupation': 'Infraestructure Intern',
      'company': 'Treepart',
      'from': new Date('01/07/2023'),
      'to': new Date('10/11/2023'),
      'technologies': ['Angular', 'C#', "SQL"]
    }
  ]

  educationList = [
    {
      name: 'Systems Development',
      instituition: 'Uninter',
      place: 'São Paulo, Brazil',
      concluded: false,
      toConclude: new Date(30/11/2023),
      startedDate: new Date(1/2/2020)
    },
    {
      name: 'IT',
      instituition: 'FIEC',
      place: 'Indaiatuba, São Paulo, Brazil',
      concluded: true,
      toConclude: new Date(1/7/2017),
      startedDate: new Date(1/12/2018)
    },
    {
      name: 'Systems Development',
      instituition: 'Ceunsp',
      place: 'São Paulo, Brazil',
      concluded: false,
      startedDate: new Date(1/2/2020)
    },
  ]

  showJobs() {
    this.showAllJobs = !this.showAllJobs;
    this.maxJobs = this.showAllJobs == true ? 5 : 2;
  }

  showEducation() {
    this.showAllEducation = !this.showAllEducation;
    this.maxEducation = this.showAllEducation == true ? 5 : 2;
  }

  sendEmail() {
    const email = 'davi.brantes@gmail.com';
    const subject = 'Assunto do Email';
    const body = 'Corpo do Email';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, '_blank');
  }

}

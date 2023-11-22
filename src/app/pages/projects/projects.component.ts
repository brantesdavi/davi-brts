import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  sendEmail() {
    const email = 'davi.brantes@gmail.com';
    const subject = 'Assunto do Email';
    const body = 'Corpo do Email';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, '_blank');
  }
}

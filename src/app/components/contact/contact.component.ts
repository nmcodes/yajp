import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import mailjet from 'node-mailjet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Send me an email.</h1>
          <div class="PJLV">
            <p>
              <strong>I love chatting</strong> so if you are engineers, students, passionate
              creators, or others, I am open to inspiring exchanges!<strong> Contact me</strong> and
              together, let's explore opportunities for collaboration. I will respond as soon as
              possible.
            </p>
            <form (ngSubmit)="sendEmail()" #contactForm="ngForm" class="c-ccFqkw">
              <div class="c-fAxVVm">
                <label for="name" class="c-cpOVIy">Names</label>
                <input
                  id="name"
                  name="user.name"
                  [(ngModel)]="user.name"
                  type="text"
                  placeholder="Marian Croak"
                  class="c-jLJtXG"
                  required />
              </div>
              <div class="c-fAxVVm">
                <label for="email" class="c-cpOVIy">Email</label>
                <input
                  id="email"
                  name="user.email"
                  [(ngModel)]="user.email"
                  type="email"
                  placeholder="marian@croak.com"
                  class="c-jLJtXG"
                  required />
              </div>
              <div class="c-fAxVVm">
                <label for="message" class="c-cpOVIy">Message</label>
                <textarea
                  id="message"
                  name="user.message"
                  [(ngModel)]="user.message"
                  placeholder="How can I help you ?"
                  rows="4"
                  class="c-jLJtXG"
                  required></textarea>
              </div>
              <div class="c-fAxVVm">
                <button type="submit" class="c-eKOIRR">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  user = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    const emailData = {
      email: this.user.email,
      message: this.user.message,
    };
    console.log(emailData);
  }
}

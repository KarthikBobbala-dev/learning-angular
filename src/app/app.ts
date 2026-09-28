import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Test } from './test';
import { Insurance } from "./Dynamic Form/insurance/insurance";
import { SignalsExample } from "./signals/signals-example/signals-example";
import { Parent } from './DataShare/parent/parent';
import { Jobapply } from "./Forms/jobapply/jobapply";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    Insurance,
    SignalsExample,
    Parent,
    Jobapply,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected readonly title = signal('angular_application');
  protected readonly navItems = [
    { label: 'Home', route: '/' },
    { label: 'Profile', route: '/profile' },
    { label: 'Profile', route: '/profile/:id' },
    { label: 'Dashboard', route: '/dashboard' },
  { label: 'Users', route: '/dashboard/users' },
    { label: 'Settings', route: '/dashboard/settings' },
    { label: 'Observables', route: '/observables' },
    { label: 'Datashare', route: '/datashare' },
    {label:'forms',route:'/forms'}
  ] as const;
  private postsList = signal([]);
  private apiService = inject(Test);
  errorMessage = signal('')

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        this.errorMessage.set('Unable to load posts')
      }
    })
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  private apiKey = '9b934da88cc50df74c8e1b7b149f0cd5';
  private users: string[] = [];

  getApiKey(): string {
    return this.apiKey;
  }

  setApiKey(key: string): string {
    this.apiKey = key;
    return 'API key updated successfully';
  }

  getUsers(): string[] {
    return this.users;
  }
}
